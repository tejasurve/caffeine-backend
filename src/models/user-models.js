import bcrypt from 'bcryptjs';
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});


//secure password storing in DB using bcrypt
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    try {
        const saltRound = bcrypt.genSaltSync(10);
        this.password = await bcrypt.hash(this.password, saltRound);
        next();
    } catch (error) {
        next(error);
    }

});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateToken = async function () {
    try {
        const token  = jwt.sign({
            userId: this._id,
            email: this.email,
            isAdmin: this.isAdmin
        },
            process.env.JWT_SECRET_KEY, {
            expiresIn: "30d"

        })
        console.log("generateToken :", token)
        return token;
    } catch (error) {
        console.log("generateToken :", error)
    }

};

const User = mongoose.model("User", userSchema);
export { User }
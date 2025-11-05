import { z } from 'zod';

//creating object schema

const signUpSchema = z.object({
    username : z
    .string({"message":"username is required"})
    .trim()
    .min(5,{message: "username must be atleast 5 characters"})
    .max(20,{message: "username must be atmost 20 characters"}),

    email : z.
    string({"message":"email is required"})
    .trim()
    .min(5,{message: "email must be atleast 5 characters"})
    .max(255,{message: "email must be atmost 255 characters"}),

    phone : z
    .string({"message":"phone is required"})
    .trim()
    .min(10,{message: "phone must be atleast 10 characters"}),

    password : z
    .string({"message":"password is required"})
    .trim()
    .min(5,{message: "password must be atleast 5 characters"})
    .max(20,{message: "password must be atmost 20 characters"})
});


const loginSchema = z.object({

    email : z.
    string({"message":"email is required"})
    .trim()
    .min(5,{message: "email must be atleast 5 characters"})
    .max(255,{message: "email must be atmost 255 characters"}),

    password : z
    .string({"message":"password is required"})
    .trim()
    .min(5,{message: "password must be atleast 5 characters"})
    .max(20,{message: "password must be atmost 20 characters"})
});

export { signUpSchema , loginSchema}
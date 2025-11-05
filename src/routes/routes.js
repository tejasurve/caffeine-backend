import express from "express";
const app = express.Router();
import { getAnimeDetails } from "../controller/animeDetails.js";
import { test } from "../controller/test.js";
import { register, login } from "../controller/Auth.js";
import { validate } from "../middlewares/validate-middleware.js";
import { loginSchema, signUpSchema } from "../utils/validation/auth-validations.js";
import { mangaList } from "../controller/mangaList.js";
import { getMangaPages } from "../controller/mangaPages.js";
import { mangaDetails } from "../controller/mangaDetails.js";
import { searchManga } from "../controller/searchManga.js";
import { getAnimeList } from "../controller/animeList.js";
import {searchAnime} from "../controller/searchAnime.js"

const testAPi = app.get("/test", test);

const createUser = app.post("/register", validate(signUpSchema), register);

const loginUser = app.post("/login", validate(loginSchema), login);

const mangaHome = app.get("/mangaList/:pageNo?", mangaList);

const mangaPages = app.get("/mangaPages/:id/:chapterString?", getMangaPages);

const mangaDetailsByID = app.get("/mangaDetails/:id", mangaDetails);

const searchMangaDetails = app.get("/searchManga/:search/:pageNo?", searchManga);

const getAnimeDetailsRoute = app.get("/animeDetails/:showId/:episodeString?/:translationType?", getAnimeDetails);

const getAnimeListRoute = app.get("/animeList/:category?", getAnimeList);

const searchAnimeDetails = app.get("/searchAnime/:search/:pageNo?", searchAnime);

export { testAPi, createUser, loginUser, mangaHome, mangaPages ,mangaDetailsByID,searchMangaDetails, getAnimeDetailsRoute, getAnimeListRoute, searchAnimeDetails}; ;




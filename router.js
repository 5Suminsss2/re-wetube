import express from "express";

export const userRouter = express.Router();

userRouter.get("/day6", (req, res) => res.send ("user day6"));
userRouter.get("/sungjin", (req, res) => res.send("sungjin"));
userRouter.get("/jae", (req, res) => res.send("jae"));
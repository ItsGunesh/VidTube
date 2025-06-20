import express from "express";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const healthcheck = asyncHandler(async (req,res) => {
    return res.status(200)
        .json(new ApiResponse(200,"OK","Health check passed"))
})
// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/app", (req, res) => res.send("Hello World!"));

api.use('/netlify/functions/', router);

export const handler = serverless(api);

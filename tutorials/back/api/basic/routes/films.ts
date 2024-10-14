import { Router } from "express";

import {Film} from "../types";


const router = Router();

const defaultFilm: Film[] = [
    {
        id: 1,
        title: "Inception",
        director: "Christopher Nolan",
        duration: 148,
        budget: 160,
        description: "A mind-bending thriller about dream invasion.",
        imageUrl: "https://imageurl.com/inception.jpg"
    },
    {
        id: 2,
        title: "The Matrix",
        director: "The Wachowskis",
        duration: 136,
        budget: 63,
        description: "A dystopian sci-fi film about a simulated reality.",
        imageUrl: "https://imageurl.com/matrix.jpg"
    },
    {
        id: 3,
        title: "Interstellar",
        director: "Christopher Nolan",
        duration: 169,
        budget: 165,
        description: "A science fiction epic about space exploration and survival.",
        imageUrl: "https://imageurl.com/interstellar.jpg"
    }
];
router.get("/", (_req, res) => {
    res.json(defaultFilm);
  });
export default router;
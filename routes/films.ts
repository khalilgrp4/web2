import { Router } from "express";
import { Film } from "../types";

const router = Router();




const films: Film[] = [
    {
        "id": 1,
        "title": "Inception",
        "director": "Christopher Nolan",
        "duration": 148,
        "budget": 160,
        "description": "Un voleur d'idées doit implanter une idée dans l'esprit d'une cible.",
        "imageUrl": "https://example.com/inception.jpg"
    },
    {
        "id": 2,
        "title": "The Shawshank Redemption",
        "director": "Frank Darabont",
        "duration": 142,
        "budget": 25,
        "imageUrl": "https://example.com/shawshank.jpg"
    },
    {
        "id": 3,
        "title": "The Matrix",
        "director": "Lana Wachowski, Lilly Wachowski",
        "duration": 136,
        "budget": 63,
        "description": "Un programmeur découvre la vérité sur sa réalité.",
        "imageUrl": "https://example.com/matrix.jpg"
    }
]


router.get("/", (_req, res) => {
  return res.json(films);
});

router.get("/:id", (req, _res) => {
    console.log(req.params.id);
  });

export default router;
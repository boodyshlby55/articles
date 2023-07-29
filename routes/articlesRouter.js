import { Router } from "express";
import { addArticlePage, articlePage, articlesPage, saveArticle } from "../controllers/articles.js";

const router = new Router()
router.get('/', articlesPage)
router.get('/addArticle', addArticlePage)
router.post('/addArticle', saveArticle)
router.get('/:_id', articlePage)

export default router;
import Article from "../models/articlesSchema.js"

export const articlesPage = (req, res) => {
    Article.find()
        .then((result) => {
            res.render('articles', { pageTitle: "Articles", display: "d-none", articles: result })
        })
        .catch((err) => {
            console.log(err);
        })
}

export const articlePage = (req, res) => {
    Article.findById(req.params._id)
        .then((result) => {
            res.render('article', { pageTitle: `${result.title} Article`, display: "d-inline-block", article: result })
        })
}

export const addArticlePage = (req, res) => {
    res.render('addArticle', { pageTitle: "Add Article", display: "d-none" })
}

export const saveArticle = (req, res) => {
    const article = new Article(req.body)
    article.save()
        .then(() => {
            res.redirect('/articles')
        })
        .catch((err) => {
            console.log(err);
        })
    //     const { title, details } = req.body;
    //     await Article.create({
    //         title, details
    //     })
    //     res.redirect('/articles')
}

export const deleteArticle = (req, res) => {
    Article.findByIdAndDelete(req.params._id)
        .then((params) => {
            res.json({ articlesLink: "/articles" })
        })
        .catch((err) => {
            console.log(err);
        })
}
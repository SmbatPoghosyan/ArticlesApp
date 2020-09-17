const { Article } = require('../models/Article');

exports.getAll = async (req, res) => {
    try {
        const articles = await Article.query().eager('[category, user]').select('*');
        console.log(articles);
        if(articles){
            return res.send(articles);
        } else {
            return res.status(500).send('Something Went Wrong')
        }
    } catch (err) {
        return res.send(err.message);
    }
};

exports.create = async (req, res) => {
    try {
        const data = req.body;
        const { name, content, category_id } = data;
        const user_id = req.user.id;
        const article = await Article.query().insert({name, content, category_id, user_id});
        if (article) {
            return res.send(article);
        } else {
            return res.status(500).send('Something Went Wrong')
        }
    } catch (err) {
        return res.send(err.message);
    }
};

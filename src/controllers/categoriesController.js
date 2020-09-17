const { Category } = require('../models/Category');

exports.getAll = async (req, res) => {
    try {
        const categories = await Category.query().select('*')
        console.log(categories);
        if(categories){
            return res.send(categories);
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
        const { name, description } = data;
        const category = await Category.query().insert({name, description,});
        if (category) {
            return res.send(category);
        } else {
            return res.status(500).send('Something Went Wrong')
        }
    } catch (err) {
        return res.send(err.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.query().deleteById(id);
        console.log(category, "Asdasd");
        if (category) {
            return res.send(category);
        } else if (category === 0) {
            return res.status(404).send(`There Is No Category With Id ${id}`)
        } else {
            return res.status(500).send('Something Went Wrong')
        }
    } catch (err) {
        return res.send(err.message);
    }
};

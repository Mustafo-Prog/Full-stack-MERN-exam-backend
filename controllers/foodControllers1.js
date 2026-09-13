const Food = require("../models/models");

//Hurmatli ustoz cat bu categories
//Уважаемый учитель прошу заметить cat это categories
//Dear teacher as you see word categories was replaced as cat

exports.get_foods = async (req, res) => {
    try {
        const food = await Food.find();
        res.status(200).json(food)
    } catch (error) {
        res.status(500).json(error.message);      
    }
}

exports.get_food_id = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        res.status(200).json(food);
    } catch (error) {
        res.status(500).json(error.message); 
    }
}

exports.get_food_cat = async (req, res) => {
    try {
        const {category} = req.params;
        const food = await Food.find({category: category});
        res.status(200).json(food);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.add_foods = async (req, res) => {
    try {
        const food = await Food.create(req.body);
        res.status(201).json({message: "Operation completed successfully."});
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.update_foods = async (req, res) => {
    try {
        const food = await Food.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(food);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.delete_foods = async (req, res) => {
    try {
        const food = await Food.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Operation completed successfully."});
    } catch (error) {
        res.status(500).json(error.message);
    }
}
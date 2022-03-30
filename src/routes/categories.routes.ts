import {Router} from "express";
import {Category} from "../model/Category";
import {CategoryRepo} from "../repository/CategoryRepo";

const categoriesRoute = Router();

const repo = new CategoryRepo();

categoriesRoute.post("/categories", (req, res) => {
    
    const {name, description} = req.body;

    const category: Category = new Category(name, description);

    if(repo.findByName(category.name)){
        return res.status(403).json({ok: "category exists"})
    }

    repo.create(category);

    return res.status(201).json({ok: "category inserted"})


})
categoriesRoute.get("/categories", (req, res) => {
    return res.status(201).json(repo.list())
})

export {categoriesRoute}
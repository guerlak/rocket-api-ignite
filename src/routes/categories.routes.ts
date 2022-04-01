import {Router} from "express";
import { CategoryRepo } from "../repository/CategoryRepo";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoute = Router();
const categoryRepo = new CategoryRepo();


categoriesRoute.post("/categories", (req, res) => {
    
    const {name, description} = req.body;


    const createCatService = new CreateCategoryService(categoryRepo);

    createCatService.execute({name,description});
  
    return res.status(201).json({ok: "category inserted"})


})

categoriesRoute.get("/categories", (req, res) => {
    return res.status(201).json(categoryRepo.list())
})

export {categoriesRoute}
import {Router} from "express";
import { SpecificationRepo } from "../modules/cars/repository/SpecificatonRepo";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoute = Router();
const specificationRepo = new SpecificationRepo();


specificationsRoute.post("/specification", (req, res) => {
    const {name, description} = req.body;
    const createCatService = new CreateSpecificationService(specificationRepo);

    createCatService.execute({name,description});
    return res.status(201).json({ok: "category inserted"})
})

specificationsRoute.get("/specification", (req, res) => {
    return res.status(201).json(specificationRepo.list())
})

export {specificationsRoute}
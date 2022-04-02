import {ICategoryRepo} from "../repository/ICategoryRepo";

interface IRequest{
    name: string,
    description: string
}

class CreateSpecificationService{

    private specificationRepo: ICategoryRepo;

    constructor(repo: ICategoryRepo){
        this.specificationRepo = repo;
    }

    execute({name, description}: IRequest): void {
        if(this.specificationRepo.findByName(name)){
            throw new Error("Category already exists");
        }
        this.specificationRepo.create({name, description});
    }

}

export {CreateSpecificationService}
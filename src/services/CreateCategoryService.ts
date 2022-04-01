import {CategoryRepo} from "../repository/CategoryRepo";

interface IRequest{
    name: string,
    description: string
}

class CreateCategoryService{

    private categoryRepo: CategoryRepo;

    constructor(repo: CategoryRepo){
        this.categoryRepo = repo;
    }

    execute({name, description}: IRequest): void {
        if(this.categoryRepo.findByName(name)){
            throw new Error("Category already exists");
        }
        this.categoryRepo.create({name, description});
    }

}

export {CreateCategoryService}
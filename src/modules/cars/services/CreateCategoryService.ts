import {ICategoryRepo} from "../repository/ICategoryRepo";

interface IRequest{
    name: string,
    description: string
}

class CreateCategoryService{

    private categoryRepo: ICategoryRepo;

    constructor(repo: ICategoryRepo){
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
import {Category} from "../model/Category"
import { ISpecificationDTO, ISpecificationRepo } from "./ISpecificationRepo";

class SpecificationRepo implements ISpecificationRepo{

    private categories: Category[];

    constructor(){
        this.categories = [];
    }

    list(): Category[]{
        return this.categories;
    }

    create({name, description}: ISpecificationDTO): void{
        const category = new Category(name, description);
        this.categories.push(category);
    }

    findByName(name: string): Category{
        const cat = this.categories.find(cat => cat.name == name);
        if(cat){
            return cat;
        }
        return null;
    }
    
}

export {SpecificationRepo}
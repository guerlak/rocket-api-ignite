import {Category} from "../model/Category"
import { ICategoryRepo } from "./ICategoryRepo";

export interface ICategoryDTO{
    name: string,
    description: string,
}

class CategoryRepo implements ICategoryRepo{

    private categories: Category[];

    constructor(){
        this.categories = [];
    }

    list(): Category[]{
        return this.categories;
    }

    create({name, description}: ICategoryDTO): void{
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

export {CategoryRepo}
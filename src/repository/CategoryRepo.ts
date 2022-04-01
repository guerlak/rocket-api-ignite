import {Category} from "../model/Category"

interface ICategoryDTO{
    name: string,
    description: string,
}

class CategoryRepo{

    private categories: Category[];

    constructor(){
        this.categories = [];
    }

    list(){
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
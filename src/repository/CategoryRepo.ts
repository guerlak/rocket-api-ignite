import {Category} from "../model/Category"

class CategoryRepo{

    private categories: Category[];

    constructor(){
        this.categories = [];
    }

    list(){
        return this.categories;
    }

    create(category: Category){
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
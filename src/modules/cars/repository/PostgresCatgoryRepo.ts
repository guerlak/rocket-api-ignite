import {Category} from "../model/Category"
import { ICategoryRepo } from "./ICategoryRepo";

export interface ICategoryDTO{
    name: string,
    description: string,
}

class PostgresCategoryRepo implements ICategoryRepo{
    findByName(name: string): Category {
        throw new Error("Method not implemented.");
    }
    create({ name, description }: ICategoryDTO): void {
        throw new Error("Method not implemented.");
    }
    list(): Category[] {
        throw new Error("Method not implemented.");
    }
}

export {PostgresCategoryRepo}
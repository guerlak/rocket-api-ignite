import {Category} from "../model/Category"
import { ICategoryDTO } from "./CategoryRepo";

interface ICategoryRepo{
    findByName(name: string): Category;
    create({name, description}: ICategoryDTO): void;
    list(): Category[];
}

export {ICategoryRepo}
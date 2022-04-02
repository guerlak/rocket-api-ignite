import { Specification } from "../model/Specification";

export interface ISpecificationDTO{
    name: string,
    description: string,
}

interface ISpecificationRepo{
    findByName(name: string): Specification;
    create({name, description}: ISpecificationDTO): void;
    list(): Specification[];
}

export {ISpecificationRepo}
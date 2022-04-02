import {v4 as uuidV4} from "uuid"

class Specification {
    id?: string;
    name: string;
    description: string;
    created_at?: Date;

    constructor(name: string, description: string){
        if(!this.id){
            this.id = uuidV4();
            this.created_at = new Date();
        }
        this.name = name;
        this.description = description;
        
    }
}

export {Specification}
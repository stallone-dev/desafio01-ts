import { DioAccount } from "./model/DioAccount"

export { PeopleAccount };

class PeopleAccount extends DioAccount {
    private doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number){
        super(name, accountNumber)
        this.doc_id = doc_id
    };

    public getDoc():number {
        return this.doc_id;
    }
}

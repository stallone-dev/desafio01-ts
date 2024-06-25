import { DioAccount } from "./model/DioAccount";

export { LoanSharkAccount };

class LoanSharkAccount extends DioAccount {

    constructor(fullName:string, accountNumber:number) {
        super(fullName, accountNumber)
    };

    public deposit(value: number): void {
        if (!this.validateStatus()){
            console.warn("Invalid account!\nProcess Finished");
            return;
        };
        if (value <= 0){
            console.warn("The value most to be greater than 0!");
        };

        const actual_balance = this.getBalance();
        const newValue = actual_balance + value + 10;
        this.updateBalance(newValue);

        console.log(`Added $ ${value+10} in your account!`);
        console.log(`Actual balance: $ ${this.getBalance()}`);
    }
};

import { DioAccount } from "./model/DioAccount"

export { CompanyAccount };

class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  public getLoan(loan:number): void {
    if(!this.validateStatus()){
        console.warn("Your account is invalid!");
        return;
    };

    console.log("Loan application requested.");
    console.log("\tLoan under analysis.");
    console.log("\tLoan approved!");
    console.log(`the amount [$ ${loan}] will be deposited into your account.`);

    this.deposit(loan);

  }
}

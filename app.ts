import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { LoanSharkAccount } from './class/LoanShardAccount'

// Instances of classes
const any_person:PeopleAccount = new PeopleAccount(1234567890, "Jane Doe", 404);
const any_company:CompanyAccount = new CompanyAccount("ACME Company LTDA", 200);
const any_loan_shark:LoanSharkAccount = new LoanSharkAccount("Jordan Belfort", 777);

// Test methods
// Person
console.log(`Actual Person balance: $ ${any_person.getBalance()}`);
console.log(`Person name: ${any_person.getName()}`);
console.log(`Person document: ${any_person.getDoc()}`);
any_person.deposit(200);
any_person.withdraw(100);

// Company
console.log(`Actual Company balance: $ ${any_company.getBalance()}`);
console.log(`Company name:${any_company.getName()}`);
any_company.deposit(200);
any_company.withdraw(100);
any_company.getLoan(1000);

// Loan Shark
console.log(`Actual Loan Shark balance: $ ${any_loan_shark.getBalance()}`);
console.log(`Loan Shark name: ${any_loan_shark.getName()}`);
any_loan_shark.deposit(200);
any_loan_shark.withdraw(150);

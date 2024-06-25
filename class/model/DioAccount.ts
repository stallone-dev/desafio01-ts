export { DioAccount };

abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    protected validateStatus(): boolean {
        return this.status;
    };

    protected updateBalance(value:number) {
        this.balance = value;
    };

    public getName(): string {
        return this.name;
    };

    public getBalance(): number {
        return this.balance;
    }

    public deposit(value:number): void {
        if (!this.validateStatus()){
            console.warn("Invalid account!\nProcess Finished");
            return;
        };
        if (value <= 0){
            console.warn("The value most to be greater than 0!");
        };

        const actual_balance = this.getBalance();
        this.updateBalance(actual_balance+value);

        console.log(`Added $ ${value} in your account!`);
        console.log(`Actual balance: $ ${this.getBalance()}`);
    }

    public withdraw(value:number): void {
        if (!this.validateStatus()){
            console.warn("Invalid account!\nProcess Finished");
            return;
        };

        const actual_balance = this.getBalance();
        if(value > actual_balance){
            console.warn("The account balance is not enough, please reduce your withdraw value.");
            return;
        }

        this.updateBalance(actual_balance - value);

        console.log(`Withdraw $ ${value} of your account!`);
        console.log(`Actual balance: $ ${this.getBalance()}`);
    };

}

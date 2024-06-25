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

    public deposit(value:number): void {};
    public withdraw(value:number):void {};

}

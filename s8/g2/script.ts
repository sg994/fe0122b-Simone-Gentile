class SonAccount {
    balanceInit:number=0;
    constructor(balanceInit:number){
        this.balanceInit=balanceInit;
    }
    oneDepositit():number{
        let deposito: number = 100;
        return this.balanceInit += deposito
    }
    oneWithDraw():number{
        let prelievo: number =40;
        return this.balanceInit -= prelievo;
    }
}

class MotherAccount extends SonAccount{
    constructor(balanceInit:number){
        super(balanceInit);
    }
    oneDepositit(): number {
        let deposito: number = 50;
        return this.balanceInit += deposito
    }

    oneWithDraw(): number {
        let prelievo: number = 20;
        return this.balanceInit -= prelievo;
    }

    addInterest(): number{
        let percetuale: number = this.balanceInit / 100 * 10
        return this.balanceInit += percetuale
    }

}

let account1 = new SonAccount(0);
let account2 = new MotherAccount(0);

console.log(account1);
console.log('versamento sonaccount: '+account1.oneDepositit());
console.log('prelievo sonnaccount: '+account1.oneDepositit());

console.log(account2);
console.log('versamento sonaccount: '+account2.oneDepositit());
console.log('prelievo sonnaccount: '+account2.oneDepositit());
console.log('interessi motheraccount: '+account2.addInterest())

fetch('Abbigliamento.json')
.then(response =>response.json())
.then(vestiti => {

    vestiti.forEach((item: Abbigliamento) =>{

        let vestiti = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo)
        console.log(vestiti)
    })

})

class Abbigliamento {
        id:number
        codprod:number
        collezione:string
        capo:string
        modello:number
        quantita:number
        colore:string
        prezzoivaesclusa:number
        prezzoivainclusa:number
        disponibile:string
        saldo:number

        constructor(id:number, codprod:number, collezione:string,capo:string, modello:number, quantita:number, colore:string,prezzoivaesclusa:number, prezzoivainclusa:number, disponibile:string, saldo:number){
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;

        }

        getsaldocapo():number{
            return Math.floor(this.prezzoivainclusa * (this.saldo/100))
        }

        getacquistocapo():number{
            return Math.floor(this.prezzoivainclusa - this.getsaldocapo())
        }

}

let ck = new Abbigliamento(6,1793,"autunno","felpa",5602,26,"black", 130, 193.4,"negozio",49)
console.log(ck)
console.log(ck.getsaldocapo())
console.log(ck.getacquistocapo())

let tommy = new Abbigliamento(7,9954, "primavera", "maglietta", 1994, 31, "white", 134, 158.3,"esposto",61)
console.log(tommy)
console.log(tommy.getsaldocapo())
console.log(tommy.getacquistocapo())

let vuitton = new Abbigliamento(9, 6458, "inverno", "cappotto", 1648, 48, "pink", 932, 473.2, "venduto", 74)
console.log(vuitton)
console.log(vuitton.getacquistocapo())
console.log(vuitton.getsaldocapo())
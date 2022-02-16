//funzione freccia
function saluto(){
    return "hello world!";
}
saluto = () => "hello world"
console.log(saluto());

//funzione sottrazione
function sottrazione(){
    var eta1 = 65;
    var eta = document.getElementById('eta').value;
    alert(eta1 - eta);
}

/////////////
function operazioni (){
    var numero = 10;
    function somma(){
        console.log(numero + numero);
    }
    return somma();
}

/////////////
        "tizio" === tizio; //false
        "tizio" == "tizio" //true
        "pippo" === "pippo"; //true

        "tizio" == "tizia"; //false 
        "tizio" === "tizia"; //false
          

        "tizio" !== "tizio"; //false
        "tizio" != "tizio"; //false

        "9" != 9; //false
        "4" !== 4; //true
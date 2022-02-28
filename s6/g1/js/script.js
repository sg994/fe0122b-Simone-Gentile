// Quando il documento è pronto...   
$(document).ready(function(){
 //gestisco il click sul pulsante Iscriviti
 $("#iscr-news").click(function(){

    var nome = $("#nome").val()
    if(nome == ""){
        $("#nome").next('*Richiesto')
    }else{
        $("#nome").next().text('')
    }
    var email = $("#email-1").val()
    if(nome == ""){
        $("#email-1").next('*Richiesto')
    }else{
        $("#email-1").next().text('')
    }   
    var email2 = $("#email-2").val()
    if(nome == ""){
        $("#email2").next('*Richiesto')
    }else{
        $("#email2").next().text('')
    } 
    if(email !== email2){
        $("email-2").next().text('*Le email devono essere uguali')
    }else {
        $("#email-2").next().text('')
    }
    if (nome == true && email == true && email2 == true){
        $("#form-email").subit()
    }
    else{
        alert('ricntrolla i dati')
    }


 })
 $("#pulisci-form").click(function(){
     $("#email-1").val('')
     $("#nome").val('')
     $("#email-2").val('')

 })


    $()
    
        // inizializzo una variabile di controllo a true
        
        // utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto
        

        
        // nell'else uso next e text per impostare l'elemento span adiacente
        
        // assegno a due variabili il valore dei due campi email
        
        // ripeto la condizione nel nome anche per l'email
        
        // nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse

        //invio del form se tutti i campi sono validi

    //gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti e 
    //posizionare un asterisco per identificare il campo obbligatorio. 
})
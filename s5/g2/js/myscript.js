var c = 0;
while (c <= 100) {
    document.write(c + ' ');
}


var budget = 1000;

while (budget >= 0){

    console.log(budget);
    budget -= random (10, 100);
    if (budget < 550 && budget > 400){
        console.log('sei quasi a metà budget');

    }
    if (budget > 10 && budget < 200) {
        console.log('sei quasi alla fine del budget');
    }
    if (budget <= 20){
        console.log('hai finito');
    }

    }
    function random () {
        return Math.floor(Math.random() * 100);
    }
 

function harjutus1(nimi) {
    console.log("tere tulemast " + nimi);
}
harjutus1("Kaspar");

function harjutus2(mark, mudel, värv) {
    console.log("Minu auto on " + värv + " " + mark + " " + mudel + ".") 
}
harjutus2("Ford"," Mustang", "punane");

function harjutus3(põhjaPindala, kõrgus) {
    let ruumala = (põhjaPindala * kõrgus) / 3;
    console.log("Püramiidi ruumala on " + ruumala + ".");
}
harjutus3(3, 6);

function harjutus4(nimi) {
    if (nimi.length > 5) {
        return nimi.slice(0, 5) + "...";
    } else {
        return nimi;
    }
}
harjutus4("kaspar");

function harjutus5(nimi) {
    return nimi.split('').reverse().join('');
}
harjutus5("kristjan")

function harjutus6() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
harjutus6();

function harjutus7() {
    let i = 100;
    while (i >= 1) {
        console.log(i);
        i--;
    }
}
harjutus7();

let myNameComponents = ['Samuel', 'L', 'Jackson'];
const nimi = myNameComponents. join(' ');
console. log (nimi);



function sudetis(a, b) {
    return a + b;
}
function atimtis(a, b) {
    return a - b;
}
function daugyba(a, b) {
    return a * b;
}
function dalyba(a, b) {
    return a / b;
}

let ats = document.getElementById('ats');

for (let b = 0; b < 10; b+=2) {
    for (let a = 0; a < 5; a++) {
        sum = sudetis(a, b);
        atim = atimtis(a, b);
        daug = daugyba(a, b);
        dal = dalyba(a, b);
        ats.innerHTML +=
            "A =" + a + " B = " + b + "<br>" +
            "Sudetis: " + sum + "<br>" +
            "Atimtis: " + atim + "<br>" +
            "Daugyba: " + daug + "<br>" +
            "Dalyba: " + dal + "<hr>"
        ;
    }
}

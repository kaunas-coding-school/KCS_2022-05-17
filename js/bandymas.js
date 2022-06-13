let n1 = 5;
let n2 = 6;

S1 = (n1 - 2) * 180;
S2 = (n2 - 2) * 180;

let atsakymas = n1 + ' kampu suma: ' + S1 + '<br>'
    + n2 + ' kampu suma: ' + S2 + '<br>'
    + 'Visu daugiakampiu suma: ' + (S2 + S1);

document.getElementById('ats').innerHTML = atsakymas;
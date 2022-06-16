function pildytiProdukta(produktai = []) {
        let j = window.location.hash;
        j = j.slice(j.length - 1, j.length);
        console.log(j);
        let prod = produktai[j];

        document.getElementsByClassName('name')[0].innerHTML = prod.pavadinimas;
        document.getElementsByClassName('foto')[0].src = prod.pav;
        document.getElementsByClassName('foto')[0].alt = prod.pavadinimas;
        document.getElementsByClassName('desc')[0].innerHTML = prod.aprasymas;
        document.getElementsByClassName('price')[0].innerHTML = prod.kaina;
}

fetch('./js/produktai.json')
    .then(response => response.json())
    .then(data => pildytiProdukta(data))
    .catch(error => console.log(error));

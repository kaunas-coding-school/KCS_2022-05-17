$(function () {
    function generuotiProduktus(produktai = []) {
        let html = '';

        for (let i = 0; i < produktai.length; i++) {
            let prod = produktai[i];
            html += '' +
                '<a class="product_link" href="/html/preke.html#' + i + '">\n' +
                '    <div class="produktas">\n' +
                '        <div class="name">' + prod.pavadinimas + '</div>\n' +
                '        <img src="' + prod.pav + '" alt="' + prod.pavadinimas + '" class="foto">\n' +
                '        <p class="desc">' + prod.aprasymas + '</p>\n' +
                '        <div class="price">' + prod.kaina + '</div>\n' +
                '    </div>' +
                '</a>';
        }

        document.getElementById('produktai').innerHTML = html;
    }

    fetch('./js/produktai.json')
        .then(response => response.json())
        .then(data => generuotiProduktus(data))
        .catch(error => console.log(error));


});
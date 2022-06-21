$(function (){

    let $main = $('main');

    function meniu(selektorius) {
        $(selektorius).click(function (e) {
            let psl = $(this).attr('href');
            $main.load(psl);
            e.preventDefault();
        });
    }

    $main.load('/html/index.html');

    meniu('header nav a');
    //meniu('.product_link'); Nepavyks nes

});
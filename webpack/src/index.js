import $ from 'jquery';
import './css/style.css';
import bitcoin from './image/bitcoin.jpg';


$(function() {

    $('.btn').on('click', function() {
        $('h1').html('Bitcoin: R$ 249.600,28');

        $('#imagem').attr('src', bitcoin);
    });


})
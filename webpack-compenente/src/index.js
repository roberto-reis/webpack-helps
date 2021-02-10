import $ from 'jquery';
import './css/style.css';
import Botao from './componentes/botao/index.js';


$(function() {

    let botao = new Botao();

    botao.setTitle("Testado");
    botao.setClick(function() {
        alert("Clicou!!!");
    });

    $('.area').html( botao.render() );

})
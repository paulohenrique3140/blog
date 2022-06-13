function displayAbout() {
  var arrow = document.getElementById('animation');
  arrow.classList.toggle('rotate');
  var display = document.getElementById('segundaDiv');
  display.classList.toggle('active')
}

var imgFutebol = document.getElementById('futebol');
var botao1Futebol = document.getElementById('futebolBolinha1');
var botao2Futebol = document.getElementById('futebolBolinha2');
var botao3Futebol = document.getElementById('futebolBolinha3');
var botao4Futebol = document.getElementById('futebolBolinha4');
var botao5Futebol = document.getElementById('futebolBolinha5');
var figFutebol = document.getElementById('futebolFig');

function futebolEnter1() {
  var animacao = document.getElementById('futebol');
  animacao.classList.toggle('anime');
  imgFutebol.src = 'midia/futebol1.png'  
  botao1Futebol.style.background = 'rebeccapurple';
  botao1Futebol.style.transition = '1000ms';
  figFutebol.innerHTML = '<em>Neo Química Arena</em>';
}

function futebolOut1() {
  botao1Futebol.style.background = 'transparent';
}

function futebolEnter2() {
  var animacao = document.getElementById('futebol');
  animacao.classList.toggle('anime');
  imgFutebol.src = 'midia/futebol2.png';
  botao2Futebol.style.background = 'rebeccapurple';
  botao2Futebol.style.transition = '1000ms';
  figFutebol.innerHTML = '<em>Corinthians Campeão Mundial 2012</em>'
}

function futebolOut2() {
  botao2Futebol.style.background = 'transparent';
}

function futebolEnter3() {
  var animacao = document.getElementById('futebol');
  animacao.classList.toggle('anime');
  imgFutebol.src = 'midia/futebol3.png';  
  botao3Futebol.style.background = 'rebeccapurple';
  botao3Futebol.style.transition = '1000ms';
  figFutebol.innerHTML = '<em>São Paulo Campeão Mundial 2004</em>';
}

function futebolOut3() {
  botao3Futebol.style.background = 'transparent';  
}

function futebolEnter4() {
  var animacao = document.getElementById('futebol');
  animacao.classList.toggle('anime');
  imgFutebol.src = 'midia/futebol4.png';
  botao4Futebol.style.background = 'rebeccapurple';
  botao4Futebol.style.transition = '1000ms';
  figFutebol.innerHTML = '<em>Santos Vice-Campeão Mundial 2011</em>'
}

function futebolOut4() {
  botao4Futebol.style.background = 'transparent';
}

function futebolEnter5() {
  var animacao = document.getElementById('futebol');
  animacao.classList.toggle('anime');
  imgFutebol.src = 'midia/futebol5.png';
  botao5Futebol.style.background = 'rebeccapurple';
  botao5Futebol.style.transition = '1000ms';
  figFutebol.innerHTML = '<em>Neto dizendo uma verdade absoluta</em>';
}

function futebolOut5() {
  botao5Futebol.style.background = 'transparent';
}

var imgMusica = document.getElementById('musica');
var botao1Musica = document.getElementById('musicaBolinha1');
var botao2Musica = document.getElementById('musicaBolinha2');
var botao3Musica = document.getElementById('musicaBolinha3');
var botao4Musica = document.getElementById('musicaBolinha4');
var botao5Musica = document.getElementById('musicaBolinha5');
var figMusica = document.getElementById('musicaFig');

function musicaEnter1() {
  var animacao = document.getElementById('musica');
  animacao.classList.toggle('anime');
  imgMusica.src = 'midia/musica1.png';
  botao1Musica.style.background = 'rebeccapurple';
  botao1Musica.style.transition = '1000ms';
  figMusica.innerHTML = '<em>Show da banda Dead Fish</em>';
}

function musicaOut1() {
  botao1Musica.style.background = 'transparent';
}

function musicaEnter2() {
  var animacao = document.getElementById('musica');
  animacao.classList.toggle('anime');
  imgMusica.src = 'midia/musica2.png';
  botao2Musica.style.background = 'rebeccapurple';
  botao2Musica.style.transition = '1000ms';
  figMusica.innerHTML = '<em>Rapper Djonga</em>';
}

function musicaOut2() {
  botao2Musica.style.background = 'transparent';
}

function musicaEnter3() {
  var animacao = document.getElementById('musica');
  animacao.classList.toggle('anime');
  imgMusica.src = 'midia/musica3.png';
  botao3Musica.style.background = 'rebeccapurple';
  botao3Musica.style.transition = '1000ms';
  figMusica.innerHTML = '<em>Halley Williams (Vocalista do Paramore)</em>';
}

function musicaOut3() {
  botao3Musica.style.background = 'transparent';
}

function musicaEnter4() {
  var animacao = document.getElementById('musica');
  animacao.classList.toggle('anime');
  imgMusica.src = 'midia/musica4.png';
  botao4Musica.style.background = 'rebeccapurple';
  botao4Musica.style.transition = '1000ms';
  figMusica.innerHTML = '<em>R.I.P Chester Bennington (Vocalista do Linkin Park)</em>';
}

function musicaOut4() {
  botao4Musica.style.background = 'transparent';
}

function musicaEnter5() {
  var animacao = document.getElementById('musica');
  animacao.classList.toggle('anime');
  imgMusica.src = 'midia/musica5.png';
  botao5Musica.style.background = 'rebeccapurple';
  botao5Musica.style.transition = '1000ms';
  figMusica.innerHTML = '<em>Banda TUYO</em>';
}

function musicaOut5() {
  botao5Musica.style.background = 'transparent';
}

var imgSeries = document.getElementById('series');
var botao1Series = document.getElementById('seriesBolinha1');
var botao2Series = document.getElementById('seriesBolinha2');
var botao3Series = document.getElementById('seriesBolinha3');
var botao4Series = document.getElementById('seriesBolinha4');
var botao5Series = document.getElementById('seriesBolinha5');
var figSeries = document.getElementById('seriesFig');

function seriesEnter1() {
  var animacao = document.getElementById('series');
  animacao.classList.toggle('anime');
  imgSeries.src = 'midia/serie1.png';
  botao1Series.style.background = 'rebeccapurple';
  botao1Series.style.transition = '1000ms';
  figSeries.innerHTML = '<em>Terror/Suspense Stranger Things</em>';
}

function seriesOut1() {
  botao1Series.style.background = 'transparent';
}

function seriesEnter2() {
  var animacao = document.getElementById('series');
  animacao.classList.toggle('anime');
  imgSeries.src = 'midia/serie2.png';
  botao2Series.style.background = 'rebeccapurple';
  botao2Series.style.transition = '1000ms';
  figSeries.innerHTML = '<em>Tecnologia - Série MR Robot</em>';
}

function seriesOut2() {
  botao2Series.style.background = 'transparent';
}

function seriesEnter3() {
  var animacao = document.getElementById('series');
  animacao.classList.toggle('anime');
  imgSeries.src = 'midia/serie3.png';
  botao3Series.style.background = 'rebeccapurple';
  botao3Series.style.transition = '1000ms';
  figSeries.innerHTML = '<em>Comédia - The Big Bang Theory</em>';
}

function seriesOut3() {
  botao3Series.style.background = 'transparent';
}

function seriesEnter4() {
  var animacao = document.getElementById('series');
  animacao.classList.toggle('anime');
  imgSeries.src = 'midia/serie4.png';
  botao4Series.style.background = 'rebeccapurple';
  botao4Series.style.transition = '1000ms';
  figSeries.innerHTML = '<em>Drama - One Tree Hill</em>';
}

function seriesOut4() {
  botao4Series.style.background = 'transparent';
}

function seriesEnter5() {
  var animacao = document.getElementById('series');
  animacao.classList.toggle('anime');
  imgSeries.src = 'midia/serie5.png';
  botao5Series.style.background = 'rebeccapurple';
  botao5Series.style.transition = '1000ms';
  figSeries.innerHTML = '<em>Drama/Comédia Romântica - Atypical</em>';
}

function seriesOut5() {
  botao5Series.style.background = 'transparent';
}
  


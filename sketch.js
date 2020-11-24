var canvas;
let estado = 'pantalla12';
let fondos;
let timer = 0;

let time = 0;
let wait = 1000;
let timer1 = 0;


function setup() {
  createCanvas(800, 600);
  
  btnIniciar = new Clickable();
  btnIniciar.locate(width/2-135, height/2+60);
  btnIniciar.color = "#66000000"; 
  btnIniciar.resize(275, 60);   
  btnIniciar.text = ' ';
  btnIniciar.strokeWeight = 0;
  btnIniciar.onPress = function(){
    estado = 'pantalla1';
    print('pantalla1');
  }

  btnVecino = new Clickable();
  btnVecino.locate(width/2-300,height/2);
  btnVecino.onPress = function(){
    estado = 'pantalla3';
  }

  btnCortina = new Clickable();
  btnCortina.locate(10,height/2+100)
  btnCortina.onPress = function(){
    timer = 0;
    estado = 'hermanaMeEncuentra';
  }

  btnBilletera = new Clickable();
  btnBilletera.locate(width/2+300,height/2+200);
  btnBilletera.onPress = function(){
    estado = "perder1"
  }

  btnVolverJugar = new Clickable();
  btnVolverJugar.onPress = function(){
    estado = "inicio";
  }

  timerHermana = new Clickable();
  timerHermana.locate(width/2,0);

  btnArmario = new Clickable();
  btnArmario.locate(width/2-150,height/2);
  btnArmario.onPress = function(){
    timer=0;
    estado = "pantalla5";
  }

  timerAltillo = new Clickable();
  timerAltillo.locate(width/2,0);

  btnGuitarra = new Clickable();
  btnGuitarra.locate(width/2-300,height/2);
  btnGuitarra.onPress = function(){
    estado = "pantalla7";
    timer = 0;
  }

  btnAmigo = new Clickable();
  btnAmigo.locate(width/2-100,(height/2)+70);
  btnAmigo.onPress = function (){
    timer = 0;
    estado = "pantalla9";
  }

  btnChrome = new Clickable();
  btnChrome.locate(width/2+40,(height/2)+70);
  btnChrome.onPress = function (){
    timer = 0;
    estado = 'perderProfesor';
  }

  btnGuitarra2 = new Clickable();
  btnGuitarra2.locate(width-200,50);
  btnGuitarra2.onPress = function(){
    estado = "pantalla11";
  }

  btnCorriendo = new Clickable();
  btnCorriendo.locate(width-100,height/2-50);
  btnCorriendo.onPress = function(){
    estado = "pantalla13";
  }

  btnBoliche = new Clickable();
  btnBoliche.locate(90,150);
  btnBoliche.onPress = function(){
    estado = "perderFiesta";
  }

  btnMicro = new Clickable();
  btnMicro.locate(100,200);
  btnMicro.onPress = function(){
    estado ="perderMicro";
  }

  btnGuitarra3 = new Clickable();
  btnGuitarra3.locate(90,height/2+150);
  btnGuitarra3.text = 'holas gente';
  btnGuitarra3.onPress = function(){
    estado = "pantalla15"
  }
}

function preload(){
  inicio =  loadImage ('fondo/inicio.png');

  concurso01 = loadImage('fondo/concurso01.png');
  pensando02 = loadImage('fondo/pensando02.png');
  vecino03 = loadImage('fondo/vecino03.png');
  billeteopasto = loadImage('fondo/billeteopasto_pantalla2.png');
  ani_hermana1 = loadImage('fondo/hermana1.png');
  ani_hermana2 = loadImage('fondo/hermana2.png');
  pantalla04 = loadImage('fondo/pantalla04.png');

  hermanaMeEncuentra_img = loadImage('fondo/hermanMeEcuentra.png');

  juanCortandoPasto = loadImage('fondo/pasto-01.png');
  anim_escaparHermana1 = loadImage('fondo/anim_escaparHermana1.png');
  anim_escaparHermana2 = loadImage('fondo/anim_escaparHermana2.png');

  altillo = loadImage('fondo/altillo.png');
  encuentraGuitarra = loadImage('fondo/encuentraGuitarra.png');
  celularDecision = loadImage('fondo/celularDecision.png');

  juanAmigoGuitarra = loadImage('fondo/juanAmigoGuitarra.png');

  elegirGuitarra_Fiesta = loadImage('fondo/elegirGuitarra_Fiesta.png');

  juanGuitarraCampo = loadImage('fondo/juanGuitarraCampo.png');

  correreleccion = loadImage('fondo/correreleccion.png');
  conQueTocar = loadImage('fondo/conQueTocar.png');

  profesorNoViene = loadImage('fondo/profesorNoViene.png');

  tocarSinAmpli = loadImage('fondo/tocarSinAmpli.png');

  final = loadImage('fondo/fin.png');
  marca_final = loadImage('fondo/marca_final.png');
  creditos_final = loadImage('fondo/creditos_final.png');
  juanCorriendo = loadImage ('fondo/juanCorriendo.png');
  juanMicro = loadImage ('fondo/juanMicro.png'),
  fiesta_img = loadImage('fondo/fiesta.png');
  perderMama1 = loadImage('fondo/perderMama1.png');
  perderHermana2 = loadImage('fondo/perderHermana2.png');
}

function draw() {
  if (estado== "inicio"){
    image(inicio,0,0,800,600);
    btnIniciar.draw();
  }
  if(estado=='pantalla1'){
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    print(timer)
    if(timer >= 1 && timer <= 3){
      image(concurso01,0,0,800,600);
    }else if (timer >= 3 && timer <= 5){
      image(pensando02,0,0,800,600);
    }
    else if (timer >= 5 && timer <= 7){
      image(vecino03,0,0,800,600);
    }
    else if (timer >= 7){
      estado = "pantalla2";
      timer = 0;
    }
  }
  if (estado == 'pantalla2'){
    image(billeteopasto,0,0,800,600); 
    btnVecino.draw();
    btnBilletera.draw();
  }
  if(estado == "perder1"){
    image(perderMama1,0,0,800,600);
    
    btnVolverJugar.locate(width/2,height/2);
    btnVolverJugar.draw();
  }
  if (estado == 'pantalla3'){
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    print(timer)
    if(timer >= 1 && timer <= 3){
      image(juanCortandoPasto,0,0,800,600);
    }else if (timer >= 1 && timer <= 3){
      image(ani_hermana1,0,0,800,600);
    }
    else if (timer >= 3 && timer <= 5){
      image(ani_hermana2,0,0,800,600);
    }
    else if (timer >= 5 && timer <= 7){
      image(ani_hermana1,0,0,800,600);
    }
    else if (timer >= 7 && timer <= 10){
      image(ani_hermana2,0,0,800,600);
    }
    else if (timer >= 10){
      estado = "pantalla4";
      timer = 0;
    }
  }
  if( estado == "pantalla4"){
    let tiempo = 9;
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }

    tiempo = tiempo - timer;
    if(tiempo <= 0){
      estado = "perderHermana";
      timer = 0;
    }
    image(pantalla04,0,0,800,600); 
    timerHermana.draw();
    btnCortina.draw();
    timerHermana.text = str(tiempo);
    btnArmario.draw();
    btnArmario.text = "btnArmario";
  }
  if(estado =="perderHermana"){
    image(perderHermana2,0,0,800,600);
    btnVolverJugar.locate(width/2,height/2+100);
    btnVolverJugar.draw();
  }
  if(estado == "pantalla5"){
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    print(timer)
    if(timer >= 1 && timer <= 3){
      image(anim_escaparHermana1,0,0,800,600);
    }else if (timer >= 3 && timer <= 6){
      image(anim_escaparHermana2,0,0,800,600);
    }else if (timer >= 6 && timer <= 7){
      timer = 0;
      estado = "pantalla6";
    }
  }
  if(estado == "pantalla6"){
    let tiempo = 9;
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }

    tiempo = tiempo - timer;
    image(altillo,0,0,800,600);

    if(tiempo <= 0){
      estado = "perderHermana";
    }
    timerAltillo.draw();
    timerAltillo.text = tiempo;
    btnGuitarra.draw();
  }
  if(estado == "hermanaMeEncuentra"){
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    image(hermanaMeEncuentra_img,0,0,800,600);
    if(timer >= 3){
      estado = "perderHermana";
    }
  }
  if(estado == "pantalla7"){
    print("pantalla7");
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    image(encuentraGuitarra,0,0,800,600);
    if(timer >= 4){
      estado = "pantalla8";
    }
  }
  if(estado == "pantalla8"){
    image(celularDecision,0,0,800,600);
    btnAmigo.draw();
    btnChrome.draw();
  }
  if(estado == "perderProfesor"){
    image(profesorNoViene,0,0,800,600);
    btnVolverJugar.locate(width/2,height/2);
    btnVolverJugar.draw();

  }
  if(estado ==  "pantalla9"){
    image(juanAmigoGuitarra,0,0,800,600);
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    if(timer >= 3){
      timer = 0;
      estado = "pantalla10";
    }
  }
  if(estado == "pantalla10"){
    image(elegirGuitarra_Fiesta,0,0,800,600);
    btnGuitarra2.draw();
    btnBoliche.draw();
  }
  
  if(estado == "perderFiesta"){
    image(fiesta_img,0,0,800,600);
    btnVolverJugar.locate(width/2,height/2);
    btnVolverJugar.draw();

  }

  if(estado == "pantalla11"){     ////////////////////
    image(juanGuitarraCampo,0,0,800,600);
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    if(timer >= 2){
      estado = "pantalla12";
    }
  }
  if(estado == "pantalla12"){
    image(correreleccion,0,0,800,600);
    btnCorriendo.draw();
    btnMicro.draw();
  }

  if(estado == "perderMicro"){
    image(juanMicro,0,0,800,600);
    btnVolverJugar.locate(width/2,height-200);
    btnVolverJugar.draw();
  }

  if(estado == "pantalla13"){

    image(juanCorriendo,0,0,800,600);
    
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    if(timer >= 3){
      estado = "pantalla14";
    }
  }
  if(estado == "pantalla14"){
    image(conQueTocar,0,0,800,600);
    btnGuitarra3.draw();
    
  }
  if(estado == "pantalla15"){
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    if(timer>=0 && timer <= 10){
      image(tocarSinAmpli,0,0,800,600);
    }
    if(timer >= 10 && timer <= 12){
      image(final,0,0,800,600);
    }
    else if(timer >= 12 && timer <= 15){
      image(marca_final,0,0,800,600);
    }
    else if(timer >= 15 && timer <= 20){
      image(creditos_final,0,0,800,600);
    }
  }
}

//      textSize(64);
//      text('Juan cortando pasto', width/2, height/2);

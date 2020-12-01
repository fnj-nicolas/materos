var canvas;
let estado = 'inicio';
let fondos;
let timer = 0;
let songGuitarra;
let songBullicio;
let songJuan;//ver si la consigo

let time = 0;
let wait = 1000;
let timer1 = 0;


function setup() {
  createCanvas(800, 600);
  
  //MUSICA
  songGuitarra=loadSound('musica/guitarramala.mp3');

  //BOTONES
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
  btnVecino.locate(width/2-320,height/2+75);
  btnVecino.resize(150,45);
  //btnVecino.strokeWeight = 0;
  btnVecino.text = '';
  btnVecino.color= "rgba(0,0,0,0)";
  btnVecino.strokeWeight=0;
  btnVecino.onPress = function(){
    estado = 'pantalla3';
  }

  btnCortina = new Clickable();
  btnCortina.locate(0,height/2-100);
  btnCortina.resize(75,300);
  btnCortina.color= "rgba(0,0,0,0)";
  btnCortina.strokeWeight=0;
  btnCortina.text='';
  btnCortina.onPress = function(){
    timer = 0;
    estado = 'hermanaMeEncuentra';
  }

  btnBilletera = new Clickable();
  btnBilletera.locate(width/2+285,height/2+180);
  btnBilletera.resize(90,95);
  btnBilletera.strokeWeight = 0;
  btnBilletera.text = '';
  btnBilletera.color= "rgba(0,0,0,0)";
  btnBilletera.onPress = function(){
    estado = "perder1"
  }

  btnVolverJugar = new Clickable();
  btnVolverJugar.onPress = function(){
      estado = "inicio";
      timer = 0;
    
  }

  timerHermana = new Clickable();
  timerHermana.locate(width/2,0);

  btnArmario = new Clickable();
  btnArmario.locate(width/2-170,height/2-150);
  btnArmario.color = "rgba(0,0,0,0)";
  btnArmario.text = '  ';
  btnArmario.resize(150,320);
  btnArmario.strokeWeight=0;
  btnArmario.onPress = function(){
    timer=0;
    estado = "pantalla5";
  }

  timerAltillo = new Clickable();
  timerAltillo.locate(width/2,0);

  btnGuitarra = new Clickable();
  btnGuitarra.locate(width/2-280,height/2-30);
  btnGuitarra.resize(25,150);
  btnGuitarra.color = "rgba(0,0,0,0)";
  btnGuitarra.text= ' ';
  btnGuitarra.strokeWeight=0;
  btnGuitarra.onPress = function(){
    estado = "pantalla7";
    timer = 0;
  }

  btnAmigo = new Clickable();
  btnAmigo.locate(width/2-90,(height/2)+70);
  btnAmigo.resize(50,50);
  btnAmigo.color= "rgba(0,0,0,0)";
  btnAmigo.strokeWeight=0;
  btnAmigo.text='';
  btnAmigo.onPress = function (){
    timer = 0;
    estado = "pantalla9";
  }

  btnChrome = new Clickable();
  btnChrome.locate(width/2+40,(height/2)+70);
  btnChrome.resize(50,50);
  btnChrome.color= "rgba(0,0,0,0)";
  btnChrome.strokeWeight=0;
  btnChrome.text='  ';
  btnChrome.onPress = function (){
    timer = 0;
    estado = 'perderProfesor';
  }

  btnGuitarra2 = new Clickable();
  btnGuitarra2.locate(width-240,30);
  btnGuitarra2.resize(230,130);
  btnGuitarra2.text='  ';
  btnGuitarra2.color = "rgba(0,0,0,0)";
  btnGuitarra2.strokeWeight=0;
  btnGuitarra2.onPress = function(){
    estado = "pantalla11";
  }

  btnCorriendo = new Clickable();
  btnCorriendo.locate(width-170,90);
  btnCorriendo.resize(140,200)
  btnCorriendo.color="rgba(0,0,0,0)";
  btnCorriendo.text='';
  btnCorriendo.strokeWeight=0;
  btnCorriendo.onPress = function(){
    estado = "pantalla13";
    timer = 0;
  }

  btnBoliche = new Clickable();
  btnBoliche.locate(10,10);
  btnBoliche.resize(300,180);
  btnBoliche.text = ' ';
  btnBoliche.color= "rgba(0,0,0,0)";
  btnBoliche.strokeWeight=0;
  btnBoliche.onPress = function(){
    estado = "perderFiesta";
  }

  btnMicro = new Clickable();
  btnMicro.locate(10,10);
  btnMicro.text = ' ';
  btnMicro.resize(380,230);
  btnMicro.color= "rgba(0,0,0,0)";
  btnMicro.strokeWeight=0;
  btnMicro.onPress = function(){
    estado ="perderMicro";
  }

  btnGuitarra3 = new Clickable();
  btnGuitarra3.locate(70,height/2+50);
  btnGuitarra3.color="rgba(0,0,0,0)";
  btnGuitarra3.resize(80,200);
  btnGuitarra3.text = ' ';
  btnGuitarra3.strokeWeight=0;
  btnGuitarra3.onPress = function(){
    estado = "perdisteGuitarra"
  }

  btnAmpli = new Clickable();
  btnAmpli.locate (width-250,height/2+30);
  btnAmpli.color="rgba(0,0,0,0)";
  btnAmpli.resize(200,210);
  btnAmpli.strokeWeight=0;
  btnAmpli.text=' ';
  btnAmpli.onPress = function (){
    timer = 0;
    estado = "pedisteContraRicky";
  }
}

//ACA TERMINA EL SET UP


function preload(){
  inicio =  loadImage ('fondo/inicio.png');

  concurso01 = loadImage('fondo/concurso01.png');
  pensando02 = loadImage('fondo/pensando02.png');
  vecino03 = loadImage('fondo/vecino03.png');
  billeteopasto = loadImage('fondo/billeteopasto_pantalla2.png');
  ani_hermana1 = loadImage('fondo/hermana1.png');
  ani_hermana2 = loadImage('fondo/hermana2.png');
  pantalla04 = loadImage('fondo/pantalla04.png');
  needmoney = loadImage('fondo/needMoney.png');

  hermanaMeEncuentra_img = loadImage('fondo/hermanMeEcuentra.png');

  juanCortandoPasto = loadImage('fondo/pasto-01.png');
  anim_escaparHermana1 = loadImage('fondo/anim_escaparHermana1.png');
  anim_escaparHermana2 = loadImage('fondo/anim_escaparHermana2.png');

  altillo = loadImage('fondo/altillo.png');
  encuentraGuitarra = loadImage('fondo/encuentraGuitarra.png');
  celularDecision = loadImage('fondo/celularDecision.png');
  hnaAltillo= loadImage('fondo/hermanaAltillo.png');

  juanAmigoGuitarra = loadImage('fondo/juanAmigoGuitarra.png');

  elegirGuitarra_Fiesta = loadImage('fondo/elegirGuitarra_Fiesta.png');

  juanGuitarraCampo = loadImage('fondo/juanGuitarraCampo.png');

  correreleccion = loadImage('fondo/panallitas-14.png');
  conQueTocar = loadImage('fondo/conQueTocar.png');

  profesorNoViene = loadImage('fondo/profesor1.png');
  profesorNoViene2 = loadImage('fondo/profesor2.png');
  profesorNoViene3 = loadImage('fondo/profesorNoViene.png');

  tocarConAmpli = loadImage('fondo/tocarConAmpli.png');

  juanNoSeEsconde = loadImage('fondo/juanNoSeEsconde.png');

  final = loadImage('fondo/fin.png');
  marca_final = loadImage('fondo/marca_final.png');
  creditos_final = loadImage('fondo/creditos_final.png');
  juanCorriendo = loadImage ('fondo/juanCorriendo.png');
  juanMicro = loadImage ('fondo/juanMicro.png'),
  fiesta_img = loadImage('fondo/fiesta.png');
  juanafterfiesta = loadImage('fondo/juanafterfiesta.png');
  juanafterfiesta2 = loadImage('fondo/juanafterfiesta2.png');
  perderMama1 = loadImage('fondo/perderMama1.png');
  perderHermana2 = loadImage('fondo/perderHermana2.png');

  perdisteGuitarra = loadImage ('fondo/perdisteGuitarra.png');

  rickyGana = loadImage ('fondo/fin.png');

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
    
    if(timer >= 1 && timer <= 3){
      image(creditos_final,0,0,800,600);
      
    }else if (timer >= 3 && timer <= 5){
      image(concurso01,0,0,800,600);
      
    }
    else if (timer >= 5 && timer <= 7){
      image(pensando02,0,0,800,600);
      
    }
    else if (timer >= 7 && timer <= 10){
      image(needmoney,0,0,800,600);
      
    }
    else if (timer >= 10 && timer <= 13){
      image(vecino03,0,0,800,600);

    }
    else if (timer >= 13){
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
    
    btnVolverJugar.locate(width/2-105,height/2+175);
    btnVolverJugar.resize(210,60);
    btnVolverJugar.text='';
    btnVolverJugar.strokeWeight= 0;
    btnVolverJugar.color="rgba(0,0,0,0)";
    btnVolverJugar.draw();
    timer = 0;
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
      estado = "juanNoSeEsconde";
      timer = 0;
    }
    image(pantalla04,0,0,800,600); 
    timerHermana.draw();
    btnCortina.draw();
    timerHermana.text = str(tiempo);
    btnArmario.draw();
  }
  if(estado == "juanNoSeEsconde"){
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    image(juanNoSeEsconde,0,0,800,600); 
    if(timer >= 3){
      estado = "perderHermana";
      timer = 0;
    }
  }
  if(estado =="perderHermana"){
    image(perderHermana2,0,0,800,600);
    btnVolverJugar.locate(width/2-100,height/2+190);
    btnVolverJugar.resize(210,60);
    btnVolverJugar.strokeWeight=0;
    btnVolverJugar.text='';
    btnVolverJugar.color="rgba(0,0,0,0)";
    btnVolverJugar.draw();
    timer = 0 ;
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
    }else if (timer >= 7 && timer <= 8){
    timer = 0;
    estado = "pantalla6";
    }
  }
  if(estado == "pantalla6"){
    image(altillo,0,0,800,600);
    let tiempo = 5;
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    tiempo = tiempo - timer;
    if(tiempo <= 0){
      estado = "hnaAltillo";
      timer = 0;
    }
    timerAltillo.draw();
    timerAltillo.text = tiempo;
    btnGuitarra.draw();
  }
  if(estado == "hnaAltillo"){
    image(hnaAltillo,0,0,800,600);
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    if(timer >= 4){
      estado = "perderHermana";
    }
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
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    if(timer >= 3){
      timer = 0;
      estado = "profesor2";
    }
  }
  if(estado=="profesor2"){
    image(profesorNoViene2,0,0,800,600);
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    if(timer >= 3){
      timer = 0;
      estado = "profesor3";
    }
  }
  if(estado=="profesor3"){
    image(profesorNoViene3,0,0,800,600);
    btnVolverJugar.locate(width/2-105,height/2+180);
    btnVolverJugar.color="rgba(0,0,0,0)";
    btnVolverJugar.strokeWeight=0;
    btnVolverJugar.resize(210,60);
    btnVolverJugar.text='  ';
    btnVolverJugar.draw();
    timer = 0;
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
  

  //FIESTA
  if(estado == "perderFiesta"){
    image(fiesta_img,0,0,800,600);
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    if(timer >= 3){
      timer = 0;
      estado = "fiesta2";
    }
  }
  if(estado == "fiesta2"){
    image(juanafterfiesta,0,0,800,600);
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    if(timer >= 3){
      timer = 0;
      estado = "fiesta3";
    }
  }
  if(estado == "fiesta3"){
    image(juanafterfiesta2,0,0,800,600);
    btnVolverJugar.locate(width/2-105,height/2+170);
    btnVolverJugar.color="rgba(0,0,0,0)";
    btnVolverJugar.strokeWeight=0;
    btnVolverJugar.text='  ';
    btnVolverJugar.resize(210,60);
    btnVolverJugar.draw();
    timer = 0;
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
    btnVolverJugar.locate(width/2-100,height-120);
    btnVolverJugar.resize(210,60);
    btnVolverJugar.color="rgba(0,0,0,0)";
    btnVolverJugar.strokeWeight=0;
    btnVolverJugar.text='  ';
    btnVolverJugar.draw();
    timer = 0;
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
    btnAmpli.draw();
    
  }

  if(estado == "perdisteGuitarra"){
    image(perdisteGuitarra,0,0,800,600);
    btnVolverJugar.locate(width/2-105,height-200);
    btnVolverJugar.draw();
    btnVolverJugar.resize(210,60);
    btnVolverJugar.text='  ';
    btnVolverJugar.color="rgba(0,0,0,0)";
    btnVolverJugar.strokeWeight=0;
    timer = 0;
  }

  if(estado == "pedisteContraRicky"){
    //songGuitarra.play();
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    image(tocarConAmpli,0,0,800,600);
    if(timer >= 6){
      timer = 0;
      estado = "rickyGana";
    }

  }

  if(estado == "rickyGana"){
    image(rickyGana,0,0,800,600);
    btnVolverJugar.locate(width/2-105,height-105);
    btnVolverJugar.resize(210,60);
    btnVolverJugar.text = ' ';
    btnVolverJugar.color="rgba(0,0,0,0)";
    btnVolverJugar.draw();
    btnVolverJugar.strokeWeight=0;
    timer = 0;
    if(songGuitarra.isPlaying()){
      songGuitarra.stop();
    }
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

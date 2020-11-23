var canvas;
let estado = 'pantalla6';
let fondos;
let timer = 0;

let time = 0;
let wait = 1000;
let timer1 = 0;

function setup() {
  createCanvas(800, 600);
  
  btnIniciar = new Clickable();
  btnIniciar.locate(width/2, height/2);
  btnIniciar.text = 'INICIAR';
  btnIniciar.onPress = function(){
    estado = 'pantalla1';
    print('pantalla1');
  }

  btnVecino = new Clickable();
  btnVecino.locate(width/2-300,height/2);
  btnVecino.onPress = function(){
    estado = 'pantalla3';
  }

  timerHermana = new Clickable();
  timerHermana.locate(width/2,0);

  btnArmario = new Clickable();
  btnArmario.locate(width/2-150,height/2);
  btnArmario.onPress = function(){
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

}

function preload(){
  concurso01 = loadImage('fondo/concurso01.png');
  pensando02 = loadImage('fondo/pensando02.png');
  vecino03 = loadImage('fondo/vecino03.png');
  billeteopasto = loadImage('fondo/billeteopasto_pantalla2.png');
  ani_hermana1 = loadImage('fondo/hermana1.png');
  ani_hermana2 = loadImage('fondo/hermana2.png');
  pantalla04 = loadImage('fondo/pantalla04.png');

  anim_escaparHermana1 = loadImage('fondo/anim_escaparHermana1.png');
  anim_escaparHermana2 = loadImage('fondo/anim_escaparHermana2.png');

  altillo = loadImage('fondo/altillo.jpeg');
  encuentraGuitarra = loadImage('fondo/encuentraGuitarra.png');
  celularDecision = loadImage('fondo/celularDecision.png');
}

function draw() {
  background(255,0,0);
  if (estado== "inicio"){
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
  }
  if (estado == 'pantalla3'){
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    print(timer)
    if(timer >= 1 && timer <= 3){
      textSize(64);
      text('Juan cortando pasto', width/2, height/2);
    }else if (timer >= 1 && timer <= 3){
      image(ani_hermana1,0,0,800,600);
    }
    else if (timer >= 3 && timer <= 5){
      image(ani_hermana2,0,0,800,600);
    }
    else if (timer >= 5 && timer <= 7){
      image(ani_hermana1,0,0,800,600);
    }
    else if (timer >= 7 && timer <= 9){
      image(ani_hermana2,0,0,800,600);
    }
    else if (timer >= 9){
      estado = "pantalla4";
      timer = 0;
    }
  }
  if( estado == "pantalla4"){
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    image(pantalla04,0,0,800,600); 
    timerHermana.draw();
    timerHermana.text = str(timer);
    btnArmario.draw();
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
    }else if (timer >= 3 && timer <= 5){
      image(anim_escaparHermana2,0,0,800,600);
    }else if (timer >= 5 && timer <= 6){
      estado = "pantalla6";
    }
  }
  if(estado == "pantalla6"){
    if (millis() - time >= wait) {
      timer++;
      print(timer);//if it is, do something
      time = millis();//also update the stored time
    }
    image(altillo,0,0,800,600);
    timerAltillo.draw();
    timerAltillo.text =timer;
    btnGuitarra.draw();
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
  }
}



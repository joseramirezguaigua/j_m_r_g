//7200 Variaciones en blanco, rojo y negro es una obra de Net Art Generativa
//creada y programada en javascript y .p5 -processing- por José Ramírez Guaigua en el año 2022. Algunos derechos reservados.

let y = 0;
let lineaColorizada;
let lineaColorizada2;
let lineaColorizada3;
let altura;
let altura2;
let fondoColorizado1;
let fondoColorizado2;
let fondoColorizado3;
let puntosDeFlexion;
let puntosDeFlexion2;
let y4;
let y5;
let sizes = [300,350,400,450, 500, 550, 600];
var myText = [];
var randomLineOfText;
var randomLineOfText2;
var randomLineOfText3;
var fade;
var fadeAmount = 1;
let grosor;
let timer = 5000;
let nextChange = timer; //syncs the timer and change rate

window.setTimeout( function() {
  window.location.reload();
}, 60000);

function preload() {
  myText = loadStrings("3umbral_.txt");
  myFont = loadFont('Jura-Bold.ttf');
}

function setup() {
  createCanvas(800,800);
  randomLineOfText = round(random(0, myText.length));
   fondoColorizado1 = color(255,0,0);
  fade = 256;
  altura = random(sizes);
  console.log(altura);
  altura2 = 0;
  grosor = random([1,2,3,4,5,6,7,8])


  if (altura == 300) {
    altura2 = 150;
  }
  if (altura == 350) {
    altura2 = 225;
  }
  if (altura == 400) {
    altura2 = 300;
  }
  if (altura == 450) {
    altura2 = 375;
  }
  if (altura == 500) {
    altura2 = 450;
  }
  if (altura == 550) {
    altura2 = 525;
  }
  if (altura == 600) {
    altura2 = 600;
  }
 


  lineaColorizada = random([0]);


 
   
  
}
function drawingLines() {
  push();
  translate(0, altura - altura2);
  for (let y3 = 01; y3 > 0 && y3 < 800; y3 = y3 + 7) {
    let y1 = map(noise(y), 0, 1, 0, height );

    beginShape();
    strokeWeight(grosor);

    noFill();

    stroke(lineaColorizada);
    bezier(0, y3, 200, y3 + y1, 600, y3 - y1, width, y3);
    //stroke(lineaColorizada3);
    //bezier(100, y3, 200, y3 - y1, 600, y3 + y1, width - 100, y3);

    endShape();
    
  }
  pop();
}



function draw() {
  background(256,0,0);
   
  //background(256,0,0);
  if (fade>255) fadeAmount=-0.7; 
 
  

 let txts = createGraphics(800, 800);
  

  
  
  print(myText[randomLineOfText]);
  
  //background(fondoColorizado1);


  //BgDrawingLines();

 
 txts.fill(256,256,256,fade);
 

   
 
txts.textSize(55);
  txts.textFont(myFont);
  txts.textAlign(CENTER);
 txts.text(myText[randomLineOfText], 0, 0,800,800);
   


 
  
    
  drawingLines();
  image(txts, 0, 0,800,800);
  
  y += 0.001;
  fade += fadeAmount; 
  


}
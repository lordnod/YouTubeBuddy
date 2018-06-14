let speech = new p5.Speech('Microsoft David Desktop = English (United States)');
let words = "Will sound if functioning."; //Currently plays

let mouths;
let mouth;
let mouthChange;

function setup() {
    createCanvas(408,532);
    
    //Base character image
    bg = loadImage("images/0-base.png");
    mouthChange = 175;
    //Mouth Images in phoneme shapes
    p1 = loadImage("images/1-A.png");
    p2 = loadImage("images/2-O.png");
    p3 = loadImage("images/3-E.png");
    p4 = loadImage("images/4-WR.png");
    p5 = loadImage("images/5-TS.png");
    p6 = loadImage("images/6-LN.png");
    p7 = loadImage("images/7-UQ.png");
    p8 = loadImage("images/8-MBP.png");
    p9 = loadImage("images/9-FV.png");
    
    
    
    mouths = [bg, p1, p2, p3, p4, p5, p6, p7, p8, p9];
    mouth = mouths[0];
    
    talk();
        
    speech.onEnd(endSpeaking);

    function endSpeaking() {
        mouth = mouths[0];
    }

    function mouthAni() {
        mouth = random(mouths);
        
    }

    function talk() {
        //speech.speak(words);
        setInterval(mouthAni, mouthChange);
    
    }

}



function draw() {
    background(bg);
    
    image(mouth, 0, 0);
        
}
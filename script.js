var leftWall;
var rightWall;
var person;
var obstacle;
var smallOffice;
var smallOffice2;
var smallOffice3;
var smallOffice4;
var smallOffice5;
var smallOffice6;
var smallOffice7;
var smallOffice8;
var smallOffice9;
var smallOffice10;
var largeOffice;
var largeOffice2;
var largeOffice3;
var largeOffice4;
var largeOffice5;
var largeOffice6;
var miscRoom;
var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;
//new group variable to hold all of the walls
//immovable with a loop
var topWall;
var bottomWall;
var walls;
var offices;
var prize;
var cookies;

function setup() {
    createCanvas(1000, 800);
    walls = new Group();
    offices = new Group();
    leftWall = createSprite(0, 400, 25, 800);
    walls.add(leftWall);
    leftWall.immovable = true;
    rightWall = createSprite(1000, 400, 25, 800);
    walls.add(rightWall);
    rightWall.immovable = true;
    obstacle = createSprite(700, 390, 600, 180);
    walls.add(obstacle);
    obstacle.immovable = true;
    //poition
    bottomWall = createSprite(500, 800, 1000, 25);
    walls.add(bottomWall);
    bottomWall.immovable = true;
    topWall = createSprite(500, 0, 1000, 25)
    walls.add(topWall);
    topWall.immovable = true;
    miscRoom = createSprite(48, 48, 70, 70);
    smallOffice = createSprite(43.5, 112, 60, 60);
    offices.add(smallOffice);
    smallOffice2 = createSprite(43.5, 172, 60, 60);
    offices.add(smallOffice2);
    smallOffice3 = createSprite(43.5, 232, 60, 60);
    offices.add(smallOffice3);
    smallOffice4 = createSprite(43.5, 292, 60, 60);
    offices.add(smallOffice4);
    smallOffice5 = createSprite(43.5, 352, 60, 60);
    offices.add(smallOffice5);
    smallOffice6 = createSprite(370, 330, 60, 60);
    smallOffice7 = createSprite(370, 390, 60, 60);
    smallOffice8 = createSprite(370, 450, 60, 60)
    largeOffice = createSprite(52, 420, 80, 80);
    largeOffice2 = createSprite(52, 500, 80, 80);
    largeOffice3 = createSprite(52, 580, 80, 80);
    largeOffice4 = createSprite(52, 660, 80, 80);
    largeOffice5 = createSprite(52, 740, 80, 80);
    wall1 = createSprite(220, 385, 10, 570);
    walls.add(wall1);
    wall1.immovable = true;
    
    wall2 = createSprite(525, 105, 610, 10);
    walls.add(wall2);
    wall2.immovable = true;
    
    // wall3 = createSprite(500, 105, 60, 10);
    // walls.add(wall3);
    // wall3.immovable = true;
    
    wall4 = createSprite(700, 200, 600, 10);
    walls.add(wall4);
    wall4.immovable = true;
    
    wall5 = createSprite(515, 675, 600, 10);
    walls.add(wall5);
    wall5.immovable = true;
    
    
    for (var i = 0; i < walls.length; i++) {
        walls[i].shapeColor = 'black';
    }
    var img = loadImage("snak_pic.jpg");
    person = createSprite(150, 50, 30, 30);
    person.addImage(img);

    prize = createSprite(900, 650, 100, 67)
    var ima = loadImage("cookie.jpg");
    prize.addImage(ima);


}


function draw() {
    background("white");
    person.bounce(walls);

    if (keyDown(RIGHT_ARROW)) {
        person.setVelocity(5, 0);
    }
    else if (keyDown(LEFT_ARROW)) {
        person.setVelocity(-5, 0);
    }
    else if (keyDown(UP_ARROW)) {
        person.setVelocity(0, -5);
    }
    else if (keyDown(DOWN_ARROW)) {
        person.setVelocity(0, 5);
    }
    else {
        person.setVelocity(0, 0);
    }
    drawSprites();

    person.collide(prize, win);

}


function win() {
    prize.remove();
}

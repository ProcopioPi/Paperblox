// JavaScript Document
function doTouchStart(event) {
    event.preventDefault();
    clickX = event.targetTouches[0].pageX;
    clickY = event.targetTouches[0].pageY;
    mouseDown();
}

function mouseDown() {
    //debug = "mouseDown = " + clickX;

	if(clickX>0 && clickX<250 && clickY <710 && clickY>640)
		LEFT();

	if(clickX>250 && clickX<400 && clickY <710 && clickY>640)
	    DOWN();

	if (clickX > 400 && clickX < 550 && clickY < 710 && clickY > 640)
	    UP();

	if (clickX > 550 && clickX < 700 && clickY < 710 && clickY > 640)
	    RIGHT();
		
	if(clickX>180 && clickX<400 && clickY <588 && clickY>430)
		PAUSE();
}
//750,430 - 888,588 
function PAUSE()
{
	//playAnimation = !playAnimation;
	pause=!pause;
	message = "PAUSE : "+message;
	mainCicle();
}
//400-550 ,640-710
function UP() {  
    orienting++;
    orienting %= 4;

    //debug = " orientation :: " + orienting;
}
//900,640- 990,710
function DOWN()
{
    velocity = 0;
}
//770,640- 890,710
function LEFT()
{
	//message = "LEFT : "+message;
	if(xPos>=0)
	    xPos--;
}
//1068,640-1180,710
function RIGHT()
{
	//message = "RIGHT : "+message;
	if(xPos<=8)
		xPos ++;
}
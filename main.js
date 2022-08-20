canvas = document.getElementById('myCanvas');
ctx= canvas.getContext('2d');

greencar_image = "car2.png";
background_image = "parkingLot.jpg";

greencar_image_width=125;
greencar_image_height=225;


greencar_image_x=875;
greencar_image_y=165;

function add() {
	background_image_imgTag= new Image();
	background_image_imgTag.onload= uploadBackground;
	background_image_imgTag.src= background_image;

	greencar_image_imgTag= new Image();
	greencar_image_imgTag.onload= uploadgreencar;
	greencar_image_imgTag.src= greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_image_imgTag,0,0, canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_image_imgTag,greencar_image_x,greencar_image_y, greencar_image_width,greencar_image_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greencar_image_y >=125)
	{
		greencar_image_y=greencar_image_y-10;
		console.log("When up arrow key is pressed, x="+greencar_image_x+"||y="+greencar_image_y);
		uploadBackground();
		uploadgreencar();
	}

}

function down()
{
	if(greencar_image_y<=450)
	{
		greencar_image_y=greencar_image_y+10;
		console.log("When down arrow key is pressed, x="+greencar_image_x+"||y="+greencar_image_y);
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car downward
}

function left()
{
	if(greencar_image_x>=5){
		greencar_image_x=greencar_image_x-10;
		console.log("When left arrow key pressed, x="+greencar_image_x+"||y="+greencar_image_y);
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car left side
}

function right()
{
	if(greencar_image_x<=875){
		greencar_image_x=greencar_image_x+10;
		console.log("When left arrow key pressed, x="+greencar_image_x+"||y="+greencar_image_y);
		uploadBackground();
		uploadgreencar();
	}
	//Define function to move the car right side
}

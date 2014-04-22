
function generateO()
{
	color = 0;
	maxBottomLocal = 1;
	
	for(var i = 0; i<2; i++)
	{
		if(xPos >8)
			xPos = 8;
		if(xPos < 0)
			xPos = 0;
			
			drawBlock( xPos+i,yPos+1,color);
			drawBlock( xPos+i,yPos,color);
	}
}
//I  ocuupies 1 column or 4 columns
function generateI()
{
	color = 1;

	if (orienting == 0 || orienting == 2)
	{
		if(xPos<1)
			xPos = 1;
		if(xPos > 7)
			xPos = 7;		
		maxBottomLocal = 0;	
		for(var i = 0; i<4; i++)
			drawBlock( xPos+i-1,yPos,color);
	}
	else 
	{
		if(xPos<0)
			xPos = 0;
		if(xPos > 9)
			xPos = 9;
		
		maxBottomLocal = 2;		
		for(var i = 0; i<4; i++)
			drawBlock( xPos,yPos-1+i,color);
	}	
}
//Z  ocuupies 4 columns or 3 columns
function generateZ()
{
	color =	 2;

	if (orienting == 0 || orienting == 2)
	{
		if(xPos>7)
			xPos = 7;
		if(xPos<0)
				xPos = 0;
		maxBottomLocal = 1;	
		for(var i = 0; i<2; i++)
		{
			drawBlock( xPos+i+1,yPos+1,color);
			drawBlock( xPos+i,yPos,color);
		}
	}
	else
	{
		if(xPos>8)
			xPos = 8;
		if(xPos<0)
				xPos = 0;
		maxBottomLocal = 1;
		for(var i = 0; i<2; i++)
		{
			drawBlock( xPos+1,yPos+i-1,color);
			drawBlock( xPos,yPos+i,color);
		}
	}
}

//S  ocuupies 4 columns or 3 columns
function generateS()
{
	color = 3;
	maxBottomLocal = 1;
	if(xPos>7)
			xPos = 7;

	if (orienting == 0 || orienting == 2)
	{
		if(xPos<0)
				xPos = 0;
		for(i = 0; i<2; i++)
		{
			drawBlock(1+xPos+i,yPos,color);
			drawBlock(xPos+i,yPos+1,color);
		}
	}
	else
	{		
		for(i = 0; i<2; i++)
		{
			drawBlock(xPos+1,yPos+i-1,color);
			drawBlock(xPos+2,yPos+i,color);
		}
	}
}



//T  ocuupies 3 columns
function generateT()
{
	color = 4;
	switch (orienting)
	{
		case 0:
			if(xPos>7)
				xPos = 7;
			if(xPos<0)
				xPos = 0;
			maxBottomLocal = 1;

			for(var i = 0; i<3; i++)
			{
				drawBlock( xPos+i,yPos,color);		
			}drawBlock( xPos+1,yPos+1,color);
		break;
		case 1:
			if(xPos>8)
				xPos = 8;
			if(xPos<0)
				xPos = 0;
			maxBottomLocal = 2;
			for(var i = 0; i<3; i++)
			{
				drawBlock( xPos+1,yPos+i,color);		
			}drawBlock( xPos,yPos+1,color);
		break;
		case 2:
			if(xPos>7)
				xPos = 7;			
			if(xPos<0)
				xPos = 0;
			maxBottomLocal = 1;			
			for(var i = 0; i<3; i++)
			{
				drawBlock( xPos+i,yPos+1,color);		
			}drawBlock( xPos+1,yPos,color);
		break;
		case 3:
			if(xPos>7)
				xPos = 7;
			maxBottomLocal = 2;
			for(var i = 0; i<3; i++)
			{
				drawBlock( xPos+1,yPos+i,color);		
			}drawBlock( xPos+2,yPos+1,color);
		break;
	}
}

//L  ocuupies 2 columns or 3 columns 
function generateL()
{
	color = 5;

	switch (orienting)
	{
		case 0:
			if(xPos>8)
				xPos = 8;
			if(xPos<0)
				xPos = 0;

			maxBottomLocal = 2;
			for(var i = -1; i<2; i++)
			{
				drawBlock( xPos,yPos+i+1,color);		
			}drawBlock( xPos+1,yPos+2,color);
		break;
		case 1:
			if(xPos>7)
				xPos = 7;
			if(xPos<0)
				xPos = 0;
			maxBottomLocal = 1;
			for(var i = -1; i<2; i++)
			{
				drawBlock( xPos+i+1,yPos,color);		
			}drawBlock( xPos,yPos+1,color);
		break;
		case 2:
			if(xPos>7)
				xPos = 7;
			maxBottomLocal = 1;
			for(var i = -1; i<2; i++)
			{
				drawBlock( xPos+2,yPos+i,color);		
			}drawBlock( xPos+1,yPos-1,color);
		break;
		case 3:
			if(xPos>7)
				xPos = 7;
			if(xPos<0)
				xPos = 0;
			maxBottomLocal = 0;
			for(var i = -1; i<2; i++)
			{
				drawBlock(1+ xPos+i,yPos,color);		
			}drawBlock(1+ xPos+1,yPos-1,color);
		break;
	}
}



//J  ocuupies 2 columns or 3 columns
function generateJ()
{
	color = 6;

	switch (orienting)
	{
		case 0:
			if(xPos>8)
				xPos = 8;
			if(xPos<0)
				xPos = 0;
			maxBottomLocal = 2;
			for(var i = -1; i<2; i++)
			{
				drawBlock( xPos+1,yPos+i+1,color);		
			}drawBlock( xPos,yPos+2,color);
		break;
		case 1:
			if(xPos>7)
				xPos = 7;
			if(xPos<0)
				xPos = 0;
			maxBottomLocal = 0;			
			for(var i = -1; i<2; i++)
			{
				drawBlock( xPos+i+1,yPos,color);		
			}drawBlock( xPos,yPos-1,color);
		break;
		case 2:
			if(xPos>8)
				xPos = 8;
			if(xPos<0)
				xPos = 0;
			maxBottomLocal = 1;					
			for(var i = -1; i<2; i++)
			{
				drawBlock( xPos,yPos+i,color);		
			}drawBlock( xPos+1,yPos-1,color);
		break;
		case 3:
			if(xPos>7)
				xPos = 7;
			if(xPos<0)
				xPos = 0;	
			maxBottomLocal = 0;				
			for(var i = -1; i<2; i++)
			{
				drawBlock(xPos+i+1,yPos-1,color);		
			}drawBlock(xPos+2,yPos,color);
		break;
	}
}
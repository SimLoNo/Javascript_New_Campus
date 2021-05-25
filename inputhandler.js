export default class InputHandler{
	constructor(visitor,screen){

		document.addEventListener("keydown", event => {
			if (event.keyCode == 37)		// ArrowLeft
				visitor.turnDirection = 1;
			if (event.keyCode == 39)		// ArrowRight
				visitor.turnDirection = -1;
			if (event.keyCode == 38)		// UpArrow
				visitor.walkDirection = -1;
			if (event.keyCode == 40)		// DownArrow
				visitor.walkDirection = 1;
			if (event.keyCode == 86	)		// v
				screen.shiftViewMode();
			if (event.keyCode == 70	){		// f
				visitor.shiftFloor();
				screen.shiftFloor();
			}
			if (event.keyCode == 67	){		// c
				visitor.clipping();
			}					
		});
			
		document.addEventListener("keyup", event => {
			if (event.keyCode == 37)		// ArrowLeft
				visitor.turnDirection = 0;
			if (event.keyCode == 39)		// ArrowRight
				visitor.turnDirection = 0;
			if (event.keyCode == 38)		// UpArrow
				visitor.walkDirection = 0;
			if (event.keyCode == 40)		// DownArrow
				visitor.walkDirection = 0;
		});	
	}	
}


export default class Visitor{
	constructor(scene,level){
		
		this.body = new THREE.Object3D();
		this.body.position.set(7,0.25,3);
		this.body.rotation.y = -Math.PI/2;
		
		// skift etage (til test)
		this.groundFloor = true;
		// gå gennem vægge hvis false
		this.clippingMode = true;
		this.moveSpeed = 0.15;
		this.rotationSpeed = 3 * (Math.PI/180);	//degrees per frame

		this.turnDirection = 0;	//1:left, -1:right
		this.walkDirection = 0;	//1:backwards, -1:forwards

		// model
		const geometry = new THREE.ConeGeometry( 0.2, 0.6, 32 );
		const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
		this.visitorModel = new THREE.Mesh( geometry, material );
		this.visitorModel.rotation.x = -Math.PI/2;
		this.visitorModel.position.y = 0.25;
		scene.add(this.visitorModel);
	}
	shiftFloor(){
		if (this.groundFloor == true){
			this.groundFloor = false;
			this.body.position.y = 3.75;
			this.visitorModel.position.y = 3.75;
		} else{
			this.groundFloor = true;
			this.body.position.y = 0.25;
			this.visitorModel.position.y = 0.25;
		}
	}
	clipping(){
		// skift
		this.clippingMode = !this.clippingMode;
		console.log("clipping er " + this.clippingMode);
	}
	update(level, camera_FP){

		this.body.rotation.y += this.turnDirection * this.rotationSpeed;

		let moveStep = this.walkDirection * this.moveSpeed;

		let newX = this.body.position.x + Math.sin(this.body.rotation.y) * moveStep;
		let newZ = this.body.position.z + Math.cos(this.body.rotation.y) * moveStep;

		// tjek for vægge	
		if (this.clippingMode == false){	
			// intet vægtjek
			this.body.position.z = newZ;
			this.body.position.x = newX;
		}else if (this.clippingMode == true && level.hasWallAt(this.groundFloor,newX,newZ) != 1 ){	
			this.body.position.z = newZ;
			this.body.position.x = newX;
		}
			
		this.visitorModel.position.x = this.body.position.x;
		this.visitorModel.position.z = this.body.position.z;

		this.visitorModel.rotation.z = this.body.rotation.y;	

		camera_FP.position.z = this.body.position.z;
		camera_FP.position.x = this.body.position.x;
		camera_FP.position.y = this.body.position.y;
	
		camera_FP.rotation.y = this.body.rotation.y;
	}
	updatePosition(e,camera_FP){
	// https://github.com/mrdoob/three.js/blob/master/examples/jsm/controls/PointerLockControls.js
		
		let euler = new THREE.Euler(0,0,0, 'YXZ');

		euler.setFromQuaternion(camera_FP.quaternion);
		euler.y -= e.movementX/100;
		euler.x -= e.movementY/100;
		
		euler.x = Math.max( Math.PI/2 - Math.PI, Math.min(Math.PI/2, euler.x ) );
	
		//camera_FP.quaternion.setFromEuler(euler);
	}
}

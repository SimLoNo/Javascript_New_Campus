import MakeRoom from './RoomOptimering.js';
export default class Level{
	constructor(){
		this.TILESIZE = 0.5;
		this.map_width = 85;
		this.map_height = 28;
		this.grid_floor0;
		this.floor0_walls = new THREE.Group();
		this.grid_floor1;
		
		// floor_height? 3.5?
		
    }
	
	load_txt_file(file_name){
		// indlæser data fra txt.fil
		var request = new XMLHttpRequest();
		request.open('GET', file_name, false);  // 'false' gør kaldet synkront
		request.send(null);

		let txt;

		if (request.status === 200) {
			txt = request.responseText;
		}
				
		var txtar = txt.split("\n");
		
		let array_tmp = [];
		
		// tager et array af strings og returnerer et 2dimensionelt array af enkelte tegn
			for (var row = 0; row < txtar.length; row++){
				// array til hver række
				var rowar = [];
				for (var column = 0; column < txtar[row].length; column++){
					var item = txtar[row].slice(column,column+1);
					rowar.push(item);
				}
			array_tmp.push(rowar);
			}

		return array_tmp;
	}
	hasWallAt(groundfloor, x,z){
		// virker ikke pt.
		// der skal tages højde for, hvilken etage man er på. og hvad man kan gå igennem
		var mapGridIndexZ = Math.floor(x/this.TILESIZE);
		var mapGridIndexX = Math.floor(z/this.TILESIZE);

		if (x > 0 || x < this.map_width || z > 0 || z < this.map_height){
			if (groundfloor){
				return this.grid_floor0[mapGridIndexX][mapGridIndexZ]
			} else{
				return this.grid_floor1[mapGridIndexX][mapGridIndexZ]
			}
		}

	}
	

	// makeCeiling(isWall,scene,floor_number,floor_height,floor_width,row,column){
		
					
	// 	const loader = new THREE.TextureLoader();
	// 	const linoleum = loader.load('assets/linoleum.jpg');
	// 	const ceiling = loader.load('assets/ceiling.jpg');

					
	// 				// kig OGSÅ ned i array
					
					
	// 				// lav oevre etage gulv
					
					
	// 				if(isWall === true){
	// 					/*
	// 					var mesh_floor = new THREE.Mesh(geometry_floor,material_floor);
	// 					mesh_floor.position.x = column*this.TILESIZE + 0.5*this.TILESIZE*floor_width; 
	// 					mesh_floor.position.y = 6*this.TILESIZE -1 + floor_number* 3.5;
	// 					mesh_floor.position.z = row*this.TILESIZE + 0.5*this.TILESIZE * floor_height;
	// 					scene.add(mesh_floor);
	// 				*/
	// 				var geometry_floor = new THREE.BoxGeometry(floor_width*this.TILESIZE, this.TILESIZE, floor_height*this.TILESIZE);
	// 				var geometry_roof = new THREE.BoxGeometry(floor_width*this.TILESIZE, this.TILESIZE, floor_height*this.TILESIZE);
					
	// 				linoleum.wrapS = THREE.RepeatWrapping;
	// 				linoleum.wrapT = THREE.RepeatWrapping;
	// 				//linoleum.repeat.set(5,5);
	// 				linoleum.repeat.set(floor_width,floor_height);
	// 				var material_floor = new THREE.MeshStandardMaterial({map: linoleum});

	// 				ceiling.wrapS = THREE.RepeatWrapping;
	// 				ceiling.wrapT = THREE.RepeatWrapping;
	// 				ceiling.repeat.set(floor_width,floor_height);
	// 					var material_roof = new THREE.MeshStandardMaterial({ map: ceiling});
	// 					var mesh_roof = new THREE.Mesh(geometry_roof,material_roof);
	// 					mesh_roof.position.x = column*this.TILESIZE + 0.5*this.TILESIZE*floor_width; 
	// 					mesh_roof.position.y = 5*this.TILESIZE -1 + floor_number* 3.5;
	// 					mesh_roof.position.z = row*this.TILESIZE + 0.5*this.TILESIZE * floor_height;
	// 					scene.add(mesh_roof);
					
	// 				//if(floor_number == 0){
	// 					// lav gulv
	// 					var mesh_floor2 = new THREE.Mesh(geometry_floor,material_floor);
	// 					mesh_floor2.position.x = column*this.TILESIZE + 0.5*this.TILESIZE*floor_width; 
	// 					mesh_floor2.position.y = -1.5 + floor_number*3.5;
	// 					mesh_floor2.position.z = row*this.TILESIZE + 0.5*this.TILESIZE * floor_height;
	// 					scene.add(mesh_floor2);
	// 			}
					

	// 				/*// lav loft
	// 				var geometry_roof = new THREE.BoxGeometry(floor_width*this.TILESIZE, this.TILESIZE, floor_height*this.TILESIZE);
	// 				ceiling.wrapS = THREE.RepeatWrapping;
	// 				ceiling.wrapT = THREE.RepeatWrapping;
	// 				ceiling.repeat.set(floor_width,floor_height);
	// 				//ceiling.repeat.set(1,1);
	// 				*/
					
	// 				//}
	// }
	
	arr_to_floor(scene,grid_floor,floor_number){
		// floor 0
		let makeRoom = new MakeRoom(this.TILESIZE);
		const loader = new THREE.TextureLoader();
		const heightMap = loader.load('assets/Textures/noise.jpg');
		const linoleum = loader.load('assets/Textures/linoleum.jpg');
		const ceiling = loader.load('assets/Textures/ceiling.jpg');
		const wall = loader.load('assets/Textures/wall.png');
		const windowwall = loader.load('assets/Textures/windowwall.png');
		
		
		// kopier array.
		let array_temp = [];
		for (let row = 0; row < grid_floor.length; row++){
			let rowarr = []
			for (let column = 0; column < grid_floor[row].length; column++){
				let item = grid_floor[row][column];
				rowarr.push(item);
			}
			array_temp.push(rowarr);
		}

		for (let row = 0; row < array_temp.length; row++){
			// så den kun skal findes en gang
			let col_length = array_temp.length
			for (let column = 0; column < array_temp[row].length; column++){
				// så den kun skal findes en gang per kolone
				let row_length = array_temp[row].length;
				// deklareret her af hensyn til scope:
				let wall_height, wall_width, floor_height,floor_width;	
				
				let tempX = (column*this.TILESIZE + 0.5*this.TILESIZE);
				let tempY = (-2.5*this.TILESIZE);
				let tempZ = (row*this.TILESIZE + 0.5*this.TILESIZE);
				var roomStartPosition = [column,row];
		
				switch(array_temp[row][column]){
				case "X":
					// elementet er behandlet
					break;
				case " ":
					// her kunne man godt have indlæsning af gulv
					
					/*floor_height = 1;
					floor_width = 1;
					
					floor_width = this.get_floor_width(array_temp,row_length, col_length, row,column,"1");
					// kig OGSÅ ned i array
					
					// lav gulv
					var geometry_floor = new THREE.BoxGeometry(floor_width*this.TILESIZE, this.TILESIZE, floor_height*this.TILESIZE);

					linoleum.wrapS = THREE.RepeatWrapping;
					linoleum.wrapT = THREE.RepeatWrapping;
					//linoleum.repeat.set(5,5);
					linoleum.repeat.set(floor_width,floor_height);
					var material_floor = new THREE.MeshStandardMaterial({map: linoleum});
					var mesh_floor = new THREE.Mesh(geometry_floor,material_floor);
					mesh_floor.position.x = column*this.TILESIZE + 0.5*this.TILESIZE*floor_width; 
					mesh_floor.position.y = -1.5 + floor_number*3.5;
					mesh_floor.position.z = row*this.TILESIZE + 0.5*this.TILESIZE * floor_height;
					scene.add(mesh_floor);

					// lav loft
					var geometry_roof = new THREE.BoxGeometry(floor_width*this.TILESIZE, this.TILESIZE, floor_height*this.TILESIZE);
					ceiling.wrapS = THREE.RepeatWrapping;
					ceiling.wrapT = THREE.RepeatWrapping;
					ceiling.repeat.set(floor_width,floor_height);
					//ceiling.repeat.set(1,1);

					var material_roof = new THREE.MeshStandardMaterial({ map: ceiling});
					var mesh_roof = new THREE.Mesh(geometry_roof,material_roof);
					mesh_roof.position.x = column*this.TILESIZE + 0.5*this.TILESIZE*floor_width; 
					mesh_roof.position.y = 5*this.TILESIZE -1 + floor_number* 3.5;
					mesh_roof.position.z = row*this.TILESIZE + 0.5*this.TILESIZE * floor_height;
					scene.add(mesh_roof);
					*/
					break;
				case "0":
					// huller i gulvet
					/*
					floor_height = 1;
					floor_width = 1;
					
					floor_width = this.get_floor_width(array_temp,row_length, col_length, row,column,"1");
					// kig OGSÅ ned i array
					
					
					if (floor_number == 0){
						// lav gulv
						var geometry_floor = new THREE.BoxGeometry(floor_width*this.TILESIZE, this.TILESIZE, floor_height*this.TILESIZE);

						linoleum.wrapS = THREE.RepeatWrapping;
						linoleum.wrapT = THREE.RepeatWrapping;
						//linoleum.repeat.set(5,5);
						linoleum.repeat.set(floor_width,floor_height);
						var material_floor = new THREE.MeshStandardMaterial({map: linoleum});
						var mesh_floor = new THREE.Mesh(geometry_floor,material_floor);
						mesh_floor.position.x = column*this.TILESIZE + 0.5*this.TILESIZE*floor_width; 
						mesh_floor.position.y = -1.5 + floor_number*3.5;
						mesh_floor.position.z = row*this.TILESIZE + 0.5*this.TILESIZE * floor_height;
						scene.add(mesh_floor);
					} else{
					// lav loft
					var geometry_roof = new THREE.BoxGeometry(floor_width*this.TILESIZE, this.TILESIZE, floor_height*this.TILESIZE);
					ceiling.wrapS = THREE.RepeatWrapping;
					ceiling.wrapT = THREE.RepeatWrapping;
					ceiling.repeat.set(floor_width,floor_height);
					//ceiling.repeat.set(1,1);

					var material_roof = new THREE.MeshStandardMaterial({ map: ceiling});
					var mesh_roof = new THREE.Mesh(geometry_roof,material_roof);
					mesh_roof.position.x = column*this.TILESIZE + 0.5*this.TILESIZE*floor_width; 
					mesh_roof.position.y = 5*this.TILESIZE -1 + floor_number* 3.5;
					mesh_roof.position.z = row*this.TILESIZE + 0.5*this.TILESIZE * floor_height;
					scene.add(mesh_roof);
					}*/
					break;
				case "1":
					// marker det første felt som læst
					array_temp[row][column] = "X";

					wall_height = 1;
					wall_width = 1;
					
					floor_height = 1;
					floor_width = 1;
					//floor_width = 1;
					// tjek om der er en lignende væg nedenunder eller til højre
					var isWall = false;
					wall_height = this.get_wall_height(array_temp,row_length, col_length, row,column,"1");
					floor_height = wall_height
					if (wall_height == 1){
						wall_width = this.get_wall_width(array_temp,row_length, col_length,row,column,"1");
						floor_width = wall_width
						
					}

					
				
					var geometry = new THREE.BoxGeometry(wall_width * this.TILESIZE,this.TILESIZE*6,wall_height * this.TILESIZE);
					var material = new THREE.MeshStandardMaterial({ map: wall});
					var mesh = new THREE.Mesh(geometry,material);
					mesh.position.x = column*this.TILESIZE + 0.5*this.TILESIZE*wall_width; 
					mesh.position.y = floor_number*3.5;
					mesh.position.z = row*this.TILESIZE + 0.5*this.TILESIZE * wall_height;
					this.floor0_walls.add(mesh);
					scene.add(mesh);

					linoleum.wrapS = THREE.RepeatWrapping;
					linoleum.wrapT = THREE.RepeatWrapping;
					//linoleum.repeat.set(5,5);
					linoleum.repeat.set(wall_width,wall_height);
					var geometry_floor = new THREE.BoxGeometry(wall_width * this.TILESIZE,this.TILESIZE*1,wall_height * this.TILESIZE);
					var material_floor = new THREE.MeshStandardMaterial({map: wall});
					var mesh_floor = new THREE.Mesh(geometry_floor,material_floor);
					mesh_floor.position.x = column*this.TILESIZE + 0.5*this.TILESIZE*floor_width; 
					mesh_floor.position.y = -1.5 + floor_number*3.25;
					mesh_floor.position.z = row*this.TILESIZE + 0.5*this.TILESIZE * floor_height;
					scene.add(mesh_floor);
					

					////this.makeCeiling(floor_width, row,column)
					break;
				case "5":
					// her kunne man godt have indlæsning af gulv
					
					floor_height = 1;
					floor_width = 1;
					
					// kig OGSÅ ned i array
					
					// lav gulv
					var geometry_floor = new THREE.BoxGeometry(floor_width*this.TILESIZE+0.5*this.TILESIZE, this.TILESIZE, floor_height*this.TILESIZE);

					linoleum.wrapS = THREE.RepeatWrapping;
					linoleum.wrapT = THREE.RepeatWrapping;
					//linoleum.repeat.set(5,5);
					linoleum.repeat.set(floor_width,floor_height);
					var material_floor = new THREE.MeshStandardMaterial({map: linoleum});
					var mesh_floor = new THREE.Mesh(geometry_floor,material_floor);
					mesh_floor.position.x = column*this.TILESIZE +0.25*this.TILESIZE*floor_width; 
					mesh_floor.position.y = -1.5 + floor_number*3.5;
					mesh_floor.position.z = row*this.TILESIZE + 0.5*this.TILESIZE * floor_height;
					scene.add(mesh_floor);

					// lav loft
					var geometry_roof = new THREE.BoxGeometry(floor_width*this.TILESIZE+0.5*this.TILESIZE, this.TILESIZE, floor_height*this.TILESIZE);
					ceiling.wrapS = THREE.RepeatWrapping;
					ceiling.wrapT = THREE.RepeatWrapping;
					ceiling.repeat.set(floor_width,floor_height);
					//ceiling.repeat.set(1,1);

					var material_roof = new THREE.MeshStandardMaterial({ map: ceiling});
					var mesh_roof = new THREE.Mesh(geometry_roof,material_roof);
					mesh_roof.position.x = column*this.TILESIZE +0.25*this.TILESIZE*floor_width; 
					mesh_roof.position.y = 5*this.TILESIZE -1 + floor_number* 3.5;
					mesh_roof.position.z = row*this.TILESIZE + 0.5*this.TILESIZE * floor_height;
					scene.add(mesh_roof);
					
					break;
				case "2":
					// væg med vinduer, kan kun vende en vej pt.
					array_temp[row][column] = "X";

					wall_height = 1;
					wall_width = 1;
					// tjek om der er en lignende væg nedenunder eller til højre
					
					wall_height = this.get_wall_height(array_temp,row_length, col_length, row,column,"2");
					
					if (wall_height == 1){
						wall_width = this.get_wall_width(array_temp,row_length, col_length,row,column,"2");
					}
				
					var geometry = new THREE.BoxGeometry(wall_width * this.TILESIZE,this.TILESIZE*2,wall_height*this.TILESIZE);
					var material = new THREE.MeshStandardMaterial({  map: windowwall});
					var mesh = new THREE.Mesh(geometry,material);
					mesh.position.x = column*this.TILESIZE + 0.5*this.TILESIZE*wall_width; 
					mesh.position.y = floor_number*this.TILESIZE*5.5 -0.5*this.TILESIZE;
					mesh.position.z = row*this.TILESIZE + 0.5*this.TILESIZE*wall_height;
					scene.add(mesh);

					var geometryw = new THREE.BoxGeometry(this.TILESIZE*wall_width,this.TILESIZE*4,this.TILESIZE/32);
					var materialw = new THREE.MeshPhysicalMaterial({ map: windowwall});
					materialw.transparent = true;
					materialw.opacity = 0.2;
					var meshw = new THREE.Mesh(geometryw,materialw);
					meshw.position.x = column*this.TILESIZE + 0.5*this.TILESIZE*wall_width; 
					meshw.position.y = floor_number*this.TILESIZE*6.5 + this.TILESIZE;
					meshw.position.z = row*this.TILESIZE + 0.5*this.TILESIZE*wall_height;
					scene.add(meshw);

					linoleum.wrapS = THREE.RepeatWrapping;
					linoleum.wrapT = THREE.RepeatWrapping;
					//linoleum.repeat.set(5,5);
					linoleum.repeat.set(wall_width,wall_height);
					var geometry_floor = new THREE.BoxGeometry(wall_width * this.TILESIZE,this.TILESIZE*1,wall_height * this.TILESIZE);
					var material_floor = new THREE.MeshStandardMaterial({map: linoleum});
					var mesh_floor = new THREE.Mesh(geometry_floor,material_floor);
					mesh_floor.position.x = column*this.TILESIZE + 0.5*this.TILESIZE*wall_width; 
					mesh_floor.position.y = -1.5 + floor_number*3.25;
					mesh_floor.position.z = row*this.TILESIZE + 0.5*this.TILESIZE * wall_height;
					scene.add(mesh_floor);
					break;
				case "3":
					//makeRoom.make_Model('./assets/Models/Stair1V1.gltf',18, scene,tempX,tempY,tempZ,0)
					break;
				case "4":
					//makeRoom.make_Model('./assets/Models/Stair2V1.gltf',18, scene,tempX,tempY,tempZ,-90)
					break;
				case "L":
					var light3 = new THREE.PointLight(0xFFFFDD,1,8,2);
					light3.position.set(column*this.TILESIZE, 0.25 + floor_number*this.TILESIZE*7 ,row*this.TILESIZE + 0.5*this.TILESIZE);
					scene.add(light3);
					
					//helper
					/*
					const sphereSize = 1;
					const pointLightHelper = new THREE.PointLightHelper( light3, sphereSize );
					scene.add( pointLightHelper );
					*/
					break;
				case "a": // Forkert moeblering, skal laves om til printerrum
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_a',0,' ',' ')
					break;
				case "b":
					makeRoom.Make_Room(roomStartPosition, scene,1,'Room_b',0,'NetvaerkLab',' ')
					break;
				case "c":
					makeRoom.Make_Room(roomStartPosition, scene,1,'Room_c',0,'RobotLab',' ')
					break;
				case "d":
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_d',0,'Elev-kontor',' ')
					break;
				case "e":
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_e',0,'Elev-kontor',' ')
					break;
				case "f":
					makeRoom.Make_Room(roomStartPosition, scene,1,'Room_f',0,'Server',' ')
					break;
				case "g":
					makeRoom.Make_Room(roomStartPosition, scene,1,'Room_g',0,'Helpdesk',' ')
					break;
				case "h":
					makeRoom.Make_Room(roomStartPosition, scene,1,'Room_h',0,'Drift',' ')
					break;
				case "i":
					makeRoom.Make_Room(roomStartPosition, scene,1,'Room_i',0,'Vaerksted',' ')
					break;
				case "j":
					makeRoom.Make_Room(roomStartPosition, scene,1,'Room_j',0,'VR-lab',' ')
					break;
				case "k": // Mangler modeller
					makeRoom.Make_Room(roomStartPosition, scene,1,'Room_k',0,'Mødelokale 2',' ')
					break;
				case "n": // Mangler modeller
					makeRoom.Make_Room(roomStartPosition, scene,1,'Room_n',0,'Mødelokale 1',' ')
					break;
				case "m":
					makeRoom.Make_Room(roomStartPosition, scene,1,'Room_m',0,'RobotLab',' ')
					break;
				case "o":
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_o',0,'',' ')
					break;
				case "p":
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_p',0,'',' ')
					break;
				case "q":
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_q',0,'',' ')
					break;
				case "r":
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_r',0,'',' ')
					break;
				case "s": // mangler indretning, skal vaere uden loft
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_s',0,'',' ')
					break;
				case "t": // Mangler modeller, skal vaere uden loft
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_t',0,'',' ')
					break;
				case "u": // Mangler indretning
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_u',0,'',' ')
					break;
				case "A":
					makeRoom.Make_Room(roomStartPosition, scene,2,'Room_A1',1,'',' ')
					break;
				case "B": // MANGLER OPDATERING TIL INDRETNING
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_B1',1,'',' ')
					break;
				case "C": // MANGLER OPDATERING TIL INDRETNING
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_C1',1,'',' ')
					break;
				case "D": // MANGLER OPDATERING TIL INDRETNING
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_D1',1,'',' ')
					break;
				case "E": // MANGLER OPDATERING TIL INDRETNING
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_E1',1,'',' ')
					break;
				case "F": // MANGLER OPDATERING TIL INDRETNING
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_F1',1,'',' ')
					break;
				case "G": // MANGLER OPDATERING TIL INDRETNING
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_G1',1,'',' ')
					break;
				case "H": // MANGLER OPDATERING TIL INDRETNING
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_H1',1,'',' ')
					break;
				case "I": // MANGLER OPDATERING TIL INDRETNING
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_I1',1,'',' ')
					break;
				case "J": // MANGLER OPDATERING TIL INDRETNING
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_J1',1,'',' ')
					break;
				case "K": // MANGLER OPDATERING TIL INDRETNING
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_K1',1,'',' ')
					break;
				case "M": // MANGLER OPDATERING TIL INDRETNING
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_M1',1,'',' ')
					break;
				case "N": // MANGLER OPDATERING TIL INDRETNING
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_N1',1,'',' ')
					break;
				case "O": // MANGLER OPDATERING TIL INDRETNING
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_O1',1,'',' ')
					break;
				case "P": // MANGLER OPDATERING TIL INDRETNING
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_P1',1,'',' ')
					break;
				case "Q": // MANGLER OPDATERING TIL INDRETNING
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_Q1',1,'',' ')
					break;
				case "R":
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_R1',1,'',' ')
					break;
				case "S":
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_S1',1,'',' ')
					break;
				case "T":
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_T1',1,'',' ')
					break;
				case "U": // MANGLER OPDATERING TIL INDRETNING
					makeRoom.Make_Room(roomStartPosition, scene,0,'Room_U1',1,'',' ')
					break;
				}
			}
		}
	}
	get_wall_width(array_temp,row_length,col_length,row,column,key){
		let wall_width = 1;
										
		// kig mod højre
		if ((column+1 < row_length) && (array_temp[row][column+1] == key)){
		// tjek til højre indtil, der ikke længere er samme væg
			while ((column+wall_width < row_length) && (array_temp[row][column+wall_width] == key)){
				array_temp[row][column+wall_width] = "X";
				wall_width++;
			}
		}
		return wall_width;
	}
	get_wall_height(array_temp,row_length,col_length, row,column,key){
		let wall_height = 1;

		if ((row+1 < col_length) && (array_temp[row+1][column] == "1")){
		// tjek ned indtil, der ikke længere er samme væg
			while ((row+wall_height < col_length) && (array_temp[row+wall_height][column] == key)){

				// følgende er for at få de vandrette vægge til at være de primære. Det ser pænere ud.
				// der er vist vægge der overlapper pga. dette
				// det kan gøres endnu smartere fx hvis der er vægge ved siden af hinanden eller krydser.
		
				// kig til siderne
				if ((column+1 >= row_length) && (array_temp[row+wall_height][column+1]) != key){
					if ((column-1 <= 0) && (array_temp[row+wall_height][column-1] != key)){
						array_temp[row+wall_height][column] = "X";
						wall_height++;
					} 
				}else{
					wall_height++;
					// er ikke så vild med break, så det er en midlertidig løsning
					return wall_height;
					break;	
				}
			}
		}
		return wall_height;
	}
	get_floor_width(array_temp,row_length,col_length,row,column,key){
	let floor_width = 1;
		// kig mod højre i array
		if ((column+1 < row_length) && (array_temp[row][column+1] == " ")){
		// tjek til højre indtil, der ikke længere er samme væg
			while ((column+floor_width < row_length) && (array_temp[row][column+floor_width] == " ")){
				array_temp[row][column+floor_width] = "X";
				floor_width++;
			}
		}
		return floor_width;
	}

	get_floor_height(array_temp,row_length,col_length, row,column,key){
/*
		//mangler 

			if ((row+1 < col_length) && (array_temp[row+1][column] != "1")){
				// tjek ned indtil, der ikke længere er samme væg
						while ((row+floor_height < col_length) && (array_temp[row+floor_height][column] != "1")){
							// men tjek at hver linje er så lang som floor_width fundet op over.
							let floor_check = 0;
							while ((column+floor_check < row_length) && (array_temp[row+floor_height][column+floor_check] != "1")){
								//array_temp[row+floor_height][column+floor_check] = "X";
								floor_check++;
							}
							if (floor_check == floor_width){
								floor_height++;								
							}
						}
					}
*/
	}

	generate(scene){

		//indlæs levelfiler
		this.grid_floor0 = this.load_txt_file('assets/Rooms/floor0.txt');
		this.grid_floor1 = this.load_txt_file('assets/Rooms/floor1.txt');

		//console.log(this.grid_floor0);

		// load textures
		const loader = new THREE.TextureLoader();
		const heightMap = loader.load('assets/Textures/noise.jpg');
		const linoleum = loader.load('assets/Textures/linoleum.jpg');
		const ceiling = loader.load('assets/Textures/ceiling.jpg');
		const wall = loader.load('assets/Textures/wall.png');
		const windowwall = loader.load('assets/Textures/windowwall.png');
		
		this.arr_to_floor(scene,this.grid_floor0,0);
		this.arr_to_floor(scene,this.grid_floor1,1);

		// grass
		var geometryg = new THREE.PlaneBufferGeometry(this.map_width*2,this.map_height*2,32,32);			//(this.map_width,1,this.map_height);
		var materialg = new THREE.MeshStandardMaterial({color: 0x00DD44, map: heightMap, displacementMap: heightMap,displacementScale: 2});
		var meshg = new THREE.Mesh(geometryg,materialg);
		meshg.rotation.x = -Math.PI/2;
		meshg.position.x = this.TILESIZE * this.map_width/2; 
		meshg.position.y = -4;
		meshg.position.z = this.TILESIZE *  this.map_height/2;
		scene.add(meshg);

		const alight = new THREE.AmbientLight( 0x404040 ); // soft white light
		alight.intensity = 0.4;
		scene.add( alight );
		
		let modelLoader = new THREE.GLTFLoader();
		let Mesh;
	
		// himmel: Giver fejlbesked når den ikke ligger i hovedscriptet, men virker
		//const loader = new THREE.TextureLoader();
		const bg = loader.load(
		'assets/Textures/sky.jpg',
		() => {
		const rt = new THREE.WebGLCubeRenderTarget(bg.image.height);
		rt.fromEquirectangularTexture(screen.renderer,bg);
		rt.fromEquirectangularTexture(screen.renderer2,bg);
		scene.background = rt.texture;
		});
	}
}
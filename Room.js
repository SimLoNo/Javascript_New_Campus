export default class Room{
	constructor(tile){
		this.TILESIZE = tile;

        // Array til at gemme texture, til at bruge på modeller.
        this.textures1 = [
            './assets/ComputerTextureV9Small.png',
            './assets/ChairV1.png',
            './assets/12.jpg',
            './assets/13.jpg',
            './assets/BagChairBlank.png',
            './assets/BDSpotV1.png',
            './assets/CouchV1.png',
            './assets/DarkPlastic.jpg',
            './assets/KitchendeskV2.png',
            './assets/ServerRack.png',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
        ]

        
        
    }
    
    load_txt_file(file_name){
		// indlæser data fra txt.fil og returnerer et 2dimensionelt array med de enkelte karakterer
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

    
    // Metode der bliver kaldt, til at indsætte modeller i banen.
    make_Model(model,textureNumber,scene,tempX,tempY,tempZ,direction){
        let modelLoader = new THREE.GLTFLoader();
        let loader = new THREE.TextureLoader();
        var texture = loader.load(this.textures1[textureNumber])
        texture.flipY = false;
        modelLoader.load(model, function(gltf){
            var mesh;
            mesh = gltf.scene;
            mesh.scale.set(1,1,1);
            // Tildeler textur til modellen.
            mesh.traverse ( ( o ) => {
                if ( o.isMesh ) {
                  o.material.map = texture
                }
                
            });
            scene.add(mesh);
            mesh.position.x = tempX;
            mesh.position.y = tempY;
            mesh.position.z = tempZ;
            mesh.rotation.y = direction * Math.PI / 180

            })
    }
    
    Room_a(startPosition, scene){
        let modelLoader = new THREE.GLTFLoader();
        var roomId = 'Room_a'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                // gemmer placeringsposition i variabler, til at give modellerne deres position
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case '1':
                        this.make_Model('./assets/PCDeskV5Blank.gltf',0, scene,tempX,tempY,tempZ,0)
                        break;
                    case '2':
                        this.make_Model('./assets/PCDeskV5Blank.gltf',0, scene,tempX,tempY,tempZ,0)
                        break;
                    case '3':
                        break;
                    case '4':
                        this.make_Model('./assets/ChairBlank.gltf',1, scene,tempX,tempY,tempZ,180)
                        break;
                    case '5': // Mangler modelerstatning.
                        modelLoader.load('./assets/ClosetV1.gltf', function(gltf){
						
						
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        mesh.rotation.y = 180 * Math.PI / 180
                        })
                        break;
                    case '6': // Mangler modelerstatning.
                        modelLoader.load('./assets/BookcaseV1.gltf', function(gltf){
						
						
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        mesh.rotation.y = 180 * Math.PI / 180
                        })
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }
    
    Room_b(startPosition, scene){
        let modelLoader = new THREE.GLTFLoader();
        var roomId = "Room_b"; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                    // gemmer placeringsposition i variabler, til at give modellerne deres position
                    let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
					let tempY = (-2.5*this.TILESIZE);
                    let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case '1':
                        this.make_Model('./assets/CiscoRackBlank.gltf',9, scene,tempX,tempY,tempZ,0)
                        break;
                    case '2': // Mangler texturerstatning.
                        modelLoader.load('./assets/PCDeskV5PacketTracer.gltf', function(gltf){
						
						
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        })
                        break;

                    case '3':
                        this.make_Model('./assets/CiscoRackBlank.gltf',9, scene,tempX,tempY,tempZ,180)
                        break;

                    case '4': // Mangler texturerstatning.
                        modelLoader.load('./assets/PCDeskV5PacketTracer.gltf', function(gltf){
						
						
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        mesh.rotation.y = -90 * Math.PI / 180
                        })
                        break;

                    case '5': //Mangler modelerstatning og texturerstatning.
                        modelLoader.load('./assets/DeskWorkSize2V1Switch.gltf', function(gltf){
						
						
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        })
                        break;

                    case '6': // Mangler texturerstatning.
                        modelLoader.load('./assets/PCDeskV5PacketTracer.gltf', function(gltf){
						
						
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        mesh.rotation.y = 180 * Math.PI / 180
                        })
                        break;
                    case '7':
                        this.make_Model('./assets/ChairBlank.gltf',1, scene,tempX,tempY,tempZ,180)
                        break;
                    case '8': // Mangler modelerstatning og texturerstatning.
                        modelLoader.load('./assets/PrinterV2.gltf', function(gltf){
						
						
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        })
                        break;
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_c(startPosition, scene){
        var roomId = "Room_c"; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                    // gemmer placeringsposition i variabler, til at give modellerne deres position
                    let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
					let tempY = (-2.5*this.TILESIZE);
                    let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                        this.make_Model('./assets/PCDeskV5Blank.gltf',0, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'A':
                        this.make_Model('./assets/PCDeskV5Blank.gltf',0, scene,tempX,tempY,tempZ,180)
                        break;

                    case 'b':
                        this.make_Model('./assets/PCDeskV5Blank.gltf',0, scene,tempX,tempY,tempZ,90)
                        break;

                    case 'B':
                        this.make_Model('./assets/PCDeskV5Blank.gltf',0, scene,tempX,tempY,tempZ,-90)
                        break;

                    case 'c':
                        this.make_Model('./assets/BDSpotBlank.gltf',5, scene,tempX,tempY,tempZ,0)
                        break;

                    case 'C':
                        this.make_Model('./assets/BDSpotBlank.gltf',5, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'd':
                        this.make_Model('./assets/BDSpotBlank.gltf',5, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'D':
                        this.make_Model('./assets/BDSpotBlank.gltf',5, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'e':
                        this.make_Model('./assets/ChairBlank.gltf',1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'E':
                        this.make_Model('./assets/ChairBlank.gltf',1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'f':
                        this.make_Model('./assets/ChairBlank.gltf',1, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'F':
                        this.make_Model('./assets/ChairBlank.gltf',1, scene,tempX,tempY,tempZ,-90)
                        break;
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_d(startPosition, scene){
        let modelLoader = new THREE.GLTFLoader();
        var roomId = 'Room_d'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt');  // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                // gemmer placeringsposition i variabler, til at give modellerne deres position
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                        this.make_Model('./assets/PCDeskV5Blank.gltf',0, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'A':
                    this.make_Model('./assets/PCDeskV5Blank.gltf',0, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                    this.make_Model('./assets/PCDeskV5Blank.gltf',0, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'B':
                    this.make_Model('./assets/PCDeskV5Blank.gltf',0, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'c': // Mangler texturerstatning
                    modelLoader.load('./assets/PCDeskV5WoW.gltf', function(gltf){
						var mesh;
						mesh = gltf.scene;
						mesh.scale.set(1,1,1);
						scene.add(mesh);
						mesh.position.x = tempX;
						mesh.position.y = tempY;
						mesh.position.z = tempZ;

                        })
                        break;
                    case 'C': // Mangler texturerstatning
                    modelLoader.load('./assets/PCDeskV5WoW.gltf', function(gltf){
						var mesh;
						mesh = gltf.scene;
						mesh.scale.set(1,1,1);
						scene.add(mesh);
						mesh.position.x = tempX;
						mesh.position.y = tempY;
						mesh.position.z = tempZ;
                        mesh.rotation.y = 180 * Math.PI / 180
                        })
                        break;
                    case 'd': // Mangler texturerstatning
                    modelLoader.load('./assets/PCDeskV5WoW.gltf', function(gltf){
						var mesh;
						mesh = gltf.scene;
						mesh.scale.set(1,1,1);
						scene.add(mesh);
						mesh.position.x = tempX;
						mesh.position.y = tempY;
						mesh.position.z = tempZ;
                        mesh.rotation.y = 90 * Math.PI / 180
                        })
                        break;
                    case 'D': // Mangler texturerstatning
                    modelLoader.load('./assets/PCDeskV5WoW.gltf', function(gltf){
						var mesh;
						mesh = gltf.scene;
						mesh.scale.set(1,1,1);
						scene.add(mesh);
						mesh.position.x = tempX;
						mesh.position.y = tempY;
						mesh.position.z = tempZ;
                        mesh.rotation.y = -90 * Math.PI / 180
                        })
                        break;
                    case 'e':
                        this.make_Model('./assets/ChairBlank.gltf',1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'E':
                        this.make_Model('./assets/ChairBlank.gltf',1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'f':
                        this.make_Model('./assets/ChairBlank.gltf',1, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'F':
                        this.make_Model('./assets/ChairBlank.gltf',1, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'g': // Mangler modelerstatning og texturerstatning.
                        modelLoader.load('./assets/ClosetV1.gltf', function(gltf){
						
						
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        mesh.rotation.y = 180 * Math.PI / 180
                        })
                        break;
                    case 'h': // Mangler modelerstatning og texturerstatning.
                        modelLoader.load('./assets/BookcaseV1.gltf', function(gltf){
						
						
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        mesh.rotation.y = 180 * Math.PI / 180
                        })
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_e(startPosition, scene){
        let modelLoader = new THREE.GLTFLoader();
        var roomId = 'Room_e'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                // gemmer placeringsposition i variabler, til at give modellerne deres position
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                        this.make_Model('./assets/PCDeskV5Blank.gltf',0, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'A':
                        this.make_Model('./assets/PCDeskV5Blank.gltf',0, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                        this.make_Model('./assets/PCDeskV5Blank.gltf',0, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'B':
                        this.make_Model('./assets/PCDeskV5Blank.gltf',0, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'c': // Mangler texturerstatning.
                        modelLoader.load('./assets/PCDeskV5WoW.gltf', function(gltf){
						var mesh;
						mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
						scene.add(mesh);
						mesh.position.x = tempX;
						mesh.position.y = tempY;
						mesh.position.z = tempZ;

                        })
                        break;
                    case 'C': // Mangler texturerstatning.
                        modelLoader.load('./assets/PCDeskV5WoW.gltf', function(gltf){
						var mesh;
						mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
						scene.add(mesh);
						mesh.position.x = tempX;
						mesh.position.y = tempY;
						mesh.position.z = tempZ;
                        mesh.rotation.y = 180 * Math.PI / 180
                        })
                        break;
                    case 'd': // Mangler texturerstatning.
                        modelLoader.load('./assets/PCDeskV5WoW.gltf', function(gltf){
						var mesh;
						mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
						scene.add(mesh);
						mesh.position.x = tempX;
						mesh.position.y = tempY;
						mesh.position.z = tempZ;
                        mesh.rotation.y = 90 * Math.PI / 180
                        })
                        break;
                    case 'D': // Mangler texturerstatning.
                        modelLoader.load('./assets/PCDeskV5WoW.gltf', function(gltf){
						var mesh;
						mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
						scene.add(mesh);
						mesh.position.x = tempX;
						mesh.position.y = tempY;
						mesh.position.z = tempZ;
                        mesh.rotation.y = -90 * Math.PI / 180
                        })
                        break;
                    case 'e':
                        this.make_Model('./assets/ChairBlank.gltf',1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'E':
                        this.make_Model('./assets/ChairBlank.gltf',1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'f':
                        this.make_Model('./assets/ChairBlank.gltf',1, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'F':
                        this.make_Model('./assets/ChairBlank.gltf',1, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'g': // Mangler modelerstatning og texturerstatning.
                        modelLoader.load('./assets/ClosetV1.gltf', function(gltf){
						
						
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        mesh.rotation.y = -90 * Math.PI / 180
                        })
                        break;
                    case 'h': // Mangler modelerstatning og texturerstatning.
                        modelLoader.load('./assets/BookcaseV1.gltf', function(gltf){
						
						
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        mesh.rotation.y = -90 * Math.PI / 180
                        })
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }
}
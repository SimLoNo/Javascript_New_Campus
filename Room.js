export default class Room{
	constructor(tile){
		this.TILESIZE = tile;

        // Array til at gemme texture, til at bruge på modeller.
        this.textureArray = [
            './assets/ComputerTextureV10Code.png',
            './assets/ChairV2.png',
            './assets/BagchairV2.png',
            './assets/BDSpotV2.png',
            './assets/CouchV2.png',
            './assets/DarkPlastic.jpg',
            './assets/KitchendeskV3.png',
            './assets/ServerRackV2.png',
            './assets/CouchV2.png',
            './assets/VRStand.png',
            './assets/ComputerTextureV10Gaming.png',
            './assets/ComputerTextureV10InfoStand.png',
            './assets/ComputerTextureV10PacketTracer.png',
            './assets/ComputerTextureV10Unity.png',
            './assets/ComputerTextureV10VR.png',
            './assets/PCDeskV3.png',
            './assets/Refrigerator.png',
            './assets/VRStand.png',
            './assets/Cardboard.png',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
        ]

        this.modelArray = [
            './assets/BDSpotV2Blank.gltf',
            './assets/BagchairV1Blank.gltf',
            './assets/BookcaseV1Blank.gltf',
            './assets/ChairBlank.gltf',
            './assets/CiscoRackBlank.gltf',
            './assets/ClosetV1Blank.gltf',
            './assets/DeskWorkSize2V1PCBlank.gltf',
            './assets/DeskWorkSize2V1SwitchBlank.gltf',
            './assets/FridgeV4Blank.gltf',
            './assets/InfoStandV1Blank.gltf',
            './assets/KitchenDeskV2BaseBlank.gltf',
            './assets/PCDeskV5Blank.gltf',
            './assets/PrinterV1Blank.gltf',
            './assets/VRStandV1Blank.gltf',
            './assets/Cardboxes.gltf',
            './assets/Couch2V1Blank.gltf',
            './assets/CanteenTableV1.gltf',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
            './assets/',
            './assets/'
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
		make_Text(scene,roomName, x, z){
		// metoden her kan optimeres
		// den skal også tage parameter med etage
		const fontLoader = new THREE.FontLoader();
		fontLoader.load('./assets/fonts/helvetiker_regular.typeface.json', function(font){
			const color = 0xFF1111;
			const matDark = new THREE.LineBasicMaterial({color: color, side: THREE.DoubleSide});
			const matLite = new THREE.MeshBasicMaterial({color: color, transparent: false, opacity: 1, side: THREE.DoubleSide});
		
			const shapes = font.generateShapes(roomName, 0.5);
			const geometry = new THREE.ShapeGeometry(shapes);
			geometry.computeBoundingBox();
		
			const xMid = -0.5*(geometry.boundingBox.max.x - geometry.boundingBox.min.x);
		
			geometry.translate(xMid,0,0);
		
			const text = new THREE.Mesh(geometry, matLite);
			text.position.set(x,0.25,z);
			text.rotation.x = -Math.PI/2
			scene.add(text);
			
			console.log("tekst er tilføjet")
		});	
	}
    
    // Metode der bliver kaldt, til at indsætte modeller i banen.
    make_Model(model,textureNumber,scene,tempX,tempY,tempZ,direction){
        let modelLoader = new THREE.GLTFLoader();
        let loader = new THREE.TextureLoader();
        var texture = loader.load(this.textureArray[textureNumber])
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
                        this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,0)
                        break;
                    case '2':
                        this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,0)
                        break;
                    case '3':
                        break;
                    case '4':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case '5':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case '6':
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,180)
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
                        this.make_Model(this.modelArray[4],7, scene,tempX,tempY,tempZ,0)
                        break;
                    case '2':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,0)
                        break;

                    case '3':
                        this.make_Model(this.modelArray[4],7, scene,tempX,tempY,tempZ,180)
                        break;

                    case '4':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,-90)
                        break;

                    case '5':
                        this.make_Model(this.modelArray[7],15, scene,tempX,tempY,tempZ,0)
                        break;

                    case '6':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,180)
                        break;
                    case '7':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case '8':
                        this.make_Model(this.modelArray[12],1, scene,tempX,tempY,tempZ,0)
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
                        this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'A':
                        this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,180)
                        break;

                    case 'b':
                        this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,90)
                        break;

                    case 'B':
                        this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,-90)
                        break;

                    case 'c':
                        this.make_Model(this.modelArray[0],5, scene,tempX,tempY,tempZ,0)
                        break;

                    case 'C':
                        this.make_Model(this.modelArray[0],5, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'd':
                        this.make_Model(this.modelArray[0],5, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'D':
                        this.make_Model(this.modelArray[0],5, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'e':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'E':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'f':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'F':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,-90)
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
                        this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'A':
                    this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                    this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'B':
                    this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'c':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'C':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'd':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'D':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'e':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'E':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'f':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'F':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'g':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'h':
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,180)
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
                        this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'A':
                        this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'B':
                        this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'c':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'C':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'd':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'D':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'e':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'E':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'f':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'F':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'g':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'h':
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,-90)
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_f(startPosition, scene){
        var roomId = 'Room_f'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
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
                        this.make_Model(this.modelArray[4],7, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'A':
                        this.make_Model(this.modelArray[4],7, scene,tempX,tempY,tempZ,-90)
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_g(startPosition, scene){
        var roomId = 'Room_g'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
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
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'c':
                        this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'C':
                        this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'd':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'D':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,90)
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_h(startPosition, scene){
        var roomId = 'Room_h'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
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
                        this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'c':
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'd':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,-90)
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_i(startPosition, scene){
        var roomId = 'Room_i'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
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
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'A':
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'B':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'c':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'd':
                        this.make_Model(this.modelArray[6],0, scene,tempX,tempY,tempZ,-180)
                        break;
                    case 'e':
                        this.make_Model(this.modelArray[7],15, scene,tempX,tempY,tempZ,180)
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_j(startPosition, scene){
        var roomId = 'Room_j'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
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
                        this.make_Model(this.modelArray[13],17, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[11],14, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'B':
                        this.make_Model(this.modelArray[11],14, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'c':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'C':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,90)
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_k(startPosition, scene){
        var roomId = 'Room_k'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
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
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'B':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'c':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,0)
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_l(startPosition, scene){
        var roomId = 'Room_l'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
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
                        this.make_Model(this.modelArray[12],1, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[4],7, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'c':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,-90)
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_m(startPosition, scene){
        var roomId = 'Room_m'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
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
                        this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[14],18, scene,tempX,tempY,tempZ,0)
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    // Floor 1
    Room_A(startPosition, scene){
        var roomId = 'Room_A1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                // gemmer placeringsposition i variabler, til at give modellerne deres position
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE) + (1*3.5);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                        this.make_Model(this.modelArray[15],8, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'A':
                        this.make_Model(this.modelArray[15],8, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[11],0, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'c':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'd':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,45)
                        break;
                    case 'e':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,135)
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_B(startPosition, scene){
        var roomId = 'Room_B1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                // gemmer placeringsposition i variabler, til at give modellerne deres position
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE) + (1*3.5);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'A':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'B':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'c':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'C':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'd':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'D':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'e':
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'E':
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,180)
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_C(startPosition, scene){
        var roomId = 'Room_C1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                // gemmer placeringsposition i variabler, til at give modellerne deres position
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE) + (1*3.5);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'A':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'B':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'c':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'C':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'd':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'D':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'e':
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'E':
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,180)
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_D(startPosition, scene){
        var roomId = 'Room_D1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                // gemmer placeringsposition i variabler, til at give modellerne deres position
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE) + (1*3.5);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'A':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'B':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'c':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'C':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'd':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'D':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'e':
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'E':
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'f':
                        this.make_Model(this.modelArray[1],2, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'F':
                        this.make_Model(this.modelArray[1],2, scene,tempX,tempY,tempZ,180)
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_H(startPosition, scene){
        var roomId = 'Room_H1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                // gemmer placeringsposition i variabler, til at give modellerne deres position
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE) + (1*3.5);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'A':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'B':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'c':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'C':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'd':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'D':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'e':
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'E':
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'f':
                        this.make_Model(this.modelArray[1],2, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'F':
                        this.make_Model(this.modelArray[1],2, scene,tempX,tempY,tempZ,180)
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_I(startPosition, scene){
        var roomId = 'Room_I1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                // gemmer placeringsposition i variabler, til at give modellerne deres position
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE) + (1*3.5);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'A':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'B':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'c':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'C':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'd':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'D':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'e':
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'E':
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'f':
                        this.make_Model(this.modelArray[1],2, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'F':
                        this.make_Model(this.modelArray[1],2, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'g':
                        this.make_Model(this.modelArray[15],4, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'G':
                        this.make_Model(this.modelArray[15],4, scene,tempX,tempY,tempZ,180)
                        break;
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_J(startPosition, scene){
        var roomId = 'Room_J1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                // gemmer placeringsposition i variabler, til at give modellerne deres position
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE) + (1*3.5);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'A':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'B':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'c':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'C':
                        this.make_Model(this.modelArray[11],10, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'd':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'D':
                        this.make_Model(this.modelArray[5],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'e':
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'E':
                        this.make_Model(this.modelArray[2],4, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'f':
                        this.make_Model(this.modelArray[1],2, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'F':
                        this.make_Model(this.modelArray[1],2, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'g':
                        this.make_Model(this.modelArray[15],4, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'G':
                        this.make_Model(this.modelArray[15],4, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'h':
                        this.make_Model(this.modelArray[8],16, scene,tempX,tempY,tempZ,-90)
                        break;
                    case 'H':
                        this.make_Model(this.modelArray[8],16, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'i':
                        this.make_Model(this.modelArray[10],6, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'I':
                        this.make_Model(this.modelArray[10],6, scene,tempX,tempY,tempZ,180)
                        break;
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_K(startPosition, scene){
        var roomId = 'Room_K1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                // gemmer placeringsposition i variabler, til at give modellerne deres position
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE) + (1*3.5);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'A':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'B':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,180)
                        break;
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_M(startPosition, scene){
        var roomId = 'Room_M1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                // gemmer placeringsposition i variabler, til at give modellerne deres position
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE) + (1*3.5);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'A':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'B':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,180)
                        break;
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_N(startPosition, scene){
        var roomId = 'Room_N1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                // gemmer placeringsposition i variabler, til at give modellerne deres position
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE) + (1*3.5);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'A':
                        this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,0)
                        break;
                    case 'B':
                        this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,180)
                        break;
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_O(startPosition, scene){
        var roomId = 'Room_O1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                // gemmer placeringsposition i variabler, til at give modellerne deres position
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE) + (1*3.5);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                        this.make_Model(this.modelArray[12],1, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'A':
                        this.make_Model(this.modelArray[12],1, scene,tempX,tempY,tempZ,180)
                        break;
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_P(startPosition, scene){
        var roomId = 'Room_P1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                // gemmer placeringsposition i variabler, til at give modellerne deres position
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE) + (1*3.5);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                        this.make_Model(this.modelArray[10],6, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'A':
                        this.make_Model(this.modelArray[10],6, scene,tempX,tempY,tempZ,180)
                        break;
                    case 'b':
                        this.make_Model(this.modelArray[8],16, scene,tempX,tempY,tempZ,90)
                        break;
                    case 'B':
                        this.make_Model(this.modelArray[8],16, scene,tempX,tempY,tempZ,-90)
                        break;
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_Q(startPosition, scene){
        var roomId = 'Room_Q1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                // gemmer placeringsposition i variabler, til at give modellerne deres position
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE) + (1*3.5);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                case ' ':
                    break;
                case 'a':
                    this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,-90)
                    break;
                case 'A':
                    this.make_Model(this.modelArray[3],1, scene,tempX,tempY,tempZ,180)
                    break;
                case 'b':
                    this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,90)
                    break;
                case 'B':
                    this.make_Model(this.modelArray[11],12, scene,tempX,tempY,tempZ,180)
                    break;
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }
}

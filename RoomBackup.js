var textures1 = [
    './assets/ComputerTextureV9Code.png',
    './assets/ChairV1.png',
    './assets/12.jpg',
    './assets/13.jpg',
    './assets/BagChairV1.png',
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
];

export default class Room{
	constructor(tile){
		this.TILESIZE = tile;
		//this.map_width = width
        //this.map_height = height
        this.loader = new THREE.TextureLoader();

        this.pcTextureCode = this.loader.load('./assets/ComputerTextureV9Code.png');
        this.pcTextureCode.flipY = false;

        this.chairTexture = this.loader.load('./assets/ChairV1.png');
        this.chairTexture.flipY = false;

        this.textures1 = [
            './assets/ComputerTextureV9Code.png',
            './assets/ChairV1.png',
            './assets/12.jpg',
            './assets/13.jpg',
            './assets/BagChairV1.png',
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
        this.textures2;

        
        
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

    add_Texture(mesh =new three.gltfLoader,number){
        var tempTexture = loader.load('./assets/ComputerTextureV9Code.png')
        /*mesh.traverse ( ( o ) => {
            if ( o.isMesh ) {
              // note: for a multi-material mesh, `o.material` may be an array,
              // in which case you'd need to set `.map` on each value.
              o.material.map = tempTexture
            }
            
        });*/
        //return mesh;
    }
    get_texture(){
        var textureArray = []
        this.textures.forEach(element => {
            textureArray.push(this.loader.load(element))
            console.log("Element in get_textures: "+element)
        });
        console.log("array before return: "+textureArray)
        this.textures2 = textureArray;
    }

    make_Model(model,textureNumber,scene,tempX,tempY,tempZ,direction){
        let modelLoader = new THREE.GLTFLoader();
        let loader = new THREE.TextureLoader();
        var texture = loader.load(this.textures1[textureNumber])
        texture.flipY = false;
        modelLoader.load(model, function(gltf){
            var mesh;
            mesh = gltf.scene;
            mesh.scale.set(1,1,1);
            mesh.traverse ( ( o ) => {
                if ( o.isMesh ) {
                  // note: for a multi-material mesh, `o.material` may be an array,
                  // in which case you'd need to set `.map` on each value.
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
        let loader = new THREE.TextureLoader()
        var roomId = 'Room_a';
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt');
        //var texture = this.get_texture();
        var pcTexture = loader.load('./assets/ComputerTextureV9Code.png')

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case '1':
                    this.make_Model('./assets/PCDeskV5.gltf',0, scene,tempX,tempY,tempZ,0)
                    /*modelLoader.load('./assets/PCDeskV5.gltf', function(gltf){
						var mesh;
						mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        mesh.traverse ( ( o ) => {
                            if ( o.isMesh ) {
                              // note: for a multi-material mesh, `o.material` may be an array,
                              // in which case you'd need to set `.map` on each value.
                              o.material.map = pcTexture
                            }
                            
                        });
						scene.add(mesh);
						mesh.position.x = tempX;
						mesh.position.y = tempY;
						mesh.position.z = tempZ;

                        })*/
                        break;
                    case '2':
                        modelLoader.load('./assets/PCDeskV5WoW.gltf', function(gltf){
						
						
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        //mesh.meshBasicMaterial(this.pcTextureCode)
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        })
                        break;
                    case '3':
                        modelLoader.load('./assets/InfoStandV1.gltf', function(gltf){
						
						
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        })
                        break;
                    case '4':
                        modelLoader.load('./assets/Chair.gltf', function(gltf){
						
						
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
                    case '5':
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
                    case '6':
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
        var roomId = "Room_b";
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt');
        //var texture = this.get_texture();

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                    let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
					let tempY = (-2.5*this.TILESIZE);
                    let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case '1':
                    modelLoader.load('./assets/CiscoRack.gltf', function(gltf){
						var mesh;
						mesh = gltf.scene;
						mesh.scale.set(1,1,1);
						scene.add(mesh);
						mesh.position.x = tempX;
						mesh.position.y = tempY;
						mesh.position.z = tempZ;

                        })
                        break;
                    case '2':
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
                        modelLoader.load('./assets/CiscoRack.gltf', function(gltf){
						
						
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

                    case '4':
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

                    case '5':
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

                    case '6':
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
                        modelLoader.load('./assets/Chair.gltf', function(gltf){
						
						
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
                    case '8':
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
        let modelLoader = new THREE.GLTFLoader();
        var roomId = "Room_c";
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt');
        //var texture = this.get_texture();

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                    let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
					let tempY = (-2.5*this.TILESIZE);
                    let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                    this.make_Model('./assets/PCDeskV5.gltf',0, scene,tempX,tempY,tempZ,0)
                    /*modelLoader.load('./assets/PCDeskV5.gltf', function(gltf){
                        var mesh;
						mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
						scene.add(mesh);
						mesh.position.x = tempX;
						mesh.position.y = tempY;
						mesh.position.z = tempZ;

                        })*/
                        break;
                    case 'A':
                        this.make_Model('./assets/PCDeskV5.gltf',0, scene,tempX,tempY,tempZ,180)
                        /*modelLoader.load('./assets/PCDeskV5.gltf', function(gltf){
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        mesh = this.add_Texture(mesh,texture[1][0])
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        mesh.rotation.y = 180 * Math.PI / 180
                        })*/
                        break;

                    case 'b':
                        this.make_Model('./assets/PCDeskV5.gltf',0, scene,tempX,tempY,tempZ,90)
                        /*modelLoader.load('./assets/PCDeskV5.gltf', function(gltf){
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        mesh = this.add_Texture(mesh,texture[1][0])
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        mesh.rotation.y = 90 * Math.PI / 180
                        })*/
                        break;

                    case 'B':
                    this.make_Model('./assets/PCDeskV5.gltf',0, scene,tempX,tempY,tempZ,-90)
                        /*modelLoader.load('./assets/PCDeskV5.gltf', function(gltf){
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        mesh = this.add_Texture(mesh,texture[1][0])
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        mesh.rotation.y = -90 * Math.PI / 180
                        })*/
                        break;

                    case 'c':
                        modelLoader.load('./assets/BDSpot.gltf', function(gltf){
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        })
                        break;

                    case 'C':
                        modelLoader.load('./assets/BDSpot.gltf', function(gltf){
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
                    case 'd':
                        modelLoader.load('./assets/BDSpot.gltf', function(gltf){
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
                    case 'D':
                        modelLoader.load('./assets/BDSpot.gltf', function(gltf){
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
                        modelLoader.load('./assets/Chair.gltf', function(gltf){
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        })
                        break;
                    case 'E':
                        modelLoader.load('./assets/Chair.gltf', function(gltf){
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
                    case 'f':
                        modelLoader.load('./assets/Chair.gltf', function(gltf){
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
                    case 'F':
                        modelLoader.load('./assets/Chair.gltf', function(gltf){
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

    Room_d(startPosition, scene){
        let modelLoader = new THREE.GLTFLoader();
        var roomId = 'Room_d';
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt');
        //var texture = this.get_texture();

        

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                    modelLoader.load('./assets/PCDeskV5.gltf', function(gltf){
						var mesh;
						mesh = gltf.scene;
						mesh.scale.set(1,1,1);
						scene.add(mesh);
						mesh.position.x = tempX;
						mesh.position.y = tempY;
						mesh.position.z = tempZ;

                        })
                        break;
                    case 'A':
                    modelLoader.load('./assets/PCDeskV5.gltf', function(gltf){
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
                    case 'b':
                    modelLoader.load('./assets/PCDeskV5.gltf', function(gltf){
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
                    case 'B':
                    modelLoader.load('./assets/PCDeskV5.gltf', function(gltf){
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
                    case 'c':
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
                    case 'C':
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
                    case 'd':
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
                    case 'D':
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
                        modelLoader.load('./assets/Chair.gltf', function(gltf){
						
						
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        })
                        break;
                    case 'E':
                        modelLoader.load('./assets/Chair.gltf', function(gltf){
						
						
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
                    case 'f':
                        modelLoader.load('./assets/Chair.gltf', function(gltf){
						
						
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
                    case 'F':
                        modelLoader.load('./assets/Chair.gltf', function(gltf){
						
						
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
                    case 'g':
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
                    case 'h':
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
        var roomId = 'Room_e';
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/'+roomId+'.txt');
        //var pcTextureCode = this.loader.load('./assets/ComputerTextureV9Code.png');
        //pcTextureCode.flipY = false;
        //var texture = this.get_texture();

        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE);
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case 'a':
                        this.make_Model('./assets/PCDeskV5.gltf',0, scene,tempX,tempY,tempZ,0)
                        /*modelLoader.load('./assets/PCDeskV5.gltf', function(gltf){
						var mesh;
						mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        mesh = this.add_Texture(mesh,texture[1][0])
						scene.add(mesh);
						mesh.position.x = tempX;
						mesh.position.y = tempY;
						mesh.position.z = tempZ;

                        })*/
                        break;
                    case 'A':
                    this.make_Model('./assets/PCDeskV5.gltf',0, scene,tempX,tempY,tempZ,180)
                    /*modelLoader.load('./assets/PCDeskV5.gltf', function(gltf){
						var mesh;
						mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        mesh = this.add_Texture(mesh,texture[1][0])
						scene.add(mesh);
						mesh.position.x = tempX;
						mesh.position.y = tempY;
						mesh.position.z = tempZ;
                        mesh.rotation.y = 180 * Math.PI / 180
                        })*/
                        break;
                    case 'b':
                    this.make_Model('./assets/PCDeskV5.gltf',0, scene,tempX,tempY,tempZ,90)
                    /*modelLoader.load('./assets/PCDeskV5.gltf', function(gltf){
						var mesh;
						mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
						scene.add(mesh);
						mesh.position.x = tempX;
						mesh.position.y = tempY;
						mesh.position.z = tempZ;
                        mesh.rotation.y = 90 * Math.PI / 180
                        })*/
                        break;
                    case 'B':
                    modelLoader.load('./assets/PCDeskV5.gltf', function(gltf){
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
                    case 'c':
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
                    case 'C':
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
                    case 'd':
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
                    case 'D':
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
                        modelLoader.load('./assets/Chair.gltf', function(gltf){
						
						
                        var mesh;
                        mesh = gltf.scene;
                        mesh.scale.set(1,1,1);
                        scene.add(mesh);
                        mesh.position.x = tempX;
                        mesh.position.y = tempY;
                        mesh.position.z = tempZ;
                        })
                        break;
                    case 'E':
                        modelLoader.load('./assets/Chair.gltf', function(gltf){
						
						
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
                    case 'f':
                        modelLoader.load('./assets/Chair.gltf', function(gltf){
						
						
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
                    case 'F':
                        modelLoader.load('./assets/Chair.gltf', function(gltf){
						
						
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
                    case 'g':
                        modelLoader.load('./assets/ClosetV1.gltf', function(gltf){
						
						
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
                    case 'h':
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
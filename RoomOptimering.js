export default class Room{
	constructor(tile){
		this.TILESIZE = tile;

        // Array til at gemme texture, til at bruge på modeller.
        this.textureArray = [
            './assets/Textures/ComputerTextureV10Code.png',
            './assets/Textures/ChairV2.png',
            './assets/Textures/BagchairV2.png',
            './assets/Textures/BDSpotV2.png',
            './assets/Textures/CouchV2.png',
            './assets/Textures/DarkPlastic.jpg',
            './assets/Textures/KitchendeskV3.png',
            './assets/Textures/ServerRackV2.png',
            './assets/Textures/CouchV2.png',
            './assets/Textures/VRStand.png',
            './assets/Textures/ComputerTextureV10Gaming.png',
            './assets/Textures/ComputerTextureV10InfoStand.png',
            './assets/Textures/ComputerTextureV10PacketTracer.png',
            './assets/Textures/ComputerTextureV10Unity.png',
            './assets/Textures/ComputerTextureV10VR.png',
            './assets/Textures/PCDeskV3.png',
            './assets/Textures/Refrigerator.png',
            './assets/Textures/VRStand.png',
            './assets/Textures/Cardboard.png',
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
            './assets/Models/BDSpotV2Blank.gltf',
            './assets/Models/BagchairV1Blank.gltf',
            './assets/Models/BookcaseV1Blank.gltf',
            './assets/Models/ChairBlank.gltf',
            './assets/Models/CiscoRackBlank.gltf',
            './assets/Models/ClosetV1Blank.gltf',
            './assets/Models/DeskWorkSize2V1PCBlank.gltf',
            './assets/Models/DeskWorkSize2V1SwitchBlank.gltf',
            './assets/Models/FridgeV4Blank.gltf',
            './assets/Models/InfoStandV1Blank.gltf',
            './assets/Models/KitchenDeskV2BaseBlank.gltf',
            './assets/Models/PCDeskV5Blank.gltf',
            './assets/Models/PrinterV1Blank.gltf',
            './assets/Models/VRStandV1Blank.gltf',
            './assets/Models/Cardboxes.gltf',
            './assets/Models/Couch2V1Blank.gltf',
            './assets/Models/CanteenTableV1.gltf',
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

        this.presetsArray = [
            [// Programmerings-kontor id: 0
                ['a',this.modelArray[11],this.textureArray[0],0], //PC Programmering
                ['A',this.modelArray[11],this.textureArray[0],180], //PC Programmering
                ['b',this.modelArray[11],this.textureArray[0],90], //PC Programmering
                ['B',this.modelArray[11],this.textureArray[0],-90], //PC Programmering
                ['c',this.modelArray[11],this.textureArray[10],0], //PC gaming
                ['C',this.modelArray[11],this.textureArray[10],180], //PC gaming
                ['d',this.modelArray[11],this.textureArray[10],90], //PC gaming
                ['D',this.modelArray[11],this.textureArray[10],-90], //PC gaming
                ['e',this.modelArray[11],this.textureArray[13],0], //PC Unity
                ['E',this.modelArray[11],this.textureArray[13],180], //PC Unity
                ['f',this.modelArray[11],this.textureArray[13],90], //PC Unity
                ['F',this.modelArray[11],this.textureArray[13],-90], //PC Unity
                ['g',this.modelArray[3],this.textureArray[1],0], // Kontorstol
                ['G',this.modelArray[3],this.textureArray[1],180], // Kontorstol
                ['h',this.modelArray[3],this.textureArray[1],90], // Kontorstol
                ['H',this.modelArray[3],this.textureArray[1],-90], // Kontorstol
                ['i',this.modelArray[5],this.textureArray[1],0], // Skab
                ['I',this.modelArray[5],this.textureArray[1],180], // Skab
                ['j',this.modelArray[5],this.textureArray[1],90], // Skab
                ['J',this.modelArray[5],this.textureArray[1],-90], // Skab
                ['k',this.modelArray[2],this.textureArray[4],0], // Bogreol
                ['K',this.modelArray[2],this.textureArray[4],180], // Bogreol
                ['l',this.modelArray[2],this.textureArray[4],90], // Bogreol
                ['L',this.modelArray[2],this.textureArray[4],-90], // Bogreol
                ['m',this.modelArray[11],this.textureArray[1],0],
                ['M',this.modelArray[11],this.textureArray[1],0],
                ['n',this.modelArray[11],this.textureArray[1],0],
                ['N',this.modelArray[11],this.textureArray[1],0],
                ['o',this.modelArray[1],this.textureArray[1],0],
                ['O',this.modelArray[1],this.textureArray[1],0],
                ['p',this.modelArray[1],this.textureArray[1],0],
                ['P',this.modelArray[1],this.textureArray[1],0],
                ['q',this.modelArray[1],this.textureArray[1],0],
                ['Q',this.modelArray[1],this.textureArray[1],0],
                ['r',this.modelArray[1],this.textureArray[1],0],
                ['R',this.modelArray[1],this.textureArray[1],0],
                ['s',this.modelArray[1],this.textureArray[1],0],
                ['S',this.modelArray[1],this.textureArray[1],0],
                ['t',this.modelArray[1],this.textureArray[1],0],
                ['T',this.modelArray[1],this.textureArray[1],0],
                ['u',this.modelArray[1],this.textureArray[1],0],
                ['U',this.modelArray[1],this.textureArray[1],0],
                ['v',this.modelArray[1],this.textureArray[1],0],
                ['V',this.modelArray[1],this.textureArray[1],0],
                ['x',this.modelArray[1],this.textureArray[1],0],
                ['X',this.modelArray[1],this.textureArray[1],0],
                ['y',this.modelArray[1],this.textureArray[1],0],
                ['Y',this.modelArray[1],this.textureArray[1],0],
                ['z',this.modelArray[1],this.textureArray[1],0],
                ['Z',this.modelArray[1],this.textureArray[1],0],
            ],
            [ //Netvaerks/robot/vaerksted/VR-lab, Netvaerkskontor, Lager og Logistik id: 1
                ['a',this.modelArray[4],this.textureArray[7],0], // Cisco rack
                ['A',this.modelArray[4],this.textureArray[7],180], // Cisco rack
                ['b',this.modelArray[4],this.textureArray[7],90], // Cisco rack
                ['B',this.modelArray[4],this.textureArray[7],-90], // Cisco rack
                ['c',this.modelArray[7],this.textureArray[15],0], // Bord M/switch
                ['C',this.modelArray[7],this.textureArray[15],180], // Bord M/switch
                ['d',this.modelArray[7],this.textureArray[15],90], // Bord M/switch
                ['D',this.modelArray[7],this.textureArray[15],-90], // Bord M/switch
                ['e',this.modelArray[3],this.textureArray[1],0], // Kontorstol
                ['E',this.modelArray[3],this.textureArray[1],180], // Kontorstol
                ['f',this.modelArray[3],this.textureArray[1],90], // Kontorstol
                ['F',this.modelArray[3],this.textureArray[1],-90], // Kontorstol
                ['g',this.modelArray[11],this.textureArray[12],0], // PC Packet Tracer
                ['G',this.modelArray[11],this.textureArray[12],180], // PC Packet Tracer
                ['h',this.modelArray[11],this.textureArray[12],90], // PC Packet Tracer
                ['H',this.modelArray[11],this.textureArray[12],-90], // PC Packet Tracer
                ['i',this.modelArray[11],this.textureArray[0],0], // PC Programering
                ['I',this.modelArray[11],this.textureArray[0],180], // PC Programering
                ['j',this.modelArray[11],this.textureArray[0],90], // PC Programering
                ['J',this.modelArray[11],this.textureArray[0],-90], // PC Programering
                ['k',this.modelArray[0],this.textureArray[3],0], // Boston Dynamics Spot
                ['K',this.modelArray[0],this.textureArray[3],180], // Boston Dynamics Spot
                ['l',this.modelArray[0],this.textureArray[3],90], // Boston Dynamics Spot
                ['L',this.modelArray[0],this.textureArray[3],-90], // Boston Dynamics Spot
                ['m',this.modelArray[14],this.textureArray[18],0], // Papkasser
                ['M',this.modelArray[14],this.textureArray[18],180], // Papkasser
                ['n',this.modelArray[14],this.textureArray[18],90], // Papkasser
                ['N',this.modelArray[14],this.textureArray[18],-90], // Papkasser
                ['o',this.modelArray[11],this.textureArray[13],0], // PC Unity
                ['O',this.modelArray[11],this.textureArray[13],180], // PC Unity
                ['p',this.modelArray[11],this.textureArray[13],90], // PC Unity
                ['P',this.modelArray[11],this.textureArray[13],-90], // PC Unity
                ['q',this.modelArray[11],this.textureArray[14],0], // PC VR
                ['Q',this.modelArray[11],this.textureArray[14],180], // PC VR
                ['r',this.modelArray[11],this.textureArray[14],90], // PC VR
                ['R',this.modelArray[11],this.textureArray[14],-90], // PC VR
                ['s',this.modelArray[6],this.textureArray[0],0], // Workdesk PC
                ['S',this.modelArray[6],this.textureArray[0],180], // Workdesk PC
                ['t',this.modelArray[6],this.textureArray[0],90], // Workdesk PC
                ['T',this.modelArray[6],this.textureArray[0],-90], // Workdesk PC
                ['u',this.modelArray[2],this.textureArray[4],0],  // Bogreol
                ['U',this.modelArray[2],this.textureArray[4],180], // Bogreol
                ['v',this.modelArray[2],this.textureArray[4],90], // Bogreol
                ['V',this.modelArray[2],this.textureArray[4],-90], // Bogreol
                ['x',this.modelArray[5],this.textureArray[1],0], // Skab
                ['X',this.modelArray[5],this.textureArray[1],180], // Skab
                ['y',this.modelArray[5],this.textureArray[1],90], // Skab
                ['Y',this.modelArray[5],this.textureArray[1],-90], // Skab
                ['z',this.modelArray[13],this.textureArray[17],180], // VR stander
                ['Z',this.modelArray[12],this.textureArray[1],90], // Printer
            ],
            [ // Personale-rum/kontor, Koekken/kantine id: 2
                ['a',this.modelArray[15],this.textureArray[8],0], // Sofa
                ['A',this.modelArray[15],this.textureArray[8],180], // Sofa
                ['b',this.modelArray[15],this.textureArray[8],90], // Sofa
                ['B',this.modelArray[15],this.textureArray[8],-90], // Sofa
                ['c',this.modelArray[1],this.textureArray[1],0], // Sofabord MANGLER MODEL
                ['C',this.modelArray[1],this.textureArray[1],180], // Sofabord MANGLER MODEL
                ['d',this.modelArray[1],this.textureArray[1],90], // Sofabord MANGLER MODEL
                ['D',this.modelArray[1],this.textureArray[1],-90], // Sofabord MANGLER MODEL
                ['e',this.modelArray[11],this.textureArray[0],0], // PC Programmering
                ['E',this.modelArray[11],this.textureArray[0],180], // PC Programmering
                ['f',this.modelArray[11],this.textureArray[0],90], // PC Programmering
                ['F',this.modelArray[11],this.textureArray[0],-90], // PC Programmering
                ['g',this.modelArray[3],this.textureArray[1],0], // Kontorstol
                ['G',this.modelArray[3],this.textureArray[1],180], // Kontorstol
                ['h',this.modelArray[3],this.textureArray[1],90], // Kontorstol
                ['H',this.modelArray[3],this.textureArray[1],-90], // Kontorstol
                ['i',this.modelArray[11],this.textureArray[12],0], // PC Packet Tracer
                ['I',this.modelArray[11],this.textureArray[12],180], // PC Packet Tracer
                ['j',this.modelArray[11],this.textureArray[12],90], // PC Packet Tracer
                ['J',this.modelArray[11],this.textureArray[12],-90], // PC Packet Tracer
                ['k',this.modelArray[11],this.textureArray[10],0], // PC Gaming
                ['K',this.modelArray[11],this.textureArray[10],180], // PC Gaming
                ['l',this.modelArray[11],this.textureArray[10],90], // PC Gaming
                ['L',this.modelArray[11],this.textureArray[10],-90], // PC Gaming
                ['m',this.modelArray[5],this.textureArray[1],0], // Skab
                ['M',this.modelArray[5],this.textureArray[1],180], // Skab
                ['n',this.modelArray[5],this.textureArray[1],90], // Skab
                ['N',this.modelArray[5],this.textureArray[1],-90], // Skab
                ['o',this.modelArray[2],this.textureArray[4],0], // Bogreol
                ['O',this.modelArray[2],this.textureArray[4],180], // Bogreol
                ['p',this.modelArray[2],this.textureArray[4],90], // Bogreol
                ['P',this.modelArray[2],this.textureArray[4],-90], // Bogreol
                ['q',this.modelArray[1],this.textureArray[2],0], // Saekkestol
                ['Q',this.modelArray[1],this.textureArray[2],180], // Saekkestol
                ['r',this.modelArray[1],this.textureArray[2],90], // Saekkestol
                ['R',this.modelArray[1],this.textureArray[2],-90], // Saekkestol
                ['s',this.modelArray[8],this.textureArray[16],90], // Koeleskab MODEL ROTERET FORKERT, justeret til normal: 0
                ['S',this.modelArray[8],this.textureArray[16],-90], // Koeleskab MODEL ROTERET FORKERT, justeret til normal: 180
                ['t',this.modelArray[8],this.textureArray[16],180], // Koeleskab // Koeleskab MODEL ROTERET FORKERT, justeret til normal: 90
                ['T',this.modelArray[8],this.textureArray[16],0], // Koeleskab // Koeleskab MODEL ROTERET FORKERT, justeret til normal: -90
                ['u',this.modelArray[10],this.textureArray[6],0], // koekenbord
                ['U',this.modelArray[10],this.textureArray[6],180], // koekenbord
                ['v',this.modelArray[10],this.textureArray[6],90], // koekenbord
                ['V',this.modelArray[10],this.textureArray[6],-90], // koekenbord
                ['x',this.modelArray[1],this.textureArray[1],0],
                ['X',this.modelArray[1],this.textureArray[1],0],
                ['y',this.modelArray[1],this.textureArray[1],0],
                ['Y',this.modelArray[1],this.textureArray[1],0],
                ['z',this.modelArray[1],this.textureArray[1],0],
                ['Z',this.modelArray[1],this.textureArray[1],0],
            ],
            [
                ['a',this.modelArray[1],this.textureArray[1],0],
                ['A',this.modelArray[1],this.textureArray[1],0],
                ['b',this.modelArray[1],this.textureArray[1],0],
                ['B',this.modelArray[1],this.textureArray[1],0],
                ['c',this.modelArray[1],this.textureArray[1],0],
                ['C',this.modelArray[1],this.textureArray[1],0],
                ['d',this.modelArray[1],this.textureArray[1],0],
                ['D',this.modelArray[1],this.textureArray[1],0],
                ['e',this.modelArray[1],this.textureArray[1],0],
                ['E',this.modelArray[1],this.textureArray[1],0],
                ['f',this.modelArray[1],this.textureArray[1],0],
                ['F',this.modelArray[1],this.textureArray[1],0],
                ['g',this.modelArray[1],this.textureArray[1],0],
                ['G',this.modelArray[1],this.textureArray[1],0],
                ['h',this.modelArray[1],this.textureArray[1],0],
                ['H',this.modelArray[1],this.textureArray[1],0],
                ['i',this.modelArray[1],this.textureArray[1],0],
                ['I',this.modelArray[1],this.textureArray[1],0],
                ['j',this.modelArray[1],this.textureArray[1],0],
                ['J',this.modelArray[1],this.textureArray[1],0],
                ['k',this.modelArray[1],this.textureArray[1],0],
                ['K',this.modelArray[1],this.textureArray[1],0],
                ['l',this.modelArray[1],this.textureArray[1],0],
                ['L',this.modelArray[1],this.textureArray[1],0],
                ['m',this.modelArray[1],this.textureArray[1],0],
                ['M',this.modelArray[1],this.textureArray[1],0],
                ['n',this.modelArray[1],this.textureArray[1],0],
                ['N',this.modelArray[1],this.textureArray[1],0],
                ['o',this.modelArray[1],this.textureArray[1],0],
                ['O',this.modelArray[1],this.textureArray[1],0],
                ['p',this.modelArray[1],this.textureArray[1],0],
                ['P',this.modelArray[1],this.textureArray[1],0],
                ['q',this.modelArray[1],this.textureArray[1],0],
                ['Q',this.modelArray[1],this.textureArray[1],0],
                ['r',this.modelArray[1],this.textureArray[1],0],
                ['R',this.modelArray[1],this.textureArray[1],0],
                ['s',this.modelArray[1],this.textureArray[1],0],
                ['S',this.modelArray[1],this.textureArray[1],0],
                ['t',this.modelArray[1],this.textureArray[1],0],
                ['T',this.modelArray[1],this.textureArray[1],0],
                ['u',this.modelArray[1],this.textureArray[1],0],
                ['U',this.modelArray[1],this.textureArray[1],0],
                ['v',this.modelArray[1],this.textureArray[1],0],
                ['V',this.modelArray[1],this.textureArray[1],0],
                ['x',this.modelArray[1],this.textureArray[1],0],
                ['X',this.modelArray[1],this.textureArray[1],0],
                ['y',this.modelArray[1],this.textureArray[1],0],
                ['Y',this.modelArray[1],this.textureArray[1],0],
                ['z',this.modelArray[1],this.textureArray[1],0],
                ['Z',this.modelArray[1],this.textureArray[1],0],
            ]
        ]

        
    }

    makeCeiling(scene,floor_number,floor_height,floor_width,row,column, makeFloor = true, makeCeiling = true){
		
					
    const loader = new THREE.TextureLoader();
    const heightMap = loader.load('assets/Textures/noise.jpg');
    const linoleum = loader.load('assets/Textures/linoleum.jpg');
    const ceiling = loader.load('assets/Textures/ceiling.jpg');
    floor_width--;

    
    // kig OGSÅ ned i array
    // lav loft
    if(makeCeiling == true){
        var geometry_roof = new THREE.BoxGeometry(floor_width*this.TILESIZE+(this.TILESIZE*1), this.TILESIZE, floor_height*this.TILESIZE+(this.TILESIZE*1));
        ceiling.wrapS = THREE.RepeatWrapping;
        ceiling.wrapT = THREE.RepeatWrapping;
        ceiling.repeat.set(floor_width,floor_height);

        var material_roof = new THREE.MeshStandardMaterial({ map: ceiling});
        var mesh_roof = new THREE.Mesh(geometry_roof,material_roof);
        mesh_roof.position.x = column*this.TILESIZE + (this.TILESIZE*(floor_width/2)); 
        mesh_roof.position.y = 5*this.TILESIZE -1 + floor_number* 3.5;
        mesh_roof.position.z = row*this.TILESIZE + (this.TILESIZE * (floor_height/2));
        scene.add(mesh_roof);
    }

    
    // lav gulv
    if(makeFloor == true){
        var geometry_floor = new THREE.BoxGeometry(floor_width*this.TILESIZE+(this.TILESIZE*1), this.TILESIZE, floor_height*this.TILESIZE+(this.TILESIZE*1));
        linoleum.wrapS = THREE.RepeatWrapping;
        linoleum.wrapT = THREE.RepeatWrapping;
        linoleum.repeat.set(floor_width,floor_height);
        var material_floor = new THREE.MeshStandardMaterial({map: linoleum});
    
        var mesh_floor = new THREE.Mesh(geometry_floor,material_floor);
        mesh_floor.position.x = column*this.TILESIZE + (this.TILESIZE*(floor_width/2)); 
        mesh_floor.position.y = -1.5 + floor_number*3.5;
        mesh_floor.position.z = row*this.TILESIZE + (this.TILESIZE * (floor_height/2));
        scene.add(mesh_floor);
    }
    
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
    make_Model(model,modelTexture,direction,scene,tempX,tempY,tempZ){
        let modelLoader = new THREE.GLTFLoader();
        let loader = new THREE.TextureLoader();
        
        console.log('TEXTURE: '+modelTexture)
        console.log('MODEL: '+model)
        var texture = loader.load(modelTexture)
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

    Make_Room(startPosition,scene,roomPreset,roomId,floor,text1 = 'NA',text2 = 'NA'){
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,floor,room.length,room[0].length,startPosition[1],startPosition[0])
        for (let x = 0; x < room.length; x++) {
            for (let y = 0; y < room[x].length; y++) {
                // gemmer placeringsposition i variabler, til at give modellerne deres position
                let tempX = ((startPosition[0]+y)*this.TILESIZE + 0.5*this.TILESIZE);
                let tempY = (-2.5*this.TILESIZE)+ (floor*3.5);;
                let tempZ = ((startPosition[1]+x)*this.TILESIZE + 0.5*this.TILESIZE);
                    console.log(roomId+" No. "+x+" "+y+" PositionX: "+tempX +" PositionY: "+tempY+" PositionZ: "+tempZ)
                switch(room[x][y]){
                    case ' ':
                        break;
                    case '.':
                        break;
                    default:
                    
                        for (let index = 0; index < this.presetsArray[roomPreset].length; index++) {
                            var element = this.presetsArray[roomPreset][index];
                            
                            if(element[0] == room[x][y]){
                                console.log('!!!!!!!!!!!!!! '+element[0])
                                console.log('!!!!!!!!!!!!!! '+element[1])
                                console.log('!!!!!!!!!!!!!! '+element[2])
                                this.make_Model(element[1],element[2],element[3], scene, tempX, tempY, tempZ);
                                break;
                                
                            }
                            
                        }
                        break;
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.");
    }
    
    /*Room_a(startPosition, scene){
        var roomId = 'Room_a'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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
        console.log(roomId+" Done.");
    }
    
    Room_b(startPosition, scene){
        let modelLoader = new THREE.GLTFLoader();
        var roomId = "Room_b"; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt');  // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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

    Room_n(startPosition, scene){
        var roomId = 'Room_n'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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

    Room_o(startPosition, scene){
        var roomId = 'Room_o'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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

    Room_p(startPosition, scene){
        var roomId = 'Room_p'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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

    Room_q(startPosition, scene){
        var roomId = 'Room_q'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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

    Room_r(startPosition, scene){
        var roomId = 'Room_r'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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

    Room_s(startPosition, scene){
        var roomId = 'Room_s'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0],true,false)
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

    Room_t(startPosition, scene){
        var roomId = 'Room_t'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0],true,false)
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

    Room_u(startPosition, scene){
        var roomId = 'Room_u'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,0,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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

    Room_E(startPosition, scene){
        var roomId = 'Room_E1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_F(startPosition, scene){
        var roomId = 'Room_F1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_G(startPosition, scene){
        var roomId = 'Room_G1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0],false,true)
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
                        
                }
                
            }
            
        }
        console.log(roomId+" Done.")
    }

    Room_H(startPosition, scene){
        var roomId = 'Room_H1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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

    Room_R(startPosition, scene){
        var roomId = 'Room_R1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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

    Room_S(startPosition, scene){
        var roomId = 'Room_S1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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

    Room_T(startPosition, scene){
        var roomId = 'Room_T1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0],false,true)
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

    Room_U(startPosition, scene){
        var roomId = 'Room_U1'; // Id for rummet, vigtigt at det stemmer overens med rummets tekstfil.
        console.log(roomId+" Running.")
        var room =  this.load_txt_file('assets/Rooms/'+roomId+'.txt'); // Indlæser rummets array fra en tekstfil.
        this.makeCeiling(scene,1,room.length,room[0].length,startPosition[1],startPosition[0])
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
    }*/
}
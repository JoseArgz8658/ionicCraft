import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { Biomas } from './biomas';
import { AlertController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BdService {
  public database!: SQLiteObject;

  tablaBiomas: string = "CREATE TABLE IF NOT EXISTS bioma(bioma_id INTEGER PRIMARY KEY AUTOINCREMENT, minecraft_bioma_id VARCHAR(100) NOT NULL, bioma_nombre VARCHAR(50) NOT NULL, bioma_descripcion TEXT NOT NULL);";

  registroBioma: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (1, 'dark_forest', 'Bosque Oscuro', 'Un bioma denso donde los árboles gigantes impiden que la luz solar alcance el suelo, creando áreas oscuras.');"+

  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (2, 'desert', 'Desierto', 'Un bioma árido con vastas dunas de arena, cactus y muy poca vegetación. Hogar de pirámides y pozos.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (3, 'the_end', 'El End', 'Una dimensión misteriosa y oscura, hogar de los Enderman y el dragón del End. Su paisaje está formado por islas flotantes y estructuras antiguas.');"+

  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (4, 'plains', 'Llanuras', 'Un bioma extenso y plano con pastos verdes, ideal para la construcción de estructuras y la cría de animales.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (5, 'jungle', 'Jungla', 'Un bioma denso con árboles altos y enredaderas, hogar de loros, ocelotes y templos antiguos.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (6, 'savanna', 'Sabana', 'Un bioma cálido y seco, con árboles de acacia y terrenos abiertos. Aquí se pueden encontrar aldeas y animales como caballos y llamas.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (7, 'taiga', 'Taiga', 'Un bioma frío con coníferas, lobos y nieve en las montañas más altas. Ideal para la supervivencia en climas extremos.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (8, 'swamp', 'Pantano', 'Un bioma pantanoso con agua estancada, árboles de roble cubiertos de enredaderas y hogares de brujas.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (9, 'mountains', 'Montañas', 'Un bioma montañoso con picos altos y riscos empinados, donde la nieve cubre las cumbres más elevadas.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (10, 'snowy_plains', 'Llanura Nevada', 'Un bioma helado con grandes áreas de nieve y muy poca vegetación. Los iglús pueden encontrarse aquí.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (11, 'mushroom_fields', 'Campos de Hongos', 'Un bioma raro cubierto de hongos gigantes, hogar de las vacas champiñón.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (12, 'badlands', 'Tierras Baldías', 'Un bioma seco y árido con montañas de terracota de colores brillantes. Los mineshafts son comunes aquí.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (13, 'beach', 'Playa', 'Un bioma estrecho de arena junto a cuerpos de agua como océanos, ríos o lagos.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (14, 'forest', 'Bosque', 'Un bioma lleno de árboles de roble y abeto. Es uno de los biomas más comunes.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (15, 'nether_wastes', 'Desiertos Del Nether', 'El bioma más común del Nether, con grandes áreas de netherrack y lava.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (16, 'crimson_forest', 'Bosque Carmesí', 'Un bioma del Nether con hongos gigantes y criaturas hostiles como piglins y hoglins.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (17, 'warped_forest', 'Bosque Distorsionado', 'Un bioma del Nether de color azul-verde, hogar de Enderman y estructuras extrañas.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (18, 'soul_sand_valley', 'Valle de Almas', 'Un bioma del Nether con grandes cantidades de arena de almas y columnas de basalto.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (19, 'basalt_deltas', 'Deltas de Basalto', 'Un bioma volcánico en el Nether, lleno de columnas de basalto y magma.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (20, 'ice_spikes', 'Picos de Hielo', 'Un bioma helado con grandes estructuras de hielo en forma de picos, un paisaje impresionante.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (21, 'meadow', 'Prado', 'Un bioma montañoso cubierto de flores, ideal para aldeas y la crianza de animales.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (22, 'lush_caves', 'Cuevas Frondosas', 'Un bioma subterráneo con plantas exóticas, lagos de agua y criaturas amigables como los ajolotes.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (23, 'dripstone_caves', 'Cuevas de Estalactitas', 'Un bioma subterráneo con formaciones rocosas puntiagudas, estalactitas y estalagmitas.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (24, 'deep_dark', 'Oscuridad Profunda', 'Un bioma subterráneo peligroso, hogar del Warden y las misteriosas ciudades antiguas.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (25, 'ocean', 'Océano', 'Un bioma marino extenso que cubre la mayor parte del mundo de Minecraft, hogar de criaturas acuáticas como delfines y peces.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (26, 'warm_ocean', 'Océano Cálido', 'Un bioma oceánico con aguas cálidas y arrecifes de coral, hogar de peces tropicales.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (27, 'frozen_ocean', 'Océano Congelado', 'Un bioma oceánico con grandes icebergs y criaturas como osos polares.');"+
  
  "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (28, 'river', 'Río', 'Un bioma acuático que serpentea a través de otros biomas, ideal para la pesca y el transporte en bote.');";

  listaBiomas = new BehaviorSubject([]);

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController) {
    this.crearBD();
  }

  crearBD(){
    //verificar la plataforma
    this.platform.ready().then(()=>{
      //crear mi base de datos
      this.sqlite.create({
        name: 'bdbiomas.db',
        location: 'default'
      }).then((bd: SQLiteObject)=>{
        //guardar mi conexion a base de datos
        this.database = bd;
        //llamar a la función de creación de tablas
        this.crearTablas();
        this.traerBiomas();
        //cambiar el observable del estado de la base de datos
        this.isDBReady.next(true);
      }).catch(e=>{
        this.presentAlert('CrearBD()', 'Error: ' + JSON.stringify(e));
      })
    })
  }

  async crearTablas(){
    try{
      await this.database.executeSql(this.tablaBiomas, []);

      await this.database.executeSql(this.registroBioma, []);

    }catch(e){
      this.presentAlert('CrearTabla()', 'Error: ' + JSON.stringify(e));
    }
  }

  fetchBiomas(): Observable<Biomas[]>{
    return this.listaBiomas.asObservable();
  }

  dbState(){
    return this.isDBReady.asObservable();
  }

  async presentAlert(titulo:string, msj:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  traerBiomas(){
    return this.database.executeSql('SELECT * FROM bioma',[]).then(res=>{
      //variable para almacenar el resultado de la consulta
      let items: Biomas[] = [];
      //verificar si trae o no registros
      if(res.rows.length > 0){
        //recorro los registros
        for(var i = 0; i < res.rows.length; i++){
          //agregar el registro a mi variable
          items.push({
            bioma_id: res.rows.item(i).bioma_id,
            minecraft_bioma_id: res.rows.item(i).minecraft_bioma_id,
            bioma_nombre: res.rows.item(i).bioma_nombre,
            bioma_descripcion: res.rows.item(i).bioma_descripcion
          })
        }
      }
      //actualizo mi observable
      this.listaBiomas.next(items as any);
    })
  }

  eliminarBioma(id:string){
    return this.database.executeSql('DELETE FROM bioma WHERE bioma_id = ?',[id]).then(res=>{
      this.presentAlert("Eliminar", "Noticia Eliminada");
      this.traerBiomas();
    }).catch(e=>{
      this.presentAlert('Eliminar', 'Error: ' + JSON.stringify(e));
    })
  }

  actualizarBioma(bioma_id:string, minecraft_bioma_id:string, bioma_nombre:string, bioma_descripcion:string){
    return this.database.executeSql('UPDATE bioma SET minecraft_bioma_id = ?, bioma_nombre = ?, bioma_descripcion = ? WHERE bioma_id = ?',[minecraft_bioma_id, bioma_nombre, bioma_descripcion, bioma_id]).then(res=>{
      this.presentAlert("Modificar", "Bioma Modificado");
      this.traerBiomas();
    }).catch(e=>{
      this.presentAlert('Modificar', 'Error: ' + JSON.stringify(e));
    })
  }

  agregarBiomas(minecraft_bioma_id: string, bioma_nombre:string, bioma_descripcion:string){
    return this.database.executeSql('INSERT INTO bioma(minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (?, ?, ?)',[minecraft_bioma_id, bioma_nombre, bioma_descripcion]).then(res=>{
      this.presentAlert("Agregar", "Bioma Agregado");
      this.traerBiomas();
    }).catch(e=>{
      this.presentAlert('Agregar', 'Error: ' + JSON.stringify(e));
    })
  }

}

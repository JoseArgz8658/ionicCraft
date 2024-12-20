import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertController, Platform } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

import { ImageService } from 'src/app/services/image.service';

import { Biomas } from './biomas';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class BdService {
  public database!: SQLiteObject;

  //Creacion de las tablas
  tablaBiomas: string = "CREATE TABLE IF NOT EXISTS bioma(bioma_id INTEGER PRIMARY KEY AUTOINCREMENT, minecraft_bioma_id VARCHAR(100) NOT NULL, bioma_nombre VARCHAR(50) NOT NULL, bioma_descripcion TEXT NOT NULL, bioma_imagen blob NOT NULL);";

  tablaUsuarios: string = "CREATE TABLE IF NOT EXISTS usuario(usuario_id INTEGER PRIMARY KEY AUTOINCREMENT, usuario_tipo VARCHAR(10) NOT NULL, usuario_apodo VARCHAR(15) NOT NULL UNIQUE, usuario_gmail VARCHAR(100) NOT NULL UNIQUE, usuario_password VARCHAR(100) NOT NULL);";
  //Insertar los datos a las tablas
  //registroBioma1: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (1, 'dark_forest', 'Bosque Oscuro', 'Un bioma denso donde los árboles gigantes impiden que la luz solar alcance el suelo, creando áreas oscuras.');";

  //registroBioma2: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (2, 'desert', 'Desierto', 'Un bioma árido con vastas dunas de arena, cactus y muy poca vegetación. Hogar de pirámides y pozos.');";
  
  //registroBioma3: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (3, 'the_end', 'El End', 'Una dimensión misteriosa y oscura, hogar de los Enderman y el dragón del End. Su paisaje está formado por islas flotantes y estructuras antiguas.');";

  //registroBioma4: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (4, 'plains', 'Llanuras', 'Un bioma extenso y plano con pastos verdes, ideal para la construcción de estructuras y la cría de animales.');";
  
  //registroBioma5: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (5, 'jungle', 'Jungla', 'Un bioma denso con árboles altos y enredaderas, hogar de loros, ocelotes y templos antiguos.');";
  
  //registroBioma6: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (6, 'savanna', 'Sabana', 'Un bioma cálido y seco, con árboles de acacia y terrenos abiertos. Aquí se pueden encontrar aldeas y animales como caballos y llamas.');";
  
  //registroBioma7: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (7, 'taiga', 'Taiga', 'Un bioma frío con coníferas, lobos y nieve en las montañas más altas. Ideal para la supervivencia en climas extremos.');";
  
  //registroBioma8: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (8, 'swamp', 'Pantano', 'Un bioma pantanoso con agua estancada, árboles de roble cubiertos de enredaderas y hogares de brujas.');";
  
  //registroBioma9: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (9, 'mountains', 'Montañas', 'Un bioma montañoso con picos altos y riscos empinados, donde la nieve cubre las cumbres más elevadas.');";
  
  //registroBioma10: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (10, 'snowy_plains', 'Llanura Nevada', 'Un bioma helado con grandes áreas de nieve y muy poca vegetación. Los iglús pueden encontrarse aquí.');";
  
  //registroBioma11: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (11, 'mushroom_fields', 'Campos de Hongos', 'Un bioma raro cubierto de hongos gigantes, hogar de las vacas champiñón.');";
  
  //registroBioma12: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (12, 'badlands', 'Tierras Baldías', 'Un bioma seco y árido con montañas de terracota de colores brillantes. Los mineshafts son comunes aquí.');";
  
  //registroBioma13: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (13, 'beach', 'Playa', 'Un bioma estrecho de arena junto a cuerpos de agua como océanos, ríos o lagos.');";
  
  //registroBioma14: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (14, 'forest', 'Bosque', 'Un bioma lleno de árboles de roble y abeto. Es uno de los biomas más comunes.');";
  
  //registroBioma15: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (15, 'nether_wastes', 'Desiertos Del Nether', 'El bioma más común del Nether, con grandes áreas de netherrack y lava.');";
  
  //registroBioma16: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (16, 'crimson_forest', 'Bosque Carmesí', 'Un bioma del Nether con hongos gigantes y criaturas hostiles como piglins y hoglins.');";
  
  //registroBioma17: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (17, 'warped_forest', 'Bosque Distorsionado', 'Un bioma del Nether de color azul-verde, hogar de Enderman y estructuras extrañas.');";
  
  //registroBioma18: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (18, 'soul_sand_valley', 'Valle de Almas', 'Un bioma del Nether con grandes cantidades de arena de almas y columnas de basalto.');";
  
  //registroBioma19: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (19, 'basalt_deltas', 'Deltas de Basalto', 'Un bioma volcánico en el Nether, lleno de columnas de basalto y magma.');";
  
  //registroBioma20: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (20, 'ice_spikes', 'Picos de Hielo', 'Un bioma helado con grandes estructuras de hielo en forma de picos, un paisaje impresionante.');";
  
  //registroBioma21: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (21, 'meadow', 'Prado', 'Un bioma montañoso cubierto de flores, ideal para aldeas y la crianza de animales.');";
  
  //registroBioma22: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (22, 'lush_caves', 'Cuevas Frondosas', 'Un bioma subterráneo con plantas exóticas, lagos de agua y criaturas amigables como los ajolotes.');";
  
  //registroBioma23: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (23, 'dripstone_caves', 'Cuevas de Estalactitas', 'Un bioma subterráneo con formaciones rocosas puntiagudas, estalactitas y estalagmitas.');";
  
  //registroBioma24: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (24, 'deep_dark', 'Oscuridad Profunda', 'Un bioma subterráneo peligroso, hogar del Warden y las misteriosas ciudades antiguas.');";
  
  //registroBioma25: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (25, 'ocean', 'Océano', 'Un bioma marino extenso que cubre la mayor parte del mundo de Minecraft, hogar de criaturas acuáticas como delfines y peces.');";
  
  //registroBioma26: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (26, 'warm_ocean', 'Océano Cálido', 'Un bioma oceánico con aguas cálidas y arrecifes de coral, hogar de peces tropicales.');";
  
  //registroBioma27: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (27, 'frozen_ocean', 'Océano Congelado', 'Un bioma oceánico con grandes icebergs y criaturas como osos polares.');";
  
  //registroBioma28: string = "INSERT or IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion) VALUES (28, 'river', 'Río', 'Un bioma acuático que serpentea a través de otros biomas, ideal para la pesca y el transporte en bote.');";

  registroUsuario1: string = "INSERT OR IGNORE INTO usuario(usuario_id, usuario_tipo, usuario_apodo, usuario_gmail, usuario_password) VALUES ('1', 'admin', 'admin', 'admin@admin.admin', 'admin');";
  
  registroUsuario2: string = "INSERT OR IGNORE INTO usuario(usuario_id, usuario_tipo, usuario_apodo, usuario_gmail, usuario_password) VALUES ('2', 'usuario', 'JoseArgz', 'jo.aranguiza@gmail.com', 'duoc2024');";

  listaBiomas = new BehaviorSubject([]);
  listaUsuarios = new BehaviorSubject([]);

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public notificaciones = new BehaviorSubject<string | null>(null);
  enviarNotificacion(mensaje: string) {
    this.notificaciones.next(mensaje);
  }

  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController, private nativeStorage: NativeStorage, private imageService: ImageService) {
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
        //this.eliminarTablaBiomas();
        this.crearTablas();
        this.crearRegistros();
        this.traerBiomas();
        this.traerUsuarios();
        //cambiar el observable del estado de la base de datos
        this.isDBReady.next(true);
      }).catch(e=>{
        this.presentAlert('CrearBD()', 'Error: ' + JSON.stringify(e));
      })
    })
  }

  async crearTablas() {
    try{
      await this.database.executeSql(this.tablaBiomas, []);
      await this.database.executeSql(this.tablaUsuarios, []);
    }catch(e){
      this.presentAlert('CrearTablas()', 'Error: ' + JSON.stringify(e));
    }
  }

  async crearRegistros() {
    try{
      await this.registroBioma1();

      await this.database.executeSql(this.registroUsuario1, []);
      await this.database.executeSql(this.registroUsuario2, []);
    } catch(e) {
    this.presentAlert('crearRegistros()', 'Error: ' + JSON.stringify(e));
    }
  }

  fetchBiomas(): Observable<Biomas[]>{
    return this.listaBiomas.asObservable();
  }

  fetchUsuarios(): Observable<Usuarios[]>{
    return this.listaUsuarios.asObservable();
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

  //Inicio crear Registros de Biomas
  registroBioma1() {
    const imageUrl = 'assets/ImagesBiomas/bioma_bosque_oscuro.jpg';
    
    this.imageService.cargarImagen(imageUrl).subscribe(blob => {
      this.database.executeSql('INSERT OR IGNORE INTO bioma(bioma_id, minecraft_bioma_id, bioma_nombre, bioma_descripcion, bioma_imagen) VALUES (?, ?, ?, ?, ?)', [1, 'dark_forest', 'Bosque Oscuro', 'Un bioma denso donde los árboles gigantes impiden que la luz solar alcance el suelo, creando áreas oscuras.', blob])
      .then(() => {
        //this.presentAlert("Registrado", "Biomas Registrados");
      }).catch(e => {
        this.presentAlert('Error', 'No se pudo insertar el bioma: ' + JSON.stringify(e));
      });
    });
  }
  //Fin crear Registros de Biomas
  //Tabla Biomas
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
            bioma_descripcion: res.rows.item(i).bioma_descripcion,
            bioma_imagen: res.rows.item(i).bioma_imagen
          })
        }
      }
      //actualizo mi observable
      this.listaBiomas.next(items as any);
    })
  }

  eliminarBioma(id:string){
    return this.database.executeSql('DELETE FROM bioma WHERE bioma_id = ?',[id]).then(res=>{
      this.presentAlert("Eliminar", "Bioma Eliminado");
      this.traerBiomas();
    }).catch(e=>{
      this.presentAlert('Eliminar', 'Error: ' + JSON.stringify(e));
    })
  }

  actualizarBioma(bioma_id:string, minecraft_bioma_id:string, bioma_nombre:string, bioma_descripcion:string, bioma_imagen:Blob){
    return this.database.executeSql('UPDATE bioma SET minecraft_bioma_id = ?, bioma_nombre = ?, bioma_descripcion = ?, bioma_imagen = ? WHERE bioma_id = ?',[minecraft_bioma_id, bioma_nombre, bioma_descripcion, bioma_imagen, bioma_id]).then(res=>{
      this.presentAlert("Modificar", "Bioma Modificado");
      this.traerBiomas();
    }).catch(e=>{
      this.presentAlert('Modificar', 'Error: ' + JSON.stringify(e));
    })
  }

  agregarBiomas(minecraft_bioma_id: string, bioma_nombre:string, bioma_descripcion:string, bioma_imagen:Blob){
    return this.database.executeSql('INSERT INTO bioma(minecraft_bioma_id, bioma_nombre, bioma_descripcion, bioma_imagen) VALUES (?, ?, ?, ?)',[minecraft_bioma_id, bioma_nombre, bioma_descripcion, bioma_imagen]).then(res=>{
      this.presentAlert("Agregar", "Bioma Agregado");
      this.traerBiomas();
      this.enviarNotificacion(`Nuevo bioma creado: ${bioma_nombre}`);
    }).catch(e=>{
      this.presentAlert('Agregar', 'Error: ' + JSON.stringify(e));
    })
  }
  //Tabla Usuarios
  traerUsuarios(){
    return this.database.executeSql('SELECT * FROM usuario',[]).then(res=>{
      //variable para almacenar el resultado de la consulta
      let items: Usuarios[] = [];
      //verificar si trae o no registros
      if(res.rows.length > 0){
        //recorro los registros
        for(var i = 0; i < res.rows.length; i++){
          //agregar el registro a mi variable
          items.push({
            usuario_id: res.rows.item(i).usuario_id,
            usuario_tipo: res.rows.item(i).usuario_tipo,
            usuario_apodo: res.rows.item(i).usuario_apodo,
            usuario_gmail: res.rows.item(i).usuario_gmail,
            usuario_password: res.rows.item(i).usuario_password
          })
        }
      }
      //actualizo mi observable
      this.listaUsuarios.next(items as any);
    })
  }

  eliminarUsuario(id:string){
    return this.database.executeSql('DELETE FROM usuario WHERE usuario_id = ?',[id]).then(res=>{
      this.presentAlert("Eliminar", "Usuario Eliminado");
      this.traerUsuarios();
    }).catch(e=>{
      this.presentAlert('Eliminar', 'Error: ' + JSON.stringify(e));
    })
  }

  actualizarUsuario(usuario_id:string, usuario_tipo:string, usuario_apodo:string, usuario_gmail:string, usuario_password:string){
    return this.database.executeSql('UPDATE usuario SET usuario_tipo = ?, usuario_apodo = ?, usuario_gmail = ?, usuario_password = ? WHERE usuario_id = ?',[usuario_tipo, usuario_apodo, usuario_gmail, usuario_password, usuario_id]).then(res=>{
      this.presentAlert("Modificar", "Usuario Modificado");
      this.traerUsuarios();
    }).catch(e=>{
      this.presentAlert('Modificar', 'Error: ' + JSON.stringify(e));
    })
  }

  agregarUsuarios(usuario_tipo: string, usuario_apodo:string, usuario_gmail:string, usuario_password:string){
    return this.database.executeSql('INSERT INTO usuario(usuario_tipo, usuario_apodo, usuario_gmail, usuario_password) VALUES (?, ?, ?, ?)',[usuario_tipo, usuario_apodo, usuario_gmail, usuario_password]).then(res=>{
      this.presentAlert("Agregar", "Usuario Agregado");
      this.traerUsuarios();
    }).catch(e=>{
      this.presentAlert('Agregar', 'Error: ' + JSON.stringify(e));
    })
  }
  
  //INICIO "INICIO SESION"

  verificarUsuario(usuario_apodo: string, usuario_password: string): Promise<boolean> {
    return this.database.executeSql('SELECT * FROM usuario WHERE usuario_apodo = ? AND usuario_password = ?', [usuario_apodo, usuario_password]
    ).then(async (res) => {
      if (res.rows.length > 0) {

        const user = {
          id: res.rows.item(0).usuario_id,
          tipo: res.rows.item(0).usuario_tipo,
          apodo: res.rows.item(0).usuario_apodo,
          gmail: res.rows.item(0).usuario_gmail,
          password: res.rows.item(0).usuario_password
        };

        await this.nativeStorage.setItem('usuario', user);
        return true;
      } else {
        this.presentAlert('Error', 'Usuario no existe o contraseña incorrecta');
        return false;
      }
    }).catch(e => {
      this.presentAlert('Error', 'Error en la consulta: ' + JSON.stringify(e));
      return false;
    });
  }

  async cerrarSesion() {
    await this.nativeStorage.remove('usuario');
  }

  async obtenerUsuarioActivo() {
    return await this.nativeStorage.getItem('usuario');
  }
  //FIN "INICIO SESION"
  async verificarUsuarioPorApodoOCorreo(usuario: string): Promise<boolean> {
    const res = await this.database.executeSql('SELECT * FROM usuario WHERE usuario_apodo = ? OR usuario_gmail = ?', [usuario, usuario]);
    return res.rows.length > 0;
  }
  
  // Cambiar la contraseña del usuario
  async cambiarContra(usuario: string, nuevaContraseña: string): Promise<void> {
    const res = await this.database.executeSql('SELECT * FROM usuario WHERE usuario_apodo = ? OR usuario_gmail = ?', [usuario, usuario]);
    
    if (res.rows.length > 0) {
      const usuarioId = res.rows.item(0).usuario_id;
      await this.database.executeSql('UPDATE usuario SET usuario_password = ? WHERE usuario_id = ?', [nuevaContraseña, usuarioId]);
    }
  }

  async eliminarTablaBiomas() {
    try {
      await this.database.executeSql('DROP TABLE IF EXISTS bioma', []);
      console.log("Tabla 'bioma' eliminada.");
    } catch (e) {
      console.error("Error al eliminar tabla 'bioma':", e);
    }
  }

}

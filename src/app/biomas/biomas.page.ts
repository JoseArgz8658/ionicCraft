import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biomas',
  templateUrl: './biomas.page.html',
  styleUrls: ['./biomas.page.scss'],
})
export class BiomasPage implements OnInit {
  biomas = [
    {
      id: 'birch_forest', 
      nombre: 'Bosque de Abedules', 
      descripcion: 'Un bosque con una gran cantidad de abedules que cubren el paisaje, caracterizado por sus árboles altos y hojas verdes.', 
      imagen: 'assets/icon/bioma_bosque_abedules.jpg', 
      caracteristicas: [
        { nombre: 'Cesped', imagen: 'assets/icon/cesped.png' },
        { nombre: 'Tronco de abedul', imagen: 'assets/icon/tronco_abedul.jpg' },
        { nombre: 'Hojas de abedul', imagen: 'assets/icon/hojas_abedul.jpg' },
        { nombre: 'Colemna de abejas', imagen: 'assets/icon/colemna_abejas.jpg' }
      ],
      variantes: [
        { id: 'tall_birch_forest', nombre: 'Bosque de Abedules Altos' }
      ]
    },
    {
      id: 'dark_forest', 
      nombre: 'Bosque Oscuro', 
      descripcion: 'Un bioma denso donde los árboles gigantes impiden que la luz solar alcance el suelo, creando áreas oscuras.', 
      imagen: 'assets/icon/bioma_bosque_oscuro.jpg',
      caracteristicas: ['Árboles gigantes', 'Áreas oscuras', 'Estructuras de mansión'],
      variantes: []
    },
    {
      id: 'desert', 
      nombre: 'Desierto', 
      descripcion: 'Un bioma árido con vastas dunas de arena, cactus y muy poca vegetación. Hogar de pirámides y pozos.', 
      imagen: 'assets/icon/bioma_desierto.jpg',
      caracteristicas: ['Cactus', 'Arena', 'Pirámides', 'Pozos de agua'],
      variantes: [
        { id: 'desert_hills', nombre: 'Colinas Desérticas' },
        { id: 'desert_lakes', nombre: 'Lagos Desérticos' }
      ]
    },
    {
      id: 'the_end', 
      nombre: 'El End', 
      descripcion: 'Una dimensión misteriosa y oscura, hogar de los Enderman y el dragón del End. Su paisaje está formado por islas flotantes y estructuras antiguas.', 
      imagen: 'assets/icon/bioma_el_end.jpg',
      caracteristicas: ['Islas flotantes', 'Dragón del End', 'Enderman'],
      variantes: []
    },
    {
      id: 'plains', 
      nombre: 'Llanuras', 
      descripcion: 'Un bioma extenso y plano con pastos verdes, ideal para la construcción de estructuras y la cría de animales.', 
      imagen: 'assets/icon/bioma_llanuras.jpg',
      caracteristicas: ['Terreno plano', 'Pastos verdes', 'Animales comunes'],
      variantes: []
    },
    {
      id: 'jungle', 
      nombre: 'Jungla', 
      descripcion: 'Un bioma denso con árboles altos y enredaderas, hogar de loros, ocelotes y templos antiguos.', 
      imagen: 'assets/icon/bioma_jungla.jpg',
      caracteristicas: ['Árboles altos', 'Enredaderas', 'Templos antiguos'],
      variantes: [
        { id: 'bamboo_jungle', nombre: 'Jungla de Bambú' },
        { id: 'sparse_jungle', nombre: 'Jungla Dispersa' }
      ]
    },
    {
      id: 'savanna', 
      nombre: 'Sabana', 
      descripcion: 'Un bioma cálido y seco, con árboles de acacia y terrenos abiertos. Aquí se pueden encontrar aldeas y animales como caballos y llamas.', 
      imagen: 'assets/icon/bioma_sabana.jpg',
      caracteristicas: ['Árboles de acacia', 'Aldeas', 'Caballos y llamas'],
      variantes: [
        { id: 'shattered_savanna', nombre: 'Sabana Fragmentada' }
      ]
    },
    {
      id: 'taiga', 
      nombre: 'Taiga', 
      descripcion: 'Un bioma frío con coníferas, lobos y nieve en las montañas más altas. Ideal para la supervivencia en climas extremos.', 
      imagen: 'assets/icon/bioma_taiga.jpg',
      caracteristicas: ['Coníferas', 'Nieve', 'Lobos'],
      variantes: [
        { id: 'taiga_hills', nombre: 'Colinas de Taiga' },
        { id: 'snowy_taiga', nombre: 'Taiga Nevada' }
      ]
    },
    {
      id: 'swamp', 
      nombre: 'Pantano', 
      descripcion: 'Un bioma pantanoso con agua estancada, árboles de roble cubiertos de enredaderas y hogares de brujas.', 
      imagen: 'assets/icon/bioma_pantano.jpg',
      caracteristicas: ['Árboles de roble', 'Enredaderas', 'Brujas'],
      variantes: [
        { id: 'mangrove_swamp', nombre: 'Pantano de Manglares' }
      ]
    },
    {
      id: 'mountains', 
      nombre: 'Montañas', 
      descripcion: 'Un bioma montañoso con picos altos y riscos empinados, donde la nieve cubre las cumbres más elevadas.', 
      imagen: 'assets/icon/bioma_montanas.jpg',
      caracteristicas: ['Picos altos', 'Nieve', 'Riscos empinados'],
      variantes: [
        { id: 'gravelly_mountains', nombre: 'Montañas de Grava' },
        { id: 'snowy_mountains', nombre: 'Montañas Nevadas' }
      ]
    },
    {
      id: 'snowy_plains', 
      nombre: 'Llanura Nevada', 
      descripcion: 'Un bioma helado con grandes áreas de nieve y muy poca vegetación. Los iglús pueden encontrarse aquí.', 
      imagen: 'assets/icon/bioma_llanura_nevada.jpg',
      caracteristicas: ['Nieve', 'Iglús', 'Poca vegetación'],
      variantes: []
    },
    {
      id: 'mushroom_fields', 
      nombre: 'Campos de Hongos', 
      descripcion: 'Un bioma raro cubierto de hongos gigantes, hogar de las vacas champiñón.', 
      imagen: 'assets/icon/bioma_campo_hongos.jpg',
      caracteristicas: ['Hongos gigantes', 'Vacas champiñón', 'Suelo de micelio'],
      variantes: []
    },
    {
      id: 'badlands', 
      nombre: 'Tierras Baldías', 
      descripcion: 'Un bioma seco y árido con montañas de terracota de colores brillantes. Los mineshafts son comunes aquí.', 
      imagen: 'assets/icon/bioma_tierras_baldias.jpg',
      caracteristicas: ['Terracota', 'Mineshafts', 'Colinas de colores'],
      variantes: [
        { id: 'eroded_badlands', nombre: 'Tierras Baldías Erosionadas' }
      ]
    },
    {
      id: 'beach', 
      nombre: 'Playa', 
      descripcion: 'Un bioma estrecho de arena junto a cuerpos de agua como océanos, ríos o lagos.', 
      imagen: 'assets/icon/bioma_playa.jpg',
      caracteristicas: ['Arena', 'Agua', 'Caracoles'],
      variantes: []
    },
    {
      id: 'forest', 
      nombre: 'Bosque', 
      descripcion: 'Un bioma lleno de árboles de roble y abeto. Es uno de los biomas más comunes.', 
      imagen: 'assets/icon/bioma_bosque.jpg',
      caracteristicas: ['Árboles de roble', 'Árboles de abeto', 'Animales comunes'],
      variantes: []
    },
    {
      id: 'nether_wastes', 
      nombre: 'Desiertos Del Nether', 
      descripcion: 'El bioma más común del Nether, con grandes áreas de netherrack y lava.', 
      imagen: 'assets/icon/bioma_desiertos_del_nether.jpg',
      caracteristicas: ['Netherrack', 'Lava', 'Ghasts y piglins'],
      variantes: []
    },
    {
      id: 'crimson_forest', 
      nombre: 'Bosque Carmesí', 
      descripcion: 'Un bioma del Nether con hongos gigantes y criaturas hostiles como piglins y hoglins.', 
      imagen: 'assets/icon/bioma_bosque_carmesi.jpg',
      caracteristicas: ['Hongos gigantes', 'Piglins', 'Hoglins'],
      variantes: []
    },
    {
      id: 'warped_forest', 
      nombre: 'Bosque Distorsionado', 
      descripcion: 'Un bioma del Nether de color azul-verde, hogar de Enderman y estructuras extrañas.', 
      imagen: 'assets/icon/bioma_bosque_distorsionado.jpg',
      caracteristicas: ['Tonos azul-verde', 'Enderman', 'Estructuras extrañas'],
      variantes: []
    },
    {
      id: 'soul_sand_valley', 
      nombre: 'Valle de Almas', 
      descripcion: 'Un bioma del Nether con grandes cantidades de arena de almas y columnas de basalto.', 
      imagen: 'assets/icon/bioma_valle_de_almas.jpg',
      caracteristicas: ['Arena de almas', 'Columnas de basalto', 'Ghasts'],
      variantes: []
    },
    {
      id: 'basalt_deltas', 
      nombre: 'Deltas de Basalto', 
      descripcion: 'Un bioma volcánico en el Nether, lleno de columnas de basalto y magma.', 
      imagen: 'assets/icon/bioma_deltas_de_basalto.jpg',
      caracteristicas: ['Columnas de basalto', 'Lagos de magma', 'Magmacubos'],
      variantes: []
    },
    {
      id: 'ice_spikes',
      nombre: 'Picos de Hielo',
      descripcion: 'Un bioma helado con grandes estructuras de hielo en forma de picos, un paisaje impresionante.',
      imagen: 'assets/icon/bioma_picos_de_hielo.jpg',
      caracteristicas: ['Picos de hielo', 'Nieve', 'Frío extremo'],
      variantes: []
    },
    {
      id: 'meadow',
      nombre: 'Prado',
      descripcion: 'Un bioma montañoso cubierto de flores, ideal para aldeas y la crianza de animales.',
      imagen: 'assets/icon/bioma_prado.jpg',
      caracteristicas: ['Flores', 'Terreno montañoso', 'Vegetación abundante'],
      variantes: []
    },
    {
      id: 'lush_caves',
      nombre: 'Cuevas Frondosas',
      descripcion: 'Un bioma subterráneo con plantas exóticas, lagos de agua y criaturas amigables como los ajolotes.',
      imagen: 'assets/icon/bioma_cuevas_frondosas.jpg',
      caracteristicas: ['Plantas exóticas', 'Lagos subterráneos', 'Ajolotes'],
      variantes: []
    },
    {
      id: 'dripstone_caves',
      nombre: 'Cuevas de Estalactitas',
      descripcion: 'Un bioma subterráneo con formaciones rocosas puntiagudas, estalactitas y estalagmitas.',
      imagen: 'assets/icon/bioma_cuevas_estalactitas.jpg',
      caracteristicas: ['Estalactitas', 'Estalagmitas', 'Rocas puntiagudas'],
      variantes: []
    },
    {
      id: 'deep_dark',
      nombre: 'Oscuridad Profunda',
      descripcion: 'Un bioma subterráneo peligroso, hogar del Warden y las misteriosas ciudades antiguas.',
      imagen: 'assets/icon/bioma_oscuridad_profunda.jpg',
      caracteristicas: ['Ciudad antigua', 'Warden', 'Oscuridad extrema'],
      variantes: []
    },
    {
      id: 'ocean',
      nombre: 'Océano',
      descripcion: 'Un bioma marino extenso que cubre la mayor parte del mundo de Minecraft, hogar de criaturas acuáticas como delfines y peces.',
      imagen: 'assets/icon/bioma_oceano.jpg',
      caracteristicas: ['Agua profunda', 'Delfines', 'Peces'],
      variantes: []
    },
    {
      id: 'warm_ocean',
      nombre: 'Océano Cálido',
      descripcion: 'Un bioma oceánico con aguas cálidas y arrecifes de coral, hogar de peces tropicales.',
      imagen: 'assets/icon/bioma_oceano_calido.jpg',
      caracteristicas: ['Arrecifes de coral', 'Peces tropicales', 'Aguas cálidas'],
      variantes: []
    },
    {
      id: 'frozen_ocean',
      nombre: 'Océano Congelado',
      descripcion: 'Un bioma oceánico con grandes icebergs y criaturas como osos polares.',
      imagen: 'assets/icon/bioma_oceano_congelado.jpg',
      caracteristicas: ['Icebergs', 'Oso polar', 'Agua congelada'],
      variantes: []
    },
    {
      id: 'river',
      nombre: 'Río',
      descripcion: 'Un bioma acuático que serpentea a través de otros biomas, ideal para la pesca y el transporte en bote.',
      imagen: 'assets/icon/bioma_rio.jpg',
      caracteristicas: ['Corriente de agua', 'Pesca', 'Transporte en bote'],
      variantes: []
    }
  ];  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBiomaContenido(bioma: any) {
    this.router.navigate(['/bioma-contenido', { bioma: JSON.stringify(bioma) }]);
  }
  
}

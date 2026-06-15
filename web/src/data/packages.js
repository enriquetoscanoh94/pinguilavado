export const TIER = Object.freeze({
  SILVER:   'silver',
  GOLDEN:   'golden',
  PLATINUM: 'platinum',
  DIAMOND:  'diamond',
  EXTRAS:   'extras'
});

export const packages = [
  {
    id: TIER.SILVER,
    name:    { en: 'Standar Wash',     es: 'Lavado Estandar' },
    accent:  '#9ca3af',
    ribbon:  null,
    description: {
      en: [
        'Hand wash, wheels, tires',
        'Vacuum inside / cup holders, windows',
        'Wipe down',
        'Tire dressing',
        'Interior fragrance'
      ],
      es: [
        'Lavado a mano, rines y llantas',
        'Aspirado interior / portavasos, ventanas',
        'Limpieza con pano (wipe down)',
        'Brillo en llantas',
        'Aromatizante interior'
      ]
    },
    prices: {
      sedan:  { price: 70,  time: 60  },
      midSuv: { price: 85,  time: 85  },
      truck:  { price: 100, time: 115 }
    }
  },
  {
    id: TIER.GOLDEN,
    name:    { en: 'Golden Full Detail', es: 'Golden Detallado Completo' },
    accent:  '#f59e0b',
    ribbon:  'popular',
    description: {
      en: [
        'Full exterior hand wash',
        'Bug removal',
        'Tires dressed',
        'Detail wheels & wheel wells',
        'Interior compressed air blowout',
        'Dust panels, dashboard, console',
        'Dashboard UV protection',
        'Interior & exterior windows cleaned',
        'Door jambs detailed',
        'Interior vacuumed',
        'Carpets shampooed',
        'Seats shampooed or leather treated'
      ],
      es: [
        'Lavado exterior completo a mano',
        'Remocion de insectos',
        'Brillo en llantas',
        'Detallado de rines y guardafangos',
        'Soplado interior con aire comprimido',
        'Limpieza de paneles, tablero y consola',
        'Proteccion UV para el tablero',
        'Ventanas interior y exterior',
        'Detallado de marcos de puertas',
        'Aspirado interior',
        'Shampoo de alfombras',
        'Shampoo de asientos o tratamiento de piel'
      ]
    },
    prices: {
      sedan:  { price: 185, time: 150 },
      midSuv: { price: 230, time: 180 },
      truck:  { price: 280, time: 210 }
    }
  },
  {
    id: TIER.PLATINUM,
    name:    { en: 'Platinum Deluxe Detail', es: 'Platinum Deluxe Detallado' },
    accent:  '#a855f7',
    ribbon:  null,
    description: {
      en: [
        'Extra detailed hand wash',
        'Interior deep cleaning',
        'Seat and carpet shampoo (extraction)',
        'Tire and rim cleaning',
        'Plastic and trim shine',
        'Tire shine applied',
        'Odor removal',
        'Door jamb cleaning',
        'Interior dressing (UV protection)',
        'Paint sealant / wax',
        'Air freshener',
        'Air blower vacuum',
        'Roof cleaning'
      ],
      es: [
        'Lavado a mano extra detallado',
        'Limpieza profunda del interior',
        'Shampoo de asientos y alfombras (extraccion)',
        'Limpieza de llantas y rines',
        'Brillo en plasticos y molduras',
        'Aplicacion de brillo en llantas',
        'Eliminacion de olores',
        'Limpieza de marcos de puertas',
        'Acondicionado interior (proteccion UV)',
        'Sellador / cera de pintura',
        'Aromatizante',
        'Aspirado con soplador',
        'Limpieza de techo'
      ]
    },
    prices: {
      sedan:  { price: 240, time: 180 },
      midSuv: { price: 280, time: 240 },
      truck:  { price: 350, time: 300 }
    }
  },
  {
    id: TIER.DIAMOND,
    name:    { en: 'Diamond Premium Detail', es: 'Diamond Premium Detallado' },
    accent:  '#06b6d4',
    ribbon:  'premium',
    description: {
      en: [
        'Complete exterior + interior premium detail',
        'Full clay bar treatment',
        'Paint correction & high gloss polish',
        'Deep extraction of seats and carpets',
        'Premium ceramic-grade sealant',
        'Leather conditioning treatment',
        'Engine bay cleaning',
        'Headlight restoration',
        'Premium odor neutralizer',
        'Full UV protection inside & out'
      ],
      es: [
        'Detallado premium completo exterior + interior',
        'Tratamiento con barra de arcilla',
        'Correccion de pintura y pulido brillante',
        'Extraccion profunda de asientos y alfombras',
        'Sellador grado ceramico premium',
        'Acondicionado de piel',
        'Limpieza del compartimiento del motor',
        'Restauracion de faros',
        'Neutralizador premium de olores',
        'Proteccion UV completa interior y exterior'
      ]
    },
    prices: {
      sedan:  { price: 325, time: 180 },
      midSuv: { price: 355, time: 225 },
      truck:  { price: 395, time: 275 }
    }
  },
  {
    id: TIER.EXTRAS,
    name:    { en: 'Extras Services', es: 'Servicios Extras' },
    accent:  '#c084fc',
    ribbon:  null,
    description: {
      en: [
        'Pet hair remover',
        'Water spot remover',
        'Single seats shampoo',
        'Wax',
        'Headlights restoration'
      ],
      es: [
        'Removedor de pelo de mascotas',
        'Removedor de manchas de agua',
        'Shampoo de asientos individuales',
        'Cera',
        'Restauracion de faros'
      ]
    },
    prices: null
  }
];

export const vehicleTypes = [
  { id: 'sedan',  name: { en: 'Coupe / Sedan',     es: 'Coupe / Sedan' } },
  { id: 'midSuv', name: { en: 'Mid-Sized SUV',     es: 'SUV Mediana' } },
  { id: 'truck',  name: { en: 'Large SUV / Truck', es: 'SUV Grande / Camioneta' } }
];

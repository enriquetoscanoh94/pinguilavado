export const translations = {
  en: {
    nav: {
      home: 'Home', services: 'Services', gallery: 'Gallery',
      reviews: 'Reviews',
      about: 'About', contact: 'Contact', bookNow: 'Book Now',
      openMenu: 'Open menu', closeMenu: 'Close menu',
      toggleTheme: 'Toggle theme', toggleLang: 'Switch language'
    },
    hero: {
      tagline: 'Mobile Auto Detailing',
      titleParts: ['We Bring The', 'Shine', 'To You'],
      subtitle: 'Premium hand wash and detailing — we come to your driveway, office or garage.',
      cta1: 'See Packages',
      cta2: 'Call Now',
      badges: ['Mobile Service', 'Hand Wash', 'Premium Detail']
    },
    services: {
      title: 'Our Packages',
      subtitle: 'Choose the right detail for your ride',
      vehicleLabel: 'Vehicle type',
      priceFrom: 'From',
      duration: 'min',
      bookBtn: 'Book this package',
      priceQuote: 'Price varies',
      priceQuoteShort: 'Quote',
      priceQuoteNote: 'per vehicle',
      ribbon: { popular: 'Most Popular', premium: 'Premium' },
      smsTemplate: (pkg) => `Hi! I want to book the ${pkg}.`
    },
    gallery: {
      title: 'Our Work',
      subtitle: 'Real cars. Real shine.',
      openImage: 'Open image',
      closeLightbox: 'Close image'
    },
    reviews: {
      title: 'Google Reviews',
      subtitle: 'What our customers are saying',
      ratedOn: 'on Google',
      seeAll: 'See all reviews on Google',
      writeOne: 'Leave a review',
      basedOn: (n) => `Based on ${n} reviews`
    },
    about: {
      title: 'About The Penguin',
      lead: "We're a mobile auto detailing service in Georgia, USA.",
      p1: 'Owned and operated by Erik Cortes Lopez, The Penguin Auto Mobile Detailing brings premium hand wash and full detail service directly to your location.',
      p2: 'We treat every car like our own — every crack, crevice, rim and panel gets the attention it deserves.',
      stickerYears: 'Years',
      stickerExp: 'Experience',
      features: [
        { title: 'Mobile Service',  desc: 'We come to you' },
        { title: 'Premium Products', desc: 'Best in the market' },
        { title: 'Trusted Owner',   desc: 'Direct with Erik' },
        { title: '5-Star Service',  desc: 'Detail by detail' }
      ]
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to book? Call or message us on WhatsApp.',
      phoneLabel: 'Phone',
      whatsappLabel: 'WhatsApp',
      mapsLabel: 'Find Us',
      followUs: 'Follow Us',
      callBtn: 'Call Now',
      whatsappBtn: 'Chat on WhatsApp',
      mapsBtn: 'Open in Maps',
      whatsappBody: 'Hi! I would like to book a detail.',
      floatingLabel: 'Chat with us on WhatsApp'
    },
    footer: {
      tagline: 'Mobile Auto Detailing',
      rights: 'All rights reserved.',
      built: 'Built with care'
    }
  },
  es: {
    nav: {
      home: 'Inicio', services: 'Servicios', gallery: 'Galeria',
      reviews: 'Resenas',
      about: 'Nosotros', contact: 'Contacto', bookNow: 'Agendar',
      openMenu: 'Abrir menu', closeMenu: 'Cerrar menu',
      toggleTheme: 'Cambiar tema', toggleLang: 'Cambiar idioma'
    },
    hero: {
      tagline: 'Detallado Movil de Autos',
      titleParts: ['Llevamos El', 'Brillo', 'A Ti'],
      subtitle: 'Lavado a mano y detallado premium — vamos a tu casa, oficina o garage.',
      cta1: 'Ver Paquetes',
      cta2: 'Llama Ahora',
      badges: ['Servicio Movil', 'Lavado a Mano', 'Detallado Premium']
    },
    services: {
      title: 'Nuestros Paquetes',
      subtitle: 'Elige el detallado ideal para tu auto',
      vehicleLabel: 'Tipo de vehiculo',
      priceFrom: 'Desde',
      duration: 'min',
      bookBtn: 'Agendar paquete',
      priceQuote: 'Precio variable',
      priceQuoteShort: 'Cotizar',
      priceQuoteNote: 'segun auto',
      ribbon: { popular: 'Mas Popular', premium: 'Premium' },
      smsTemplate: (pkg) => `Hola! Quiero agendar el ${pkg}.`
    },
    gallery: {
      title: 'Nuestro Trabajo',
      subtitle: 'Autos reales. Brillo real.',
      openImage: 'Abrir imagen',
      closeLightbox: 'Cerrar imagen'
    },
    reviews: {
      title: 'Resenas de Google',
      subtitle: 'Lo que dicen nuestros clientes',
      ratedOn: 'en Google',
      seeAll: 'Ver todas las resenas en Google',
      writeOne: 'Dejar una resena',
      basedOn: (n) => `Basado en ${n} resenas`
    },
    about: {
      title: 'Sobre The Penguin',
      lead: 'Somos un servicio movil de detallado de autos en Georgia, USA.',
      p1: 'Operado por Erik Cortes Lopez, The Penguin Auto Mobile Detailing lleva el lavado a mano premium y el detallado completo directo a tu ubicacion.',
      p2: 'Tratamos cada auto como si fuera nuestro — cada grieta, rincon, rin y panel recibe la atencion que merece.',
      stickerYears: 'Anos',
      stickerExp: 'Experiencia',
      features: [
        { title: 'Servicio Movil',     desc: 'Vamos a ti' },
        { title: 'Productos Premium',  desc: 'Los mejores del mercado' },
        { title: 'Dueno de Confianza', desc: 'Trato directo con Erik' },
        { title: 'Servicio 5 Estrellas', desc: 'Detalle por detalle' }
      ]
    },
    contact: {
      title: 'Contactanos',
      subtitle: 'Listo para agendar? Llama o escribenos por WhatsApp.',
      phoneLabel: 'Telefono',
      whatsappLabel: 'WhatsApp',
      mapsLabel: 'Encuentranos',
      followUs: 'Siguenos',
      callBtn: 'Llamar Ahora',
      whatsappBtn: 'Chatear por WhatsApp',
      mapsBtn: 'Abrir en Maps',
      whatsappBody: 'Hola! Me gustaria agendar un detallado.',
      floatingLabel: 'Chatea con nosotros por WhatsApp'
    },
    footer: {
      tagline: 'Detallado Movil de Autos',
      rights: 'Todos los derechos reservados.',
      built: 'Hecho con dedicacion'
    }
  }
};

// ─────────────────────────────────────────────
//  SPECTRA NETWORKS — Site Data
//  Edit this file to update all page content.
// ─────────────────────────────────────────────

export const business = {
  name:            "Spectra Networks",
  phone:           "787-669-2899",
  whatsapp:        "17876692899",
  whatsappDefault: "Hola%2C+me+interesa+verificar+cobertura+en+mi+%C3%A1rea",
  whatsappBiz:     "Hola%2C+me+interesa+internet+para+mi+negocio",
  whatsappBP:      "Hola%2C+me+interesa+el+plan+Business+Pro",
  address:         "2429 Paseo Perla del Sur, Ponce, PR 00717",
  city:            "Ponce, Puerto Rico",
  founded:         2016,
  rating:          4.2,
  reviews:         46,
  mapsUrl:         "https://maps.google.com/?q=Spectra+Networks+Ponce+PR",
};

export const stats = [
  { value: 2016, suffix: "",   decimals: 0, label: "Establecidos en Ponce" },
  { value: 46,   suffix: "+",  decimals: 0, label: "Reseñas en Google"    },
  { value: 4.2,  suffix: "★",  decimals: 1, label: "Calificación promedio" },
  { value: 24,   suffix: "/7", decimals: 0, label: "Soporte técnico"       },
];

export const trustItems = [
  "Sin contrato",
  "Sin penalidades",
  "Cero cargos ocultos",
  "Servicio local desde 2016",
  "Instalación gratis hasta 80 pies",
  "Internet ilimitado",
];

export const plans = [
  {
    id:       "basico",
    tag:      "Residencial",
    tagStyle: "basic",
    name:     "Básico",
    price:    "$53.53",
    priceLabel: "desde",
    period:   "/mes",
    speed:    "Hasta 25 Mbps",
    desc:     "Ideal para navegación, redes sociales y streaming básico en el hogar.",
    features: [
      "Internet ilimitado",
      "Sin contrato ni penalidades",
      "Instalación gratis hasta 80 pies",
      "Soporte local incluido",
    ],
    cta:      "Verificar cobertura",
    ctaHref:  "#cobertura",
    featured: false,
  },
  {
    id:       "hogar-plus",
    tag:      "Más popular",
    tagStyle: "popular",
    name:     "Hogar Plus",
    price:    "Consultar",
    priceLabel: "precio",
    period:   "",
    speed:    "Hasta 50 Mbps",
    desc:     "Para familias con múltiples dispositivos, streaming HD y trabajo remoto.",
    features: [
      "Internet ilimitado",
      "Sin contrato ni penalidades",
      "Instalación gratis hasta 80 pies",
      "Soporte local prioritario",
      "Ideal para trabajo remoto",
    ],
    cta:      "Consultar precio",
    ctaHref:  "#cobertura",
    featured: true,
  },
  {
    id:       "business-pro",
    tag:      "Negocios",
    tagStyle: "biz",
    name:     "Business Pro",
    price:    "Consultar",
    priceLabel: "precio",
    period:   "",
    speed:    "Hasta 100 Mbps",
    desc:     "Conectividad robusta para negocios, oficinas y comercios en Ponce.",
    features: [
      "Alta velocidad simétrica",
      "IP fija disponible",
      "SLA de tiempo de respuesta",
      "Soporte técnico dedicado",
      "Sin contrato forzoso",
    ],
    cta:      "Hablar con ventas",
    ctaHref:  "wa",           // special value — component renders WhatsApp link
    featured: false,
  },
];

export const pueblos = [
  "Ponce", "Juana Díaz", "Santa Isabel", "Coamo",
  "Villalba", "Peñuelas", "Guayanilla", "Yauco", "Otro",
];

export const techCards = [
  {
    icon: "fiber",
    title: "Fibra Óptica como Base",
    desc: "Columna vertebral de alta capacidad que garantiza velocidades consistentes y latencia ultrabaja.",
  },
  {
    icon: "wireless",
    title: "Transmisores Inalámbricos",
    desc: "Distribución de señal a través de transmisores y repetidores de radio de alta frecuencia.",
  },
  {
    icon: "check-circle",
    title: "Red Redundante",
    desc: "Diseñada para minimizar interrupciones. Si un nodo falla, la red redirige automáticamente.",
  },
  {
    icon: "map-pin",
    title: "Infraestructura Local",
    desc: "Todo en Ponce. Tiempos de respuesta rápidos, técnicos locales, decisiones de aquí.",
  },
];

export const diagNodes = [
  { label: "Hogar",    top: "8%",  left: "50%" },
  { label: "Negocio",  top: "34%", left: "89%" },
  { label: "Oficina",  top: "84%", left: "76%" },
  { label: "Comercio", top: "84%", left: "11%" },
  { label: "Hogar+",   top: "34%", left: "11%" },
];

export const whyItems = [
  { icon: "clock",       title: "Internet 24/7",           desc: "Conexión constante las 24 horas del día, los 7 días de la semana." },
  { icon: "link",        title: "Internet Ilimitado",       desc: "Sin límites de datos ni throttling. Usa cuanto necesites, cuando quieras." },
  { icon: "wrench",      title: "Instalación Gratis",       desc: "Instalación sin costo hasta 80 pies lineales incluida en tu plan." },
  { icon: "shield-check",title: "Sin Contrato",             desc: "Sin compromisos a largo plazo. Sin penalidades. Sin letra pequeña." },
  { icon: "users",       title: "Soporte Local",            desc: "Técnicos de Ponce que conocen tu área y responden rápido." },
  { icon: "eye",         title: "Precios Transparentes",    desc: "Lo que ves es lo que pagas. Cero cargos ocultos ni sorpresas." },
];

export const bizFeatures = [
  { title: "Alta Disponibilidad",  desc: "SLA garantizado para que tu negocio nunca pare." },
  { title: "IP Fija Disponible",   desc: "Para cámaras, servidores, VPN y sistemas POS." },
  { title: "Escalable",            desc: "Aumenta tu ancho de banda según crezca tu negocio." },
  { title: "Soporte Prioritario",  desc: "Técnico dedicado con tiempo de respuesta rápido." },
];

export const testimonials = [
  { name: "Carlos M.", rating: 5, text: "Llevaba años con el servicio malo de las grandes compañías. Con Spectra la diferencia es brutal. Siempre tengo señal y el precio es justo." },
  { name: "María T.",  rating: 5, text: "El servicio al cliente es excelente. Cuando tuve un problema lo resolvieron ese mismo día. Se nota que son locales y les importa su comunidad." },
  { name: "Roberto L.",rating: 4, text: "Lo contraté para mi negocio y ha sido una buena decisión. Precio razonable, sin contrato y funciona bien para el día a día de la oficina." },
  { name: "Ana G.",    rating: 5, text: "Sin contratos, sin letra pequeña. Todo claro desde el principio. Llevo más de un año con Spectra y no he tenido problemas serios." },
];

export const faqs = [
  {
    q: "¿Necesito firmar un contrato?",
    a: "No. Spectra no requiere contratos a largo plazo. Puedes cancelar tu servicio cuando quieras, sin penalidades de ningún tipo.",
  },
  {
    q: "¿Cuánto cuesta la instalación?",
    a: "La instalación es gratis hasta 80 pies lineales de cable. Si tu dirección requiere más cable, se cotiza por separado antes de proceder.",
  },
  {
    q: "¿Cómo sé si hay cobertura en mi área?",
    a: "Rellena el formulario de verificación en esta página o llámanos al 787-669-2899. Nuestro equipo confirma disponibilidad en menos de 24 horas.",
  },
  {
    q: "¿Tienen internet para negocios?",
    a: "Sí. Ofrecemos el plan Business Pro con mayor velocidad, IP fija disponible y soporte prioritario para comercios y empresas en Ponce.",
  },
  {
    q: "¿Cómo es el pago mensual?",
    a: "El pago es mensual, sin sorpresas. El precio que ves en tu plan es el precio que pagas. No hay cargos ocultos ni tarifas adicionales.",
  },
  {
    q: "¿Qué tecnología usan para la conexión?",
    a: "Usamos fibra óptica como base de nuestra red y transmisores inalámbricos de radio para distribuir la conexión a hogares y negocios con alta velocidad y estabilidad.",
  },
  {
    q: "¿Cuánto tiempo tarda la instalación?",
    a: "Una vez verificada la cobertura, coordinamos una visita técnica. La instalación típicamente toma entre 1 y 2 horas dependiendo de la dirección.",
  },
];

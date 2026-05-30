const productosDemo = [
    // ==========================================================================
    // 01. SCOOTERS (Páginas 4-26)
    // ==========================================================================
    {
        id: "hw-m1-elite",
        proveedor: "Honey Whale",
        region: "puebla",
        categoria: "Scooters",
        nombre: "Scooter M1 Elite",
        descripcion: "Tan ligero que hasta un niño puede manejarlo y es plegable para caber en cualquier rincón de tu casa.",
        precioContado: 7499,
        quincena: 375,
        imgPrincipal: "imagenes-catalogo-honey-whale/scooter_m1_elite.png",
        imgSecundaria: "imagenes-catalogo-honey-whale/scooter_m1_elite.png",
        specs: { "Vel. Máxima": "≤25 KM/H", "Autonomía": "≤16 KM", "Batería": "36V/5.2AH", "Motor": "400-500W", "Soporte Máx.": "120 KG", "Material": "Metal" }
    },
    {
        id: "hw-gt1",
        proveedor: "Honey Whale",
        region: "all",
        categoria: "Scooters",
        nombre: "Scooter GT1 Potencia Pro",
        descripcion: "El más veloz de todos: una impresionante experiencia única que redefine lo que es conducir un scooter.",
        precioContado: 24500,
        quincena: 1225,
        imgPrincipal: "imagenes-catalogo-honey-whale/scooter_gt1_potencial_pro.png",
        imgSecundaria: "imagenes-catalogo-honey-whale/scooter_gt1_potencial_pro.png",
        specs: { "Vel. Máxima": "≤100 KM/H", "Autonomía": "≤100 KM", "Batería": "60V/29.4AH", "Motor": "3500Wx2 (Doble)", "Soporte Máx.": "120 KG", "Material": "Acero" }
    },

    // ==========================================================================
    // 02. BICICLETAS (Páginas 27-38)
    // ==========================================================================
    {
        id: "hw-f6",
        proveedor: "Honey Whale",
        region: "cholula",
        categoria: "Bicicletas",
        nombre: "Bicicleta Eléctrica F6",
        descripcion: "Bicicleta con diseño delgado y batería extraíble, equipada con una plancha de carga para llevar tus cosas.",
        precioContado: 14999,
        quincena: 750,
        imgPrincipal: "imagenes-catalogo-honey-whale/bicicleta_electrica_f6.png",
        imgSecundaria: "imagenes-catalogo-honey-whale/bicicleta_electrica_f6.png",
        specs: { "Vel. Máxima": "≤40 KM/H", "Autonomía": "≤45 KM", "Batería": "48V/10.4AH", "Motor": "500-790W", "Soporte Máx.": "120 KG", "Material": "Aluminio" }
    },
    {
        id: "hw-k6-pro",
        proveedor: "Honey Whale",
        region: "xicotepec",
        categoria: "Bicicletas",
        nombre: "Bicicleta K6 Pro Rendimiento",
        descripcion: "Bicicleta de alto rendimiento con amortiguación eficiente, perfecta para terrenos irregulares de la sierra.",
        precioContado: 17800,
        quincena: 890,
        imgPrincipal: "imagenes-catalogo-honey-whale/bicicleta_k6_pro_rendimiento.png",
        imgSecundaria: "imagenes-catalogo-honey-whale/bicicleta_k6_pro_rendimiento.png",
        specs: { "Vel. Máxima": "≤55 KM/H", "Autonomía": "≤62 KM", "Batería": "48V/15.6AH", "Motor": "850W", "Soporte Máx.": "120 KG", "Material": "Hierro" }
    },

    // ==========================================================================
    // 03. MOTOBICIS (Páginas 39-54)
    // ==========================================================================
    {
        id: "hw-u1",
        proveedor: "Honey Whale",
        region: "tehuacan",
        categoria: "Motobicis",
        nombre: "Motobici Ligera U1",
        descripcion: "Motobici compacta y cómoda, ideal para cualquier viaje diario. Su diseño te ofrece libertad de moverte fácilmente.",
        precioContado: 11500,
        quincena: 575,
        imgPrincipal: "imagenes-catalogo-honey-whale/motobici_ligera_u1.png",
        imgSecundaria: "imagenes-catalogo-honey-whale/motobici_ligera_u1.png",
        specs: { "Vel. Máxima": "≤31 KM/H", "Autonomía": "≤65 KM", "Batería": "48V/20AH", "Motor": "350-650W", "Soporte Máx.": "150 KG", "Material": "Acero" }
    },
    {
        id: "hw-sz110",
        proveedor: "Honey Whale",
        region: "puebla",
        categoria: "Motobicis",
        nombre: "Vehículo de Carga SZ110",
        descripcion: "Vehículo con capacidad de 300 kg, diseño compacto y área de carga que se convierte en asiento para acompañante.",
        precioContado: 21990,
        quincena: 1100,
        imgPrincipal: "imagenes-catalogo-honey-whale/vehiculo_carga_sz110.png",
        imgSecundaria: "imagenes-catalogo-honey-whale/vehiculo_carga_sz110.png",
        specs: { "Vel. Máxima": "≤40 KM/H", "Autonomía": "≤50-60 KM", "Batería": "60V/32AH", "Motor": "800-1905W", "Soporte Máx.": "300 KG", "Material": "Acero" }
    },

    // ==========================================================================
    // 04. MOTOS (Páginas 55-60)
    // ==========================================================================
    {
        id: "hw-dm04",
        proveedor: "Honey Whale",
        region: "all",
        categoria: "Motos",
        nombre: "Moto DM04 Mech Panther",
        descripcion: "La moto eléctrica que estabas esperando, conoce la gran potencia que te brinda y disfruta de su doble asiento.",
        precioContado: 23999,
        quincena: 1200,
        imgPrincipal: "imagenes-catalogo-honey-whale/moto_dm04_mech_partner.png",
        imgSecundaria: "imagenes-catalogo-honey-whale/moto_dm04_mech_partner.png",
        specs: { "Vel. Máxima": "≤80 KM/H", "Autonomía": "≤60-100 KM", "Batería": "72V/38AH", "Motor": "3000-3700W", "Soporte Máx.": "150 KG", "Material": "Acero" }
    },
    {
        id: "hw-dm06",
        proveedor: "Honey Whale",
        region: "puebla",
        categoria: "Motos",
        nombre: "Moto Deportiva DM06 Wukong",
        descripcion: "El modelo deportivo más cotizado de todo el mercado. Disfruta de la velocidad máxima y el nuevo diseño de este equipo.",
        precioContado: 26400,
        quincena: 1320,
        imgPrincipal: "imagenes-catalogo-honey-whale/moto_deportiva_dm06_wukong.png",
        imgSecundaria: "imagenes-catalogo-honey-whale/moto_deportiva_dm06_wukong.png",
        specs: { "Vel. Máxima": "≤90 KM/H", "Autonomía": "≤60-100 KM", "Batería": "72V/38AH", "Motor": "3000-3700W", "Soporte Máx.": "200 KG", "Material": "Acero" }
    },

    // ==========================================================================
    // 05. INFANTILES (Páginas 61-80)
    // ==========================================================================
    {
        id: "hw-e11",
        proveedor: "Honey Whale",
        region: "all",
        categoria: "Infantiles",
        nombre: "Scooter Infantil E11 RGB",
        descripcion: "El scooter ideal para niñas y niños que les guste salir a rodar. Cuenta con luces RGB en los laterales.",
        precioContado: 4800,
        quincena: 240,
        imgPrincipal: "imagenes-catalogo-honey-whale/scooter_infantil_e11_rgb.png",
        imgSecundaria: "imagenes-catalogo-honey-whale/scooter_infantil_e11_rgb.png",
        specs: { "Vel. Máxima": "≤16 KM/H", "Autonomía": "≤6 KM", "Batería": "21.6V/2.5AH", "Motor": "100-170W", "Soporte Máx.": "75 KG", "Material": "Metal" }
    },
    {
        id: "hw-jl009",
        proveedor: "Honey Whale",
        region: "cholula",
        categoria: "Infantiles",
        nombre: "Gokart Eléctrico JL009",
        descripcion: "Gokart de alta velocidad para niños, luces LED en el frente y un diseño retráctil apto para chicos y grandes.",
        precioContado: 8900,
        quincena: 445,
        imgPrincipal: "imagenes-catalogo-honey-whale/gokart_electrico_jl009.png",
        imgSecundaria: "imagenes-catalogo-honey-whale/gokart_electrico_jl009.png",
        specs: { "Vel. Máxima": "≤20 KM/H", "Autonomía": "≤9 KM", "Batería": "36V/3.6AH", "Motor": "180-250W", "Soporte Máx.": "75 KG", "Material": "Hierro" }
    }
];
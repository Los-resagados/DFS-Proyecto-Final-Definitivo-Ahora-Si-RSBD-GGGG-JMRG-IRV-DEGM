// ====== Lista de juegos ======
const basePath = "../";
const games = [
{ 
    id: "1",
    title: "Sonic Frontiers",
    genre: "Action",
    year: 2022,
    image: "IMGS/juegos/SONICFRONTIERS.avif",
    trailer: "https://www.youtube.com/embed/F42pHusbeME?si=q8LvpNyYR95nx4Hx",
    description: "La más reciente aventura de Sonic The Hedgehog será un choque entre mundos. Una experiencia como ninguna otra antes, acelera a nuevos niveles y experimenta la emoción y la libertad de la alta velocidad en una zona abierta. Combate contra poderosos enemigos mientras recorres las islas de estrellas fugaces en paisajes llenos de densa vegetación, desbordantes cascadas, sofocantes desiertos, y más. Estas fiestas 2022, viaja a nuevos lugares.",
    sinopsis: "Sonic explora nuevas islas, enfrenta enemigos poderosos y descubre secretos en paisajes asombrosos. Una aventura abierta llena de velocidad y libertad.",
    images: [
      "IMGS/juegosextras/SONICF1.avif",
      "IMGS/juegosextras/SONICF2.png",
      "IMGS/juegosextras/SONICF3.jpg"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/1237320/Sonic_Frontiers/" },
      { nombre: "Epic Games", logo: "IMGS/logos/epic.png", link: "https://store.epicgames.com/es-ES/p/sonic-frontiers" }
    ]
  },
  { 
    id: "2",
    title: "Shadow Generations",
    genre: "Action",
    year: 2024,
    image: "IMGS/juegos/SONICxSHADOW.avif",
    trailer: "https://www.youtube.com/embed/DeFcY54XNSA?si=xOGTwbY0jGxLKUON",
    description: `
    <p>Shadow the Hedgehog regresa con Sonic clásico y moderno en SONIC X SHADOW GENERATIONS, ¡una colección completamente nueva que incluye dos experiencias únicas!
    
    <p>Juega como Shadow en una nueva campaña con habilidades nunca antes vistas que demuestran por qué es conocido como la Forma de Vida Definitiva. Recorre escenarios icónicos de la historia de Shadow, descubre secretos ocultos en un extenso mundo central y desbloquea nuevos poderes para enfrentarte a Black Doom y salvar el mundo.</p>
    <p>SONIC</p>
    <p>El regreso de Shadow</p>
    <p>En esta nueva campaña independiente, el némesis de Shadow, Black Doom, ha resurgido y amenaza con apoderarse del mundo una vez más. Shadow debe viajar a su pasado, confrontar sus dolorosos recuerdos y desbloquear nuevos poderes oscuros para salvar el mundo.</p>
    <p>Shadow Evolved
    <p>Domina los nuevos poderes de Doom de Shadow para enfrentarte a hordas de enemigos y superar desafíos de plataformas como nunca antes. ¡Surfea sobre el agua, sobrevuela obstáculos y detén el tiempo con el regreso de Chaos Control! Un viaje a través del tiempo y las dimensiones.</p>
    <p>Revive los niveles característicos de las aventuras anteriores de Shadow y acelera a través de escenarios alucinantes en 3D y 2D, distorsionados por la influencia de Black Doom, mientras Shadow intenta reconstruir la línea temporal y frustrar sus malvados planes.</p>
    <p>Explora el nuevo espacio blanco</p>
    <p>Estira las piernas en un nuevo mundo central inspirado en la jugabilidad de zona abierta de Sonic Frontiers. ¡A medida que Shadow obtiene nuevos poderes, puede explorar más a fondo y descubrir los secretos que se esconden!</p>
    <p>Una aventura épica de Sonic que viaja en el tiempo</p>
    <p>¡El pasado se encuentra con el presente en SONIC GENERATIONS! Cuando el Dr. Eggman se alía con su yo del pasado y el misterioso Devorador de Tiempo para borrar sus derrotas pasadas y reescribir la historia, dispersan a Sonic y sus amigos por el espacio y el tiempo. ¡Ahora, el Sonic moderno y el clásico tendrán que unir fuerzas para derrotar a este trío malvado y restaurar la normalidad en su línea temporal! Lo mejor de ambos mundos, remasterizado</p>
    <p>Recorre una colección de grandes éxitos con versiones 3D y 2D de escenarios icónicos de anteriores juegos de Sonic, ahora con gráficos actualizados y cinemáticas rediseñadas.</p>
    <p>¡Más coleccionables, contenido adicional y mucho más!</p>
    <p>Rescata a Chao, que se esconde en cada nivel, consigue la puntuación más alta en el pinball de la Zona Noches de Casino y visita el museo para ver arte, música y mucho más.</p>`,
    sinopsis: "Shadow the Hedgehog está de regreso con Sonic clásico y moderno en SONIC X SHADOW GENERATIONS, ¡una colección completamente nueva que presenta dos experiencias únicas!",
    images: [
      "IMGS/juegosextras/SONICS1.jpg",
      "IMGS/juegosextras/SONICS2.jpg",
      "IMGS/juegosextras/SONICS3.webp"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/1237320/Sonic_Frontiers/" },
      { nombre: "Epic Games", logo: "IMGS/logos/epic.png", link: "https://store.epicgames.com/es-ES/p/sonic-frontiers" }
    ]
  },
  { 
    id: "3",
    title: "Sonic Racing: CrossWorlds",
    genre: "Racing",
    year: 2025,
    image: "IMGS/juegos/SONICCARRERAS.avif",
    trailer: "https://www.youtube.com/embed/MdwpXxYHyI8?si=FYxXZ2ATik6erXyj",
    description: `<p>¡Corre por tierra, mar, aire y espacio en Sonic Racing: CrossWorlds! Usa los Rings de travesía para teletransportarte a dimensiones nuevas donde te esperan novedades en cada curva.</p>
    <p>Acelera hasta la victoria en solitario o con amigos en una gran variedad de modos en línea y sin conexión y compite contra jugadores de todo el mundo. Construye el vehículo definitivo que mejor se adapte a tu estilo de conducción, desbloquea artilugios para obtener ventaja y usa potenciadores para llevarte la victoria a casa.</p>
    <p>¡En sus marcas, listos, teletransporte!</p>
    <p>Compite en 24 pistas y viaja a 15 CrossWorlds con Rings de travesía, una mecánica de juego única que transporta a los personajes icónicos de los universos Sonic y SEGA a nuevas dimensiones. ¡Aprovecha que las carreras son imprevisibles para cambiar el paisaje de cada una a tu favor!</p>
    <p>Hazlo tuyo</p>
    <p>Mezcla y combina 45 vehículos originales únicos y 70 artilugios diferentes para mejorar tu vehículo, subir de nivel tu kart y crear la máquina definitiva que se adapte a tu estilo de conducción.</p>`,
    sinopsis: "Corre por tierra, mar, aire, espacio y tiempo en Sonic Racing: CrossWorlds. Viaja a través de los rings de travesía a dimensiones nuevas donde te esperan novedades en cada giro.",
    images: [
      "IMGS/juegosextras/SONICR1.webp",
      "IMGS/juegosextras/SONICR2.jpg",
      "IMGS/juegosextras/SONICR3.webp"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/2486820/Sonic_Racing_CrossWorlds/" },
      { nombre: "Epic Games", logo: "IMGS/logos/epic.png", link: "https://store.epicgames.com/es-ES/p/sonic-racing-crossworlds" }
    ]
  },
  { 
    id: "4",
    title: "Football Manager 26",
    genre: "Racing",
    year: 2025,
    image: "IMGS/juegos/FULBO.jpg",
    trailer: "https://www.youtube.com/embed/rFIuWqlVQis?si=JKDtV9FA6DzpJ_sV",
    description: `<p>Tenemos unos nuevos cimientos que sientan las bases para que definas tu destino futbolístico. Hecho con el motor Unity, FM26 es nuestra esencia de siempre, ahora redefinida y con historias que evolucionan.</p>
    <p>Una interfaz renovada y una experiencia de día de partido más inmersiva que te acercan más a la acción y se combinan para mejorar cada momento determinante del partido.</p>
    <p>Transforma tu equipo con herramientas de traspaso avanzadas y desarrolla una filosofía futbolística como nunca antes mediante nuevas innovaciones que ofrecen un realismo táctico inigualable que cambiará el juego. </p>
    <p>Disfruta de la experiencia del día del partido más completa en la historia de la saga para aumentar el nivel de profundidad y tensión de cada partido con movimientos de los jugadores mejorados y más detalles en el campo.</p>
    <p>Siente la adrenalina de una carrera sorteando adversarios, un milimétrico pase al hueco y un gol inolvidable para conseguir el título en el último suspiro con más personalidad gracias a la nueva captura de movimiento y las animaciones volumétricas.</p>`,
    sinopsis: "Toma las riendas del banquillo y vive el futuro de la gestión futbolística.",
    images: [
      "IMGS/juegosextras/FM1.webp",
      "IMGS/juegosextras/FM2.webp",
      "IMGS/juegosextras/FM3.jpg"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/3551340/Football_Manager_26/" },
      { nombre: "Xbox", logo: "IMGS/logos/xbox.png", link: "https://www.xbox.com/es-MX/games/store/football-manager-26/9pd0z90216rj" }
    ]
  },
  { 
    id: "5",
    title: "Shinobi: Art of Vengeance",
    genre: "Metroidvania",
    year: 2025,
    image: "IMGS/juegos/NINJA.jpg",
    trailer: "https://www.youtube.com/embed/TsCDRkmqSmI?si=n5vKKfpTtUwnOMa9",
    description: `<p>El icónico SHINOBI regresa en un renovado nuevo juego de plataformas 2D con una apariencia singular, como si todo hubiese sido dibujado a mano, creado por el equipo detrás del exitoso juego de pelea Streets of Rage 4.</p>

<p>Juega como el legendario shinobi Joe Musashi, maestro de las artes ninja. Tras encontrar tu aldea quemada hasta los cimientos y a tu clan convertido en piedra, debes emprender un viaje en busca de venganza, listo para enfrentar un mal sin precedente y vengar a tu clan.</p>
<p>EJECUTA LAS ARTES NINJA CON PRECISIÓN</p>

<p>Usa un gran arsenal ninja, incluida la gran katana Oborozuki, kunai, Ninjutsu y Ninpo para eliminar a tus enemigos.</p>
<p>DOMINA EL CAMINO DEL SHINOBI</p>

<p>Ejecuta infinidad de combos con movimientos de combate únicos, adquiere amuletos para mejorar tus habilidades y descubre herramientas Ningi para superar obstáculos y descubrir nuevos caminos.</p>
<p>VIAJA POR UN MUNDO NUEVO Y VISUALMENTE IMPACTANTE</p>

<p>Aventúrate en una gran variedad de niveles visualmente impactantes, desde bases militares hasta desiertos abrasadores, con difíciles rompecabezas de plataforma y secretos ocultos.</p>`,
    sinopsis: "El icónico SHINOBI regresa en un renovado juego de plataformas 2D con una apariencia singular, como si todo hubiese sido dibujado a mano, creado por el equipo detrás del exitoso Streets of Rage 4.",
    images: [
      "IMGS/juegosextras/SHINOBI1.webp",
      "IMGS/juegosextras/SHINOBI2.jpg",
      "IMGS/juegosextras/SHINOBI3.jpg"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/2361770/SHINOBI_Art_of_Vengeance/" },
      { nombre: "Nintendo", logo: "IMGS/logos/nintendo.png", link: "https://www.nintendo.com/es-mx/store/products/shinobi-art-of-vengeance-switch/?srsltid=AfmBOoqgl6bLsgOoYgFsLFuTZikVV0nWcxjoapS4X3p6s7lI-wl4WjZ3" }
    ]
  },
  { 
    id: "6",
    title: "Yakuza Kiwami 2",
    genre: "Action",
    year: 2025,
    image: "IMGS/juegos/Yakuza2.jpg",
    trailer: "https://www.youtube.com/embed/alkViqNEUdY?si=kYbfBo4aq3Bom8JI",
    description: `<p>Kazuma Kiryu pensaba que sus días en el clan Tojo habían quedado atrás. Él y la joven niña a su cuidado, Haruka Sawamura, construyeron una vida pacífica desde las cenizas del conflicto. Bastó un solo disparo para que esa paz se rompiera en pedazos. Yukio Terada, el quinto líder del clan Tojo, fue asesinado. Con una guerra en el horizonte, el legendario Dragón de Dojima se ve obligado a volver al mundo que había dejado atrás.</p>

<p>Kiryu debe viajar a Sotenbori en Osaka para intentar negociar la paz entre los clanes rivales, pero Ryuji Goda, conocido como el Dragón de Kansai, no se detendrá ante nada hasta conseguir su guerra. Solo puede haber un dragón en este mundo.</p>

<p>DESATA FEROCES PELEAS CUERPO A CUERPO</p>
<p>Desata combos devastadores, brutales "acciones de adrenalina" y derribos espectaculares con todo el estilo de lucha de contacto de Yakuza Kiwami 2. Cada golpe parece pesar una tonelada con controles intuitivos que hacen que sea fácil para cualquiera experimentar la emoción de una pelea callejera realista y estratégica donde cualquier cosa puede suceder.</p>

<p>DISFRUTA DE LA VIDA EN JAPÓN</p>
<p>Tómate un descanso de romper cráneos y disfruta de todas las actividades que el distrito de entretenimiento de Japón tiene para ofrecer. Kamurocho es el hogar de diversos restaurantes, bares y experiencias diseñados para satisfacer los interminables deseos de sus visitantes. Sotenbori les da la bienvenida a todos con su legendaria cultura culinaria y entretenimiento. Ya sea que disfrutes del karaoke, los cabarets, las jaulas de bateo o el blackjack, hay actividades para todos los gustos.</p>

<p>DESCUBRE UNA SAGA NO CONTADA</p>
<p>También incluye el escenario extra "Saga Majima", que no forma parte de la historia principal. Conviértete en Goro Majima, el hombre conocido como el Perro Loco de Shimano, y descubre la historia no contada de lo que ocurre entre los eventos de Yakuza Kiwami y Yakuza Kiwami 2.</p>

<p>Yakuza Kiwami 2 es una versión de Yakuza Kiwami 2 (Legacy) con idiomas adicionales incluidos. No hay diferencias en el contenido del juego básico ni otras especificaciones.</p>
<p>Los datos guardados de Yakuza Kiwami 2 (Legacy) no se transfieren a Yakuza Kiwami 2.</p>`,
    sinopsis: "Enfréntate al yakuza más poderoso de la región de Kansai en Japón en un conflicto explosivo entre clanes rivales, cargado de acción de pelea brutal, exploración inmersiva y experiencias inolvidables.",
    images: [
      "IMGS/juegosextras/YK1.jpg",
      "IMGS/juegosextras/YK2.png",
      "IMGS/juegosextras/YK3.jpg"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/3717340/Yakuza_Kiwami_2/" },
      { nombre: "Nintendo", logo: "IMGS/logos/nintendo.png", link: "https://www.nintendo.com/es-mx/store/products/yakuza-kiwami-2-switch-2/?srsltid=AfmBOoqIA8JUQkNoXEj4tZ2ch2VpwkP2E1JIw_8r54fH2Oas2VdgtE2t" }
    ]
  },
  { 
    id: "7",
    title: "Yakuza Kiwami 3 & Dark Ties",
    genre: "Action",
    year: 2026,
    image: "IMGS/juegos/Yakuza3.jpg",
    trailer: "https://www.youtube.com/embed/xjagCJf_x1s?si=ejVO_AA28LvC1XO1",
    description: `<p>Continúa la historia de Kazuma Kiryu mientras lucha por proteger a quienes más ama en una versión completamente renovada de Yakuza 3 que mejora nuestro querido juego en todos sus aspectos.</p>
    <p>Las bulliciosas calles de Okinawa y Tokio cobran vida con un nivel de detalle impresionante, y el sistema de combate renovado ofrece brutales peleas que llevan la acción al siguiente nivel. Además, se agregan escenas que aportan más profundidad y emotividad a esta atrapante historia, experiencias secundarias nuevas y mejoradas que te sumergen en este mundo como nunca antes, y mucho más.</p>
    <p>Este juego independiente viene incluido y te permite vivir la nueva historia de Yoshitaka Mine, de Yakuza 3. Tras perder todo lo que había logrado en lo que alguna vez fue una exitosa <i>startup</i>, Mine decidió sumergirse en el oscuro mundo yakuza. Con el corazón hecho pedazos, emprende la búsqueda de lazos verdaderos que lo empujan una vez más a una travesía dramática, marcada por un emocionante combate inspirado en el boxeo y una variedad de experiencias secundarias atrapantes.</p>
    <p>Dos hombres recorrerán caminos distintos que luego convergerán para sacudir los mismísimos cimientos del destino.</p>`,
    sinopsis: "YAKUZA KIWAMI 3 es un remake extremo del juego de acción y aventura beat 'em up Yakuza 3, que sigue la lucha del ex-yakuza Kazuma Kiryu por proteger a quienes ama. DARK TIES es un juego totalmente nuevo que presenta a Yoshitaka Mine, incluido como una experiencia independiente llena de acción.",
    images: [
      "IMGS/juegosextras/YKYDT1.jpg",
      "IMGS/juegosextras/YKYDT2.webp",
      "IMGS/juegosextras/YKYDT3.jpg"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/3937550/Yakuza_Kiwami_3__Dark_Ties/" },
      { nombre: "Xbox", logo: "IMGS/logos/xbox.png", link: "https://www.xbox.com/es-MX/games/store/yakuza-kiwami-3-dark-ties/9PL8B0T091SZ" }
    ]
  },
  { 
    id: "8",
    title: "Persona 4 Revival",
    genre: "Rol",
    year: 2026,
    image: "IMGS/juegos/Persona4Revival.jpg",
    trailer: "https://www.youtube.com/embed/Y8wgp9eaQRM?si=RK4LSDjCUYowOVzo",
    description: `<p>Persona 4 Revival une la investigación de una serie de asesinatos con un viaje de autodescubrimiento y encuentros con lo oculto dentro de una experiencia RPG clásica aclamada por la crítica que vuelve con nueva vida.</p>

<p>En el pueblo japonés de Inaba, las apacibles calles se remecen tras el ataque de un misterioso asesino en serie. Además, ¿qué hay con ese rumor de un canal de televisión misterioso que solo aparece en las noches lluviosas? ¡Un torbellino de sorpresas y aventuras de otro mundo harán que tu próximo año en la secundaria sea cualquier cosa menos normal!</p>

<p>Características:</p>

<p>Un año inolvidable: Múdate al pueblo de Inaba y vive momentos únicos en la Secundaria Yasogami. Clases, actividades de club, romances, trabajos de medio tiempo... Mejora tus habilidades o relájate, tú decides qué hacer con tu tiempo.</p>

<p>Casos de asesinatos y el misterioso Canal de Medianoche: En las mañanas de niebla, aparecen cuerpos colgados de edificios y torres eléctricas. Al mismo tiempo, corre un rumor escalofriante sobre un canal de televisión: "Tu alma gemela aparecerá si miras un televisor en una noche lluviosa...". Al investigar descubres otro mundo más allá de la pantalla donde despiertas el poder para revelar la verdad: una fuerza interior llamada "Persona".</p>

<p>Combate sombras y conquista lo desconocido: Enfrenta a las "sombras" que acechan en ese otro mundo en combates por turnos. Explota las debilidades del enemigo y aniquílalo con un ataque combinado. Equipa las diferentes Personas para diseñar tu estrategia y llevar tus habilidades y estilo de combate únicos al campo de batalla.</p>

<p>Descubre lugares hermosos y conoce a personajes cautivadores: Cielos despejados, riberas con atardeceres fantásticos, calles brillantes en días de lluvia... los paisajes de Inaba cobran vida con gráficas modernas. Forja lazos sociales y crea vínculos con lugareños a través de una historia fascinante e interacciones inmersivas. Cuanto más estrechos sean tus vínculos, más interesante será tu historia.</p>`,
    sinopsis: "Te espera un año inolvidable con nuevos amigos. Pero los rumores sobre extraños asesinatos y un canal de televisión misterioso alteran tu paz y abren una puerta a otro mundo.",
    images: [
      "IMGS/juegosextras/PERSONA1.jpg",
      "IMGS/juegosextras/PERSONA2.png",
      "IMGS/juegosextras/PERSONA3.webp"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/2963950/Persona_4_Revival/https://store.steampowered.com/app/2963950/Persona_4_Revival/" },
      { nombre: "Playstation", logo: "IMGS/logos/play.png", link: "https://store.playstation.com/es-es/concept/10011107" }
    ]
  },
  { 
    id: "9",
    title: "Persona 5: The Phantom X",
    genre: "Rol",
    year: 2025,
    image: "IMGS/juegos/Persona5elfantasmadeX.jpg",
    trailer: "https://www.youtube.com/embed/5btk2fzbRjQ?si=RLTqTmQ5SzS3xYco",
    description: `<p>¡Somos los Ladrones Fantasma y estamos aquí para robarte el corazón!</p>
<p>¡La querida serie de RPG, con más de 27 millones de copias vendidas, finalmente llega a PC y móviles!</p>
<p>¡Ambientado en el Tokio actual!</p>
<p>¡Un estudiante de instituto normal de día, un Ladrón Fantasma que lucha contra villanos después de clase!</p>
<p>¡Explora las mazmorras del corazón y derrota a las Sombras enemigas distorsionadas!</p>
<p>Sumérgete en las mazmorras del corazón llamadas Palacios con tus compañeros Ladrones Fantasma, que han despertado su Persona, el poder del corazón. ¡Roba el Tesoro para restaurar el corazón deformado!</p>
<p>¡Combate por turnos elegante, ágil y satisfactorio!</p>
<p>¡Experimenta el estilo característico de la serie Persona con gráficos impactantes y movimientos adictivos que pueden aniquilar a todos tus enemigos de un solo golpe!</p>
<p>¡Sube de nivel a tu Persona, el poder de tu corazón, y conviértete en el usuario de Persona más poderoso!</p>
<p>¡Obtén nuevas Personas, infíltrate en las mazmorras del corazón y evita un futuro ruinoso!</p>
<p>¡Disfruta de tu juventud como estudiante! ¡Disfruta de la vida estudiantil en una metrópolis urbana como estudiante de preparatoria! Tú decides cómo pasas tus días después de la escuela: ¡fortalece tus amistades, dedica tu tiempo a clubes o incluso trabaja a tiempo parcial!</p>

<p>¡Interactúa con una variedad de personajes fascinantes!</p>

<p>P5X incluye un montón de personajes originales, todos creados bajo la supervisión de Shigenori Soejima y el resto del equipo de Persona.</p>`,
    sinopsis: "¡Somos los Ladrones Fantasma y estamos aquí para robarte el corazón! La querida serie de RPG, con más de 27 millones de copias vendidas, ¡por fin llega a PC y móviles!",
    images: [
      "IMGS/juegosextras/PERSONATFX1.webp",
      "IMGS/juegosextras/PERSONATFX2.jpg",
      "IMGS/juegosextras/PERSONATFX3.jpg"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/3061570/Persona5_The_Phantom_X/" },
      { nombre: "Play Store", logo: "IMGS/logos/playstore.png", link: "https://play.google.com/store/apps/details?id=com.sega.persona5.the.phantomx.en&pli=1" }
    ]
  },
  { 
    id: "10",
    title: "Two Point Museum",
    genre: "Crafting",
    year: 2025,
    image: "IMGS/juegos/Museum.jpg",
    trailer: "https://www.youtube.com/embed/2oTdIywJbh0?si=V6iu-6do5mfMwOY4",
    description: `<p>Como curadores noveles, tienen la tarea de diseñar y perfeccionar sus propios museos para crear la experiencia definitiva para sus visitantes. Coordinen a los Expertos en expediciones remotas para descubrir nuevas Exposiciones, generando expectación para atraer a multitudes de visitantes ávidos de conocimiento que esperan información y entretenimiento de primer nivel para quedar impresionados. Todo esto mientras mantienen sus Exposiciones seguras, las salas limpias, el personal contento... ¡y a los niños lejos de los huesos de dinosaurios!</p>

<p>Como Curador, ¡el diseño y la gestión de su museo en expansión están en sus manos! Envíen a su equipo de Expertos parcialmente capacitados a expediciones en busca de artefactos raros y, en su mayoría, bien conservados. Cuando (y ojalá no si) sus Expertos regresen de su aventura, exhiban con orgullo sus fantásticos hallazgos en su museo.</p>

<p>Desbloquearán nuevas ubicaciones a medida que decidan adónde los llevará su próxima aventura.</p>

<p>Su trabajo no termina ahí; el mantenimiento de las Exposiciones es crucial. Mientras algunos Expertos recorren el condado de Two Point y más allá, tú estás a cargo de gestionar al personal en casa para garantizar que las exhibiciones y el museo se mantengan en perfectas condiciones. Si encargarte del carnívoro Chomper no es suficiente, también hay ladrones entrometidos de los que hay que cuidarse. Los ladrones, y con mayor frecuencia, los niños, son conocidos por tocar y desenterrar las exhibiciones, así que asegúrate de que haya suficiente seguridad protegiendo tu preciada colección.</p>

<p>¡Sé creativo y diseña la distribución de tu museo a tu manera! Tienes libertad decorativa, así que diseña áreas temáticas para guiar la visita de tus visitantes. Salpica pintura y coloca alfombras mientras colocas con cariño cada helecho prehistórico, posiblemente hombre de hielo derritiéndose, y restos de dinosaurio donde mejor te parezca.</p>

<p>Una vez que hayas creado el ambiente perfecto, organiza visitas guiadas con rutas personalizadas dirigidas por un carismático Experto. Las visitas guiadas son una forma fantástica de enriquecer la experiencia de tus visitantes. Para mantener el entusiasmo de los visitantes, presenta las exhibiciones más populares: aquellas de alta calidad, con amplia información y una decoración hermosa, probablemente atraerán la mayor cantidad de donaciones.</p>

<p>¡Los visitantes lo saben todo! Los diferentes tipos de visitantes que frecuentan tu museo pueden tener intereses diferentes, pero tienen algunas cosas en común: esperan que el lugar se mantenga limpio, que haya muchos refrigerios, baños amplios y una tienda de regalos llena de artículos. Y, por supuesto, necesitan estar impresionados con el conocimiento de tus exhibiciones, que se mantienen en buen estado.</p>

<p>El condado de Two Point atraerá a una variedad de visitantes a tu museo, y todos esperan descubrir su nueva exhibición favorita. Desde fanáticos de los dinosaurios y aficionados a la botánica hasta amantes de las películas de terror, tendrás que satisfacer sus preferencias personales para satisfacer sus necesidades. Al superar sus expectativas, puedes mantenerlos interesados, lo que se traduce en visitas más largas, más donaciones y excelentes reseñas.</p>`,
    sinopsis: "¡Cura y gestiona museos increíbles! Explora para descubrir artefactos asombrosos. Diseña y perfecciona la distribución, mantén al personal contento, a los visitantes entretenidos, recibe abundantes donaciones... y a los niños alejados de las exhibiciones.",
    images: [
      "IMGS/juegosextras/MUSEO1.jpg",
      "IMGS/juegosextras/MUSEO2.webp",
      "IMGS/juegosextras/MUSEO3.webp"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/2185060/Two_Point_Museum/" },
      { nombre: "Xbox", logo: "IMGS/logos/xbox.png", link: "https://www.xbox.com/es-MX/games/store/two-point-museum/9NFHRF1M4W3Z" }
    ]
  }
];
// ====== Cargar juegos del editor (localStorage) ======
let storedGames = [];
try {
  storedGames = JSON.parse(localStorage.getItem("juegos_sega")) || [];
} catch {
  storedGames = [];
}

// ====== Combinar juegos base + editor ======
const allGames = [...games];

// Agregar los que NO existen en games
storedGames.forEach(stored => {
  const exists = allGames.some(g => String(g.id) === String(stored.id));
  if (!exists) {
    allGames.push(stored);
  }
});


// ====== Obtener ID del juego desde la URL ======
const params = new URLSearchParams(window.location.search);
const gameId = params.get("id");

// ====== Elementos del DOM ======
const titleEl = document.getElementById("game-title");
const genreEl = document.getElementById("game-genre");
const yearEl = document.getElementById("game-year");
const imageEl = document.getElementById("game-image");
const trailerContainer = document.getElementById("game-trailer-container");
const descEl = document.getElementById("game-description");

// ====== Función para cargar juego ======
function loadGame() {
  if (!gameId) {
    titleEl.textContent = "Selecciona un juego desde la página principal";
    genreEl.textContent = "-";
    yearEl.textContent = "-";
    imageEl.src = "IMGS/juegos/default.jpg";
    imageEl.alt = "Sin selección";
    trailerContainer.innerHTML = "<p>No hay tráiler disponible.</p>";
    descEl.innerHTML = "<p>Información no disponible.</p>";
    return;
  }

  const staticGame = allGames.find(g => String(g.id) === String(gameId));


  // Merge any overrides saved from the editor (localStorage key 'juegos_sega')
  let game = staticGame;
  try {
    const stored = JSON.parse(localStorage.getItem('juegos_sega') || '[]');
    if (Array.isArray(stored)) {
      const override = stored.find(s => String(s.id) === String(gameId));
      if (override) {
        // If there is a static game, copy its fields then overwrite with override.
        game = Object.assign({}, staticGame || {}, override);
      } else if (!staticGame) {
        // If no static game but an entry exists in storage with that id, use it
        const storedOnly = stored.find(s => String(s.id) === String(gameId));
        if (storedOnly) game = Object.assign({}, storedOnly);
      }
    }
  } catch (e) {
    console.warn('No se pudo leer localStorage para overrides de juegos', e);
  }

  if (!game) {
    titleEl.textContent = "Juego no encontrado";
    genreEl.textContent = "-";
    yearEl.textContent = "-";
    imageEl.src = basePath + "IMGS/juegos/default.jpg";
    imageEl.alt = "Juego no encontrado";
    trailerContainer.innerHTML = "<p>No hay tráiler disponible.</p>";
    descEl.innerHTML = "<p>Información no disponible.</p>";
  } else {
    titleEl.textContent = game.title;
    genreEl.textContent = game.genre || '-';
    yearEl.textContent = game.year || '-';
    imageEl.src = basePath + (game.image || 'IMGS/juegos/default.jpg');
    imageEl.alt = game.title || '';

    // ====== Tráiler ======
    if (game.trailer) {
      trailerContainer.innerHTML = `
        <iframe 
          src="${game.trailer}" 
          title="Tráiler de ${game.title}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          style="position: absolute; top:0; left:0; width:100%; height:100%; border-radius:10px;"></iframe>
      `;
    } else {
      trailerContainer.innerHTML = "<p>No hay tráiler disponible.</p>";
    }

    // ====== Información ======
    descEl.innerHTML = game.description || "<p>Información no disponible.</p>";

// ====== Contenedor derecho (image + sinopsis + galería + comprar) ======
const rightColumn = imageEl.parentElement; // asumiendo que imageEl está dentro de la columna derecha

// Limpiamos elementos anteriores (opcional si recargas)
const existingContainers = rightColumn.querySelectorAll("#game-sinopsis, #game-gallery, #game-comprar");
existingContainers.forEach(el => el.remove());

// ====== Sinopsis ======
if (game.sinopsis) {
  const sinopsisContainer = document.createElement("p");
  sinopsisContainer.id = "game-sinopsis";
  sinopsisContainer.style.margin = "15px 0";
  sinopsisContainer.style.fontStyle = "italic";
  sinopsisContainer.textContent = game.sinopsis;
  rightColumn.appendChild(sinopsisContainer); // agregado primero
}

// ====== Galería ======
if (game.images && game.images.length) {
  const galleryContainer = document.createElement("div");
  galleryContainer.id = "game-gallery";
  galleryContainer.style.display = "flex";
  galleryContainer.style.flexDirection = "column";
  galleryContainer.style.alignItems = "center";
  galleryContainer.style.gap = "10px";
  galleryContainer.style.marginTop = "10px";

  game.images.forEach(imgSrc => {
    const img = document.createElement("img");
    img.src = basePath + imgSrc;
    img.style.width = "100%";
    img.style.maxWidth = "300px";
    img.style.height = "200px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "8px";
    img.style.boxShadow = "0 2px 6px rgba(0,0,0,0.5)";
    galleryContainer.appendChild(img);
  });

  rightColumn.appendChild(galleryContainer); // agregado después de la sinopsis
}

// ====== Sección Comprar ======
if (game.comprar && game.comprar.length) {
  const comprarContainer = document.createElement("div");
  comprarContainer.id = "game-comprar";
  comprarContainer.style.display = "flex";
  comprarContainer.style.flexWrap = "wrap";
  comprarContainer.style.justifyContent = "center";
  comprarContainer.style.gap = "10px";
  comprarContainer.style.marginTop = "15px";

  game.comprar.forEach(store => {
    const a = document.createElement("a");
    a.href = store.link;
    a.target = "_blank";
    a.style.display = "inline-block";
    a.style.padding = "5px 15px";
    a.style.backgroundColor = "rgba(0,0,0,0.3)";
    a.style.borderRadius = "10px";
    a.style.boxShadow = "0 2px 6px rgba(0,0,0,0.5)";
    a.style.transition = "0.3s";
    a.style.textDecoration = "none";

    a.onmouseover = () => a.style.transform = "scale(1.05)";
    a.onmouseout = () => a.style.transform = "scale(1)";

    const img = document.createElement("img");
    img.src = basePath + store.logo;
    img.alt = store.nombre;
    img.style.height = "40px";
    img.style.width = "auto";

    a.appendChild(img);
    comprarContainer.appendChild(a);
  });

  rightColumn.appendChild(comprarContainer); // abajo de la galería
}

  }
}
// 3. Volvemos a ejecutar la función que dibuja los juegos en pantalla
// Solo si estamos en la página de sega.html
if (typeof renderGames === 'function' && document.getElementById("juegos-container")) {
    renderGames(); 
}



// ====== Ejecutar ======
loadGame();
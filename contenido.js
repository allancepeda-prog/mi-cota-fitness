// Contenido de la sección "Aprende" de Mi Cota Fitness.
// Para agregar una lectura o receta, copia un bloque y cambia los textos.
// Las calorías de las recetas son aproximadas por porción.
window.CONTENIDO = {
  lecturas: [
    {
      id: "fases", cat: "Ciclo", min: 3,
      titulo: "Tu ciclo en 4 fases",
      resumen: "Qué pasa en tu cuerpo cada semana y cómo acompañarlo.",
      cuerpo: [
        "El ciclo se cuenta desde el primer día de la regla hasta el día antes de la siguiente. En promedio dura unos 28 días, pero entre 21 y 35 días se considera normal en adultas.",
        "Menstrual (regla): el útero elimina su revestimiento; es común tener menos energía y cólicos. Folicular: sube el estrógeno y muchas mujeres notan más energía y buen ánimo. Ovulatoria: el ovario libera un óvulo, más o menos 14 días antes de la siguiente regla. Lútea: domina la progesterona; pueden aparecer antojos, hinchazón, sueño o cambios de ánimo, sobre todo los días previos a la regla.",
        "Cada mujer vive su ciclo distinto. Registrar tus síntomas en la app te ayuda a conocer tu propio patrón."
      ],
      prueba: ["Registra cómo te sientes 3 días de cada fase.", "Revisa en Ciclo qué fase estás viviendo hoy."],
      fuente: { nombre: "NIH · Irregularidades menstruales (en inglés)", url: "https://www.nichd.nih.gov/health/topics/menstruation/conditioninfo/irregularities" }
    },
    {
      id: "consultar", cat: "Ciclo", min: 2,
      titulo: "Cuándo consultar por tu regla",
      resumen: "Señales que vale la pena conversar con tu ginecóloga.",
      cuerpo: [
        "Para la mayoría de las mujeres adultas un ciclo normal dura entre 21 y 35 días, y la regla entre 2 y 7 días. Que varíe unos días de un mes a otro es normal.",
        "Conviene consultar si tus ciclos son más cortos que 21 días o más largos que 35, si varían mucho de un mes a otro, si la regla dura más de 7 días, si el sangrado es muy abundante (por ejemplo, cambiar toalla o tampón cada 1 a 2 horas), si sangras entre reglas o si el dolor no te deja hacer tu vida normal.",
        "La app te avisa en Ciclo → Estadísticas cuando tus datos salen de esos rangos, y puedes llevar el informe a tu consulta."
      ],
      prueba: ["Abre Ciclo → Informe para tu consulta antes de tu próximo control."],
      fuente: { nombre: "NIH · Irregularidades menstruales (en inglés)", url: "https://www.nichd.nih.gov/health/topics/menstruation/conditioninfo/irregularities" }
    },
    {
      id: "comerciclo", cat: "Ciclo", min: 3,
      titulo: "Alimentación según tu ciclo",
      resumen: "Pequeños ajustes que ayudan en cada fase.",
      cuerpo: [
        "Durante la regla se pierde hierro: suma legumbres, carnes magras, huevo y hojas verdes, y acompáñalos con vitamina C (limón, naranja, pimentón) para absorberlo mejor. El agua y las infusiones calientes ayudan con la hinchazón y los cólicos.",
        "En la fase lútea es común tener más hambre y antojos de dulce. En vez de pelear con ellos, prepárate: carbohidratos integrales, legumbres, frutos secos, palta y un trozo de chocolate amargo aportan saciedad y magnesio. Bajar la sal ayuda a la hinchazón.",
        "En las fases folicular y ovulatoria muchas mujeres tienen más energía: es buen momento para entrenar fuerza y probar recetas nuevas."
      ],
      prueba: ["En tu regla: lentejas con un chorrito de limón.", "Antes de tu regla: deja nueces o yogur listos para los antojos."],
      fuente: null
    },
    {
      id: "colicos", cat: "Ciclo", min: 2,
      titulo: "Cólicos: qué ayuda",
      resumen: "Medidas simples para los días más difíciles.",
      cuerpo: [
        "El calor local (guatero o compresa tibia en el abdomen) relaja el útero y alivia muchos cólicos. El movimiento suave, como caminar o estirar, también ayuda, aunque cueste empezar.",
        "Dormir bien, tomar agua y bajar la cafeína esos días suele hacer diferencia. Si usas analgésicos, pregúntale a tu médico cuál te conviene y desde cuándo tomarlo.",
        "Si el dolor es tan fuerte que te impide trabajar o hacer tu vida normal, o empeora con los meses, consúltalo: no es algo que debas aguantar."
      ],
      prueba: ["Ten un guatero listo para tu próxima regla.", "Registra tus cólicos en Ciclo para ver si se repiten."],
      fuente: null
    },
    {
      id: "plato", cat: "Alimentación", min: 3,
      titulo: "Arma tu plato en 3 partes",
      resumen: "Una regla simple para comer bien sin contar todo.",
      cuerpo: [
        "La forma más fácil de equilibrar una comida es mirar el plato: la mitad con verduras y frutas, un cuarto con proteína y un cuarto con carbohidratos, idealmente integrales.",
        "Las verduras aportan volumen, fibra y vitaminas con pocas calorías, por eso ayudan a quedar satisfecha. La proteína (pollo, pescado, huevo, legumbres, lácteos) mantiene la saciedad por más tiempo. El carbohidrato integral (arroz integral, quinoa, papa con cáscara, pan integral) da energía estable.",
        "Para cocinar o aliñar, prefiere aceite de oliva o canola en poca cantidad. Para tomar, agua."
      ],
      prueba: ["En el almuerzo de hoy, sirve primero la ensalada y que ocupe medio plato.", "Cambia el pan blanco por integral esta semana."],
      fuente: { nombre: "Harvard · El Plato para Comer Saludable", url: "https://nutritionsource.hsph.harvard.edu/?p=9887" }
    },
    {
      id: "agua", cat: "Hidratación", min: 2,
      titulo: "Agua: tu mejor bebida",
      resumen: "Por qué ayuda, cuánta tomar y cómo acordarse.",
      cuerpo: [
        "El agua no tiene calorías y reemplaza a jugos y bebidas azucaradas, que suman mucho azúcar sin dar saciedad. Las Guías Alimentarias para Chile recomiendan tomar agua varias veces al día en lugar de bebidas con azúcar.",
        "Como referencia, unos 6 a 8 vasos al día cubren a la mayoría de los adultos, y se necesita más con calor o al hacer ejercicio. Muchas veces la sensación de hambre entre comidas es sed: un vaso de agua antes de picar ayuda a distinguirlo.",
        "Truco: deja una botella a la vista y marca cada vaso en la app."
      ],
      prueba: ["Toma un vaso de agua apenas te levantes.", "Antes de cada comida, un vaso de agua."],
      fuente: { nombre: "MINSAL · Guías Alimentarias para Chile", url: "https://www.minsal.cl/ministerio-de-salud-presenta-actualizacion-de-las-guias-alimentarias-para-chile/" }
    },
    {
      id: "sellos", cat: "Compras", min: 3,
      titulo: "Cómo leer los sellos “ALTO EN”",
      resumen: "Elegir mejor en el supermercado en 10 segundos.",
      cuerpo: [
        "Los sellos negros de la Ley de Etiquetado avisan cuando un producto supera los límites de calorías, azúcares, grasas saturadas o sodio. Las Guías Alimentarias recomiendan evitar los productos ultraprocesados y con sellos “ALTO EN”.",
        "Regla práctica: entre dos productos parecidos, elige el que tenga menos sellos. Para comparar, mira la columna “100 g” de la tabla nutricional: así comparas lo mismo aunque las porciones sean distintas.",
        "Ojo con lo “light” o “sin azúcar”: puede seguir teniendo sellos por grasas o sodio."
      ],
      prueba: ["Escanea con la app el código de barras de 3 productos que compras seguido.", "Compara dos yogures por los azúcares en 100 g."],
      fuente: { nombre: "MINSAL · Guías Alimentarias para Chile", url: "https://www.minsal.cl/ministerio-de-salud-presenta-actualizacion-de-las-guias-alimentarias-para-chile/" }
    },
    {
      id: "fibra", cat: "Corazón", min: 3,
      titulo: "Fibra y grasas: cuida tu colesterol",
      resumen: "Qué alimentos ayudan y cuáles conviene moderar.",
      cuerpo: [
        "La fibra soluble, presente en la avena, las legumbres, la manzana y los cítricos, ayuda a reducir la absorción del colesterol. Las legumbres en guisos y ensaladas son una de las recomendaciones de las Guías Alimentarias para Chile.",
        "La OMS recomienda que las grasas saturadas (mantequilla, embutidos, carnes grasas, frituras) no superen el 10 % de las calorías del día, y que las grasas trans sean mínimas. Cámbialas por grasas insaturadas: aceite de oliva, palta, frutos secos y pescados como jurel o salmón.",
        "Comer al menos 400 g de frutas y verduras al día también suma fibra."
      ],
      prueba: ["Desayuna avena 3 veces esta semana.", "Legumbres al menos 2 veces por semana.", "Cambia el embutido de la once por huevo o quesillo."],
      fuente: { nombre: "OMS · Alimentación sana", url: "https://www.who.int/es/news-room/fact-sheets/detail/healthy-diet" }
    },
    {
      id: "azucar", cat: "Energía", min: 3,
      titulo: "Azúcar y energía estable",
      resumen: "Cómo evitar los bajones y antojos de dulce.",
      cuerpo: [
        "La OMS recomienda que los azúcares libres (los agregados y los de jugos, miel o bebidas) sean menos del 10 % de las calorías del día, unos 50 g con 2.000 kcal, e idealmente menos del 5 %.",
        "Los carbohidratos solos (pan blanco, galletas, jugos) suben rápido el azúcar en la sangre y luego vienen el bajón y el hambre. Si los acompañas con proteína, fibra o algo de grasa saludable, la energía se mantiene más estable.",
        "Una caminata de 10 a 15 minutos después de comer ayuda al cuerpo a usar la glucosa."
      ],
      prueba: ["Si comes fruta, acompáñala con un yogur natural o unas nueces.", "Camina 10 minutos después del almuerzo."],
      fuente: { nombre: "OMS · Alimentación sana", url: "https://www.who.int/es/news-room/fact-sheets/detail/healthy-diet" }
    },
    {
      id: "ayuno", cat: "Ayuno", min: 3,
      titulo: "Ayuno intermitente: lo esencial",
      resumen: "Qué es, cómo romperlo bien y cuándo tener precaución.",
      cuerpo: [
        "El ayuno intermitente concentra las comidas en una ventana de horas, por ejemplo 16:8 (16 horas sin comer y 8 con comidas). Para bajar de peso, los estudios muestran resultados parecidos a reducir calorías de forma diaria: funciona sobre todo porque ayuda a comer menos.",
        "Lo más importante es qué comes en la ventana: rompe el ayuno con proteína, verduras y algo de grasa saludable, en vez de pan o dulces. Durante el ayuno puedes tomar agua, té o café sin azúcar.",
        "Conviene hacerlo con supervisión médica en el embarazo o la lactancia, con diabetes que use medicamentos, o si alguna vez hubo problemas con la alimentación. Si te sientes mareada o débil, come algo y consulta."
      ],
      prueba: ["Si se te olvida marcar el fin del ayuno, corrígelo en Ayuno → Historial.", "Prepara antes lo que vas a comer al romper el ayuno."],
      fuente: null
    },
    {
      id: "moverse", cat: "Movimiento", min: 2,
      titulo: "Moverse: cuánto basta",
      resumen: "La meta de la OMS y cómo llegar sin gimnasio.",
      cuerpo: [
        "La OMS recomienda a los adultos al menos 150 minutos de actividad física moderada a la semana (o 75 de actividad intensa) y ejercicios de fuerza al menos 2 días. Son unos 30 minutos, 5 días.",
        "Todo movimiento cuenta: caminar a paso rápido, subir escaleras, bailar, trabajar en el jardín. Si pasas mucho tiempo sentada, levántate unos minutos cada hora.",
        "Para la fuerza no necesitas máquinas: sentadillas, flexiones apoyada en la pared y subir un escalón sirven."
      ],
      prueba: ["Camina 20 minutos hoy y regístralo en Ejercicio.", "3 series de 10 sentadillas mientras hierve el agua."],
      fuente: { nombre: "OMS · Actividad física", url: "https://www.who.int/es/news-room/fact-sheets/detail/physical-activity" }
    },
    {
      id: "proteina", cat: "Saciedad", min: 2,
      titulo: "Proteína en cada comida",
      resumen: "El nutriente que más ayuda a no tener hambre.",
      cuerpo: [
        "La proteína es el nutriente que más saciedad da y ayuda a mantener la masa muscular cuando se baja de peso.",
        "Fuentes fáciles: huevo, quesillo, yogur natural, leche, pollo, pescado, atún al agua, legumbres y tofu. Intenta que cada comida tenga una porción del tamaño de la palma de tu mano.",
        "En la app, mira la barra de Proteína del día: si va baja a la hora de la once, ahí tienes una pista."
      ],
      prueba: ["Agrega un huevo o quesillo al desayuno.", "Snack: yogur natural en vez de galletas."],
      fuente: null
    },
    {
      id: "sueno", cat: "Descanso", min: 2,
      titulo: "Dormir bien también adelgaza",
      resumen: "La relación entre el sueño y el apetito.",
      cuerpo: [
        "Dormir poco altera las hormonas que regulan el hambre: al día siguiente hay más apetito, sobre todo de dulces y harinas, y menos ganas de moverse.",
        "Para la mayoría de los adultos, la meta es 7 horas o más. Ayuda acostarse a una hora parecida cada día, cenar liviano y dejar las pantallas un rato antes de dormir.",
        "Si tu ventana de comida termina temprano, también duermes mejor: la digestión no compite con el descanso."
      ],
      prueba: ["Fija una hora para dejar el celular esta noche.", "Cena al menos 2 horas antes de acostarte."],
      fuente: null
    },
    {
      id: "vitd", cat: "Bienestar", min: 2,
      titulo: "Vitamina D y sol",
      resumen: "Una vitamina que a muchos les falta, sobre todo en invierno.",
      cuerpo: [
        "La vitamina D se produce en la piel con el sol y es clave para los huesos, los músculos y las defensas. En invierno, o si pasas el día bajo techo, es común que esté baja.",
        "Algunos alimentos la aportan: pescados grasos (jurel, salmón, sardinas), huevo y lácteos fortificados. Unos minutos de sol en brazos y cara, fuera de las horas de radiación más alta, también ayudan.",
        "Si te han dicho que la tienes baja, el médico indica si necesitas suplemento y en qué dosis: no conviene suplementar por cuenta propia."
      ],
      prueba: ["Una caminata corta al sol de la mañana.", "Jurel o sardinas en el almuerzo una vez por semana."],
      fuente: null
    }
  ],

  recetas: [
    { id: "avena", nombre: "Avena nocturna con manzana y canela", tipo: "Desayuno", min: 5, porciones: 1, kcal: 300, p: 16, c: 48, g: 5,
      ing: ["40 g de avena (4 cucharadas)", "150 ml de leche descremada", "1 yogur natural sin azúcar", "½ manzana picada", "Canela a gusto"],
      pasos: ["Mezcla la avena, la leche y el yogur en un frasco.", "Agrega la manzana y la canela.", "Tapa y deja en el refrigerador toda la noche. Se come frío."] },
    { id: "huevos", nombre: "Huevos revueltos con espinaca y tomate", tipo: "Desayuno", min: 10, porciones: 1, kcal: 275, p: 17, c: 18, g: 15,
      ing: ["2 huevos", "1 taza de espinaca", "½ tomate picado", "1 rebanada de pan integral", "1 cucharadita de aceite de oliva"],
      pasos: ["Saltea la espinaca y el tomate 2 minutos con el aceite.", "Agrega los huevos batidos y revuelve a fuego suave.", "Sirve con el pan integral tostado."] },
    { id: "garbanzos", nombre: "Ensalada de garbanzos con atún", tipo: "Almuerzo", min: 10, porciones: 1, kcal: 390, p: 34, c: 38, g: 11,
      ing: ["1 taza de garbanzos cocidos (o de tarro, enjuagados)", "1 lata de atún al agua", "Tomate, pepino y cebolla morada", "1 cucharadita de aceite de oliva", "Limón, sal y cilantro"],
      pasos: ["Pica las verduras en cubos.", "Mezcla con los garbanzos y el atún escurrido.", "Aliña con limón, aceite, sal y cilantro."] },
    { id: "lentejas", nombre: "Lentejas guisadas con verduras", tipo: "Almuerzo", min: 40, porciones: 4, kcal: 320, p: 17, c: 50, g: 6,
      ing: ["250 g de lentejas", "1 cebolla, 1 zanahoria y 1 pimentón", "1 trozo de zapallo", "1 cucharada de aceite", "Comino, orégano, sal y ajo"],
      pasos: ["Sofríe la cebolla, el ajo y el pimentón con el aceite.", "Agrega la zanahoria, el zapallo en cubos y las lentejas con agua que las cubra.", "Cocina 30 minutos a fuego medio, revolviendo. Aliña al final.", "Sirve con ensalada en vez de arroz para una versión más liviana."] },
    { id: "pollo", nombre: "Pollo al horno con verduras asadas", tipo: "Almuerzo", min: 35, porciones: 1, kcal: 305, p: 36, c: 12, g: 12,
      ing: ["150 g de pechuga de pollo", "1 zapallo italiano", "½ pimentón y ½ cebolla", "2 cucharaditas de aceite de oliva", "Merkén, ajo, sal y limón"],
      pasos: ["Corta las verduras en trozos y ponlas en una fuente con el pollo.", "Aliña con aceite, merkén, ajo, sal y limón.", "Hornea 25 a 30 minutos a 200 °C, dando vuelta una vez."] },
    { id: "merluza", nombre: "Merluza al limón con papa y ensalada chilena", tipo: "Cena", min: 25, porciones: 1, kcal: 320, p: 32, c: 26, g: 9,
      ing: ["180 g de filete de merluza o reineta", "1 papa chica cocida", "Tomate y cebolla en pluma", "1 cucharadita de aceite", "Limón, sal y perejil"],
      pasos: ["Cocina el pescado a la plancha o al vapor 4 minutos por lado con limón.", "Prepara la ensalada chilena con tomate, cebolla y cilantro.", "Sirve con la papa cocida."] },
    { id: "wrap", nombre: "Wrap integral de pollo y palta", tipo: "Cena", min: 10, porciones: 1, kcal: 290, p: 24, c: 28, g: 10,
      ing: ["1 tortilla integral", "80 g de pollo cocido desmenuzado", "2 cucharadas de palta", "Lechuga y tomate", "Limón y sal"],
      pasos: ["Unta la tortilla con la palta.", "Agrega el pollo, la lechuga y el tomate.", "Enrolla y calienta 1 minuto en sartén."] },
    { id: "budin", nombre: "Budín de zapallo italiano", tipo: "Almuerzo", min: 45, porciones: 4, kcal: 170, p: 12, c: 7, g: 11,
      ing: ["4 zapallos italianos rallados", "4 huevos", "100 g de quesillo", "1 cebolla picada", "1 cucharada de aceite", "Sal, pimienta y orégano"],
      pasos: ["Sofríe la cebolla y el zapallo hasta que suelte el agua; escúrrelo bien.", "Mezcla con los huevos batidos, el quesillo desmenuzado y los condimentos.", "Hornea en molde aceitado 30 minutos a 180 °C, hasta que esté firme."] },
    { id: "quinoa", nombre: "Ensalada de quinoa y queso fresco", tipo: "Almuerzo", min: 20, porciones: 1, kcal: 330, p: 13, c: 40, g: 13,
      ing: ["50 g de quinoa (¼ taza cruda)", "Pepino, tomate y cebolla morada", "40 g de queso fresco en cubos", "1 cucharadita de aceite de oliva", "Limón y menta"],
      pasos: ["Lava la quinoa y cuécela 15 minutos en el doble de agua.", "Enfría y mezcla con las verduras picadas y el queso.", "Aliña con limón, aceite y menta."] },
    { id: "batido", nombre: "Batido de plátano y avena", tipo: "Snack", min: 3, porciones: 1, kcal: 210, p: 9, c: 36, g: 3,
      ing: ["200 ml de leche descremada", "½ plátano", "2 cucharadas de avena", "Canela"],
      pasos: ["Licúa todo hasta que quede suave.", "Sírvelo frío; es buena opción para romper el ayuno o después de entrenar."] },
    { id: "yogur", nombre: "Yogur natural con frutillas y nueces", tipo: "Snack", min: 2, porciones: 1, kcal: 170, p: 8, c: 17, g: 8,
      ing: ["1 yogur natural sin azúcar", "6 frutillas", "3 mitades de nuez"],
      pasos: ["Pica las frutillas y las nueces.", "Agrégalas al yogur y listo."] }
  ],

  enlaces: [
    { nombre: "Guías Alimentarias para Chile", de: "Ministerio de Salud", url: "https://www.minsal.cl/ministerio-de-salud-presenta-actualizacion-de-las-guias-alimentarias-para-chile/" },
    { nombre: "Alimentación sana", de: "Organización Mundial de la Salud", url: "https://www.who.int/es/news-room/fact-sheets/detail/healthy-diet" },
    { nombre: "Actividad física", de: "Organización Mundial de la Salud", url: "https://www.who.int/es/news-room/fact-sheets/detail/physical-activity" },
    { nombre: "El Plato para Comer Saludable", de: "Escuela de Salud Pública de Harvard", url: "https://nutritionsource.hsph.harvard.edu/?p=9887" },
    { nombre: "Elige Vivir Sano", de: "Gobierno de Chile", url: "https://www.eligevivirsano.gob.cl/" },
    { nombre: "Recetas saludables", de: "MedlinePlus (Biblioteca de Medicina de EE. UU.)", url: "https://medlineplus.gov/spanish/recetas/" }
  ],

  // Fases del ciclo: textos que aparecen en Ciclo y en Hoy.
  fases: {
    menstrual: { nombre: "Menstrual", color: "leaf",
      que: "Tu cuerpo está en su regla. Es normal sentir menos energía, cólicos o más sensibilidad.",
      comer: "Suma hierro: legumbres, huevo, carnes magras y hojas verdes, con algo de vitamina C.",
      mover: "Movimiento suave: caminar, yoga o estiramientos. Escucha a tu cuerpo.",
      cuidar: "Calor en el abdomen, agua e infusiones tibias. Descansa más si lo necesitas." },
    folicular: { nombre: "Folicular", color: "water",
      que: "Sube el estrógeno: muchas mujeres notan más energía, mejor ánimo y más motivación.",
      comer: "Buen momento para proteína, verduras variadas y probar recetas nuevas.",
      mover: "Aprovecha para entrenar fuerza o subir la intensidad.",
      cuidar: "Planifica la semana y deja preparadas comidas sanas para los días de más hambre." },
    ovulatoria: { nombre: "Ovulatoria", color: "lav",
      que: "Estás en tus días más fértiles. La energía y la sociabilidad suelen estar en su punto alto.",
      comer: "Fibra, frutas y verduras: ayudan a tu digestión y a mantener la energía estable.",
      mover: "Ideal para entrenamientos intensos o algo nuevo, como una clase de baile.",
      cuidar: "Si no buscas embarazo, recuerda que estas fechas son estimaciones: la app no es un método anticonceptivo." },
    lutea: { nombre: "Lútea", color: "citrus",
      que: "Domina la progesterona. Pueden aparecer antojos, hinchazón, sueño o cambios de ánimo, más aún antes de la regla.",
      comer: "Carbohidratos integrales, legumbres, frutos secos y palta para el magnesio y la saciedad. Menos sal si te hinchas.",
      mover: "Ejercicio moderado: caminatas, pilates o natación. Bajar la intensidad está bien.",
      cuidar: "Prioriza el sueño y date espacio: es normal sentirte más sensible estos días." }
  },

  // Consejos cortos: uno distinto cada día en la pantalla Hoy.
  consejos: [
    { t: "Durante tu regla, el hierro y la vitamina C juntos son buenos aliados.", l: "comerciclo" },
    { t: "Antes de tu regla, ten a mano snacks sanos para los antojos.", l: "comerciclo" },
    { t: "Un guatero tibio en el abdomen alivia muchos cólicos.", l: "colicos" },
    { t: "Un vaso de agua al despertar activa tu día y te ayuda a llegar a la meta.", l: "agua" },
    { t: "Llena medio plato con verduras: más volumen, menos calorías.", l: "plato" },
    { t: "Una caminata de 10 minutos después de comer ayuda a tu glicemia.", l: "azucar" },
    { t: "Proteína en cada comida = menos hambre entre comidas.", l: "proteina" },
    { t: "Entre dos productos parecidos, elige el que tenga menos sellos.", l: "sellos" },
    { t: "Legumbres dos veces por semana cuidan tu corazón.", l: "fibra" },
    { t: "Todo movimiento cuenta: escaleras, baile o jardín también suman.", l: "moverse" },
    { t: "¿Hambre entre comidas? Prueba primero un vaso de agua.", l: "agua" },
    { t: "Rompe el ayuno con proteína y verduras, no con pan o dulces.", l: "ayuno" },
    { t: "Dormir 7 horas o más te ayuda a controlar los antojos.", l: "sueno" },
    { t: "Unos minutos de sol de la mañana suman vitamina D.", l: "vitd" },
    { t: "Prefiere aceite de oliva, palta y frutos secos a mantequilla y frituras.", l: "fibra" },
    { t: "Fuerza 2 veces por semana: sentadillas en casa también valen.", l: "moverse" },
    { t: "Fruta + yogur o nueces: energía estable y sin bajón.", l: "azucar" }
  ]
};

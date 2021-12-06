const data = [
	//arreglar error de cuando hay muchos temas
	// //{ question: "¿?", answers: ["", "", ""] },
	// {
	// 			name: "",
	// 			questions: [
	// { question: "¿?", answers: ["", "", ""] },
	//{ question: "¿?", answers: ["", "", ""] },
	//{ question: "¿?", answers: ["", "", ""] },
	// 			],
	// 		},
	{
		name: "historia",
		images: ["images/historia-img.jpg", "images/dama-elche.jpg"],
		temas: [
			//estandares
			{
				name: "Celtas e Iberos",
				questions: [
					{
						question: "¿Quiénes fueron los primeros en llegar a la península ibérica?",
						answers: ["Los fenicios", "Los indoeuropeos ", "Los cartagineses"],
					},
					{
						question: "¿Qué aportaron los indoeuropeos a los indígenas?",
						answers: ["Uso del bronce y religión", "Uso de monedad de bronce y armas", "Uso del hierro y la incineración "],
					},
					{
						question: "¿En qué siglo llegaron los indoeuropeos a la península ibérica?",
						answers: ["VII a.C.", "IX a.C. ", "X a.C."],
					},
					{
						question: "¿Quienes eran los fenicios?",
						answers: [
							"Un pueblo de navegantes y comerciantes ",
							"Un pueblo de guerreros y comerciantes",
							"Un pueblo de navegantes y pescadores",
						],
					},
					{
						question: "¿En qué siglo llegaron los fenicios a la península ibérica?",
						answers: ["VIII a.C. ", "VII a.C.", "VI a.C."],
					},
					{
						question: "¿Qué influencia recibieron en el área ibera?",
						answers: ["De los tartessos", "De los colonizadores mediterráneos ", "De los indoeuropeos"],
					},
					{
						question: "¿En qué se basaba la economía de los iberos?",
						answers: [
							"Agricultura, metalurgia, artesanía y comercio",
							"Ganadería, agricultura, minería y comercio",
							"Agricultura, minería, artesanía y comercio ",
						],
					},
					{
						question: "¿Cómo era la estructura social de los iberos?",
						answers: [
							"Con grupos sociales diferenciados por poder y riqueza ",
							"Dominada por aristocracia guerrera",
							"Tribal, basada en parentesco y estructurada en clanes",
						],
					},
					{
						question: "¿Cómo se organizaban politicamente los iberos?",
						answers: ["En reinos", "En ciudades-estado ", "En tribus"],
					},
					{
						question: "¿Qué influencia recibieron en el área celta?",
						answers: ["De los tartessos", "De los colonizadores mediterráneos", "De los indoeuropeos "],
					},
					// { question: "¿Cómo era la estructura social de los celtas?", answers: ["Con grupos sociales diferenciados por poder y riqueza", "Dominada por aristocracia guerrera", "Tribal, basada en parentesco y estructurada en clanes "] },
					{
						question: "¿Quiénes conocían el uso de la escritura y de la moneda?",
						answers: ["Los iberos ", "Los celtas", "Ambos, los iberos y los celtas"],
					},
					{
						question: "¿En qué se basaba la economía de los celtas?",
						answers: [
							"Ganadería, extracción de minerales y metalurgia ",
							"Agricultura, extracción de minerales y metalurgia",
							"Ganadería, agricultura y comercio de metales",
						],
					},
				],
			},
			{
				name: "Romanización",
				questions: [
					{
						question: "¿Dónde fue la romanización más débil en la península ibérica?",
						answers: ["En el oeste lejano", "En el oeste e interior montañoso", "En el interior y norte montañoso "],
					},
					{
						question: "¿Cuál de los siguientes no fue un factor que impulsó la romanización en la península ibérica?",
						answers: ["La religión romana", "Peleas entre los celtas y los iberos ", "La fundación de ciudades romanas"],
					},
					{
						question: "¿Cuánto llegó a durar la romanización en algunos lugares?",
						answers: ["7 siglos ", "7 años", "7 décadas"],
					},
				],
			},
			{
				name: "Unión Dinástica",
				numero: 9,
				questions: [
					{
						question: "¿En qué año se casaron Isabel I de Castilla y Fernando II de Aragón?",
						answers: ["1479", "1469 ", "1474"],
						isDate: true,
					},
					{
						question: "¿Qué significa Unión dinástica?",
						answers: [
							"Los reinos se unen políticamente, pero mantienen sus propias monedas y costumbres",
							"Ambos reinos tienen los mismos reyes, pero en cada uno de ellos se mantenían sus propias leyes, instituciones, costumbres, monedas, aduanas y fronteras ",
							"Se llama a la unión total de los reinos de Castilla y Aragón bajo el reinado de los Reyes Católicos",
						],
					},
					{
						question: "¿Cómo era la soberanía en cada reino tras la Unión dinástica?",
						answers: [
							"Ambos reyes tenían la misma capacidad de decisión política y las órdenes reales eran firmadas por ambos",
							"En ningún reino ambos reyes tenían la misma capacidad de decisión política",
							"En Castilla ambos reyes tenían la misma capacidad de decisión política y en Aragón solo se reconocía a Fernando como soberano ",
						],
					},
					{
						question: "¿Se llegó a plantear la posibilidad de crear una monarquía centralizada y unitaria?",
						answers: [
							"Sí, pero no se pudo porque las Cortes del reino de Aragón no lo permitieron",
							"No, solo una unión personal de los monarcas de ambas coronas ",
							"No se sabe ya que los documentos de la unión se quemaron",
						],
					},

					{
						question: "¿Qué reino era más poderoso?",
						answers: ["Aragón", "Los dos eran iguales", "Castilla "],
					},
					{
						question: "¿Cuál fue el principal objetivo común de la política de los Reyes Católicos?",
						answers: [
							"La consolidación del poder real, transformando una monarquía de carácter feudal en una monarquía moderna y autoritaria ",
							"La unidad religiosa, expulsando primero a los judíos y luego a los musulmanes",
							"Convertirse en el reino más poderoso de Europa",
						],
					},
					//{ question: "¿?", answers: ["", "", ""] },
				],
			},
			{
				name: "Sucesos 1492",
				numero: 10,
				questions: [
					//Granada
					{
						question: "¿En qué orden ocurrieron los hechos más relevantes de 1492?",
						answers: [
							"La expulsión de los judíos, la rendición de Granada, el descubrimiento de América",
							"La rendición de Granada, el descubrimiento de América, la expulsión de los judíos",
							"La rendición de Granada, la expulsión de los judíos, el descubrimiento de América ",
						],
					},
					{
						question: "¿Cuando se produjo la entrega de la ciudad de Granada?",
						answers: ["2 de enero de 1492 ", "2 de marzo de 1492", "2 de febrero de 1492"],
					},
					{
						question: "¿Cómo se llama el pacto de la entrega de Granada?",
						answers: ["'Capitulaciones de Granada' ", "'Paz de Granada'", "'Carta de Granada'"],
					},
					{
						question: "¿Cuáles fueron las condiciones de las 'Capitulaciones de Granada'?",
						answers: [
							"Conceder un territorio y dinero a Boabdil, respetar la vida, bienes, leyes, costumbres, libertad de culto y de lengua ",
							"Conceder dinero a Boabdil, y respetar las creencias religiosas y lengua de los musulmanes granadinos",
							"No se llegó a pactar nada relacionado con los habitantes de Granada, pero sí que se le pagó a Boabdil",
						],
					},
					{
						question: "¿A qué reino se incorporó Granada?",
						answers: ["Aragón", "Castilla ", "Ya se habían unido Aragón y Castilla, por lo que a ambos"],
					},
					// pregunta por:
					// La inicial tolerancia religiosa fue pasando a una actitud más agresiva, obligándose a la población a conversiones forzosas, lo que desembocó en persecuciones, en motines y en la rebelión de la Alpujarra, lo que condujo a la conversión forzosa o expulsión a partir de 1502.
					//Judios
					{
						question: "¿Por qué eran los judíos protegidos en un principio?",
						answers: [
							"Ni se les protegía ni se les perseguía",
							"Apoyaron a los reinos cristianos el la Reconquista",
							"El papel que desempeñaban en los reinos ",
						],
					},
					{
						question: "¿En qué se basaba el nuevo Estado Moderno que los Reyes Católicos querían asentar?",
						answers: ["Unidad religiosa ", "Totalitarista", "Unificación de los reinos cristianos de la península ibérica"],
					},
					{
						question: "¿Por qué se decidió expulsar a los judíos?",
						answers: [
							"Porque eran incompatibles con Estado Moderno que los Reyes Católicos querían asentar ",
							"Por el enorme poder que estaban adquiriendo algunos banqueros y comerciantes judíos",
							"Porque muchos judíos empezaron a apoyar al imperio otomano, que estaba ganando mucho territorio en el este de Europa",
						],
					},
					{
						question: "¿Cuándo firmaron los Reyes el decreto de expulsión de los judíos?",
						answers: [
							"Junto a la toma de Granada, en enero de 1492",
							"Tras la toma de Granada, en marzo de 1492 ",
							"Tras la salida de la expedición de Cristobal Colón, en agosto",
						],
					},
					//América
					{
						question: "¿Por qué se decidió buscar nuevas rutas por el atlántico?",
						answers: [
							"Porque la ruta tradicional estaba dominada por el imperio otomano ",
							"Para quitarle la hegemonía naval atlántica a Inglaterra",
							"Para buscar nuevos comercios en África",
						],
					},
					{
						question: "¿Por qué se pudieron llevar a cabo las nuevas expediciones del Atlántico?",
						answers: [
							"Porque ya las había descubierto Portugal",
							"Por los avances en cartografía, el uso de la brújula, el astrolabio y la carabela ",
							"Por la invención de la máquina de vapor",
						],
					},
					{
						question: "¿Cómo se resolvieron las disputas entre Portugal y Castilla?",
						answers: [
							"En la Guerra de los 80 años",
							"En el tratado de Alcaçobas ",
							"Una división del Atlántico hecha por el Papa",
						],
					},
					{
						question: "¿Por qué apoyaron los Reyes el proyecto de Colón?",
						answers: [
							"Porque necesitaban una ruta para el comercio exterior urgentemente",
							"Porque Colón los amenazó con pedírselo a Portugal",
							"Por los escasos riesgos y el prestigio y ganancias en caso de éxito ",
						],
					},
					{
						question: "¿Qué ocurrió en las 'Capitulaciones de Santa Fe'?",
						answers: [
							"Los reyes aceptaron las enormes exigencias de Colón ",
							"Se confirmó que las tierras descubiertas por Colón eran en realidad un nuevo continente",
							"Se estableció el método de cristianización para las nuevas tierras",
						],
					},
					{
						question: "¿Cómo se benefició Colón del éxtasis religioso tras la conquista de Granada?",
						answers: [
							"Reclutando a musulmanes a cambio de concederles privilegios después",
							"Consiguiendo el apoyo del Papa para su expedición",
							"Ligando su empresa a la cristianización de las tierras nuevas y conversión de los infieles ",
						],
					},
					{
						question: "¿Cuándo partió Cristobal Colón?",
						answers: ["3 de agosto ", "12 de agosto", "24 de agosto"],
					},
					{
						question: "¿Desde dónde partió Cristobal Colón?",
						answers: ["Chiclana de la Frontera", "Palos de la Frontera ", "Cádiz"],
					},
				],
			},
			{
				name: "Carlos I y Felipe II",
				numero: 11,
				questions: [
					{
						question: "¿En qué situación se encontraba la Monarquía Hispánica en los reinados de Carlos I y Felipe II?",
						answers: [
							"En una profunda crisis con sucesivas bancarrotas",
							"En su el auge de la Monarquía Hispánica ",
							"En decadencia por los enfrentamientos con Francia e Inglaterra",
						],
					},
					{ question: "¿Quién gobernó antes?", answers: ["Carlos I ", "Felipe II", "Gobernaron a la vez"] },
					{
						question: "¿De quién era hijo Carlos I?",
						answers: ["Los Reyes Católicos", "Juana la Loca y Felipe el Hermoso ", "De Felipe II y María Tudor"],
					},
					{ question: "¿En qué año fue coronado Carlos I?", answers: ["1515", "1519 ", "1521"], isDate: true },
					{
						question: "¿Qué idea imperial tenía Carlos I?",
						answers: [
							"La hegemonía de la Monarquía Hispánica y la defensa del catolicismo",
							"Basada en la monarquía universal y la supremacía de la religión católica ",
							"Expansionista, tratando de convertirse en el reino más poderoso de Europa y Asia",
						],
					},
					{
						question: "¿Cuál es el principal papel de los territorios españoles en el proyecto imperial de Felipe II?",
						answers: [
							"El enorme y poderoso ejército permanente",
							"La posición militar estratégica en el Mediterráneo y en América",
							"La obtención de recursos para la política exterior ",
						],
					},
					{
						question: "¿Por qué se enfrentaron España y Francia en el reinado de Carlos I?",
						answers: [
							"La idea de la monarquía universal chocaba con los intereses franceses ",
							"Por ver quién consolidaba el dominio del atlántico",
							"Francia quería los territorios de América",
						],
					},
					//Hacer preguntas de las batallas con francia

					{
						question: "¿Consiguió Carlos I acabar con la amenaza del imperio otomano?",
						answers: [
							"A pesar de la conquista de Túnez, no lo consiguió ",
							"Con la conquista de Túnez(1535), logró acabar con la amenaza",
							"Debido a los grandes costes que este enfrentamiento supondría, decidió mantenerse al margen",
						],
					},
					{
						question: "¿Cuál fue el principal peligro a la idea imperial cristiana de Carlos I?",
						answers: ["El imperio otomano", "El protentantismo ", "La alianza de Francia con el papado"],
					},
					{
						question: "¿Qué idea imperial tenía Felipe II?",
						answers: [
							"La hegemonía de la Monarquía Hispánica y la defensa del catolicismo ",
							"Basada en la monarquía universal y la supremacía de la religión católica",
							"Expansionista, tratando de convertirse en el reino más poderoso de Europa y Asia",
						],
					},
					{
						question: "¿En qué año fijó Felipe II la capitalidad en Madrid?",
						answers: ["1561 ", "1548", "1556"],
						isDate: true,
					},
					{
						question: "¿Qué se firmó tras la victoria de Felipe II contra Francia en San Quintín?",
						answers: ["La paz de Cambrai", "La paz de Cateau-Cambresis ", "La Paz de Augsburgo"],
					},
					{ question: "¿En qué año se firmó la paz de Cateau-Cambresis?", answers: ["1559 ", "1557", "1552"] },
					// { question: "¿En qué año ocurrió la paz de Cateau-Cambresis?", answers: ["", "", ""] },   //San Quintín
					{
						question: "¿Quienes formaban parte de la Liga Santa?",
						answers: [
							"El papado, Venecia y la Monarquía Hispánica ",
							"El papado, Venecia y Francia",
							"Francia, Venecia y la Monarquía Hispánica",
						],
					},
					//batalla de lepanto
					{
						question: "¿Quienes ganaron en la batalla de Lepanto (1571)?",
						answers: ["Fue un empate", "El imperio otomano", "La Liga Santa "],
					}, //añadir preguntas de últimos párrafos
					{
						question: "¿Cuál fue el conflicto más grave en el reinado de Felipe II?",
						answers: ["Los Países Bajos ", "Inglaterra", "El imperio otomano"],
					},
					{ question: "¿En qué año se organizó la Armada Invencible?", answers: ["1588 ", "1590", "1598"], isDate: true },
					{
						question: "¿Qué ocurrió en los últimos años del reinado de Felipe II?",
						answers: [
							"Logró dominar a sus enemigos y establecer la hegemonía de la Monarquía Hispánica en Europa",
							"La crisis de la Hacienda y sucesivas bancarrotas ",
							"Perdió sus territorios en Europa a los Ingleses y Franceses",
						],
					},
				],
			},
			{
				name: "Olivares",
				numero: 12,
				questions: [
					{
						question: "¿Quién era el Conde-duque de Olivares?",
						answers: ["El valido de Carlos II", "El valido de Felipe III", "El valido de Felipe IV "],
					},
					{
						question: "¿Cuales fueron las instituciones claves para las reformas de Olivares?",
						answers: ["Las Cortes", "Las Juntas ", "La Hacienda"],
					},
					{
						question: "¿Qué Junta destacó en la época del Conde-duque de Olivares?",
						answers: ["La Junta de la Grande Reformación ", "La Junta de Millones", "La Junta de Represalias"],
					},
					{
						question: "¿Qué llevó a cabo el Conde-duque de Olivares?",
						answers: [
							"Una campaña para salvaguardar la moral y las buenas costumbres y contra la corrupción ",
							"Una campaña para recaudar dinero que pague las guerras en las que se había metido la Monarquía Hispánica",
							"Una campaña para salvaguardar las costumbres y fueros de los reinos de la Corona de Aragón",
						],
					},
					{
						question: "A nivel económico, ¿qué hizo el Conde-duque de Olivares?",
						answers: [
							"Incentivar las manufacturas de lana y seda y el comercio",
							"Fomentar matrimonios, promover la conversión a navegables los principales ríos y la supresión de aduanas y puertos secos",
							"Ambas opciones son correctas ",
						],
					},
					{
						question: "¿A nivel político, ¿qué hizo el Conde-duque de Olivares?",
						answers: [
							"Trató de reforzar la Monarquía Hispánica ",
							"Trató de recuperar territorios perdidos en Europa",
							"Crear una monarquía parlamentaria",
						],
					}, //añadir más preguntas
					// { question: "¿?", answers: ["", "", ""] },
				],
			},
		],
	},
	{
		name: "literatura",
		images: [
			"images/generacion-del-98.webp",
			"images/literatura-img.jpg",
			"images/antonio-machado-p.jpg",
			"images/pio-baroja.jpg",
		], //"images/antonio-machado.jpg",
		temas: [
			{
				name: "Antonio Machado",
				questions: [
					{
						question: "¿Donde nació Antonio Machado?",
						answers: ["Madrid", "Sevilla ", "Segovia"],
					},
					{
						question: "¿Quién fue la primer esposa de Antonio Machado?",
						answers: ["Leonor Izquierdo ", "Pilar Valderrama", "No se casó"],
					},
					{
						question: "¿En qué año muere Antonio Machado?",
						answers: ["1939 ", "1912", "1917"],
						isDate: true,
					},
					{
						question: "¿Donde murió Antonio Machado?",
						answers: ["Coillure ", "Segovia", "Soria"],
					},
					{
						question: "¿Qué causó la muerte de la esposa de Antonio Machado?",
						answers: ["La gripe española", "Sus convicciones republicanas", "Tuberculosis "],
					},
					{
						question: "¿Quién es Guiomar?",
						answers: [
							"Leonor Izquierdo",
							"Pilar Valderrama ",
							"Un personaje de los poemas de Machado que representa a España",
						],
					},
					{
						question: "¿En qué año se publicó 'Soledades'?",
						answers: ["1903 ", "1907", "1912"],
						isDate: true,
					},
					{
						question: "¿Qué caracteriza 'Soledades. Galerías y otros poemas'?",
						answers: [
							"Manifiesta características de la generación del 98",
							"Modernismo intimista ",
							"La muerte de Leonor Izquierdo",
						],
					},
					{
						question:
							"¿En torno a qué giran los sentimientos universales que apresa el íntimo monólogo de 'Soledades. Galerías y otros poemas'?",
						answers: [
							"El amor, la muerte, la injusticia social",
							"A Dios, el tiempo, la muerte ",
							"El tiempo, el destino, la naturaleza",
						],
					},
					{
						question: "¿Cómo son los versos de 'Soledades. Galerías y otros poemas'?",
						answers: [
							"Llenos de soledad, melancolía, angustia ",
							"Llenos de felicidad, armonía, prosperidad",
							"Depende de la interpretación",
						],
					},
					{
						question: "¿A qué obra de Antonio Machado pertenece 'Yo voy soñando caminos'?",
						answers: ["'Campos de Castilla'", "'Soledades. Galerías y otros poemas' ", "'Poesías completas'"],
					},
					{
						question: "¿Qué caracteriza 'Campos de Castilla'?",
						answers: [
							"Manifiesta características de la generación del 98 ",
							"Modernismo intimista",
							"Carácter autobiográfico",
						],
					},
					{
						question: "¿En qué año se publicó 'Campos de Castilla'?",
						answers: ["1917", "1907", "1912 "],
						isDate: true,
					},
					{
						question: "¿Qué influyó en Machado al escribir 'Campos de Castilla'?",
						answers: ["La muerte de Leonor Izquierdo", "Su amor hacia Pilar Valderrama", "La amistad de Miguel de Unamuno "],
					},
					{
						question: "¿En qué año se publicó 'Poesías completas'?",
						answers: ["1917 ", "1924", "1927"],
						isDate: true,
					},
					{
						question: "¿En cuántos bloques distintos se pueden agrupar las composiciones de 'Poesías completas'?",
						answers: ["5", "6 ", "Es un volumen homogéneo"],
					},
					{
						question: "¿En qué año se publicó 'Nuevas Canciones'?",
						answers: ["1929", "1924 ", "1927"],
						isDate: true,
					},
					{
						question: "¿Qué destaca en 'Nuevas Canciones'?",
						answers: [
							"La cincuentena de 'Proverbios y cantares' y sonetos de carácter autobiográfico",
							"La cincuentena de 'Proverbios y cantares' y sonetos de carácter crítico",
							"El centenar de 'Proverbios y cantares' y los sonetos de carácter autobiográfico ",
						],
					},
				],
			},
			{
				name: "Pío Baroja",
				questions: [
					{
						question: "¿En qué año nace Pío Baroja?",
						answers: ["1872 ", "1886", "1898"],
						isDate: true,
					},
					{
						question: "¿En qué año muere Pío Baroja?",
						answers: ["1962", "1959", "1956 "],
						isDate: true,
					},
					{
						question: "¿En qué año se publica 'El árbol de la ciencia'?",
						answers: ["1898", "1911 ", "1905"],
						isDate: true,
					},
					{
						question: "¿Dónde nació Pío Baroja?",
						answers: ["San Sebastián ", "Madrid", "Santander"],
					},
					{
						question: "¿Dónde murió Pío Baroja?",
						answers: ["San Sebastián", "Madrid ", "Alcolea del Campo"],
					},
					{
						question: "¿A qué trilogía pertenece 'El árbol de la ciencia'?",
						answers: ["'Tierra vasca'", "'El mar'", "'La raza' "],
					},
					{
						question: "¿Qué tema aparece en 'El árbol de la ciencia'?",
						answers: [
							"La religión",
							"La preocupación por España ",
							"La vida y la muerte, el paso del tiempo y el sentido de la vida",
						],
					},
					// { question: "¿Qué tema aparece en 'El árbol de la ciencia'?", answers: ["", "Las conversaciones filosóficas de una persona angustiada, que no ve el sentido de vivir en una España tan atrasada", "La búsqueda del sentido de la vida por un hombre desorientado y la preocupación por España"] },
					{
						question: "¿Qué se refleja en 'El árbol de la ciencia'?",
						answers: [
							"La vida española de finales del siglo XIX ",
							"El positivismo del futuro de España",
							"La importancia de la España rural a finales del siglo XIX",
						],
					},
					{
						question: "¿Quién es el protagonista de 'El árbol de la ciencia'?",
						answers: ["Aracil", "Montaner", "Andrés Hurtado "],
					},
					{
						question: "¿Dónde busca respuesta a sus preguntas Andrés Hurtado?",
						answers: [
							"En la filosofía irracionalista de la época ",
							"En las respuestas que le da su tío Iturrioz",
							"En la facultad de medicina",
						],
					},
					{
						question: "¿Cómo es la organización externa de 'El árbol de la ciencia'?",
						answers: [
							"7 partes, 56 capítulos distribuidos equitativamente",
							"3 etapas fundamentales",
							"7 partes desiguales, 53 capítulos en total ",
						],
					},
					{
						question: "¿Cómo es la organización interna de 'El árbol de la ciencia'?",
						answers: [
							"No hay división en la estructura, es un continuo filosófico y moral",
							"3 etapas fundamentales ",
							"7 partes desiguales, 53 capítulos en total",
						],
					},
					{
						question: "¿El vitalismo pertenece a...?",
						answers: ["Nietzsche ", "Schopenhauer", "Descartes"],
					},
					{
						question: "¿El pesimismo existencial pertenece a...?",
						answers: ["Nietzsche", "Schopenhauer ", "Descartes"],
					},
					{
						question: "¿'El árbol de la ciencia' es una novela...?",
						answers: ["De personaje ", "Picaresca", "Epistolar y filosófica"],
					},
					{
						question: "¿Cómo son los espacios de 'El árbol de la ciencia'?",
						answers: ["Reales y uno fantástico", "Reales, basados en la España de la época", "Reales, y uno de base real "],
					},
					{
						question: "¿Cómo son los personajes de 'El árbol de la ciencia'?",
						answers: ["Planos", "Redondos ", "Hurtado es redondo, pero el resto son planos"],
					},
					{
						question: "¿Por qué opción se decanta Hurtado?",
						answers: ["La 'ataraxia' ", "El vitalismo", "Dejar la filosofía"],
					},
				],
			},
			{
				name: "Valle-Inclán",
				questions: [
					{ question: "¿En qué año nació Ramón del Valle-Inclán?", answers: ["1866 ", "1878", "1893"], isDate: true },
					{ question: "¿En qué año murió Valle-Inclán?", answers: ["1943", "1939", "1936 "], isDate: true },
					{ question: "¿A qué género literario hizo aportaciones Valle-Inclán?", answers: ["Poesía", "Teatro ", "Novelas"] },
					{
						question: "¿A qué obedece toda la obra de Valle-Inclán?",
						answers: [
							"El rechazo del realismo tradicional ",
							"Realismo minucioso en las escenas de la obra",
							"A los gustos de la burguesía de la época",
						],
					},
					{
						question: "¿Cuál es la base del 'esperpento'?",
						answers: [
							"La sátira deformadora ",
							"Los símbolos de serpientes usados a lo largo de sus obras",
							"Crítica a la situación de España a finales del siglo XIX",
						],
					},
					{
						question: "¿Cómo es el teatro en el que se sitúa Valle-Inclán?",
						answers: [
							"Basado en los problemas existenciales y sociales del momento ",
							"Basado en el realismo de sus escenas y paisajes",
							"",
						],
					},
					{
						question: "¿En cuántos ciclos se pueden dividir la producción teatral de Valle-Inclán?",
						answers: ["6", "3 ", "4"],
					},
					{
						question: "¿Cuál de los siguientes ciclos fue el primero?",
						answers: ["El ciclo de la farsa", "El ciclo del esperpento", "El ciclo mítico "],
					},
					{
						question: "¿A qué ciclo pertenecen 'Comedias bárbaras' y 'Divinas palabras'?",
						answers: ["El ciclo de la farsa", "El ciclo del esperpento", "El ciclo mítico "],
					},
					{
						question: "¿Dónde se ambientan las obras del diclo mítico?",
						answers: [
							"En una Galicia arcaica, violenta y patriarcal ",
							"En una Galicia próspera, segura e igualitaria",
							"En un paisaje realista de Castilla",
						],
					},
					{
						question: "¿Cómo es el ser humano en el ciclo mítico?",
						answers: [
							"Cruel, codicioso, lascivo, sin las capas de racionalidad ",
							"Con afán de sobrevivir a toda costa en una época de crisis",
							"Ambas opciones son correctas",
						],
					},
					{
						question: "¿Qué es 'Comedias bárbaras'?",
						answers: ["Una trilogía ", "Una obra perteneciente a una trilogía", "Una obra suelta"],
					},
					{
						question: "¿Qué presenta 'Divinas palabras'?",
						answers: [
							"La preocupación de una madre por su hijo enfermo",
							"La irracionalidad de los comportamientos humanos ",
							"La flexibilidad del comportamiento humano ante varias circunstancias de las que destaca la enfermedad",
						],
					},
					{
						question: "¿A qué ciclo pertenece 'La marquesa Rosalinda'?",
						answers: ["El ciclo de la farsa ", "El ciclo del esperpento", "El ciclo mítico"],
					},
					{
						question: "¿Qué presenta el ciclo de la farsa?",
						answers: [
							"Contraste entre el teatro y la novela española",
							"Contraste entre lo sentimental y lo grotesco ",
							"Contraste entre el realismo y el modernismo",
						],
					},
					{
						question: "¿En qué consiste el esperpento?",
						answers: [
							"Deformación caricaturesca de la realidad ",
							"Esconder figuras relacionadas con serpientes en las escenas del teatro",
							"Mostrar las esperiencias de forma realista",
						],
					},
					{
						question: "¿Cómo logra Valle-Inclán el efecto del esperpento?",
						answers: [
							"Con la animalización y cosificación de los personajes",
							"Con ambientes sórdidos y degradados",
							"Ambas opciones son correctas ",
						],
					},
					{
						question: "¿A qué ciclo pertenecen 'Luces de bohemia' y 'Martes de carnaval'?",
						answers: ["El ciclo de la farsa", "El ciclo del esperpento ", "El ciclo mítico"],
					},
					{
						question: "¿Cómo puede interpretarse 'Luces de Bohemia'?",
						answers: [
							"Como un teatro de fantasía basada en una época de crisis",
							"Como una crítica feroz de la realidad política y social de España ",
							"Como una obra con valor filosófico según los pilares fundamentales de la generación del 98",
						],
					},
					{
						question: "¿Qué reflejan las figuras marginales y grotescas que aparecen en 'Martes de carnaval'?",
						answers: [
							"Una visión ácida de la realidad ",
							"Una visión esperanzadora de España",
							"Una agria visión del ser humano",
						],
					},
					{
						question: "¿Qué es 'Martes de carnaval'?",
						answers: ["Una trilogía ", "Una obra perteneciente a una trilogía", "Una obra suelta del ciclo del esperpento"],
					},
				],
			},
		],
	},
];

export default data;

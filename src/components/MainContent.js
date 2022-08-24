import Card from "./Card";
import { useGlobalContext } from "../context";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MainContent = () => {
	const { data, toggleAlert, user, topFive } = useGlobalContext();
	const [redirect, setRedirect] = useState(false);
	const [redirectToAddQuestions, setRedirectToAddQuestions] = useState(false);
	const [adminEmail, setAdminEmail] = useState("");
	const [isAdmin, setIsAdmin] = useState("");

	const handle_button = () => {
		if (user && user.emailVerified) {
			setRedirect(true);
		} else if (user && !user.emailVerified) {
			alert("Verifique su dirección de correo para acceder a este contenido");
			toggleAlert(true, "Verifique su dirección de correo para acceder a este contenido", "danger");
		} else {
			alert("Inicie sesión para acceder a este contenido");
			toggleAlert(true, "Inicie sesión para acceder a este contenido", "danger");
		}
	};
	const get_admin_email = async () => {
		const response = await axios.post("https://estudia-ebau-api.herokuapp.com/email", { email: user.email });
		setIsAdmin(response.data.isAdmin);
	};

	useEffect(() => {
		if (user) {
			get_admin_email();
		}
	}, []);

	const handle_add_questions_button = () => {
		setRedirectToAddQuestions(true);
	};

	if (redirect) return <Redirect to='/ranked' />;
	if (redirectToAddQuestions) return <Redirect to='/add-questions' />;

	return (
		<>
			{user && isAdmin && (
				<div>
					<button type='btn' className='ranked-btn' onClick={handle_add_questions_button}>
						Añade preguntas
					</button>
				</div>
			)}

			<div className='intro'>
				<div>
					<h1 className='intro-title'>Preparación para la EBAU</h1>
					<div className='p-container'>
						<p>
							Use esta página para repasar contenidos relacionados con el examen de la EBAU en La Rioja. En esta página
							encontrará preguntas cortas de tipo test para que revise el temario de la selectividad.
						</p>
						<p>
							Las preguntas son mayoritariamente de tipo test, habrá 3 posibles respuestas a una pregunta sobre el temario
							seleccionado, y solo una de las cuales será la correcta. Podrá seleccionar los contenidos a preguntar, los
							estándares que desees por ejemplo en el caso de historia de España
						</p>
						<p>
							El objetivo de esta página es ayudar en el repaso de los contenidos ya estudiados, ya sea para ir recordándolos
							cada semana un rato para no olvidarlos o repasar en el tiempo libre cuando se acerca un exámen para saber el
							temario lo mejor posible sin tener que reeler toda la extensión de los apuntes.
						</p>
					</div>
					{/* <CountDown /> */}
				</div>
				<div className='main-content'>
					<div className='add'>{/* <p>Hello</p> */}</div>

					<div className='card-layout'>
						{data.map((subject, index) => {
							return <Card key={index} {...subject} />;
						})}
					</div>

					<div className='add'>{/* <p>Hello</p> */}</div>
				</div>
				<div className='ranked-div'>
					<button type='btn' className='ranked-btn' onClick={handle_button}>
						Pon a prueba tus conocimientos
					</button>
				</div>
				{topFive && (
					<div className='table-div'>
						<h1 className='table-title'>Mejores puntuaciones</h1>
						{topFive.length > 0 ? (
							<table className='topfive-table'>
								<thead>
									<tr>
										<th></th>
										<th>Nombre de usuario</th>
										<th>Puntuación</th>
									</tr>
								</thead>
								<tbody>
									{topFive.map((user, index) => {
										return (
											<tr key={index}>
												<th>{index + 1}</th>
												<td>{user.username}</td>
												<td> {user.score}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						) : (
							<h3>{user ? "Sé el primero en puntuar" : "Inicia sesión para ver el ranking"}</h3>
						)}
					</div>
				)}
				{/* <div className='p-container'>
					<h2>Estándares</h2>
					<br />
					<p>
						EXPLICA EL DIFERENTE NIVEL DE DESARROLLO DE LAS ÁREAS CELTA E IBÉRICA EN VÍSPERAS DE LA CONQUISTA ROMANA EN
						RELACIÓN CON LA INFLUENCIA RECIBIDA DE LOS INDOEUROPEOS, EL REINO DE TARTESSOS Y LOS COLONIZADORES FENICIOS Y
						GRIEGOS A comienzos del primer milenio antes de Cristo la Península ibérica fue entrando en la Edad del Hierro. A
						partir de esa fecha, los pueblos indígenas peninsulares fueron recibiendo la influencia de otras civilizaciones
						llegadas del norte (celtas indoeuropeos) y a través del Mediterráneo (fenicios, griegos y cartagineses), que
						llegaron a la península en busca de nuevas tierras, de materias primas (sobre todo metales) y mercados para
						comerciar. El contacto con esos pueblos fue progresivamente transformando a las poblaciones originales ibéricas,
						formando un variado mosaico de pueblos que, no obstante en torno al siglo III a.C., en vísperas de la conquista
						romana, pueden agruparse en dos grandes áreas: la céltica al norte y al oeste y la ibérica en el sur y este
						peninsulares. En torno al siglo IX a. C. se produjeron invasiones de pueblos indoeuropeos provenientes del centro
						de Europa, que se asentaron ante todo en el norte y oeste de la península y, entre otros avances, aportaron el
						uso del hierro y la incineración en los llamados campos de urnas. La cultura de estos pueblos entró en contacto
						con el sustrato cultural peninsular anterior e influyó sobre él, superponiéndose  al mismo o creando un
						mestizaje, dando lugar a lo que posteriormente se llamó el área cultural celta. Otros pueblos, como los fenicios
						y posteriormente los griegos (y más tarde los cartagineses), procedentes del este del Mediterráneo llegaron a la
						península por vía marítima, atraídos por su riqueza en minerales (cobre, estaño, oro, plata, hierro…) y para
						comerciar, fundando factorías o colonias. Eran pueblos culturalmente muy desarrollados que, a través de estas
						colonizaciones, entraron en contacto con los indígenas peninsulares de las zonas costeras del este y sur
						peninsular, que, por su influencia, adquirieron niveles de civilización muy avanzados, dando lugar al área
						cultural conocida como ibérica. Los fenicios, procedentes de ciudades como Tiro, Sidón o Biblos, en torno al
						actual Líbano, fueron un pueblo de navegantes y comerciantes que en sus rutas alcanzaron la península ibérica en
						torno al siglo VIII a. C. Para comerciar con los indígenas crearon establecimientos comerciales costeros, colonia
						y factorías, entre las que destacó Gádir, la ciudad más antigua del territorio peninsular. Posteriormente, ante
						las malas condiciones de vida en amplias zonas de la Hélade, se produjeron las colonizaciones griegas que,
						partiendo de sus polis originales, fundaron colonias en el Mediterráneo occidental, alcanzando las costas de la
						península ibérica y fundando colonias que mantenían una organización similar a la de su metrópoli de origen.
						Entre estas colonias se encontraban Emporion, Rhode, Hemeroskopeion o Sagunto. En torno a ellas se produjo un
						intenso comercio, un cierto desarrollo urbano y un intercambio cultural que influyó decisivamente en el grado de
						civilización de los pueblos peninsulares que entraron en contacto con ellos, que fueron adoptando los avances
						aportados por los colonos y comerciantes griegos. Entre los avances más importantes que estas civilizaciones
						orientales aportaron a los pueblos de la península que entraron en contacto con ellos se encontraron el alfabeto
						o la moneda, que fueron adoptados por los pueblos ibéricos. Los navegantes fenicios y griegos, según narran las
						fuentes antiguas griegas, conocieron la existencia de un poderoso y rico estado asentado en el suroeste
						peninsular, probablemente en torno a la desembocadura del Guadalquivir, llamado Tartessos. Estaba gobernado por
						reyes, de los que se conoce el nombre de uno de ellos, Argantonio, y era muy rico en ganadería, en oro, plata y
						cobre y parece ser que controlaba la ruta del estaño procedente de la ruta atlántica. Aunque no se han hallado
						restos de sus ciudades sí que han aparecido importantes tesoros que atestiguan su riqueza. Este reino mantuvo
						relaciones comerciales y culturales con las colonias fenicias como Gádir y con los griegos de Massalia o Rhode,
						aunque desapareció misteriosamente en torno al siglo VI a. C., probablemente en relación con la llagada de los
						cartagineses. Su influencia se extendió por todo el suroeste peninsular y el grado de civilización de algunos
						pueblos ibéricos posteriores de esa zona, como los turdetanos, puede explicarse en parte por esta herencia
						tartésica. La antigua colonia fenicia del norte de África, Cartago, fue el último de los pueblos colonizadores
						que llegó a la península, a partir de mediados del siglo VI y V a.C., fundando colonias como Ebbusus o Cartago
						Nova. A diferencia de los colonizadores anteriores, no solo querían comerciar, sino que intentaron conquistar el
						territorio de los pueblos peninsulares, a los que dominaron, llegando incluso a incorporar tropas peninsulares en
						sus ejércitos, enfrentándose con Roma por el dominio del Mediterráneo occidental. Como consecuencia del diferente
						contacto de los pueblos indígenas peninsulares con los indoeuropeos del norte y los colonizadores del este del
						Mediterráneo, se configuraron hasta la llegada de los romanos dos áreas culturales muy diferenciadas y compuestas
						números pueblos diferentes: A) El área ibérica, en las áreas costeras del este y sur peninsular, penetrando por
						los valles del Ebro y Guadalquivir. Estaba formada por pueblos diferentes que nunca formaron una unidad política
						como los layetanos, edetanos, bastetanos o turdetanos que, pese a sus diferencias, habían entró en contacto con
						las influencias civilizadoras de los colonizadores mediterráneos, alcanzando por ello grados de desarrollo muy
						notables. Su economía estaba muy desarrollada, basada en la agricultura, en la minería, la artesanía (textil y
						armas como la falcata) y en un activo comercio con los pueblos del Mediterráneo oriental, empleando la moneda. Su
						estructura social estaba bastante evolucionada, con grupos sociales claramente diferenciados en función de su
						poder y riqueza, desde la aristocracia guerrera hasta los esclavos. Políticamente también recibieron la
						influencia de los colonizadores, organizándose en ciudades- estado, bajo el gobierno de reyezuelos (régulos) o
						asambleas de carácter militar. En algunos casos parece que incluso desarrollaron instituciones semejantes a las
						griegas, con asamblea, senado y magistrados. Sus poblados estaban amurallados y eran de mayor tamaño que los del
						área céltica. Utilizaron la escritura, adoptándola de fenicios y griegos, que puede leerse aunque no ha podido
						ser descifrada en la actualidad. Su arte, como la famosa Dama de Elche está muy evolucionado y muestra influencia
						del arte griego y oriental. B) El área celta, en el norte y oeste de la península recibió ante todo influencia de
						los invasores indoeuropeos y apenas mantuvo contacto con los vientos civilizadores de los colonizadores
						mediterráneos. Por ello, en general, fueron pueblos menos avanzados que los iberos y desconocían el uso de la
						escritura y de la moneda. Los pueblos del centro y el oeste (lusitanos, vacceos, vetones, carpetanos) que
						mantenían relaciones con los pueblos ibéricos estaban más avanzados que los del norte y noroeste, como vascones,
						cántabros, galaicos o astures, mucho más aislados. En general eran pueblos belicosos y amantes de su
						independencia, con una estructura social poco compleja y dominada por una cierta aristocracia guerrera, llegando
						a crear confederaciones tribales. Su estructura social era tribal, basada en el parentesco y estructurada en
						clanes, con fuerte cohesión entre sus miembros. No tenían una organización política estatal, limitándose a
						consejos de ancianos o a seguir a cabecillas destacados por su valor en el combate.  Su economía se basaba en
						gran medida en la ganadería y en la extracción de minerales como el oro y el estaño, siendo hábiles metalúrgicos.
						El comercio estaba poco desarrollado y se basaba en el trueque, aunque se sabe que comerciaron con metales con
						fenicios, cartagineses y otros pueblos célticos. Algunos de ellos, como los noroccidentales, vivían en poblados
						amurallados llamados castros. Sus manifestaciones artísticas fueron menos numerosas y de aspecto más tosco que
						las de los iberos, como los conocidos “verracos” de los vetones. También se puede incluir en esta área a los
						celtíberos, de la zona centro-oriental de la meseta y la región del valle medio del Ebro, pueblos indígenas como
						los berones, los pelendones o los arévacos, que se habían fusionado con los celtas y que habían asumido su
						cultura y que, en determinados casos también recibieron la influencia ibérica, como la acuñación de moneda o la
						escritura.
					</p>
					<br />
					<p>
						DEFINE EL CONCEPTO DE ROMANIZACIÓN Y DESCRIBE LOS MEDIOS EMPLEADOS PARA LLEVARLA A CABO 1. Definición. 2. Inicio
						 Con la conquista. 3. Duración Hasta 7 siglos en algunas zonas y menos en otras. 4. No fue un fenómeno
						uniformeZonas más y menos romanizadas. 5. Proceso: voluntario e impuesto por los conquistadores. 6. Facetas de
						la romanización: a. Lengua Latín. b. Religiónclásica y cristianismo. c. El Derecho romano. d. Modos de vida
						Estilo romano: ciudades, espectáculos, organización social, moneda… e. Organización administrativa. f. Toponimia
						y onomástica. g. Monumentos y obras públicas. 7. Factores: a. Las ciudades y la extensión de la vida urbana:
						Elemento fundamental de difusión del modo de vida romano y de la romanización (comercio, administración): i.
						Ciudades preexistentes, transformando sus órganos de gobierno autónomos en órganos dependientes de la
						administración general romana. ii. Nuevas ciudades creadas por los romanos. b. El ejército romano: i. Soldados
						venidos de Italia y reclutamiento de tropas auxiliares entre los pueblos indígenas. ii. Nuevos núcleos urbanos
						fundados junto a los campamentos: León. c. Fundación de colonias y asentamiento de colonos romanos e itálicos:
						Mérida. d. Concesión de la ciudadanía a los indígenas e imposición del derecho romano, que unificó a los
						diferentes pueblos: i. 72 Edicto de Vespasiano: concedía el estatuto de municipio latino a las ciudades
						hispanas.  ii. 212 Caracalla amplió la ciudadanía a todos los habitantes del imperio. e. Las viae o calzadas
						romanas. f. La explotación económica basada en los latifundios, la industria conservera y la minería, al servicio
						de la economía imperial basada en Roma. 8. Hispania Una de las provincias más romanizadas. a. Personalidades
						romanas nacidas en Hispania: i. Escritores y filósofos: Séneca, Marcial, Lucano. ii. Emperadores: Trajano,
						Adriano, Teodosio.
					</p>
					<br />
					<p>
						RESUME LAS CARACTERÍSTICAS DE LA MONARQUÍA VISIGODA Y EXPLICA POR QUÉ ALCANZÓ TANTO PODER LA IGLESIA Y LA NOBLEZA
						Los visigodos, un pueblo germánico muy romanizado, penetraron en la península ibérica a comienzos del siglo V
						como federados del Imperio romano para hacer frente a los suevos, vándalos y alanos, que habían invadido
						Hispania. Inicialmente su reino se extendió por el sur de Francia y la península ibérica, con capital en Tolosa,
						pero, tras su expulsión de Francia por los Francos, en el año 507 se establecieron solo en la península ibérica,
						formando un reino independiente con capital en Toledo. Eran una pequeña minoría respecto de la población
						hispanorromana, a la que dominaron militarmente, aunque con el tiempo se fueron mezclando con la nobleza
						autóctona y adoptando en gran medida sus costumbres y cultura. Inicialmente cada grupo se regía por sus propias
						normas y códigos propios hasta la unificación legislativa conseguida con Recesvinto en el Liber Iudiciorum. La
						organización política de los visigodos se sustentaba en el derecho germánico, que consideraba que la institución
						fundamental de gobierno era la Asamblea de los hombres libres, en la que residía el poder del reino, que era
						conferido a un rey. Por ello, la monarquía visigoda fue electiva: los nobles, siguiendo las costumbres
						germánicas, escogían de entre ellos a su rey. Este fenómeno provocó una grave inestabilidad, por cuanto los
						enfrentamientos para hacerse con la corona entre facciones nobiliarias fueron muy frecuentes. De hecho, fue este
						el factor clave para entender el derrumbamiento del reino visigodo en el 711 tras la invasión musulmana. Los
						reyes visigodos, como Leovigildo o Chindasvinto, intentaron modificar esta costumbre e incorporar el concepto
						imperial romano a su gobierno y convertir a la monarquía en hereditaria. Pese a estos intentos, nunca lograron
						establecer una monarquía estable, con un poder real fuerte y basada en el derecho de herencia. Los poderes del
						rey eran muy amplios: juez supremo, jefe del ejército, legislador, encargado de la guerra y de la paz… No
						obstante, su poder estaba lejos de ser absoluto, pues debía contar con los nobles más importantes. Para el
						ejercicio de las tareas de gobierno, el rey contaba con: a) El Aula Regia o Consejo del Rey, que era una especie
						de asamblea consultiva formada por la aristocracia visigoda y en la que participaban funcionarios, clérigos y los
						nobles de más alto rango que, que, con el título de Comes, estaban al frente de diferentes servicios: Comes del
						Tesoro Regio, Comes de administración de las tierras de la Corona, Comes de recaudación de impuestos, Comes de
						los gastos del monarca y de su casa. También participaban los grandes funcionarios territoriales y
						militares: Duces provinciales (delegados del rey), Comites civitates (jueces de las ciudades) y Gardingos (jefes
						militares). b) A partir de la unificación religiosa bajo el catolicismo, que se produjo en el reinado de
						Recaredo, los Concilios de Toledo fueron la otra gran institución fundamental. Con la unificación religiosa, los
						reyes no solo trataron de unir a toda la población del reino, sino también de conseguir el apoyo tanto de la
						aristocracia hispanorromana como de la cada vez más poderosa Iglesia. Ésta, en contrapartida, se convirtió en un
						nuevo árbitro de la situación política; en lo sucesivo apoyaría al monarca siempre que actuara de acuerdo a sus
						intereses. Los concilios no solo fueron asambleas de los obispos católicos para dirimir cuestiones religiosas y
						teológicas, sino que adquirieron gran peso político, colaborando con los reyes en tareas legislativas y asuntos
						de gobierno. En ellos los obispos ratificaban las decisiones de los reyes y les daban fuerza legal. Se convocaban
						cada vez que debía tratarse un asunto importante que afectaba a la monarquía, adquiriendo gran poder la Iglesia y
						los obispos. Además de estas dos instituciones existía el Officium palatino, conjunto de nobles que desempeñaban
						cargos en palacio, algunos de los cuales participaba en el Aula Regia. La monarquía visigoda propició el
						surgimiento de una poderosa nobleza territorial. Habitualmente, los monarcas conservaron una comitiva
						de clientes que los acompañaban, jurándoles fidelidad y recibiendo protección y sustento. En un primer momento
						los reyes se rodearon de gardingos o guerreros fieles a su persona, a los que mantenían en palacio.
						Posteriormente tendieron a recompensar sus servicios militares con la entrega de tierras en usufructo vitalicio
						(no en propiedad). Pero con el tiempo, los gardingos convirtieron esas tierras en propiedades hereditarias, en
						las que gobernaban con total autonomía respecto al poder del rey. De este modo, en ocasiones, en vez de asistir
						militarmente al monarca, le usurpaban incluso su autoridad política. Esos gardingos, convertidos ya en nobleza
						territorial latifundista, se rodearon, a su vez, de hombres fieles conocidos como bucelarios. En esta relación,
						propia de una época de dificultades, el bucelario obtenía del noble protección y tierras, y a cambio adquiría con
						él un compromiso de fidelidad y obediencia. Asimismo, el proceso de ruralización, la inestabilidad y la debilidad
						del poder real para llegar a todos los rincones del reino, hicieron que muchos pequeños propietarios rurales
						buscasen la protección que les ofrecían los nobles, que disponían de tropas propias, creándose así una serie de
						relaciones personales por las que, a cambio de protección cedían sus tierras o trabajaban para los nobles,
						comenzando a gestarse el modelo feudal. La nobleza adquirió pues, un gran poder por:  La tradicional
						organización aristocrática de los pueblos germánicos.  Su papel en los órganos de gobierno que auxiliaron al
						rey.  El incremento de su poder territorial, por la usurpación de las tierras concedidas inicialmente en
						usufructo por el rey, convirtiéndolas en posesiones hereditarias.  El desarrollo de las relaciones personales en
						tiempos de inseguridad. Por su parte, la Iglesia cristiana ya había adquirido gran poder en el Bajo Imperio
						Romano tras los Edictos de Milán y Tesalónica y una gran riqueza, llegando a convertirse las diócesis en los
						últimos reductos de administración imperial en los últimos tiempos del Imperio. Tras el III Concilio de
						Toledo (589) incrementó su influencia política, pues los concilios, aunque eran convocados por los reyes,
						tuvieron mucho poder ya que establecieron importantes normas relacionadas con la elección de los reyes o las
						obligaciones debían cumplir. Los obispos se convirtieron desde ese momento en verdaderas autoridades del reino y
						pasaron a desempeñar competencias en asuntos sociales, fiscales y judiciales que desbordaban el mero ámbito de la
						fe. Además, los monarcas eran ungidos por los obispos, como signo de legitimidad de su poder. Nobleza e Iglesia,
						como grupos poderosos, tuvieron, por tanto, intereses comunes y coincidieron en impedir el establecimiento de una
						monarquía fuerte que pudiera limitar su influencia y privilegios. Además, los reyes dependían de su apoyo para
						acceder al trono y mantenerse en él. FUENTES:  Historia de España.2º Bachillerato. Ed. Santillana  Historia de
						España.2º Bachillerato. Ed. Educalia 
						https://geografiaehistoria.org/hesp-estandares/bloque01/107-11-resume-las-caracteristicas-de-la-monarquia-visigoda-y-
					</p>
				</div> */}
			</div>
		</>
	);
};

export default MainContent;

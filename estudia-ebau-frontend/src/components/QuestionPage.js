import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context";
import SideBarContents from "./SideBarContents";
import CongratulationsPage from "./CongratulationsPage";
import QuestionComponent from "./QuestionComponent";

const QuestionPage = ({ name }) => {
	const { data, closeSidebar, isSidebarOpen, contentToAskFor, setContentToAskFor, toggleAlert } = useGlobalContext();
	const [show, setShow] = useState(false);
	const containerRef = useRef(null);
	const answerRef = useRef(null);
	const subjectToAskFor = data.filter((subject) => subject.name === name)[0];
	const [questionsToAskFor, setQuestionsToAskFor] = useState([]);
	const [index, setIndex] = useState(0);
	const [rightAnswers, setRightAnswers] = useState(0);
	// const [lengthOf]

	useEffect(() => {
		let list = [];
		subjectToAskFor.temas.forEach((tema) => {
			if (contentToAskFor.includes(tema.name)) {
				list = [...list, ...tema.questions];
			} else {
			}
		});
		setRightAnswers(0); //para evitar que pueda tener corretas sin hacetrlas al bajar contenido
		setIndex(0);

		// setQuestionsToAskFor([...list]);
		setQuestionsToAskFor(randomizeOrder(list));
	}, [contentToAskFor]);

	// useEffect(() => {
	// 	randomizeOrder();
	// }, [questionsToAskFor]);
	const resetQuestions = () => {
		setQuestionsToAskFor([]);
		setRightAnswers(0);
		setIndex(0);
		setContentToAskFor([]);
	};

	const plusRightAnswer = () => {
		setRightAnswers(rightAnswers + 1);
	};

	const randomizeOrder = (list) => {
		const listLength = list.length;
		let newList = [];
		for (let i = 0; i < listLength; i++) {
			const indexToTakeOut = Math.floor(Math.random() * list.length);
			let item = list.splice(indexToTakeOut, 1);

			newList.push(...item);
		}

		return [...newList];
	};

	// const calculateHeight = () => {
	// 	const bottom = answerRef.current.getBoundingClientRect().bottom;
	// 	const top = containerRef.current.getBoundingClientRect().top;
	// 	return bottom - top + 20;
	// };

	// useEffect(() => {
	// 	// console.log(containerRef.current.getBoundingClientRect());
	// 	// console.log(calculateHeight());
	// 	// console.log(show);
	// 	const height = calculateHeight();
	// 	if (show) {
	// 		containerRef.current.style.height = `${height}px`;
	// 	} else {
	// 		containerRef.current.style.height = "54px";
	// 	}
	// }, [show]);

	// if (index >= questionsToAskFor.length) return;

	return (
		<>
			{/* <h1>{name}</h1> */}
			<SideBarContents name={name} />

			<section
				className='question-page question-page-background'
				onMouseOver={() => {
					if (!isSidebarOpen) {
						closeSidebar();
					}
				}}
			>
				{questionsToAskFor.length > 0 && index >= questionsToAskFor.length ? (
					<CongratulationsPage
						name={name}
						resetQuestions={resetQuestions}
						percentage={Math.round(((rightAnswers / questionsToAskFor.length) * 100 + Number.EPSILON) * 100) / 100}
					/>
				) : (
					<>
						{isSidebarOpen && <div className='background-cover'></div>}
						{/* <QuestionComponent containerRef={containerRef} setShow={setShow} show={show} answerRef={answerRef} question={questionsToAskFor[index]} /> */}
						{questionsToAskFor.length > 0 ? (
							<QuestionComponent
								index={index}
								setIndex={setIndex}
								{...questionsToAskFor[index]}
								plusRightAnswer={plusRightAnswer}
								length={questionsToAskFor.length}
								randomizeOrder={randomizeOrder}
							/>
						) : (
							<h1 className='center-h1'>Seleccione temario a preguntar</h1>
						)}
					</>
				)}
			</section>
			{/* <div className='p-container'>
				<br />
				<p>
					DESCRIBE LA EVOLUCIÓN POLÍTICA DE AL ÁNDALUS: La conquista musulmana: La conquista musulmana de la península
					ibérica comenzó en el año 711, cuando un ejército bereber, llamado por algunos nobles visigodos, dirigido por
					Tarik, derrotó al rey visigodo don Rodrigo en Guadalete. Musa completó muy rápidamente la conquista debido al
					ímpetu expansivo del islam, a la indiferencia de la población hispanovisigoda y a los pactos con los nuevos
					gobernantes por parte de nobles visigodos, comunidades judías y parte de la población, descontentos con la
					monarquía visigoda. El emirato dependiente: Al-Ándalus se convirtió en una provincia (emirato) sometida a la
					autoridad política y religiosa del califa de Damasco, con capital en Córdoba. La expansión musulmana fue frenada en
					718 en Covadonga y en Poitiers en 732. Fueron habituales los enfrentamientos entre árabes y bereberes. En el año
					750 la dinastía Omeya fue depuesta del poder por los abbasíes y el califato pasó a esta familia, trasladando su
					sede a Bagdad. No obstante, un omeya, Abd al-Rahman, logró sobrevivir y huyó a al-Ándalus, donde conservaba apoyos,
					proclamándose emir en 756. El emirato independiente: Abd al-Rahman I se declaró políticamente independiente de
					Bagdad, aunque siguió reconociendo la autoridad religiosa del califa. Fue un periodo de asentamiento de la cultura
					y organización territorial musulmana, aunque se reprodujeron los problemas entre árabes y bereberes, así como
					revueltas de muladíes y mozárabes ante la intolerancia religiosa, que sumieron al emirato cordobés en una crisis,
					que fue aprovechada por los reinos cristianos del norte. El califato de Córdoba (929): Abd al-Rahman III, tras
					vencer a sus enemigos internos y frenar los avances cristianos, adquirió el prestigio necesario para proclamarse
					califa en el año 929, lo que significa desligarse de la sumisión religiosa y de cualquier dependencia respecto de
					Bagdad. Fue el periodo de máximo esplendor de al-Ándalus, construyéndose Medina Azahara. También detuvo el avance
					de los reinos cristianos del norte, llegando a convertirlos en tributarios y vasallos de Córdoba, a la que debían
					pagar parias. Este esplendor se mantuvo en el reinado de Al-Hakam II, pero durante el reinado de Hisham II el
					califa perdió el poder efectivo, siendo realmente su hayib, Almanzor, quien gobernaba el califato. Con su ejército
					aseguró su poder interno y realizó razzias de saqueo contra los cristianos, como la de Santiago de Compostela. Los
					reinos de taifas y los imperios norteafricanos: A su muerte, el califato se fue disgregando en reinos
					independientes, llamados taifas (1031), que se enfrentaban entre sí, lo que fue aprovechado por los reinos
					cristianos en su avance hacia el sur, obligando a las taifas a pagar parias. Fue un periodo de decadencia política
					pero de esplendor cultural. Las principales taifas fueron: Zaragoza, Sevilla, Toledo, Badajoz… Los almorávides.
					Ante el avance cristiano hasta el Tajo, las taifas llamaron en su ayuda a los almorávides, un pueblo bereber del
					norte de África que profesaban los principios más estrictos del islam. Derrotaron a Alfonso VI en Sagrajas y
					dominaron militarmente las taifas. Al principio gozaron de popularidad, pero su rigorismo y el alza de impuestos,
					provocaron revueltas y su caída, volviendo al-Ándalus a fragmentarse en unas segundas taifas. Los almohades: En el
					siglo XII algunas taifas pidieron ayuda a los almohades, otro movimiento religioso del norte de África, que
					dominaban el Magreb, con capital en Marrakech. Si bien derrotaron a los cristianos en Alarcos, fueron derrotados en
					las Navas de Tolosa (1212) frente a una coalición de reyes cristianos. Esta derrota supuso la decadencia almohade
					en al-Ándalus y una nueva fragmentación del poder político (terceras taifas), que fueron cayendo rápidamente en
					manos cristianas a lo largo del siglo XIII, conquistando los reinos cristianos el levante, valle del Guadalquivir y
					Murcia. El reino nazarí de Granada: Desde el siglo XIII hasta finales del siglo XV el reino nazarí se mantuvo como
					la única entidad política musulmana en el territorio peninsular, en torno a la cordillera penibética y entre las
					actuales provincias de Cádiz y Almería. Estaba gobernado por la dinastía de los nazaríes. Pese a su debilidad
					militar perduró varios siglos, en parte al considerarse vasallo de Castilla, al apoyo de reinos norteafricanos y a
					la migración de andalusíes desde los territorios conquistados por los cristianos. Tuvo un gran desarrollo cultural
					y artístico. A principios del siglo XV su estabilidad política comenzó a declinar, produciéndose graves problemas
					sucesorios que lo desestabilizaron, lo que fue aprovechado por Castilla para iniciar su conquista, que finalizó con
					la entrega de Granada por parte del último rey nazarí, Boabdil, a los Reyes Católicos a comienzos de 1492,
					desapareciendo así el último vestigio del dominio musulmán en la Península.
				</p>
				<br />
				<p>
					RESUME LOS CAMBIOS ECONÓMICOS, SOCIALES Y CULTURALES INTRODUCIDOS POR LOS MUSULMANES EN AL ÁNDALUS - Introducción:
					El territorio de Al-Ándalus se islamizó con relativa rapidez tanto a nivel religioso y cultural, formando
					inicialmente parte del imperio islámico, y aunque posteriormente se independizó, mantuvo rasgos comunes con el
					resto de imperios y reinos musulmanes. Como consecuencia, se produjeron profundas transformaciones económicas,
					sociales y culturales que tendrá gran trascendencia en la Europa de su época y en la España posterior. - Economía:
					o Próspera y desarrollada contraste con los reinos del norte. o Basada en la agricultura latifundista de la
					trilogía mediterránea y en la mediana propiedad en las zonas de regadío:  Introdujeron mejoras en el regadío:
					construcción de una importante red de acequias y uso de instrumentos como la noria.  Se generalizaron cultivos
					como los cítricos, el algodón, el arroz, caña de azúcar, azafrán… y otros como el lino y la morera, vinculada a la
					producción gusanos de seda y tejidos de lujo. o Destacó la artesanía textil y la producción de tejidos de lino y
					seda; también el trabajo del cuero, el pergamino, el papel, vidrio, armas, cerámica, orfebrería y construcción
					naval.  Existieron talleres privados y manufacturas estatales. o Comercio: gran desarrollo basado en las ciudades
					y un eficaz sistema de comunicaciones.  Fue favorecido por el uso de una moneda fuerte: dinar de oro y el dírham
					de plata.  Gran comercio interior basado en las ciudades y sus zocos.  Comercio exterior con el resto de reinos
					islámicos y con los reinos cristianos: - Importaban: esclavos, materias primas, armas. - Exportaban: productos
					artesanales y de lujo. - Sociedad: Tras la llegada de los conquistadores se creó una sociedad heterogénea, con
					grandes diferencias tanto a nivel étnico-religioso como económico: o Conquistadores musulmanes:  Minoría árabe y
					siria: dueños mejores tierras y ocupan los cargos políticos.  Bereberes: Por debajo. Ocuparon tierras peores. Se
					dedicaron al ejército, administración, pequeños propietarios. Originaron frecuentes revueltas. o Población
					hispano-visigoda:  Muchos privilegiados (y también la mayor parte de la población) se convirtieron al Islam:
					muladíes.  Otros, los mozárabes, mantuvieron el cristianismo, pagando un impuesto personal. En ocasiones sufrieron
					persecuciones. o Minorías: judíos, que vivían en juderías separadas. o Esclavos, muchos de ellos extranjeros o
					prisioneros de los reinos del norte, y que fueron muy importantes en como mano de obra y en el servicio doméstico y
					el ejército (como los eslavos). o A nivel socioeconómico se diferenciaban la aristocracia árabe y siria, la clase
					media urbana, las clases populares urbanas y rurales y, por debajo de todos ellos, los esclavos. o La convivencia
					entre los diferentes grupos fue en general pacífica, pues los musulmanes permitieron a judíos y musulmanes (gente
					del libro) conservar su religión a cambio de un impuesto personal. En ocasiones, momentos de fervor rigorista o de
					crisis, hubo persecuciones de esas minorías. o Fue una sociedad eminentemente urbana, centros de la vida política,
					económica, comercial, administrativa y cultural.  Se revitalizaron las antiguas ciudades romanas (Córdoba, Mérida,
					Toledo…) y se crearon otras nuevas en lugares estratégicos, rutas comerciales y para aprovechamiento de zonas
					agrarias (Almería, Madrid, Murcia, Badajoz).  Algunas de ellas alcanzaron grandes dimensiones, como Córdoba, que
					llegó a tener unos 100.000 habitantes.  Estaban amuralladas y se estructuraban al modo tradicional musulmán: - Una
					ciudad vieja, la medina, en la que se encontraban los principales edificios: mezquita, zoco, alcaicería, alhóndiga,
					alcazaba, baños. - La mezquita y el zoco eran el centro de la vida ciudadana. - Arrabales o barrios también
					separados, en ocasiones ocupadas por minorías. - Cultura: alcanzó gran desarrollo, como en el resto del imperio
					musulmán, con estrechos contactos con las principales capitales musulmanas como Damasco, El Cairo o Bagdag, en
					parte al amparo de una cierta tolerancia a nivel intelectual. o Los periodos más brillantes fueron el Califato y
					los primeros reinos de taifas. o Córdoba, junto con Bagdag y El Cairo fue uno de los referentes culturales y
					científicos en la época del califato, promoviéndose el desarrollo cultural y la creación de bibliotecas desde la
					corte. o La cultura andalusí se basó en los principios del Islam, dado el carácter teocrático de la civilización
					islámica, y en la lengua árabe. o Fue una cultura ecléctica, que asimiló el legado de las civilizaciones
					conquistadas. o Como en todo el imperio islámico, fueron los depositarios y transmisores del legado del mundo
					clásico, especialmente de la cultura griega. o A través de Al-Ándalus se introdujeron en Europa avances de origen
					oriental como el papel, la brújula, la pólvora, los números arábigos y conocimientos astronómicos, químicos y
					médicos. o La ciencia también floreció en Al-Ándalus, especialmente en el campo de la astronomía, las matemáticas,
					la geometría, el álgebra, la química y la medicina, disciplina en la que destacó Abulcasis y su famoso tratado
					médico-quirúrgico. o En filosofía destacaron los comentarios a la obra de Aristóteles del cordobés Averroes. o En
					literatura destacó la poesía, con personajes como Ibn Hazm, autor de El collar de la paloma y el místico Ibn Arabi.
					o En historia, destacaron Ibn Jaldun o Ahmad al-Razi . o El médico judío Maimónides, que tuvo que huir ante la
					intolerancia almohade, realizó importantes aportaciones en medicina y en la propia tradición judaica. o El
					Al-Ándalus se desarrolló enormemente la creación artística, especialmente la arquitectura, impulsada por sus
					propios gobernantes, realizándose importantes obras de arte en los diferentes periodos de su historia:  Emiral y
					califal: Mezquita de Córdoba, palacio de Medina Azahara en Córdoba y mezquita del Cristo de la Luz en Toledo. 
					Taifas: palacio de la Aljafería de Zaragoza y alcazabas de Málaga y Almería.  Almohade: Giralda de Sevilla,
					antiguo minarete de su mezquita mayor, y Torre del Oro.  Nazarí: conjunto palaciego de la Alhambra.
				</p>
			</div> */}
		</>
	);
};

export default QuestionPage;

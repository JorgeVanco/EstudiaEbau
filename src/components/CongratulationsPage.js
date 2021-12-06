import { useEffect } from "react";
import { Link } from "react-router-dom";

const CongratulationsPage = ({ percentage, name, resetQuestions, isRanked }) => {
	//className='congratulations-title'

	// const func = () => {
	// 	// Obtener el valor porcentual  => percentage
	// 	var value = percentage;

	// 	// Cuando el porcentaje es menor o igual a 50
	// 	if (percentage <= 50) {
	// 		var html = "";

	// 		html += '<div className="mask-right" style="transform:rotate(' + value * 3.6 + 'deg)"></div>';

	// 		// Agrega elementos secundarios al elemento
	// 		$(".circle-right").append(html);
	// 	} else {
	// 		value -= 50;
	// 		var html = "";

	// 		html += '<div className="circle-left">';
	// 		html += '<div className="mask-left" style="transform:rotate(' + value * 3.6 + 'deg)"></div>';
	// 		html += "</div>";

	// 		// Agregar elemento tras elemento
	// 		$(".circle-right").after(html);
	// 	}
	// };

	// useEffect(() => {
	// 	func();
	// }, []);

	if (isRanked) {
		return (
			<div className='congratulations-div'>
				<div style={{ alignContent: "center" }}>
					<h1 style={{ textAlign: "center", marginBottom: "10px" }}>
						{" "}
						{percentage >= 50 ? "Enhorabuena" : "Ánimo, sigue estudiando"}
					</h1>
				</div>
				<div style={{ alignContent: "center", alignItems: "center" }}>
					{/* <div class='bg'>
					<div class='circle-right'>
						{percentage <= 50 && <div className='mask-right' style={{ transform: `rotate( ${percentage * 3.6}deg)` }}></div>}
					</div>
					{percentage > 50 && (
						<div className='circle-left'>
							<div className='mask-left' style={{ transform: `rotate( ${(percentage - 50) * 3.6}deg)` }}></div>
						</div>
					)}
					<div className='text'>{percentage}%</div>
				</div> */}
					{/* <h1 style={{ textAlign: "center" }}>{percentage}%</h1> */}
				</div>
				<div
					style={{
						alignContent: "center",
						alignItems: "center",
						justifyContent: "center",
						position: "relative",
						top: "225px",
					}}
				>
					<button className='back-btn' onClick={resetQuestions}>
						<Link to={`/`} className='decoration-none'>
							<p style={{ margin: 0 }}>Back</p>
						</Link>
					</button>
				</div>
			</div>
		);
	}

	return (
		<>
			<div className='congratulations-div'>
				<div style={{ alignContent: "center" }}>
					<h1 style={{ textAlign: "center", marginBottom: "10px" }}>
						{" "}
						{percentage >= 50 ? "Enhorabuena" : "Ánimo, sigue estudiando"}
					</h1>
				</div>
				<div style={{ alignContent: "center", alignItems: "center" }}>
					<div class='bg'>
						<div class='circle-right'>
							{percentage <= 50 && (
								<div className='mask-right' style={{ transform: `rotate( ${percentage * 3.6}deg)` }}></div>
							)}
						</div>
						{percentage > 50 && (
							<div className='circle-left'>
								<div className='mask-left' style={{ transform: `rotate( ${(percentage - 50) * 3.6}deg)` }}></div>
							</div>
						)}
						<div className='text'>{percentage}%</div>
					</div>
					{/* <h1 style={{ textAlign: "center" }}>{percentage}%</h1> */}
				</div>
				<div
					style={{
						alignContent: "center",
						alignItems: "center",
						justifyContent: "center",
						position: "relative",
						top: "225px",
					}}
				>
					<button className='back-btn' onClick={resetQuestions}>
						<Link to={`/${name}`} className='decoration-none'>
							<p style={{ margin: 0 }}>Back</p>
						</Link>
					</button>
				</div>
			</div>
			{/* <div className='p-container'>
				<br />
				<p>
					DESCRIBE LAS GRANDES ETAPAS Y LAS CAUSAS GENERALES QUE CONDUCEN AL MAPA POLÍTICO DE LA PENÍNSULA IBÉRICA AL FINAL
					DE LA EDAD MEDIA Tras la rápida conquista musulmana de la península ya a inicios del siglo VIII se conformaron los
					primeros núcleos cristianos de resistencia, que dieron lugar a los primeros reinos cristianos. En el largo proceso
					de reconquista (7 siglos), fueron progresivamente avanzando hacia el sur y conquistaron militarmente las tierras en
					manos musulmanas, considerando que anteriormente a la conquista les pertenecían. Fruto de las relaciones entre
					estos reinos cristianos y al-Ándalus se creó el mapa político peninsular a fines de la Edad Media. Sus etapas
					fundamentales fueron: 1- La formación de los primeros núcleos de resistencia al islam y de los primeros reinos
					cristianos (siglos VIII y IX). El primer núcleo se gestó en torno a las montañas asturianas tras la batalla de
					Covadonga, en que un grupo de visigodos y astures eligieron como rey al noble visigodo Pelayo, creándose el reino
					de Asturias, con capital en Cangas de Onís y en Oviedo. Este reino inició el proceso de la reconquista, pues se
					sentían herederos de los visigodos y pretendían restaurar su reino. En la zona pirenaica y hasta el norte de
					Cataluña Carlomagno había establecido la Marca Hispánica para frenar la expansión musulmana, siendo gobernados
					estos territorios por condes, que, a la muerte del emperador franco fueron ganando autonomía hasta independizarse:
					En la zona occidental, Íñigo Arista se proclamó rey de Pamplona hacia el 830. Más tarde, la dinastía Jimena
					extendió su reino hasta La Rioja (Reino de Nájera-Pamplona). En los valles pirenaicos centrales, en torno al río
					Aragón, Aznar Galíndez fue el primer conde de Aragón. La zona oriental formó parte del Imperio carolingio durante
					más tiempo, pero Wifredo el Velloso, conde de Urgell, convirtió sus territorios en hereditarios a finales del siglo
					IX, aunque no se desvincularon del reino franco hasta el año 988 con el conde Borrell III. 2- La expansión hacia el
					sur de esos reinos y su consolidación (siglos X y primera mitad del XI). Estos núcleos se extendieron hacia el sur,
					ocupando en gran medida las frías tierras de nadie que los musulmanes había abandonado por sus difíciles
					condiciones de vida y cultivo. El reino asturiano se asentó con Alfonso II y se expandió hacia el sur (durante su
					reinado se descubrió la tumba del apóstol Santiago), ocupando la tierra de nadie hasta el Duero, trasladando su
					capital a León con Alfonso III y creándose el reino astur-leonés. En su frontera oriental se creó el condado de
					Castilla para controlar a los musulmanes, zona en que sus condes adquirieron cada vez mayor poder, hasta que Fernán
					González, aprovechando problemas dinásticos en el reino leonés, convirtió sus posesiones en hereditarias a mediados
					del siglo X. El reino de Pamplona se fue expandiendo hacia el sur y se convirtió en el reino de Navarra, el más
					importante reino cristiano de comienzos del siglo XI bajo su rey Sancho III el Mayor, que controló los condados
					aragoneses y el de Castilla. A su muerte, su reino se dividió en los reinos de Navarra, con García Sánchez III,
					condados de Sobrarbe y Ribagorza, y se crearon los reinos de Aragón, gobernado por Ramiro I, y de Castilla,
					convirtiéndose Fernando I su primer rey. 3- Tras la desintegración del califato y los reinos de Taifas, el proceso
					de Reconquista se aceleró, dando lugar a los principales estados de la Baja Edad Media y al mapa final de la
					península (Fin S. XI-XV). Ante la debilidad de las taifas, los reinos cristianos se adueñaron de las tierras entre
					el Duero y el Tajo en la zona occidental y hasta el Ebro en la oriental, siendo estos los momentos claves de la
					Reconquista. En la zona occidental, Fernando I se hizo con el poder el reino de Catilla y León y avanzó hacia el
					sur, enriqueciéndose con las parias que le pagaron las taifas. A su muerte, pese a que el reino se dividió entre
					sus hijos, uno de ellos, Alfonso VI, unificó de nuevo los territorios y conquistó la ciudad de Toledo en 1085. El
					apoyo de los almorávides frenó esa expansión. Castilla y León se unieron y separaron en los años posteriores y
					continuaron expandiéndose hacia el sur, fundándose órdenes militares para la protección de los territorios
					conquistados, como las de Alcántara y Calatrava. La amenaza de los almohades fue eliminada mediante la alianza de
					los reinos cristianos en la batalla de las Navas de Tolosa (1212), en la que participaron el rey castellano Alfonso
					VII y el navarro Sancho VII el Fuerte. Esta derrota abrió a los reinos cristianos las puertas del valle del
					Guadalquivir y Extremadura, cuyas ciudades principales (Jaén, Córdoba o Sevilla) fueron conquistadas por Fernando
					III, bajo cuyo reinado Castilla y León se unieron definitivamente en la Corona de Castilla en 1230. Su hijo Alfonso
					X conquistó Murcia, cerrando la expansión aragonesa hacia el sur. Portugal se había convertido en un reino
					independiente de León en 1179 (Alfonso Enriques) y continuó la reconquista en el sector occidental peninsular,
					hasta el Algarve. El territorio musulmán quedó reducido al reino nazarí de Granada, que quedó completamente rodeado
					por territorio castellano. Durante el siglo XIV la Corona de Castilla experimentó grandes convulsiones y una guerra
					civil, que llevó al poder a la casa de Trastámara, a la que pertenecerá Isabel la Católica. El reino de Aragón se
					expandió hacia el sur a costa de la taifa de Zaragoza, tomando Pedro I Huesca (1096) y Alfonso I el Batallador la
					ciudad de Zaragoza en 1118. El matrimonio entre su heredera, Berenguela, y el conde de Barcelona, Ramón Berenguer
					IV en 1137, dio lugar a la Corona de Aragón, que reunía bajo un mismo rey (su hijo Alfonso II) el reino de Aragón y
					los condados catalanes. Se expandió hacia el sur y el Mediterráneo, ocupando con Jaime I (a mediados del siglo
					XIII) los reinos de Valencia y las islas Baleares, que se incorporaron como territorios con entidad propia en la
					Corona de Aragón. Tras la conquista castellana de Murcia, la expansión aragonesa se dirigió hacia el Mediterráneo,
					llegando hasta Italia y Grecia. A la muerte sin hijos del rey Martín I, en el Compromiso de Caspe (1412) fue
					elegido rey Fernando de Trastámara, siendo Fernando el Católico descendiente suyo. El reino de Navarra, tras llegar
					hasta el Ebro, quedó “encerrado” entre sus vecinos castellanos y aragoneses, por lo que no pudo expandirse más,
					aunque fueron frecuentes las disputas por territorios fronterizos con Castilla. Tras la caída de la dinastía Jimena
					se volcó en sus relaciones con los territorios franceses. Al final de la Edad Media, la península estaba dividida
					en cinco reinos: al oeste, el reino de Portugal; al este la Corona de Aragón, constituida por cuatro territorios,
					cada uno con características e instituciones propias; la Corona de Castilla, que ocupaba, de norte a sur, la mayor
					parte de la península; el reino de Navarra, al norte, entre las poderosas coronas vecinas; y al sureste, en torno a
					las sierras béticas, el último reducto musulmán peninsular, el reino nazarí de Granada, rodeado por la poderosa
					corona castellana.
				</p>
				<br />
				<p>
					EXPLICA EL ORIGEN DE LAS CORTES EN LOS REINOS CRISTIANOS Y SUS PRINCIPALES FUNCIONES La estructura de la sociedad
					de los reinos cristianos hispánicos de la Edad Media era feudal, por lo que el rey inicialmente (y también de
					acuerdo a la tradición visigoda o franca) no era más que la autoridad principal en la cima de la pirámide feudal,
					en teoría señor de todas las tierras y habitantes del reino y principal representante del poder político. No
					obstante, su poder estaba limitado por los nobles y grandes señores eclesiásticos, que poseían grandes privilegios
					y que en sus señoríos disfrutaban de una autonomía prácticamente completa y de un poder casi ilimitado. Los reinos
					se convertían en un mosaico de jurisdicciones diferenciadas y el rey sólo conservaba la capacidad de administrar
					justicia entre los nobles y ciertos derechos exclusivos como la acuñación de moneda. Para el ejercicio del poder,
					el rey se hacía acompañar por una Curia regia o corte, que le auxiliaba en las tareas de gobierno y en la que
					participaban habitualmente los nobles y señores territoriales y eclesiásticos más próximos a él. Esta corte era
					itinerante y solía acompañar al rey en sus desplazamientos, pues no existía una capital fija del reino. Con el
					tiempo, este círculo de personas se fue ampliando y especializando en sus funciones, apareciendo cargos
					especializados como el alférez o el mayordomo, encargados de respectivamente de la gestión militar y de la
					administración de la casa real. La Curia real solía reunirse con el rey para debatir temas y asesorarle en los
					asuntos más importantes del gobierno del reino. No obstante, en ocasiones, los reyes, por un lado, y los nobles y
					el alto clero, por el otro, mantenían posiciones diferentes, cuando no enfrentadas, dado que defendían intereses
					muchas veces contrapuestos. A lo largo de los siglos XI y XII, los reyes concedieron fueros y cartas pueblas a
					ciudades y a los Concejos, que contribuyeron a la repoblación de los territorios conquistados y al desarrollo
					urbano. Estos concejos tenían la capacidad de autogobernarse y determinados privilegios a cambio, entre otras, de
					la obligación de contribuir a la milicia real. Las clases urbanas de estos nuevos concejos y de las ciudades más
					importantes de cada reino van a verse favorecidas por la protección real y en ocasiones amenazadas por la ambiciosa
					nobleza. Por su parte, los reyes van a encontrar en los habitantes de esas ciudades el contrapeso perfecto para
					reafirmar su poder frente a las pretensiones de los nobles y eclesiásticos. De ese modo, en León, en 1188, por
					primera vez en la historia de occidente, el rey convocó no solo a los representantes de la nobleza y del clero como
					en la tradicional Curia real, sino que también integró al grupo o brazo de los ciudadanos, formado por
					representantes o procuradores de los Concejos (caballeros villanos) y de las ciudades (oligarquía urbana), dando
					lugar a las primeras Cortes, que se convirtieron en la única institución de carácter estatal del reino. En el resto
					de territorios hispánicos, a lo largo del siguiente siglo, los reyes también sumaron a sus curias tradicionales a
					los representantes de las ciudades, extendiéndose el modelo de Cortes leonés: en Cataluña en 1214, en Castilla en
					1217, en Aragón en 1247, en Navarra en 1253 y en 1283 en Valencia. En otros países estas asambleas se llamaron
					Parlamentos, Dietas o Estados Generales. Las Cortes medievales eran convocadas por el rey y reproducían la
					estructura estamental de la sociedad, ya que estaban compuestas, generalmente por tres brazos -en representación de
					la nobleza, el clero y las ciudades- que deliberaban por separado. En algunos casos, como en Aragón el brazo
					nobiliario se presentaba dividido en alta nobleza (ricos-hombres) y baja nobleza (infanzones o caballeros). Con
					carácter general no se reunían con una periodicidad fija, sino que eran convocadas por el Rey, que lo hacía
					normalmente en las siguientes circunstancias: a) Atender las consultas del rey en asuntos de especial importancia
					(consilium feudal). b) Sobre todo, votar impuestos de carácter extraordinario, lo que era frecuente debido a la
					insuficiencia de los ingresos fiscales ordinarios para atender los gastos crecientes de la monarquía, como campañas
					militares, matrimonios, etc. (auxilium feudal). A cambio, el monarca se comprometía a escuchar y atender las
					peticiones y consejos de los representantes de los tres estamentos y los representantes de los tres estamentos a
					mantenerse fieles al rey. En los diferentes territorios hispánicos las Cortes tuvieron estructuras y funciones muy
					diferenciadas: a) En Castilla y León, mientras permanecieron separados hubo unas Cortes en cada reino. Cuando se
					unificaron se unieron también las Cortes en una sola institución: las Cortes de Castilla.  Su función fue
					fundamentalmente consultiva y tuvieron poco poder. Sus atribuciones fueron muy limitadas, concretándose en
					presentar quejas y hacer peticiones al rey, además de conceder impuestos y subsidios, aceptar las leyes y legitimar
					al heredero al trono. De hecho, paulatinamente, la nobleza y el clero dejaron de asistir porque estaban exentos del
					pago de cualquier impuesto que se aprobara en ellas. b) En la Corona de Aragón cada uno de sus territorios mantuvo
					sus propias Cortes: Aragón, Valencia y Cataluña. Su papel fue muy relevante, de acuerdo con el modelo pactista de
					la Corona de Aragón y con el poder de la nobleza y la Iglesia y, con el tiempo, de sus principales ciudades.
					Llegaron a tener un cierto papel legislativo, convirtiéndose en un importante órgano de gobierno, por cuanto el rey
					no podía legislar arbitrariamente sin ellas y, además, al ser investido se comprometía a respetar los fueros y
					costumbres de cada territorio. Las Cortes podían hacer propuestas legislativas y peticiones al rey a cambio de
					aprobar las aportaciones económicas que este les solicitaba. En cada territorio, además, para vigilar el
					cumplimiento de lo aprobado en las Cortes, con el tiempo se constituyeron unas delegaciones permanentes de las
					Cortes, la Diputación del General en Aragón y la Generalitat en Cataluña y Valencia, que se convirtieron en
					auténticos órganos de control político. Su función era recaudar impuestos y velar por el cumplimiento de las leyes
					y de lo aprobado por las cortes y por el respeto a los derechos de los territorios mientras las Cortes no
					estuvieran reunidas. c) En el reino de Navarra, las Cortes se reunieron por primera vez en 1253 y tuvieron gran
					vitalidad en los siglos XIV y XV. Como en la Corona de Aragón las Cortes navarras tenían poder vinculante y el rey
					tenía que respetar los fueros, derechos y tradiciones del reino. Con carácter general, por tanto, ni la composición
					ni las funciones de estas primitivas Cortes son equiparables con las de los Parlamentos actuales: ni eran
					representativas de la voluntad general del reino, ni tenían un auténtico poder legislativo, ni disponían de
					instrumentos legales eficaces para controlar el poder del monarca.
				</p>
			</div> */}
		</>
	);
};

export default CongratulationsPage;
//<h1 className='center-h1'>Congratulations {`${Math.round(((rightAnswers / questionsToAskFor.length) * 100 + Number.EPSILON) * 100) / 100}%`}</h1>

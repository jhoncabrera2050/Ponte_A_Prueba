import Sql from './assets/sqlserver.png';
import Java from './assets/java.png';
import Filosofia from './assets/filosofía.png';
import Geografia from './assets/geografía.png';
import Historia from './assets/historia.png';
import Literatura from './assets/literatura.png';
import Tecnologia from './assets/tecnología.png';
import Python from './assets/python.png';
import JavaScript from './assets/javascript.png'
import SqlServer from './assets/sqlserver.png'
import Docker from './assets/docker.png'
import Net from './assets/net.png'

export const imgs = [
	Sql,
	Java,  
	Filosofia,
	Geografia,
	Historia,
	Literatura,
	Tecnologia,
	Python,
	JavaScript,
	SqlServer,
	Docker,
	Net
];

export const categories = {
	historia: 'Historia', 
	literatura: 'Literatura',
	java: 'Java',
	sql: 'Sql',
	filosofia: 'Filosofía',
	tecnologia: 'Tecnología',
	geografia: 'Geografía',
	python : 'Python',
	javascript : 'JavaScript',
	sqlserver : 'Sqlserver',
	docker : 'Docker',
	net : 'Net'

};

const {
	historia,
	tecnologia,
	literatura,
	java,
	sql,
	filosofia,
	geografia,
	python,
	javascript,
	sqlserver,
	docker,
	net
} = categories;

export const questions = [
	{
		id: 1,
		difficulty: 'Fácil',
		question: '¿Qué es un contenedor en Docker?',
		category: docker,
		correct_answer:
			'Una unidad de ejecución ligera y portátil que incluye todo lo necesario para ejecutar una aplicación.',
		incorrect_answers: [
			'Un dispositivo de almacenamiento en la nube.',
			'Una máquina virtual completa.',
			'Una base de datos en línea.',
		],
	},
	{
		id: 2,
		difficulty: 'Fácil',
		question: '¿Qué es .NET?',
		category: net,
		correct_answer: 'Una plataforma de desarrollo de software desarrollada por Microsoft.',
		incorrect_answers: [
			'Un lenguaje de programación.',
			'Un sistema operativo de código abierto.',
			'Un servicio de alojamiento web.',
		],
	},
	{
		id: 3,
		difficulty: 'Fácil',
		question: '¿Cuál es el método principal utilizado para iniciar la ejecución de una aplicación Java?',
		category: java,
		correct_answer: 'public static void main(String[] args)',
		incorrect_answers: ['public void start()', 'public static void run()', 'public static void execute(String[] args)'],
	},
	{
		id: 4,
		difficulty: 'Medio',
		question:
			"¿Qué tipo de lenguaje de programación es JavaScript?",
		category: javascript,
		correct_answer: 'Lenguaje de programación de alto nivel.',
		incorrect_answers: [' Lenguaje de programación de bajo nivel.', 'Lenguaje de programación de sistema'],
	},
	{
		id: 5,
		difficulty: 'Difícil',
		question:
			'¿Quién es considerado el padre de la filosofía occidental?',
		category: filosofia,
		correct_answer: 'Sócrates',
		incorrect_answers: ['Aristóteles', 'Platón', 'Nietzsche'],
	},
	{
		id: 6,
		difficulty: 'Medio',
		question: '¿En qué año fue fundada la compañía Apple?',
		category: tecnologia,
		correct_answer: '1976',
		incorrect_answers: ['1984', '1991', '1967'],
	},
	{
		id: 7,
		difficulty: 'Fácil',
		question: '¿Cuál es el río más largo del mundo?',
		category: geografia,
		correct_answer: 'El Río Amazonas',
		incorrect_answers: [
			'El Río Nilo',
			'El Río Yangtze',
			'El Río Misisipi',
		],
	},
	{
		id: 8,
		difficulty: 'Medio',
		question: '¿Cuál es el océano más grande del mundo?',
		category: geografia,
		correct_answer: 'El Océano Pacífico',
		incorrect_answers: [
			'El Océano Atlántico',
			'El Océano Índico',
			'El Océano Ártico',
		],
	},
	{
		id: 9,
		difficulty: 'Difícil',
		question: '¿Qué es el Common Language Runtime (CLR) en .NET?',
		category: net,
		correct_answer: 'Un entorno de ejecución que administra la ejecución de código .NET.',
		incorrect_answers: ['Un lenguaje de programación.', 'Un compilador.', 'Una biblioteca de clases.'],
	},
	{
		id: 10,
		difficulty: 'Medio',
		question: '¿Cuál es la palabra clave utilizada para declarar una variable en JavaScript?',
		category: javascript,
		correct_answer: 'var',
		incorrect_answers: [
			'variable',
			'declare',
			'v',
		],
	},
	{
		id: 11,
		difficulty: 'Fácil',
		question: '¿Qué es un "constructor" en Java?',
		category: java,
		correct_answer: 'Un método que inicializa objetos',
		incorrect_answers: ['Un método que destruye objetos', 'Un método que imprime mensajes en la consola.', 'Un método que compara objetos.'],
	},
	{
		id: 12,
		difficulty: 'Medio',
		question: '¿Cuál es el operador de igualdad estricta en JavaScript?',
		category: javascript,
		correct_answer:
			'===',
		incorrect_answers: [
			'==',
			'=',
			'!==',
		],
	},
	{
		id: 13,
		difficulty: 'Medio',
		question:
			'¿Cuál de las siguientes afirmaciones sobre las excepciones en Java es cierta?',
		category: java,
		correct_answer: '1896',
		incorrect_answers: ['Las excepciones solo se producen en tiempo de compilación.', ' Las excepciones son errores que no se pueden prevenir ni manejar', 'Las excepciones se manejan utilizando bloques if.'],
	},
	{
		id: 14,
		difficulty: 'Fácil',
		question: '¿Cómo se accede al primer elemento de un arreglo en JavaScript?',
		category: javascript,
		correct_answer: 'arreglo[0]',
		incorrect_answers: ['arreglo.first()', 'arreglo.get(0)', 'arreglo.first'],
	},
	{
		id: 15,
		difficulty: 'Fácil',
		question: "¿Qué es ASP.NET en el contexto de .NET?",
		category: net,
		correct_answer: 'Un framework de desarrollo web para construir aplicaciones web.',
		incorrect_answers: [
			'Un entorno de desarrollo integrado.',
			'Un sistema operativo.',
			'Un lenguaje de programación.',
		],
	},
	{
		id: 16,
		difficulty: 'Medio',
		question:
			'¿Cuál es la función utilizada para agregar elementos al final de un arreglo en JavaScript?',
		category: javascript,
		correct_answer: 'Oxígeno',
		incorrect_answers: ['Nitrógeno', 'Hierro', 'Silicio'],
	},
	{
		id: 17,
		difficulty: 'Medio',
		question: '¿Cuál es el país más poblado del mundo?',
		category: geografia,
		correct_answer: 'push()',
		incorrect_answers: ['append()', 'insert()', 'add()'],
	},
	{
		id: 18,
		difficulty: 'Medio',
		question:
			'¿Quién es considerado el padre de la filosofía occidental?',
		category: filosofia,
		correct_answer: 'Sócrates',
		incorrect_answers: ['Platón', 'Aristóteles', 'Descartes'],
	},
	{
		id: 19,
		difficulty: 'Difícil',
		question: '¿Cuál es el comando SQL utilizado para eliminar registros de una tabla en SQL Server?',
		category: sqlserver,
		correct_answer: 'DELETE',
		incorrect_answers: [
			'SELECT',
			'UPDATE',
			'INSERT',
		],
	},
	{
		id: 20,
		difficulty: 'Fácil',
		question: '¿Qué es el lenguaje de marcado XAML en .NET?',
		category: net,
		correct_answer: 'Un lenguaje utilizado para describir interfaces de usuario en aplicaciones de Windows y aplicaciones web.',
		incorrect_answers: [
			'Un sistema de gestión de bases de datos.',
			'Un protocolo de red.',
			'Un lenguaje de programación.',
		],
	},
	{
		id: 21,
		difficulty: 'Fácil',
		question: '¿Cuál es el propósito de la sentencia SQL JOIN en SQL Server?',
		category: sqlserver,
		correct_answer: 'Combinar datos de dos o más tablas basados en una relación especificada.',
		incorrect_answers: ['Agregar nuevos registros a una tabla', 'Modificar registros existentes en una tabla.', 'Borrar todos los registros de una tabla.'],
	},
	{
		id: 22,
		difficulty: 'Medio',
		question: '¿Quién es el creador del sistema operativo Linux?',
		category: tecnologia,
		correct_answer: 'Linus Torvalds',
		incorrect_answers: [
			'Steve Jobs',
			'Bill Gates',
			'Mark Zuckerberg',
		],
	},
	{
		id: 23,
		difficulty: 'Medio',
		question: '¿Cuál es el comando para crear una imagen Docker a partir de un archivo Dockerfile?',
		category: docker,
		correct_answer: 'docker build -f Dockerfile -t nombreimagen .',
		incorrect_answers: ['docker start -f Dockerfile -t nombreimagen .', 'docker create -f Dockerfile -t nombreimagen .', 'docker run -f Dockerfile -t nombreimagen .'],
	},
	{
		id: 24,
		difficulty: 'Fácil',
		question: '¿Qué es un procedimiento almacenado en SQL Server?',
		category: sqlserver,
		correct_answer: 'Una unidad de código SQL que se almacena en el servidor de base de datos y se puede ejecutar con un solo comando.',
		incorrect_answers: ['Una consulta SQL que se almacena en una tabla', 'Una tabla temporal.', 'Una función matemática.'],
	},
	{
		id: 25,
		difficulty: 'Medio',
		question:
			"¿Cuál es el propósito del Entity Framework en .NET?",
		category: net,
		correct_answer: 'Un ORM (Mapeo Objeto-Relacional) que permite acceder y manipular datos de bases de datos relacionales en .NET.',
		incorrect_answers: [
			'Un framework de desarrollo web.',
			'Un sistema operativo.',
			'Un lenguaje de programación.',
		],
	},
	{
		id: 26,
		difficulty: 'Difícil',
		question:
			'¿Qué país es el más grande en términos de superficie terrestre?',
		category: geografia,
		correct_answer: 'Rusia',
		incorrect_answers: ['Estados Unidos', 'China', 'Australia'],
	},
	{
		id: 27,
		difficulty: 'Medio',
		question: '¿Cuál es la capital de Canadá?',
		category: geografia,
		correct_answer: 'Ottawa',
		incorrect_answers: ['Toronto', 'Montreal', 'Vancouver'],
	},
	{
		id: 28,
		difficulty: 'Fácil',
		question: '¿Cuál es el propósito de la sentencia SQL WHERE en una consulta SELECT?',
		category: sqlserver,
		correct_answer: 'Filtrar los resultados de la consulta basados en una condición.',
		incorrect_answers: ['Ordenar los resultados de la consulta.', 'Agrupar los resultados de la consulta.', 'Realizar una unión de tablas.'],
	},
	{
		id: 29,
		difficulty: 'Medio',
		question:
			'¿Qué palabra clave se utiliza para definir una clase en Java?',
		category: java,
		correct_answer: 'class',
		incorrect_answers: [
			'define',
			'struct',
			'object',
		],
	},
	{
		id: 30,
		difficulty: 'Fácil',
		question: '¿Cuál es el propósito principal del archivo Dockerfile?',
		category: docker,
		correct_answer: 'Describir cómo construir una imagen de Docker, incluyendo qué comandos y configuraciones se deben utilizar.',
		incorrect_answers: ['Almacenar datos de configuración de Docker.', 'Ejecutar una aplicación en Docker.', 'Almacenar registros de contenedores.'],
	},
	// -------------------
	{
		id: 31,
		difficulty: 'Fácil',
		category: tecnologia,
		question: '¿Qué significa la sigla HTML?',
		correct_answer: 'HyperText Markup Language',
		incorrect_answers: [
			'Hyperlinks and Text Markup Language',
			'Home Tool Markup Language',
			'Hyperlinking Text Markup Language',
		],
	},
	{
		id: 32,
		difficulty: 'Fácil',
		category: tecnologia,
		question: '¿Cuál es el navegador web más utilizado en el mundo?',
		correct_answer: 'Google Chrome',
		incorrect_answers: ['Safari', 'Firefox', 'Internet Explorer'],
	},
	{
		id: 33,
		difficulty: 'Fácil',
		category: tecnologia,
		question:
			'¿Qué lenguaje de programación es más utilizado para el desarrollo web?',
		correct_answer: 'JavaScript',
		incorrect_answers: ['Python', 'Java', 'C++'],
	},
	{
		id: 34,
		difficulty: 'Medio',
		category: tecnologia,
		question: '¿Qué es un servidor web?',
		correct_answer:
			'Un programa que recibe y procesa solicitudes HTTP',
		incorrect_answers: [
			'Un programa que envía correos electrónicos',
			'Un programa que protege la privacidad de los usuarios en línea',
			'Un programa que realiza operaciones matemáticas complejas',
		],
	},
	{
		id: 35,
		difficulty: 'Medio',
		category: tecnologia,
		question: '¿Qué es un ataque de phishing?',
		correct_answer:
			'Un intento de obtener información confidencial a través de un correo electrónico falso',
		incorrect_answers: [
			'Un virus que daña los archivos del ordenador',
			'Un tipo de ataque DDoS',
			'Un intento de secuestrar el tráfico de internet',
		],
	},
	{
		id: 36,
		difficulty: 'Medio',
		category: tecnologia,
		question: '¿Qué es un archivo CSV?',
		correct_answer:
			'Un archivo de texto con valores separados por comas',
		incorrect_answers: [
			'Un archivo de audio comprimido',
			'Un archivo de imagen en formato vectorial',
			'Un archivo de vídeo de alta definición',
		],
	},
	{
		id: 37,
		difficulty: 'Difícil',
		category: tecnologia,
		question: '¿Qué es un algoritmo de cifrado asimétrico?',
		correct_answer:
			'Un método de cifrado que utiliza dos claves diferentes',
		incorrect_answers: [
			'Un método de cifrado que utiliza la misma clave para cifrar y descifrar',
			'Un método de cifrado que no utiliza claves',
			'Un método de cifrado que solo se utiliza en aplicaciones militares',
		],
	},
	{
		id: 38,
		difficulty: 'Difícil',
		category: tecnologia,
		question: '¿Qué es una red privada virtual (VPN)?',
		correct_answer:
			'Una conexión segura a una red privada a través de internet',
		incorrect_answers: [
			'Una red de computadoras en una organización',
			'Una red de computadoras conectadas a internet',
			'Una red de computadoras que solo utiliza tecnología inalámbrica',
		],
	},
	{
		id: 39,
		difficulty: 'Difícil',
		question: '¿Qué es un registro Docker?',
		category: docker,
		correct_answer: 'Un servidor que almacena y distribuye imágenes de Docker.',
		incorrect_answers: ['Una base de datos utilizada por Docker para almacenar información sobre contenedores.', 'Una herramienta de línea de comandos de Docker para buscar imágenes en línea.', 'Un tipo de contenedor especial utilizado solo por Docker.'],
	},
	{
		id: 40,
		difficulty: 'Fácil',
		question: '¿Cuál es el propósito de Docker Compose?',
		category: docker,
		correct_answer: 'Una herramienta para orquestar y administrar aplicaciones multi-contenedor.',
		incorrect_answers: ['Una herramienta para crear archivos Dockerfile.', 'Una herramienta para administrar clústeres de servidores Docker.', 'Una herramienta para depurar contenedores Docker.'],
	},
	{
		id: 41,
		difficulty: 'Medio',
		question: '¿Qué tratado dio fin a la Primera Guerra Mundial?',
		category: historia,
		correct_answer: 'Tratado de Versalles',
		incorrect_answers: [
			'Tratado de Tordesillas',
			'Tratado de Westfalia',
			'Tratado de Nankín',
		],
	},
	{
		id: 42,
		difficulty: 'Difícil',
		question:
			'¿Quién fue el último emperador de la Dinastía Qing en China?',
		category: historia,
		correct_answer: 'Puyi',
		incorrect_answers: ['Hongwu', 'Wuzong', 'Kangxi'],
	},
	{
		id: 43,
		difficulty: 'Fácil',
		question:
			'¿Cuál fue el nombre de la primera expedición de Cristóbal Colón?',
		category: historia,
		correct_answer: 'La Santa María',
		incorrect_answers: [
			'La Pinta',
			'La Niña',
			'La Santísima Trinidad',
		],
	},
	{
		id: 44,
		difficulty: 'Medio',
		question:
			'¿Cuál fue el primer país en enviar un objeto hecho por el hombre a la luna?',
		category: historia,
		correct_answer: 'Estados Unidos',
		incorrect_answers: ['Unión Soviética', 'China', 'Japón'],
	},
	{
		id: 45,
		difficulty: 'Difícil',
		question:
			'¿Cuál fue la primera ciudad en el mundo en tener una población de más de un millón de habitantes?',
		category: historia,
		correct_answer: 'Roma',
		incorrect_answers: ['Atenas', 'Babilonia', 'Nínive'],
	},
	{
		id: 46,
		difficulty: 'Fácil',
		question:
			'¿Quién fue el primer presidente de los Estados Unidos?',
		category: historia,
		correct_answer: 'George Washington',
		incorrect_answers: [
			'Thomas Jefferson',
			'Abraham Lincoln',
			'Franklin D. Roosevelt',
		],
	},
	{
		id: 47,
		difficulty: 'Medio',
		question: '¿Cuál fue la primera dinastía en gobernar en China?',
		category: historia,
		correct_answer: 'Xia',
		incorrect_answers: ['Han', 'Tang', 'Song'],
	},
	{
		id: 48,
		difficulty: 'Fácil',
		question: '¿Qué es el NuGet Package Manager en .NET?',
		category: net,
		correct_answer: 'Una herramienta que permite la gestión de paquetes de código reutilizable en proyectos .NET.',
		incorrect_answers: [
			'Un entorno de desarrollo integrado.',
			'Una plataforma de desarrollo móvil.',
			'Un lenguaje de programación.',
		],
	},
	{
		id: 49,
		difficulty: 'Medio',
		question:
			'¿Qué es .NET Core?',
		category: net,
		correct_answer: 'Una implementación de .NET de código abierto que es multiplataforma y se utiliza para construir aplicaciones modernas en Windows, macOS y Linux.',
		incorrect_answers: [
			'Una versión anterior de .NET Framework.',
			'Un lenguaje de programación.',
			'Un sistema de gestión de bases de datos.',
		],
	},
	{
		id: 50,
		difficulty: 'Difícil',
		question: '¿Quién escribió "La metamorfosis"?',
		category: literatura,
		correct_answer: 'Franz Kafka',
		incorrect_answers: [
			'Virginia Woolf',
			'James Joyce',
			'F. Scott Fitzgerald',
		],
	},
	{
		id: 51,
		difficulty: 'Fácil',
		question: '¿Quién escribió "El retrato de Dorian Gray"?',
		category: literatura,
		correct_answer: 'Oscar Wilde',
		incorrect_answers: [
			'Edgar Allan Poe',
			'Emily Bronte',
			'Charles Dickens',
		],
	},
	{
		id: 52,
		difficulty: 'Medio',
		question:
			'¿Cuál de las siguientes obras no fue escrita por William Shakespeare?',
		category: literatura,
		correct_answer: 'Moby Dick',
		incorrect_answers: ['Hamlet', 'Macbeth', 'Otelo'],
	},
	{
		id: 53,
		difficulty: 'Difícil',
		question:
			'¿Cuál de las siguientes obras de José Saramago recibió el Premio Nobel de Literatura?',
		category: literatura,
		correct_answer: 'Ensayo sobre la ceguera',
		incorrect_answers: [
			'La caverna',
			'El evangelio según Jesucristo',
			'Las intermitencias de la muerte',
		],
	},
	{
		id: 54,
		difficulty: 'Fácil',
		question:
			'¿Quién escribió la novela "El guardián entre el centeno"?',
		category: literatura,
		correct_answer: 'J.D. Salinger',
		incorrect_answers: [
			'F. Scott Fitzgerald',
			'Ernest Hemingway',
			'Tennessee Williams',
		],
	},
	{
		id: 55,
		difficulty: 'Difícil',
		question: '¿Cuál es el país más grande de África?',
		category: geografia,
		correct_answer: 'Argelia',
		incorrect_answers: [
			'Sudán',
			'Libia',
			'República Democrática del Congo',
		],
	},
	{
		id: 56,
		difficulty: 'Fácil',
		question: '¿Cuál es el país más grande del mundo?',
		category: geografia,
		correct_answer: 'Rusia',
		incorrect_answers: ['China', 'Estados Unidos', 'Canadá'],
	},
	{
		id: 57,
		difficulty: 'Medio',
		question: '¿En qué continente se encuentra el lago Baikal?',
		category: geografia,
		correct_answer: 'Asia',
		incorrect_answers: ['Europa', 'África', 'América del Sur'],
	},
	{
		id: 58,
		difficulty: 'Medio',
		question: '¿Cuál es el país más poblado del mundo?',
		category: geografia,
		correct_answer: 'China',
		incorrect_answers: ['India', 'Estados Unidos', 'Indonesia'],
	},
	{
		id: 59,
		difficulty: 'Difícil',
		question: '¿Cuál es la montaña más alta del mundo?',
		category: geografia,
		correct_answer: 'El Monte Everest',
		incorrect_answers: ['El K2', 'El Mont Blanc', 'El Aconcagua'],
	},
	{
		id: 60,
		difficulty: 'Difícil',
		question: '¿Cuál es el país más pequeño del mundo?',
		category: geografia,
		correct_answer: 'El Vaticano',
		incorrect_answers: ['Mónaco', 'Nauru', 'Tuvalu'],
	},
	{
		id: 61,
		difficulty: 'Medio',
		question: '¿Cuál es el país más extenso de África?',
		category: geografia,
		correct_answer: 'Argelia',
		incorrect_answers: ['Nigeria', 'Egipto', 'Sudáfrica'],
	},
	{
		id: 62,
		difficulty: 'Fácil',
		question: '¿Cuál de las siguientes afirmaciones sobre los objetos en Java es cierta?',
		category: java,
		correct_answer: 'Los objetos son instancias de clases.',
		incorrect_answers: ['Los objetos son instancias de métodos.', 'Los objetos son instancias de variables.', 'Los objetos son instancias de paquetes'],
	},
	{
		id: 63,
		difficulty: 'Fácil',
		question: '¿Qué palabra clave se utiliza para crear una instancia de una clase en Java?',
		category: java,
		correct_answer: 'new',
		incorrect_answers: ['create', 'instance', 'instantiate'],
	},
	{
		id: 64,
		difficulty: 'Medio',
		question:
			'¿Cuál de las siguientes afirmaciones sobre los objetos en Java es cierta?',
		category: java,
		correct_answer: 'Los objetos son instancias de clases',
		incorrect_answers: ['Los objetos son instancias de métodos.', 'Los objetos son instancias de variables.', 'Los objetos son instancias de paquetes.'],
	},
	{
		id: 65,
		difficulty: 'Medio',
		question:
			'¿Cuál es el jugador de baloncesto con más anillos de campeonato en la NBA?',
		category: java,
		correct_answer: 'Bill Russell',
		incorrect_answers: [
			'Michael Jordan',
			'Kareem Abdul-Jabbar',
			'LeBron James',
		],
	},
	{
		id: 66,
		difficulty: 'Medio',
		question:
			'¿Cuál es el país de origen del futbolista Lionel Messi?',
		category: java,
		correct_answer: 'Argentina',
		incorrect_answers: ['Brasil', 'España', 'Portugal'],
	},
	{
		id: 67,
		difficulty: 'Difícil',
		question:
			'¿Qué es la herencia en Java?',
		category: java,
		correct_answer: '2008',
		incorrect_answers: ['Una característica que permite que una clase implemente múltiples interfaces.', 'Una característica que permite que una clase acceda a recursos de red.', 'Una característica que permite que una clase se comunique con bases de datos.'],
	},
	{
		id: 68,
		difficulty: 'Difícil',
		question:
			'¿Quién es el máximo goleador en la historia de la Liga Española?',
		category: java,
		correct_answer: 'Lionel Messi',
		incorrect_answers: [
			'Cristiano Ronaldo',
			'Telmo Zarra',
			'Hugo Sánchez',
		],
	},
	{
		id: 69,
		difficulty: 'Difícil',
		question: '¿Cuál es el operador utilizado para comparar dos objetos por igualdad en Java?',
		category: java,
		correct_answer: '.equals()',
		incorrect_answers: ['==', '===', '='],
	},
	{
		id: 70,
		category: filosofia,
		difficulty: 'Fácil',
		question: '¿Cuál es la obra más conocida de Platón?',
		correct_answer: 'La República',
		incorrect_answers: ['El Banquete', 'Timeo', 'Fedón'],
	},
	{
		id: 71,
		category: filosofia,
		difficulty: 'Medio',
		question:
			'¿Cuál es el concepto central de la filosofía de Descartes?',
		correct_answer: 'El cogito ergo sum',
		incorrect_answers: [
			'El empirismo',
			'El materialismo',
			'La fenomenología',
		],
	},
	{
		id: 72,
		category: filosofia,
		difficulty: 'Difícil',
		question: '¿Qué es la dialéctica en la filosofía de Hegel?',
		correct_answer:
			'El método para llegar a la verdad mediante la contradicción',
		incorrect_answers: [
			'La creación de un sistema filosófico',
			'La negación de la realidad',
			'El análisis de los procesos cognitivos',
		],
	},
	{
		id: 73,
		category: filosofia,
		difficulty: 'Medio',
		question: '¿Qué es el nihilismo en la filosofía?',
		correct_answer: 'La negación de todos los valores y creencias',
		incorrect_answers: [
			'La afirmación de la existencia de un ser superior',
			'La creencia en la reencarnación',
			'La negación de la existencia del mundo externo',
		],
	},
	{
		id: 74,
		category: filosofia,
		difficulty: 'Difícil',
		question:
			'¿Qué es la deconstrucción en la filosofía de Jacques Derrida?',
		correct_answer:
			'El análisis crítico de la relación entre los significados y los conceptos',
		incorrect_answers: [
			'La creación de nuevos conceptos a partir de la combinación de los antiguos',
			'La búsqueda de la verdad absoluta',
			'La negación de la existencia del lenguaje',
		],
	},
	{
		id: 75,
		category: filosofia,
		difficulty: 'Fácil',
		question: '¿Qué es la ética?',
		correct_answer:
			'La rama de la filosofía que estudia la moral y la conducta humana',
		incorrect_answers: [
			'La rama de la filosofía que estudia la lógica',
			'La rama de la filosofía que estudia la mente',
			'La rama de la filosofía que estudia el conocimiento',
		],
	},
	{
		id: 76,
		category: filosofia,
		difficulty: 'Medio',
		question:
			'¿Qué es el imperativo categórico en la filosofía de Kant?',
		correct_answer:
			'La regla moral que se debe seguir en cualquier situación',
		incorrect_answers: [
			'La creencia en la existencia de un Dios creador',
			'La negación de la libertad humana',
			'La afirmación de la existencia de una verdad absoluta',
		],
	},
	{
		id: 77,
		difficulty: 'Fácil',
		question: '¿Quién fue el autor de la obra "La República"?',
		category: filosofia,
		correct_answer: 'Platón',
		incorrect_answers: ['Aristóteles', 'Sócrates', 'Nietzsche'],
	},
	{
		id: 78,
		difficulty: 'Medio',
		question:
			'¿Cuál es el término filosófico para referirse al estudio del conocimiento?',
		category: filosofia,
		correct_answer: 'Epistemología',
		incorrect_answers: ['Ontología', 'Metafísica', 'Lógica'],
	},
	{
		id: 79,
		difficulty: 'Difícil',
		question:
			'¿Quién escribió el libro "El mundo como voluntad y representación"?',
		category: filosofia,
		correct_answer: 'Arthur Schopenhauer',
		incorrect_answers: [
			'Friedrich Nietzsche',
			'Immanuel Kant',
			'Jean-Paul Sartre',
		],
	},
	{
		id: 80,
		difficulty: 'Difícil',
		question: '¿Qué es un índice en SQL Server?',
		category: sqlserver,
		correct_answer: 'Una estructura de datos utilizada para acelerar la búsqueda de registros en una tabla.',
		incorrect_answers: ['Un tipo de dato.', 'Una restricción de clave primaria.', 'Un procedimiento almacenado.'],
	},
	{
		id: 81,
		category: sqlserver,
		difficulty: 'Medio',
		question: '¿Cuál es el lenguaje utilizado para realizar consultas en SQL Server?',
		correct_answer:
			'Structured Query Language (SQL).',
		incorrect_answers: [
			'Java.',
			'C#.',
			'Python.',
		],
	},
	{
		id: 83,
		difficulty: 'Fácil',
		question: '¿Qué es el acrónimo "CPU" en inglés?',
		category: tecnologia,
		correct_answer: 'Central Processing Unit',
		incorrect_answers: [
			'Computer Personal Unit',
			'Central Personal Unit',
			'Computer Processing Unit',
		],
	},
	{
		id: 84,
		difficulty: 'Medio',
		question:
			'¿Cuál es el nombre de la primera computadora electrónica digital?',
		category: tecnologia,
		correct_answer: 'ENIAC',
		incorrect_answers: ['UNIVAC', 'COLOSSUS', 'EDSAC'],
	},
	{
		id: 85,
		difficulty: 'Fácil',
		question:
			'¿Cuál de las siguientes afirmaciones sobre las comprensiones de listas en Python es correcta?',
		category: python,
		correct_answer: 'Las comprensiones de listas pueden utilizarse para crear listas, diccionarios y conjuntos',
		incorrect_answers: [
			'Las comprensiones de listas solo pueden usarse para crear listas',
			'Las comprensiones de listas siempre son más eficientes que los bucles for tradicionales',
			'Las comprensiones de listas no admiten condicionales',
		],
	},
	{
		id: 86,
		difficulty: 'Fácil',
		question:
			'¿Cuál es el propósito principal de la función super() en Python?',
		category: python,
		correct_answer: 'Llamar a un método de la clase base desde una subclase',
		incorrect_answers: [
			'Inicializar una instancia de una clase base',
			'Crear una instancia de una clase derivada',
			'Obtener el nombre de la superclase de una clase',
		],
	}
	,
	{
		id: 87,
		difficulty: 'Fácil',
		question:
			'¿Qué hace el módulo pickle en Python?',
		category: python,
		correct_answer: 'Permite la serialización y deserialización de objetos Python',
		incorrect_answers: [
			'Gestiona la compresión de archivos',
			'Calcula la raíz cuadrada de un número',
			'Proporciona funcionalidad para trabajar con archivos CSV',
		],
	},
	{
		id: 88,
		difficulty: 'Fácil',
		question:
			'¿Cuál es el operador utilizado para la exponenciación en Python?',
		category: python,
		correct_answer: '**',
		incorrect_answers: [
			'^',
			'/',
			'*',
		],
	},
	{
		id: 89,
		difficulty: 'Fácil',
		question:
			'¿Cuál de las siguientes es una estructura de datos mutable en Python?',
		category: python,
		correct_answer: 'Lista',
		incorrect_answers: [
			'Tupla',
			'Array',
			'Conjunto',
		],
	}
];

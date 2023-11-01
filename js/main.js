var seccionesPagina = new fullpage('#fullpage', {
	autoScrolling: true,
	fitToSection: false,
	fitToSectionDelay: 300,
	easing: 'easeInOutCubic',
	scrollingSpeed: 700,
	css3: true,
	easingcss3: 'ease-out',
	loopBottom: false,
	navigation: true,
	menu: '#menu',
	anchors: ['inicio', 'telebook', 'cakes', 'card', 'contacto'],//['inicio', 'proyectos', 'contacto'],
	navigationTooltips: ['Inicio', 'Tele-Book', 'Cakes', 'Cards Generator', 'Contacto'], //['Inicio', 'Proyectos', 'Contacto'],
	showActiveTooltip: false,
	sectionsColor : ['#000', '#303F9F', '#000', '#303F9F', '#000'], //['#000', '#c2c2c2', '#000'],
	verticalCentered: true,
	controlArrows: true,
	slidesNavigation: false,
	afterLoad: function(origin, destination){
		if(destination.anchor == 'contacto'){
			document.querySelector('.footer').querySelector('h2').style.opacity = 1;
		}
	}
});

const typed = new Typed('.typed', {
	strings: [
		'<i>Aplicaciones Web</i>',
		'<i>Aplicaciones Moviles</i>',
		'<i>Aplicaciones de Escritorio</i>',
	],

	typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 50, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
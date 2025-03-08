(function heightBackgroundHandler() {
	let height;
	const bg = $background;
	const contentBg = document.getElementsByClassName('content-background')[0]

	const heightBackground = () => {
		/*
		window.innerWidth // ancho de la web en px de css, así se desborde
		h // altura pantalla en px de css
		screen.width // ancho de la pantalla en px reales
		screen.height // altura pantalla en px reales

		aproximacion por encima de la altura visible y sea "constante" al
		ocultarsen partes de la interfaz del navegador web movil
		h = (screen.height / screen.width) * window.innerWidth
		h *= 1.2 // tolerancia
		*/

		/*
		screen.height y screen.width solo funciona para un monitos
		si el pc tiene varios monitores al colocar un monitos sobre
		otro el background se coratara por la forma como se calcula
		la altura, que una tolerancia con respecto a la altura de
		un monitor no de varios
		*/

		/*
		window.outerHeight - esto se supone que es el tamaño
		del navegador pero en movil con ver como escritorio activado
		no se si en todos pero si en algunos navegadores esta
		medida cambia, y entonces brinca el fondo

		document.body.offsetHeight - este se supone que es el alto maximo
		de la pagina, pero tambien en movil con ver sitio de escritorio
		almenos en firefox cambia este valor entonces brinca la img

		el valor debe ser entre la altura de la maxima parte visible sin
		tener en cuenta las barras que se oculta, y entre el maximo
		tamanio de body para que no se valla a desborder de la altura total
		de la web

		tambien se podria meddir la altura de la img background y compararla
		tal vez con alguna altura total y ver si la img tiene altura menor
		como pasa cuando hay dos monitorios uno sobre otro

		otra opcion seria darle al body una altura especifica para que
		no se oculten las barras de los navegadores moviles y funcione siempre
		*/
		// height = (screen.height / screen.width) * window.innerWidth * 1.2
		// alert(/*window.outerHeight,*/ document.body.offsetHeight)
		// let h = screen.height, window.outerHeight
		// alert(h)
		// alert(`${screen.height}, ${window.outerHeight}, ${visualViewport.height}`)

		/*
		bg.style.height = `${height}px`
		document.body.style.marginTop = `-${height}px`
		contentBg.style.marginTop = `-${height}px`
		*/
	}
	heightBackground()

	window.addEventListener('resize', heightBackground)
})()

/*
en style.css en la seccion
-- -- background -- --
estan los estilos que
trabajan con este script
*/

(function heightBackgroundHandler() {
	let height;
	const bg = $background;

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
		height = (screen.height / screen.width) * window.innerWidth * 1.2

		height = height
		bg.style.height = `${height}px`
		document.body.style.marginTop = `-${height}px`
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

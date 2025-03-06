(function heightBackgroundHandler() {
	let height;
	const bg = $background;

	const heightBackground = () => {
		/*
		creo que javascript no proporciona una manera
		de optener la maxima altura visible de la web
		lo que en css seria 100lvh, un forma que sea
		precisa y disponible en todos los navegadores
		web, el siguiente calculo para la variable
		height es una aproximacion que he logrado
		hacer con algunos metodos que proporciona
		javascript y parecen funcionar de manera bastante
		aproximada en diversos navegadores incluso en
		movil con la opcion ver sitio de escritorio activada
		*/
		height = visualViewport.scale == 1
			? screen.height
			: Math.round((screen.height * visualViewport.width) / screen.width)
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

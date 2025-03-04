(function heightBackgroundHandler() {
	let height;
	const bg = $background;

	const heightBackground = () => {
		height = `${screen.height}px`
		document.body.style.marginTop = `-${height}`
		bg.style.height = height
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

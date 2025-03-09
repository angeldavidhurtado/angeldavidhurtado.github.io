(function () {
	const bgContent = document.getElementsByClassName('background')[0]

	const setBackroundHeight = () => {
		if (!bgContent) return
		const height = Math.round(screen.height) * 1.2
		/*
		utiliza screen.height porque en movil al ocultarse
		las barras del navegador no se produce un salto
		brusco, sin que siempre se ve bien
		*/
		bgContent.style.height = `${height}px`
		bgContent.style.marginTop = `-${height}px`
		console.log(bgContent)
	}

	window.addEventListener('load', setBackroundHeight)
	window.addEventListener('resize', setBackroundHeight)
})()

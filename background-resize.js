/*
(function heightBackgroundHandler() {

})()
*/

/*
en style.css en la seccion
-- -- background -- --
estan los estilos que
trabajan con este script
*/




class HeightBackgroundHandler {
	constructor(idContentBackground) {
		this.lvh = new LargeViewportHeight()
		this.bg = this.createBg()

		const contentBg = document.getElementById(idContentBackground)
		contentBg.prepend(this.bg)

		window.addEventListener('load', this.setHeightBackground)
		window.addEventListener('resize', this.setHeightBackground)
	}

	setHeightBackground = () => {
		const height = this.lvh.getLargeViewportHeight()
		this.bg.style.height = `${height}px`
		// Esto se puede dejar para que no sea el body sino el mismo el mismo div y asi liberar los estilos en css por si quieren hacer algo en el futuro, incluso dejar solo el padre del bg para que este script lo cree y administre todo lo relacionado y liberar creo que completamente el css, este todo limpio y modularizado
		document.body.style.marginTop = `-${height}px`
	}

	createBg = () => {
		const bg = document.createElement('div')
		bg.className = 'background'

		const imgBackground = document.createElement('img')
		imgBackground.setAttribute('src', './img/bg.png')
		imgBackground.setAttribute('alt', '')

		bg.appendChild(imgBackground)
		return bg
	}
}




class LargeViewportHeight {
	constructor() {
		this.divHeight = this.createDivHeight()
	}

	getLargeViewportHeight = () => {
		document.body.appendChild(this.divHeight)
		const height = this.divHeight.offsetHeight
		document.body.removeChild(this.divHeight)
		return height
	}

	createDivHeight = () => {
		const divHeight = document.createElement('div')
		divHeight.setAttribute('style', `
			height: 100lvh;
			margin: 0;
			padding: 0;
			border: 0;
			position: absolute;
			top: 0;
			z-index: -1;
		`)
		return divHeight
	}
}




const heightBackgroundHandler = new HeightBackgroundHandler('id-content-background')

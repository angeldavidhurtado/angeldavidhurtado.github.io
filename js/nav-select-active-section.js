document.addEventListener('DOMContentLoaded', function() {
	const sections = Array.from(document.getElementsByTagName('section'))
	const navLinks = document.querySelectorAll('nav a')
	const nav = document.getElementsByClassName('difuso')[0]

	const removeActiveClass = () => {
		navLinks.forEach(link =>
			link.classList.remove('active')
		)
	}

	const observerOptions = {
		root: null,
		rootMargin: '-9% 0px -90%',
		threshold: 0
	}

	const observerCallback = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				removeActiveClass()
				const entryId = `#${entry.target.id}`
				entryId == '#contacto'
					? nav.classList.add('blue')
					: nav.classList.remove('blue')
				navLinks.forEach(link => {
					if (link.hash == entryId)
						return link.classList.add('active')
				})
			}
		})
	}

	const observer = new IntersectionObserver(
		observerCallback,
		observerOptions
	)

	sections.forEach(section => {
		observer.observe(section)
	})
})

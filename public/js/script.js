
function loadCardCollapses() {
	let kartlar = document.getElementsByClassName('card-collapse')
	let i = 0
	while (i < kartlar.length) {
		if (localStorage.getItem(`collapse_${kartlar[i].id}`)) {
			$(`#${kartlar[i].id}`).collapse(localStorage.getItem(`collapse_${kartlar[i].id}`))
		}
		i++
	}

	$('.card-collapse').on('show.bs.collapse', (e) => {
		localStorage.setItem(`collapse_${e.target.id}`, e.type)

	})
	$('.card-collapse').on('hide.bs.collapse', (e) => {
		localStorage.setItem(`collapse_${e.target.id}`, e.type)

	})

	$('.modal .card-collapse').on('show.bs.collapse', (e) => {
		localStorage.setItem(`collapse_${e.target.id}`, e.type)
	})
	$('.modal .card-collapse').on('hide.bs.collapse', (e) => {
		localStorage.setItem(`collapse_${e.target.id}`, e.type)
	})
}

$(document).ready(function () {
	loadCardCollapses()
})
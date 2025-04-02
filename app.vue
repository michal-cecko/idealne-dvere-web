<template>
	<Header :links="navLinks" />
	<Hero />
	<Cards />
	<Catalogue :cards="catalogueCards" />
	<Banner />
	<WhyUs />
	<Contact />
	<Footer :mapIframeSrc :links="catalogueCards" />
</template>

<script setup>
const navLinks = [
	{ name: 'Domov', to: '#' },
	{ name: 'Výrobky', to: '#catalogue' },
	{ name: 'Prečo my', to: '#why-us' },
	{ name: 'Kontakt', to: '#contact' }
]
const catalogueCards = [
	{
		img: '/images/bg/porta-dvere 1.jpg',
		title: 'Porta',
		link: 'https://www.svetdveri.sk/katalogy/katalog-porta-2025-sk.pdf'
	},
	{
		img: '/images/bg/invado-doors.jpg',
		title: 'Invado',
		link: 'https://www.svetdveri.sk/katalogy/katalog-invado-2025-1.pdf'
	},
	{
		img: '/images/bg/erkado-doors.jpg',
		title: 'Erkado',
		link: 'https://www.svetdveri.sk/katalogy/katalog-erkado-2024-3A-sk.pdf'
	},
	{
		img: '/images/bg/image 44.jpg',
		title: 'Akciové sety',
		link: 'https://svetdveri.sk/katalogy/katalog-2025-4.pdf'
	}
]
const mapIframeSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1888.740735761093!2d18.865382711515664!3d49.42459511587791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471440dd5e3bb8b3%3A0x59edd7f130afa8e7!2zT8WhxI1hZG5pY2EsLFZvanR1xaE!5e0!3m2!1ssk!2ssk!4v1743574645793!5m2!1ssk!2ssk`
</script>

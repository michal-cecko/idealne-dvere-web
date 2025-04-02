<template>
	<section
		class="bg-background-secondary flex items-center relative isolate overflow-hidden max-md:items-end pb-12"
		style="height: calc(100vh - var(--header-height))"
	>
		<Container class="text-[#ffffff] relative z-[2]">
			<h1
				class="uppercase text-6xl font-serif text-white max-w-3xl mb-10 leading-snug max-md:text-3xl font-bold max-md:mb-5"
			>
				prémiové drevené dvere pre váš vysnívaný domov
			</h1>

			<div class="h-1 w-28 bg-primary mb-10 max-md:mb-5"></div>

			<p class="text-xl text-content-secondary mb-14 max-w-3xl max-md:hidden">
				Vybavte si domov dverami, ktoré vám vyhovujú. Môžete si vybrať z našich
				dodávateľov alebo si nechať vyrobiť presne to, čo potrebujete. Jednoducho a
				bez zbytočných kompromisov.
			</p>

			<div class="flex gap-4 items-center">
				<Button class="bg-primary text-[#ffffff] hover:bg-[#a58252]"
					>Produkty</Button
				>
				<Button
					class="text-content-primary bg-background-primary hover:bg-[#d0cece]"
				>
					<span class="max-md:hidden"> ZÁKAZKOVÁ VÝROBA </span>

					<span class="hidden max-md:block"> NA ZÁKAZKU </span>
				</Button>
			</div>
		</Container>

		<div
			class="absolute right-0 top-0 w-2/3 h-full max-md:w-full z-[1] hero-image max-md:h-[70%]"
		></div>

		<Letokruh
			class="absolute left-0 top-0 h-full object-cover z-0 text-content-secondary/15 scale-125"
		/>
	</section>
</template>

<style scoped>
.hero-image {
	background-image: linear-gradient(to left, transparent, #342f2c),
		url(/images/bg/hero.jpg);
	background-position: center;
	background-size: cover;
}

@media not all and (min-width: 768px) {
	.hero-image {
		background-image: linear-gradient(to bottom, transparent, #342f2c),
			url(/images/bg/hero.jpg);
	}
}
</style>

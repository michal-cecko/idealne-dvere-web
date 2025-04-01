<template>
	<section
		class="h-[824px] bg-background-secondary flex items-center relative isolate overflow-hidden"
	>
		<Container class="text-[#ffffff] relative z-[2]">
			<h1
				class="uppercase text-6xl font-serif text-white max-w-3xl mb-10 leading-snug"
			>
				prémiové drevené dvere pre váš vysnívaný domov
			</h1>

			<div class="h-1 w-28 bg-primary"></div>

			<p class="text-xl text-content-secondary mb-14 mt-10 max-w-3xl">
				Vybavte si domov dverami, ktoré vám vyhovujú. Môžete si vybrať z našich
				dodávateľov alebo si nechať vyrobiť presne to, čo potrebujete. Jednoducho a
				bez zbytočných kompromisov.
			</p>

			<div class="flex gap-4 items-center">
				<Button class="bg-primary text-[#ffffff]">Produkty</Button>
				<Button class="text-content-primary bg-background-primary"
					>ZÁKAZKOVÁ VÝROBA</Button
				>
			</div>
		</Container>

		<img
			src="/images/bg/hero.jpg"
			class="absolute right-0 top-0 w-1/2 h-full object-cover z-[1]"
		/>

		<Letokruh
			class="absolute left-0 top-0 h-full object-cover z-0 text-content-secondary/15 scale-125"
		/>
	</section>
</template>

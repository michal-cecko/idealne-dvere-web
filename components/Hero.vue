<template>
	<section
		class="h-[824px] bg-background-secondary flex items-center relative isolate overflow-hidden"
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
				<Button class="bg-primary text-[#ffffff]">Produkty</Button>
				<Button class="text-content-primary bg-background-primary">
					<span class="max-md:hidden"> ZÁKAZKOVÁ VÝROBA </span>

					<span class="hidden max-md:block"> NA ZÁKAZKU </span>
				</Button>
			</div>
		</Container>

		<img
			src="/images/bg/hero.jpg"
			class="absolute right-0 top-0 w-1/2 h-full object-cover z-[1] max-md:w-full"
		/>

		<Letokruh
			class="absolute left-0 top-0 h-full object-cover z-0 text-content-secondary/15 scale-125 max-md:hidden"
		/>
	</section>
</template>

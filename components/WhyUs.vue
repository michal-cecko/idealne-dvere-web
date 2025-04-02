<template>
	<section id="why-us" class="bg-background-primary text-content-primary py-28">
		<Container class="flex gap-16 max-xl:flex-col">
			<div class="max-w-lg shrink-0">
				<div
					class="mb-24 pl-14 max-md:before:hidden max-md:pl-0 max-md:mb-12 before:content-[''] relative before:absolute before:w-[4px] before:bg-primary before:top-0 before:bottom-0 before:left-0"
				>
					<h4 class="text-xl text-primary font-bold mb-4 tracking-widest">
						PREČO SI VYBRAŤ NÁS
					</h4>

					<h2 class="font-serif text-4xl font-bold">
						Dôvody, prečo s nami budete spokojní
					</h2>
				</div>

				<h3
					class="mb-12 max-md:text-8xl font-serif text-9xl relative font-bold"
					data-highlighted-text
				>
					<span class="relative z-[1]"> 590+ </span>
				</h3>

				<p class="text-3xl font-medium">bezproblémových inštalácií</p>
			</div>

			<div
				class="grid grid-cols-2 gap-x-6 gap-y-16 max-md:grid-cols-1 max-md:gap-y-14"
			>
				<div
					v-for="(item, key) in items"
					:key
					class="flex gap-10 items-start max-md:flex-col max-md:gap-9"
				>
					<div class="bg-primary w-[87px] aspect-square shrink-0">
						<img
							:src="item.icon"
							class="w-20 -translate-x-1/4 translate-y-1/3 max-md:translate-x-1/3"
						/>
					</div>
					<div>
						<h3 class="mb-3 text-3xl font-medium text-content-primary">
							{{ item.title }}
						</h3>
						<p class="text-content-tertiary">{{ item.text }}</p>
					</div>
				</div>
			</div>
		</Container>
	</section>
</template>

<script setup>
const items = [
	{
		icon: '/images/icons/Group 301.svg',
		title: 'Vysoká Kvalita',
		text: `Používame overené materiály a každý výrobok kontrolujeme. Vaše dvere získajú spoľahlivosť a dlhú životnosť bez kompromisov.`
	},
	{
		icon: '/images/icons/Group 302.svg',
		title: 'Dlhoročné skúsenosti',
		text: `15+ rokov v odvetví znamená, že vieme odporučiť a vyrobiť presne to, čo potrebujete. Bez zbytočných experimentov.`
	},
	{
		icon: '/images/icons/parquet 1.svg',
		title: 'Široká škála materiálov',
		text: `Vyberte si z dreva, laminátu alebo kovu - 50+ osvedčených povrchov s možnosťou individuálnych úprav.`
	},
	{
		icon: '/images/icons/pencil 1.svg',
		title: 'Výroba na mieru',
		text: `Neštandardné rozmery? Špeciálny dizajn? Vytvoríme dvere presne podľa vašich požiadaviek a priestorových podmienok.`
	}
]
</script>

<style scoped>
[data-highlighted-text] {
	--highlight-width: 140px;
	--highlight-offset: calc(var(--highlight-width) * -0.15);

	translate: calc(var(--highlight-offset) * -1) 0;

	&::before {
		@apply bg-primary;
		content: '';
		position: absolute;
		translate: var(--highlight-offset) var(--highlight-offset);
		width: var(--highlight-width);
		aspect-ratio: 1;
		z-index: 0;
	}
}
</style>

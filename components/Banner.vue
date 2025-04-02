<template>
	<section class="bg-background-secondary text-white py-14">
		<Container
			class="flex justify-between items-start max-md:flex-col max-md:gap-8"
		>
			<div v-for="(item, key) in items" :key="key" class="flex gap-6">
				<div class="text-primary w-16 shrink-0 text-center *:inline-block">
					<component :is="item.icon" />
				</div>
				<div>
					<h4 class="font-semibold text-2xl mb-1">{{ item.title }}</h4>
					<p class="text-content-secondary max-w-72">{{ item.text }}</p>
				</div>
			</div>
		</Container>
	</section>
</template>

<script setup>
import { IconClock, IconVerified, IconTransport } from '#components'

const items = [
	{
		icon: IconClock,
		title: 'Riešenie',
		text: 'Vašu objednávku vyriešime od 2 do 3 týždňov'
	},
	{
		icon: IconTransport,
		title: 'Dodanie',
		text: 'Postaráme sa o prepravu vašej objednávky'
	},
	{
		icon: IconVerified,
		title: 'Garancia spokojnosti',
		text: 'Spolupráca s poprednými partnermi garantuje vašu spokojnosť'
	}
]
</script>

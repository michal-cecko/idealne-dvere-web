<template>
	<section class="bg-background-secondary text-white py-14">
		<Container class="flex justify-between items-center">
			<div v-for="(item, key) in items" :key="key" class="flex gap-6">
				<component :is="item.icon" class="text-primary" />
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

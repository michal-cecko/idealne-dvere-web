<template>
	<section
		class="bg-background-primary pt-32 pb-52 relative overflow-hidden isolate"
	>
		<Container>
			<h4 class="text-primary uppercase text-xl font-bold mb-4">
				DODÁVANÉ VÝROBKY
			</h4>

			<h2 class="font-serif uppercase mb-4 text-4xl font-bold" data-title>
				<span> KATALÓGY dodávateľov </span>
			</h2>

			<p class="text-content-primary max-w-2xl ml-20 mb-40">
				Ponúkame produkty od popredných výrobcov v odvetví. V ich katalógoch nájdete
				rôzne štýly dverí, zárubní a kovaní, od klasických po moderné riešenia.
			</p>

			<div class="grid grid-cols-2 gap-x-9 gap-y-36">
				<div
					v-for="(card, key) in cards"
					:key
					class="flex flex-col gap-9 relative z-10"
					data-item
				>
					<div class="h-[428px]">
						<img :src="card.img" class="w-full h-full object-cover" />
					</div>

					<div
						class="absolute bg-background-secondary h-36 w-[742px] flex items-center justify-between px-16 text-content-secondary"
						data-banner
					>
						<h3 class="font-serif text-[28px] shrink-0">{{ card.title }}</h3>

						<Button class="bg-primary text-white text-xl"> PREJSŤ NA KATALÓG </Button>
					</div>
				</div>
			</div>
		</Container>

		<Letokruh
			class="absolute bottom-0 w-full scale-150 pointer-events-none text-[#342F2C] opacity-10 z-0"
		/>
	</section>
</template>

<script setup>
const cards = [
	{ img: '/images/bg/porta-dvere 1.jpg', title: 'Porta', link: '/' },
	{ img: '/images/bg/invado-doors.jpg', title: 'Invado', link: '/' },
	{ img: '/images/bg/erkado-doors.jpg', title: 'Erkado', link: '/' },
	{ img: '/images/bg/image 44.jpg', title: 'Akciové sety', link: '/' }
]
</script>

<style scoped>
[data-title] {
	position: relative;
	isolation: isolate;
	z-index: 1;

	span {
		position: relative;
	}

	&::before {
		content: '';
		width: 90px;
		aspect-ratio: 1;
		background-color: #ba9e76;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 0;
		translate: -50% -10%;
	}
}

[data-item] {
	[data-banner] {
		z-index: 2;
	}

	&:nth-child(odd) {
		[data-banner] {
			right: 0;
			translate: 88.5% -56px;
			top: 0;
		}
	}

	&:nth-child(even) {
		padding-top: 124px;
		flex-flow: column-reverse;

		[data-banner] {
			right: 0;
			bottom: 0;
			translate: -72.5% 56px;
		}
	}
}
</style>

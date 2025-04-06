<template>
	<section
		id="catalogue"
		class="bg-background-primary pt-32 pb-52 relative overflow-hidden isolate max-lg:pb-10 max-md:pt-16"
		style="scroll-margin-top: var(--header-height)"
	>
		<Container class="mb-40 max-lg:mb-16">
			<h4 class="text-primary uppercase text-xl font-bold mb-4 tracking-widest">
				DODÁVANÉ VÝROBKY
			</h4>

			<h2 class="font-serif uppercase mb-4 text-4xl font-bold" data-title>
				<span> KATALÓGY dodávateľov </span>
			</h2>

			<p class="text-content-primary max-w-2xl ml-20 max-lg:ml-0">
				Ponúkame produkty od popredných výrobcov v odvetví. V ich katalógoch nájdete
				rôzne štýly dverí, zárubní a kovaní, od klasických po moderné riešenia.
			</p>
		</Container>

		<Container class="max-lg:!w-full">
			<div
				class="grid grid-cols-2 gap-x-9 gap-y-36 max-lg:grid-cols-1 max-lg:gap-y-0"
			>
				<div
					v-for="(card, key) in cards"
					:key
					class="flex flex-col gap-9 relative"
					data-item
				>
					<div class="h-[411px] max-md:h-[292px]">
						<img
							:src="card.img"
							class="w-full h-full object-cover"
							:alt="card.title"
						/>
					</div>

					<div
						class="absolute bg-background-secondary h-36 w-[742px] flex items-center justify-between px-16 max-lg:p-6 text-content-secondary max-lg:flex-col max-lg:max-w-[344px] max-lg:w-full z-20"
						data-banner
					>
						<h3
							class="font-serif text-[28px] shrink-0 text-white max-lg:self-start font-bold"
						>
							{{ card.title }}
						</h3>

						<Button
							class="bg-primary text-white text-xl max-lg:w-full text-center hover:bg-[#a58252] z-10"
							:to="card.link"
							:external="card.link.includes('http')"
							:blank="card.link.includes('http') ? '_blank' : ''"
						>
							PREJSŤ NA KATALÓG
						</Button>
					</div>
				</div>
			</div>
		</Container>
	</section>
</template>

<script setup>
const { cards } = defineProps({
	cards: {
		type: Array,
		default: () => []
	}
})
</script>

<style scoped>
[data-title] {
	@apply relative isolate z-[1];

	span {
		position: relative;
	}

	&::before {
		@apply max-lg:hidden;

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

#catalogue {
	background: url('/images/letokruh/dark.png'), #ece5d3;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: bottom;
}

[data-item] {
	@apply max-lg:odd:mb-[147px] max-lg:even:mb-[96px];

	[data-banner] {
		z-index: 2;
	}

	&:nth-child(odd) {
		[data-banner] {
			@apply right-0 top-0 max-lg:!translate-x-0 max-lg:!translate-y-[110px] max-lg:bottom-0 max-lg:top-auto;

			transform: translate(88.5%, -56px);
		}
	}

	&:nth-child(even) {
		@apply flex-col-reverse pt-[124px] max-lg:!pt-0;

		[data-banner] {
			@apply right-0 bottom-0 max-lg:!translate-x-0 max-lg:!translate-y-[60px] max-lg:right-auto;

			transform: translate(-72.5%, 56px);
		}
	}
}
</style>

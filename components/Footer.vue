<template>
	<footer
		class="bg-background-secondary flex h-96 text-[#CACACA] max-md:h-auto max-md:flex-col"
	>
		<div
			class="relative overflow-hidden grow text-[#FFFBEF16] flex flex-col items-center max-md:h-96"
		>
			<Letokruh class="absolute" />

			<img src="/images/logo.svg" class="max-md:w-48" />
		</div>

		<div
			class="flex flex-col ml-auto border-l border-l-white max-md:border-none max-md:ml-0"
		>
			<div class="flex gap-16 px-24 py-9 max-md:px-6 max-md:py-16 max-md:flex-col">
				<div>
					<h5 class="text-white text-xl mb-5 font-bold">Dvere</h5>

					<ul class="flex flex-col gap-1">
						<li v-for="(link, key) in links" :key>
							<NuxtLink
								:to="link.link"
								:external="link.link.includes('http')"
								:target="link.link.includes('http') ? '_blank' : '_self'"
								>{{ link.title }}</NuxtLink
							>
						</li>
						<li>
							<NuxtLink to="#contact">Na mieru</NuxtLink>
						</li>
					</ul>
				</div>

				<div>
					<h5 class="text-white text-xl mb-5 font-bold">O firme</h5>

					<p>
						<b class="block mb-2">IDV OŠČADNICA, s.r.o.</b>

						Oščadnica 153<br />023 01 Oščadnica<br />IČO: 46775374
					</p>
				</div>

				<div>
					<h5 class="text-white text-xl mb-5 font-bold">Kontakt</h5>

					<ul>
						<li>
							<b class="text-primary"> E : </b>
							<NuxtLink to="mailto:kucak@centrum.sk">kucak@centrum.sk</NuxtLink>
						</li>
						<li>
							<b class="text-primary"> P : </b>
							<NuxtLink to="tel:+421 910 918 163">+421 910 918 163</NuxtLink>
						</li>
					</ul>
				</div>
			</div>

			<div
				class="mt-auto py-9 px-24 border-t border-t-white max-md:border-none max-md:hidden"
			>
				Copyright &copy; 2025. Všetky práva vyhradené.
			</div>
		</div>

		<div class="aspect-square shrink-0 h-full bg-primary relative">
			<iframe
				:src
				style="border: 0"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				class="w-full h-full z-10"
			></iframe>

			<div
				class="absolute inset-0 bg-[#BA9E76] opacity-60 pointer-events-none z-50"
			></div>
		</div>

		<div class="hidden py-10 text-center px-6 max-md:block">
			Copyright &copy; 2025. Všetky práva vyhradené.
		</div>
	</footer>
</template>

<script setup>
const { mapIframeSrc: src, links } = defineProps({
	mapIframeSrc: {
		type: String,
		default: ''
	},
	links: {
		type: Array,
		default: []
	}
})
</script>

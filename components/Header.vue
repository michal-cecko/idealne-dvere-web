<template>
	<header
		class="z-20 sticky top-0 bg-primary flex items-center justify-center font-serif font-bold text-xl text-[#fff] uppercase gap-24"
		style="height: var(--header-height)"
	>
		<NuxtLink
			v-for="(link, key) in [...links].splice(0, links.length / 2)"
			:key
			class="uppercase max-lg:hidden"
			:to="link.to"
		>
			{{ link.name }}
		</NuxtLink>

		<div class="relative w-32 self-start max-md:w-28">
			<img
				src="/images/logo.svg"
				alt="logo"
				class="w-full absolute top-0 left-0 z-20"
			/>
		</div>

		<NuxtLink
			v-for="(link, key) in [...links].splice(links.length / 2, links.length)"
			:key
			class="uppercase max-lg:hidden"
			:to="link.to"
		>
			{{ link.name }}
		</NuxtLink>

		<MobileMenu v-model:isOpen="mobileMenuOpen">
			<NuxtLink
				v-for="(link, key) in links"
				@click.stop="mobileMenuOpen = false"
				:key
				class="uppercase font-serif text-3xl font-bold"
				:to="link.to"
			>
				{{ link.name }}
			</NuxtLink>
		</MobileMenu>
	</header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const { links } = defineProps({
	links: {
		type: Array,
		default: () => []
	}
})
</script>

<template>
	<component
		:is="component"
		class="font-serif text-2xl py-4 px-10 uppercase max-md:text-base max-md:py-3 max-md:px-7"
		:to="to ?? null"
		v-bind="$attrs"
	>
		<slot />
	</component>
</template>

<script setup>
const props = defineProps({
	to: {
		type: String
	}
})

const component = computed(() => {
	if (props.to) {
		return resolveComponent('NuxtLink')
	}

	return 'button'
})
</script>

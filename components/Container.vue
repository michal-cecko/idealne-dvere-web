<template>
	<div class="container-wrap mx-auto">
		<slot />
	</div>
</template>

<style scoped>
.container-wrap {
	width: min(calc(100% - 48px), 1280px);
}
</style>

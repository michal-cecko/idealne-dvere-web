<template>
	<section
		class="bg-[#ECE5D3] py-28 flex justify-between relative overflow-hidden isolate"
	>
		<div class="relative w-1/3 flex justify-center items-center z-10">
			<img
				src="/images/bg/zakazk 1.jpg"
				class="absolute w-auto h-[676px] object-cover translate-x-1/4"
			/>
		</div>

		<div
			class="bg-background-secondary text-white pt-24 pb-48 w-2/3 relative z-[5]"
		>
			<div class="max-w-xl mx-auto pl-5">
				<h4 class="text-xl text-primary font-bold mb-9">ZÁKAZKOVA VÝROBA</h4>

				<h2
					class="font-serif text-4xl font-bold mb-5 leading-snug before:content-[''] before:w-[90px] before:aspect-square before:bg-primary before:absolute relative before:z-0 before:-translate-x-1/3 before:-translate-y-1/4"
				>
					<span class="relative z-[1]">
						NENAŠLI STE TIe pravé dvere pre vás? nevadí!
					</span>
				</h2>

				<p class="mb-14 text-[#CACACA] ml-5">
					Chcete dvere na mieru? Napíšte nám svoje požiadavky a do 24 hodín vám
					pošleme návrh riešenia.
				</p>

				<div class="mb-6 ml-5">
					<span class="text-xl text-primary font-bold mb-4 block"> TELEFÓN </span>

					<NuxtLink to="tel:+421 910 918 163" class="text-5xl"
						>+421 910 918 163</NuxtLink
					>
				</div>

				<div class="ml-5">
					<span class="text-xl text-primary font-bold mb-4 block"> EMAIL </span>

					<NuxtLink to="mailto:kucak@centrum.sk" class="text-5xl"
						>kucak@centrum.sk</NuxtLink
					>
				</div>
			</div>
		</div>

		<Letokruh
			class="absolute left-0 w-full scale-150 pointer-events-none text-[#342F2C] opacity-10 z-0"
		/>
	</section>
</template>

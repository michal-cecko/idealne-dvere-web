<template>
	<section
		id="contact"
		class="bg-[#ECE5D3] py-28 flex justify-between relative overflow-hidden isolate max-md:py-0 max-md:flex-col-reverse"
	>
		<div
			class="relative w-1/3 flex justify-center items-center z-10 max-md:w-full max-md:h-[466px]"
		>
			<img
				src="/images/bg/zakazk 1.jpg"
				class="absolute w-auto h-[676px] object-cover translate-x-1/4 max-md:static max-md:h-full max-md:translate-x-0 max-md:w-full"
			/>
		</div>

		<div
			class="bg-background-secondary text-white pt-24 pb-48 w-2/3 z-[5] max-md:w-full max-md:py-16 relative"
		>
			<div class="max-w-xl mx-auto pl-5 max-md:px-5">
				<h4 class="text-xl text-primary font-bold mb-9">ZÁKAZKOVÁ VÝROBA</h4>

				<h2
					class="font-serif max-md:before:hidden text-4xl font-bold mb-5 leading-snug before:content-[''] before:w-[90px] before:aspect-square before:bg-primary before:absolute relative before:z-0 before:-translate-x-1/3 before:-translate-y-1/4"
				>
					<span class="relative z-[1]">
						NENAŠLI STE TIe pravé dvere pre vás? nevadí!
					</span>
				</h2>

				<p class="mb-14 text-[#CACACA] ml-5 max-md:ml-0">
					Chcete dvere na mieru? Napíšte nám svoje požiadavky a do 24 hodín vám
					pošleme návrh riešenia.
				</p>

				<div class="mb-6 ml-5 max-md:ml-0">
					<span class="text-xl text-primary font-bold mb-4 block max-md:text-base">
						TELEFÓN
					</span>

					<NuxtLink to="tel:+421 910 918 163" class="text-5xl max-md:text-3xl"
						>+421 910 918 163</NuxtLink
					>
				</div>

				<div class="ml-5 max-md:ml-0">
					<span class="text-xl text-primary font-bold mb-4 block max-md:text-base">
						EMAIL
					</span>

					<NuxtLink to="mailto:kucak@centrum.sk" class="text-5xl max-md:text-3xl"
						>kucak@centrum.sk</NuxtLink
					>
				</div>
			</div>

			<Letokruh
				class="hidden max-md:block absolute inset-0 pointer-events-none z-0 opacity-10"
			/>
		</div>

		<Letokruh
			class="absolute left-0 w-full scale-150 pointer-events-none text-[#342F2C] opacity-10 z-0"
		/>
	</section>
</template>

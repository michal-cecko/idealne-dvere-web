// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss'],
	css: ['~/assets/main.css', '~/assets/fonts.css'],
	app: {
		head: {
			title: 'Ideálne Dvere',
			htmlAttrs: {
				lang: 'sk'
			},
			meta: [
				{
					name: 'description',
					content: `Stolárstvo z Oščadnice ponúka cenovo dostupné dvere na mieru,
          zárubne a kovanie bez zbytočných prirážok. Špecializujeme sa na výrobu kvalitných drevených,
          laminátových a kovových dverí za rozumné ceny. Vyrábame presne podľa vašich rozmerov a rozpočtu.
          Spoľahlivá montáž v celom regióne Kysúc. Neplaťte viac - požiadajte o cenovú ponuku ešte dnes!`
				}
			],
			link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
		}
	}
})

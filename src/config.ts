export const SITE = {
	title: 'Physics Hand-Website',
	description: 'A collection of physical data and formulae.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Section Header', header: true },
		{ text: 'Introduction', link: 'en/introduction' },
		{ text: 'Page 2', link: 'en/page-2' },
		{ text: 'Page 3', link: 'en/page-3' },

		{ text: "Constants and Units", header: true, acronym: "CU" },
		{ text: "Fundamental Constants of Physics"},
		{ text: "Units of Physics"},

		{ text: "Physical Tables", header: true, acronym: "T" },
		{ text: "Mechanics and Thermal Physics" },
		{ text: "Electricity" },
		{ text: "Electronics" },
		{ text: "Waves" },
		{ text: "Nuclear Physics" },
		{ text: "Atomic and Molecular Physics" },
		{ text: "Particle Physics" },
		{ text: "Solid State Physics" },
		{ text: "Astrophysics and Geophysics" },

		{ text: "Physical Formulae and Diagrams", header: true, acronym: "F"}
	],
};

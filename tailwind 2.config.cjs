module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: 'colors.black',
			white: '#FFFFFF',
			gray: 'colors.gray',
			primary: {
				100: '#1E508A',
				500: '#1E3A8A',
				900: '#1E288A'
			},
			secondary: {
				100: '#8A801E',
				500: '#8A6E1E',
				900: '#8A581E'
			},
			tertiary: {
				100: '#D9CC4F',
				500: '#D9B54F',
				900: '#D9994F'
			}
		}
	}
};

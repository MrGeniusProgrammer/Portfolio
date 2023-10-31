/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--color-background))',
				foreground: 'hsl(var(--color-foreground))',
				border: 'hsl(var(--color-border))',
				input: 'hsl(var(--color-input))',
				ring: 'hsl(var(--color-ring))',

				primary: {
					DEFAULT: 'hsl(var(--color-primary))',
					foreground: 'hsl(var(--color-primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--color-secondary))',
					foreground: 'hsl(var(--color-secondary-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--color-accent))',
					foreground: 'hsl(var(--color-accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--color-destructive))',
					foreground: 'hsl(var(--color-destructive-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--color-card))',
					foreground: 'hsl(var(--color-card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--color-popover))',
					foreground: 'hsl(var(--color-popover-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--color-muted))',
					foreground: 'hsl(var(--color-muted-foreground))',
				},
			},
			borderRadius: {
				radius: 'var(--radius)',
			},
		},
		keyframes: {
			left: {
				'0%': { translate: '100% 0%' },
				'100%': { translate: '0% 0%' },
			},
			right: {
				'0%': { translate: '-100% 0%' },
				'100%': { translate: '0% 0%' },
			},
			'bottom-fade-in': {
				'0%': { translate: '0% -100%', opacity: '0' },
				'100%': { translate: '0% 0%', opacity: '1' },
			},
			'top-fade-out': {
				'0%': { translate: '0% 0%', opacity: '1' },
				'100%': { translate: '0% 100%', opacity: '0' },
			},
			pulse: {
				'0%': { opacity: '1' },
				'25%': { opacity: '0.8' },
				'50%': { opacity: '0.7' },
				'75%': { opacity: '0.8' },
				'100%': { opacity: '1' },
			},
		},
		animation: {
			left: 'left',
			right: 'right',
			'bottom-fade-in': 'bottom-fade-in',
			'top-fade-out': 'top-fade-out',
			pulse: 'pulse 2s ease-in-out infinite',
		},
	},
	plugins: [require('tailwindcss-animate')],
};

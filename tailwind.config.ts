
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				amsa: {
					purple: '#1EAEDB', // Bright blue
					blue: '#33C3F0',   // Lighter blue
					dark: '#1A1F2C',
					light: '#C8F0FA',  // Light blue
				},
				teyliom: {
					blue: '#0080ff',    // Main Teyliom blue
					accent: '#1a96f0',  // Accent blue for Teyliom
					light: '#e6f7ff',   // Very light blue
					dark: '#104c8a',    // Dark blue
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(30, 174, 219, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(30, 174, 219, 0.8)' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'twinkle': {
					'0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
					'50%': { opacity: '1', transform: 'scale(1.2)' }
				},
				'star-pulse': {
					'0%': { transform: 'scale(1)', opacity: '0.7' },
					'50%': { transform: 'scale(1.3)', opacity: '1' },
					'100%': { transform: 'scale(1)', opacity: '0.7' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-out': 'fade-out 0.5s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s infinite',
				'spin-slow': 'spin-slow 15s linear infinite',
				'twinkle': 'twinkle 3s ease-in-out infinite',
				'twinkle-delay': 'twinkle 3s ease-in-out 0.5s infinite',
				'twinkle-delay-2': 'twinkle 3s ease-in-out 1s infinite',
				'star-pulse': 'star-pulse 4s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-gradient': 'linear-gradient(90deg, rgba(26,31,44,1) 0%, rgba(30,174,219,0.5) 100%)',
				'card-gradient': 'linear-gradient(225deg, #33C3F0 0%, #1EAEDB 48%, #0FA0CE 100%)',
				'teyliom-gradient': 'linear-gradient(225deg, #0080ff 0%, #1a96f0 48%, #104c8a 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

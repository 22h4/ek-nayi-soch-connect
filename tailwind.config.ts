import type { Config } from "tailwindcss";

export default {
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
				// Green spatial color system
				emerald: {
					50: 'hsl(var(--emerald-50))',
					100: 'hsl(var(--emerald-100))',
					200: 'hsl(var(--emerald-200))',
					300: 'hsl(var(--emerald-300))',
					400: 'hsl(var(--emerald-400))',
					500: 'hsl(var(--emerald-500))',
					600: 'hsl(var(--emerald-600))',
					700: 'hsl(var(--emerald-700))',
					800: 'hsl(var(--emerald-800))',
					900: 'hsl(var(--emerald-900))',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backdropBlur: {
				'4xl': '72px',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'spatial-float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)'
					},
					'25%': {
						transform: 'translateY(-15px) rotateX(3deg) rotateY(2deg)'
					},
					'50%': {
						transform: 'translateY(-30px) rotateX(0deg) rotateY(4deg)'
					},
					'75%': {
						transform: 'translateY(-15px) rotateX(-3deg) rotateY(2deg)'
					}
				},
				'spatial-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(16, 185, 129, 0.6), 0 0 60px rgba(16, 185, 129, 0.4)'
					}
				},
				'depth-shift': {
					'0%, 100%': {
						transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
					},
					'25%': {
						transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg) translateZ(20px)'
					},
					'50%': {
						transform: 'perspective(1000px) rotateX(0deg) rotateY(10deg) translateZ(40px)'
					},
					'75%': {
						transform: 'perspective(1000px) rotateX(-5deg) rotateY(5deg) translateZ(20px)'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-15px) rotate(3deg)'
					},
					'50%': {
						transform: 'translateY(-30px) rotate(0deg)'
					},
					'75%': {
						transform: 'translateY(-15px) rotate(-3deg)'
					}
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.5'
					}
				},
				'bounce-light': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'morph': {
					'0%, 100%': {
						borderRadius: '50% 50% 50% 50%',
						transform: 'rotate(0deg)'
					},
					'25%': {
						borderRadius: '30% 70% 40% 60%',
						transform: 'rotate(90deg)'
					},
					'50%': {
						borderRadius: '70% 30% 60% 40%',
						transform: 'rotate(180deg)'
					},
					'75%': {
						borderRadius: '40% 60% 30% 70%',
						transform: 'rotate(270deg)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						filter: 'drop-shadow(0 0 20px rgba(255, 122, 89, 0.4))'
					},
					'50%': {
						filter: 'drop-shadow(0 0 40px rgba(255, 122, 89, 0.8))'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'spatial-float': 'spatial-float 8s ease-in-out infinite',
				'spatial-glow': 'spatial-glow 4s ease-in-out infinite',
				'depth-shift': 'depth-shift 12s ease-in-out infinite',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-in-left': 'slide-in-left 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.8s ease-out',
				'scale-in': 'scale-in 0.6s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'bounce-light': 'bounce-light 3s ease-in-out infinite',
				'morph': 'morph 8s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

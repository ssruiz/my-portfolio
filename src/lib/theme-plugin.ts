import plugin from 'tailwindcss/plugin';

export const themePlugin = plugin(
  // 1. Agregar variables CSS
  function ({ addBase }) {
    addBase({
      ':root': {
        '--background': '240.7 7% 8%',
        '--foreground': '210 40% 98%',
        '--muted': '217.2 32.6% 17.5%',
        '--muted-foreground': '215 20.2% 65.1%',
        '--border': '217.2 32.6% 17.5%',
        '--primary': '210 40% 98%',
        '--primary-foreground': '222.2 47.4% 11.2%',
        '--secondary': '217.2 32.6% 17.5%',
        '--secondary-foreground': '210 40% 98%',
        '--accent': '217.2 32.6% 17.5%',
        '--accent-foreground': '210 40% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '0 85.7% 97.3%',
        '--ring': '217.2 32.6% 17.5%',
      },
    });
    addBase({
      '*': { '@apply border-border': {} },
      body: { '@apply bg-background text-foreground': {} },
    });
    addBase({
      '.seccion-title': {
        '@apply text-3xl font-semibold leading-9 tracking-wide': {},
      },
    });
    addBase({
      html: {
        '@apply scroll-smooth': {},
      },
    });
  },
  {
    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
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
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
        },
        backgroundImage: {
          fondo: "url('/images/fondo.svg')",
          fondo2: "url('/images/fondo2.svg')",
          fondomb: "url('/images/fondomb.svg')",
          fondocurva: "url('/images/fondocurva.svg')",
          fondocurvamb: "url('/images/fondocurvamb.svg')",
        },
        aspectRatio: {
          '960/300': '960/300',
        },
      },
    },
  }
);

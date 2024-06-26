import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        ananda_black: ['var(--font-ananda-black)'],
        beauty_hand_writing: ['var(--font-beauty-hand-writing-regular)'],
        montserrat_arm: ['var(--font-montserrat-arm)'],
        vrdznagir: ['var(--font-arm-vrdznagir)'],
        cosiarm: ['var(--font-arm-cosiarm)'],
        tumanyan: ['var(--font-arm-tumanyan)'],
        scripted: ['var(--font-arm-scripted)'],
        doctor: ['var(--font-arm-doctor)'],
        victory: ['var(--font-arm-victory)'],
        nasa: ['var(--font-arm-nasa)'],
        pompadur: ['var(--font-pompadur)'],
        deja_vu_serif_condensed: ['var(--font-deja-vu-serif-condensed)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;

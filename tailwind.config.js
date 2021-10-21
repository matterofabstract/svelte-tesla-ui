module.exports = {
  mode: 'jit',
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    content: ['./public/index.html', './src/**/*.svelte'],
    options: {
      defaultExtractor: content => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    },
  },
  darkMode: 'class', // 'media', 'class', or false
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

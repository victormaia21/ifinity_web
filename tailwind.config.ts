module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'container_values': 'repeat(auto-fit, minmax(24%, 1fr))',
      },
      boxShadow: {
        'customIcons': '0 0 1em 0.1em #999',
        'checkboxShadowBlack': '0 0 .4em .02em #999',
        'checkboxShadowWhite': '0 0 .4em .02em white'
      },
      backgroundImage: {
        'custom-pattern': 'url:("/images/cityDemo.jpg")',
      },
      screens: {
        'tableResponsive': '890px',
        'cardHeaderResponsive': '650px',
      },
      display: {
        'initial': 'initial',
      },
    },
  },
  plugins: [],
}

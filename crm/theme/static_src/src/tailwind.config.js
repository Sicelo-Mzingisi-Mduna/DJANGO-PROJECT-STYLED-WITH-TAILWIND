/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../templates/**/*.html',   // your theme app templates
    '../../templates/**/*.html', // project-level templates
    '../../**/*.js',            // JS files across project
    '../../**/*.py'             // Python files (optional, if you use Tailwind classes in strings)
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

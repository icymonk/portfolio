import { Vue } from 'nuxt-property-decorator'

Vue.filter('prefix', (value, prefix) => (value ? prefix + value : ''))
Vue.filter('suffix', (value, suffix) => (value ? value + suffix : ''))

Vue.filter('percent', value => (value || 0) * 100 + '%')

Vue.filter('toLocaleString', value => new Date(value).toLocaleString())

Vue.filter('toLocaleDateString', value => new Date(value).toLocaleDateString())

Vue.filter('substring', (value, start, end) => value.substring(start, end))

Vue.filter('ellipsis', (value, max) =>
  value.length > max ? value.slice(0, max) + '...' : value,
)

Vue.filter('comma', value =>
  (value || '').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
)

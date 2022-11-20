import DefaultLayout from 'layouts/Default'
import Dashboard from 'pages/dashboard'

const indexRoutes = [{ path: '/', component: DefaultLayout }]

const AppRoutes = [
  {
    path: '/dashboard',
    name: 'داشبورد',
    icon: 'fa fa-tachometer-alt',
    component: Dashboard,
    showInNav: true,
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true },
]

export default AppRoutes

export { indexRoutes }

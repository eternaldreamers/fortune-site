import IndexPage from '@pages/index'
import SignInPage from '@pages/sign-in'
import AdminPage from '@pages/admin'

export default [
  {
    path: '/',
    component: IndexPage,
  },
  {
    path: '/sign-in',
    component: SignInPage,
  },
  {
    path: '/admin',
    component: AdminPage,
  },
]

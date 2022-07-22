import IndexPage from '@pages/index'
import SignInPage from '@pages/sign-in'
import AdminPage from '@pages/admin'
import TicketPage from '@pages/ticket'

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
  {
    path: '/admin/ticket',
    component: TicketPage,
  },
]

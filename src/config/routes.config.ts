import { lazy } from 'react-router-guard'

// fix me
import checkResolve from '@common/guards/admin.guard'
// end 

export default [
  {
    path: '/auth',
    canActivate: [() => Promise.resolve(true)],
    component: lazy(() => import('@layouts/blank')),
    routes: [
      {
        path: '/sign-in',
        component: lazy(() => import('@pages/sign-in')), 
      },
    ],
  },
  {
    path: '/admin',
    component: lazy(() => import('@pages/admin')),
    // canActivate: [checkResolve]/* , */
    // routes: [
    //   {
    //     path: '/admin',
    //     redirect: '/admin/ticket'
    //   },
    //   {
    //     path: '/ticket',
    //     component: lazy(() => import('@pages/ticket')),
    //     canActivate: [checkResolve],
    //   }
    // ]
  },
  {
    path: '/',
    component: lazy(() => import('@layouts/theme')),
    routes: [
      {
        path: '/',
        component: lazy(() => import('@pages/index')), 
      },
    ],
  },
]

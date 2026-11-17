

import { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import type { RouteProps }  from './types'
import BasicLayout from '@/layout/BasicLayout'

const React18 = lazy(() => import(/* webpackChunkName: react18 */ '@/pages/react18/react18'))
const Nextjs16 = lazy(() => import(/* webpackChunkName: Vue3 */ '@/pages/nextjs16/nextjs16'))
const Vue3 = lazy(() => import(/* webpackChunkName: Vue3 */ '@/pages/vue3/vue3'))

export const rootRouter: (RouteObject & RouteProps)[] = [
    {
        path: '/',
        element: <BasicLayout />,
        children: [
            { index: true, element: <div>home</div>, meta: { title: '首页', key: 'home' } },
            { path: 'app-react18', element: <React18></React18> },
            { path: 'app-nextjs16', element: <Nextjs16></Nextjs16> },
            { path: 'app-vue3', element: <Vue3></Vue3> }
        ]
    },
    {
        path: '/login',
        element: <div>login</div>,
        meta: {
            title: '登录页',
            key: 'login'
        }
    },
    {
        path: '*',
        element: <div>404</div>,
    }
]

const Router = () => {
    const routes = useRoutes(rootRouter)
    return routes
}

export default Router
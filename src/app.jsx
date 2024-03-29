import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import * as ROUTES from './constants/routes'
const Home = lazy(() => import('./pages/home'))
const Signin = lazy(() => import('./pages/signin'))
const Signup = lazy(() => import('./pages/signup'))
const Browse = lazy(() => import('./pages/browse'))

import { useAuthListener } from './hooks'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { Loading } from './components'

export function App() {
    const { user } = useAuthListener()

  return (
    <Router>
        <Switch>
            <Suspense fallback={<Loading src={user ? user?.photoURL : "Loading..."} />}>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                    <Signin />
                </IsUserRedirect>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                    <Signup />
                </IsUserRedirect>
                <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                    <Browse />
                </ProtectedRoute>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                    <Home />
                </IsUserRedirect>
            </Suspense>
        </Switch>
    </Router>
  )
}
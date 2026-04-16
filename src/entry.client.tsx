import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRouter, RootRoute, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { Router } from './router'

// Create a new router instance
const router = new Router({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')

if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}

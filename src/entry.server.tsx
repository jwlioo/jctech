import * as React from 'react'
import { createMemoryHistory, Router, RootRoute, RouterProvider } from '@tanstack/react-router'
import { renderToString } from 'react-dom/server'
import { routeTree } from './routeTree.gen'

export async function render(url: string) {
  const memoryHistory = createMemoryHistory({
    initialEntries: [url],
  })

  const router = new Router({ history: memoryHistory, routeTree })

  await router.load()

  const html = renderToString(<RouterProvider router={router} />)

  return html
}

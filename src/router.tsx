import { createHashRouter } from 'react-router-dom'

export enum RouterPath {
  root = '/',
}

export const router = createHashRouter(
  [
    {
      path: RouterPath.root,
      children: [],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
)

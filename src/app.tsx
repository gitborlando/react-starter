import { RouterProvider } from 'react-router-dom'
import { router } from 'src/router'

export const App: FC<{}> = observer(() => {
  return <RouterProvider router={router} />
})

const cls = classes(css``)

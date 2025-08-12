import { FC } from 'react'

interface AppProps {}

export const App: FC<AppProps> = observer(() => {
  return (
    <Flex layout='c' className='app'>
      <Flex layout='v-c' className='app-box'>
        <img className='w-100%' src={Assets.章若楠} alt='章若楠' />
        <h2>这是章若楠</h2>
      </Flex>
    </Flex>
  )
})

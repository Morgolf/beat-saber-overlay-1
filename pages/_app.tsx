import { useRouter } from 'next/router'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'

import { usePlayerStore } from '../src/store/player'
import { SocketIOProvider } from '../src/contexts/SocketIO'
import { ThemeContext } from '../src/contexts/Theme'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const { getPlayerInfo } = usePlayerStore()

  useEffect(() => {
    if (router.query.id) {
      getPlayerInfo(router.query.id as string)
    }
  }, [getPlayerInfo, router.query.id])

  return (
    <ThemeContext>
      <SocketIOProvider>
        <Component {...pageProps} />
      </SocketIOProvider>
    </ThemeContext>
  )
}

export default App

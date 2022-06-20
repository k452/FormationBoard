import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import Header from 'components/header'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import '../../public/styles/globals.css'

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

const _App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  if (typeof window !== 'undefined') {
    nprogress.start()
  }

  useEffect(() => {
    nprogress.done()
  })
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default _App

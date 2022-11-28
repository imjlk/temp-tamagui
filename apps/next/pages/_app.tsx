import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { Provider } from 'app/provider'
import Head from 'next/head'
import React, { useMemo } from 'react'
import type { SolitoAppProps } from 'solito'
import 'raf/polyfill'

import '../faust.config.js';
import { FaustProvider } from '@faustwp/core'
import { useRouter } from 'next/router';
import '../styles/global.scss';

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const [theme, setTheme] = useRootTheme()
  const router = useRouter();

  const contents = useMemo(() => {
    // @ts-ignore
    return <Component {...pageProps} key={router.asPath} />
  }, [Component, pageProps, router.asPath])

  return (
    <FaustProvider pageProps={pageProps}>
      <Head>
        <title>Tamagui Example App</title>
        <meta name="description" content="Tamagui, Solito, Expo & Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextThemeProvider {...pageProps} onChangeTheme={setTheme}>
        <Provider disableRootThemeClass defaultTheme={theme}>
          {contents}
        </Provider>
      </NextThemeProvider>
    </FaustProvider>
  )
}

export default MyApp

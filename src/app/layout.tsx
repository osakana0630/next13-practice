import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import Header from '@/components/layout/Header'
import ProvidersWrapper from '@/app/ProvidersWrapper'

// フォントの読み込み
const NotoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  preload: true,
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${NotoSansJP.className} h-screen`}>
        <ProvidersWrapper>
          <Header />
          <div className={'mt-20 max-w-screen-2xl'}>{children}</div>
        </ProvidersWrapper>
      </body>
    </html>
  )
}

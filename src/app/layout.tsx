import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ApolloWrapper } from "@/lib/apollo-wrapper";

import { AppBar } from "@/components/AppBar";
import SearchProvider from '@/providers/SearchProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Star Wars Characters Encyclopedia',
  description: 'Characters & More',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <SearchProvider>
            <AppBar />
            {children}
          </SearchProvider>
        </ApolloWrapper>
      </body>
    </html>
  )
}

import React from 'react'
import { ReactNode } from 'react'
import Header from '../components/Header'

type Props = {
  children: ReactNode
}

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(true)

  return (
    <div className="w-full h-screen flex flex-col items-center px-1 sm:px-5 md:px-10">
      <Header drawer={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <Main />
      <Footer />
    </div>
  )
}

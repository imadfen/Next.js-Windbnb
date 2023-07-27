import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center px-1 sm:px-5 md:px-10">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

import '../styles/globals.css'
import '../styles/skeleton.css'
import { ThemeProvider } from "@material-tailwind/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

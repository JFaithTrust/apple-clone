import { useState } from 'react'
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Highlights from "./components/highlights.jsx";
import Model from "./components/model.jsx";
import Features from "./components/features.jsx";
import HowItWorks from "./components/how-it-works.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className={'bg-black'}>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default App

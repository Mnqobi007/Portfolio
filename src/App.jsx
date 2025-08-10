import Header from './components/Header';
import Hero from './components/Hero';
import { About } from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-[black] text-white min-h-screen">
      <Header />
      <main className='container mx-auto px-4 py-8'>
        <Hero />
        <About/>
        <Projects />
      </main>
    </div>
  )
}

export default App;

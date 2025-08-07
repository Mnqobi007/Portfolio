import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="bg-[black] text-white min-h-screen">
      <Header />
      <main className='container mx-auto px-4 py-8'>
        <Hero />
      </main>
    </div>
  )
}

export default App;

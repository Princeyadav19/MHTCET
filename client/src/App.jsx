import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
function App() {
  return (
    <div className='flex flex-col justify-between'>
      <Header />

      {/* Main pages */}
      <div className='mx-[10vw] my-10 '>
        <Home />
      </div>
      {/* Main pages end */}

      <Footer />
    </div>
  )
}

export default App
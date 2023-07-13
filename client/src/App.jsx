import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import Questions from './Components/MCQ_Component/Questions';
import Landing_Header from './Components/Landing_component/Landing_Header';
import Papers from './Pages/Papers';
function App() {
  return (
    <div className='flex justify-between flex-col'>
      
      {/* <Header /> */}
      <Landing_Header />


      {/* Main pages */}
      <div className='mx-[10vw] my-10 '>
        {/* <Home /> */}
        <Landing />
      </div>
      {/* Main pages end */}

        <Footer />

      
    </div>
  )
}

export default App
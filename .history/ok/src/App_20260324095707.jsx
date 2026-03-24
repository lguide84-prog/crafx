import React from 'react'
import HeroPage from './components/heropage'
import About from './components/About'
import FeaturesPage from './components/FeaturesPage'
import CenteredHeroPage from './components/Center'
import SplitPage from './components/ImageCardWrapper'
import SectorsPage from './components/SectorsPage'

function App() {
  return (
  <>
  <div>

    <HeroPage/>
    <About/>
    <FeaturesPage/>
    <SectorsPage/>
    <SplitPage/>
    <CenteredHeroPage/>
  </div>
  
  
  </>
  )
}

export default App
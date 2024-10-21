import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Career from "./Pages/Career"
import Contact from './Pages/Contact';

const App = () => {
	return (
		<>
			<Routes>
			<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/services' element={<Services />} />
				<Route path='/career' element={<Career />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</>
	)
}

export default App
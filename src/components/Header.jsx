import { useState } from 'react'

export default function Header() {

  const [isOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isOpen);
  }

  return (
    <header>
        <div className="container mx-auto px-4 py-6 flex justify-between items-center border-b-2 border-gray-900">
            
            {/* Logo */ }
            <a href="#" className="md:text-4xl font-light font-Playfair m-0 tracking-wider"><span className="text-primary text-3xl">MK</span><span className='text-4xl'>SIBIYA</span><span className="text-primary-500">.</span></a>
            
            {/* Desktop Navigation*/ }
            <nav className="hidden lg:block">
                <ul className='flex gap-6 text-[17px] tracking-wider font-Poppins'>
                    <li><a href="#" className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full hover:text-primary">HOME</a></li>
                    <li><a href="#" className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full hover:text-primary">ABOUT</a></li>
                    <li><a href="#" className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full hover:text-primary">PROJECTS</a></li>
                    <li><a href="#" className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full hover:text-primary">SKILLS</a></li>
                    <li><a href="#" className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full hover:text-primary">CONTACT</a></li>   
                </ul>
            </nav>
            {/* Desktop Download CV Button*/ }
            <button className="hidden lg:block font-Poppins  bg-primary text-white rounded-full px-6 py-2 border-none cursor-pointer">
                DOWNLOAD CV
            </button>

            {/* Mobile Menu opening Button*/ }
            <button onClick={toggleMenu} className="block lg:hidden text-white text-2xl">
                 <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>  
             </button> 

             {/* Mobile Menu Navigation*/ }
             <div className={`fixed top-0 right-0 w-3/4 h-full bg-black bg-opacity-90 flex flex-col items-center gap-6 p-6 backdrop-blur-md z-40 transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={toggleMenu} className="absolute top-0 right-0 p-4 text-white text-2xl">
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <ul className='flex flex-col gap-4 text-base tracking-wider font-normal items-center'>
                    <li><a href="#" className="block text-center">HOME</a></li>
                    <li><a href="#" className="block text-center">ABOUT</a></li>
                    <li><a href="#" className="block text-center">PROJECTS</a></li>
                    <li><a href="#" className="block text-center">SKILLS</a></li>
                    <li><a href="#" className="block text-center">CONTACT</a></li>
                </ul>
                <button className="w-full bg-primary-500 text-white rounded-full px-6 py-2 border-none cursor-pointer self-center">
                    DOWNLOAD CV
                </button>
            </div>  
        </div>
    </header>
  )
}

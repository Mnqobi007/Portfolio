export default function Hero(){
    return (
       <div className="container mx-auto flex justify-between items-center py-16 px-20">
            <div className="flex flex-col space-y-4 font-Poppins ">
                <div className='relative w-[95%] sm:w-48 h-10 bg-primary shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
                   <div className="absolute inset-[2px] bg-black rounded-full flex items-center justify-center text-white text-xl">
                      Hi & Welcome
                   </div>
                </div>
                <h1 className="text-6xl">Im a FullStack <span className="text-primary">Developer</span></h1>
                <h1 className="text-6xl">Mnqobi Sibiya<span className="text-primary">.</span></h1>
                <p className="text-xl">A 3rd Year Bsc Computer Science & Electronics Student at North-West University</p>
                <div className="flex space-x-4 text-4xl">
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-solid fa-envelope"></i>
                </div>
            </div>
            <div className="flex space-x-4 relative p-10">
                <div className="z-10">
                <img src="src/assets/images/My younger Self.jpg" alt="Profile" className="w-100 h-120 rounded-md"/>
                </div>
                <div className="bg-primary w-100 h-120 rounded-md absolute top-6 left-6"></div>
            </div>
       </div>
    )
}
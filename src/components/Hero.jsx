export default function Hero(){
    return (
    <section>
       <div className="container mx-auto flex justify-between items-center lg:py-16 lg:px-4 md:px-2 flex-col-reverse md:flex-row md:justify-between md:px-0 md:gap-8 lg:gap-12">
            <div className="flex flex-col space-y-4 font-Poppins items-center md:items-start text-center md:text-left">
                <div className='relative w-[95%] sm:w-48 h-10 bg-primary shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
                   <div className="absolute inset-[2px] bg-black rounded-full flex items-center justify-center text-white text-xl">
                      Hi & Welcome
                   </div>
                </div>
                <h1 className="text-6xl">Im a FullStack <span className="text-primary">Developer</span></h1>
                <h1 className="text-6xl">Mnqobi Sibiya<span className="text-primary">.</span></h1>
                <p className="text-xl">A 3rd Year Bsc Computer Science & Electronics Student at North-West University</p>
                <div className="flex space-x-6 text-4xl">
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-solid fa-envelope"></i>
                </div>
            </div>
            <div>
                <img src="src/assets/images/pic head.jpg" alt="Profile" className="w-100 h-120 rounded-md object-cover object-center w-32 h-32 rounded-full mx-auto mb-6 md:mb-0 md:rounded-md md:w-[26rem] md:h-auto shadow-[0_0_15px_rgba(67,26,257,0.9)]" />
            </div>
       </div>
       </section>
    )
}

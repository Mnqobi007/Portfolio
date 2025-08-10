export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-950 to-black text-white pt-20 pb-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-6 md:px-10">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-6 font-Poppins items-center md:items-start text-center md:text-left">
          
          {/* Welcome Tag */}
          <div className="relative w-[95%] sm:w-48 h-10 bg-primary shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full overflow-hidden">
            <div className="absolute inset-[2px] bg-black rounded-full flex items-center justify-center text-white text-lg font-medium">
              Hi & Welcome
            </div>
          </div>

          {/* Main Headings */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            I’m a Full Stack <span className="text-primary">Developer</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Mnqobi Sibiya<span className="text-primary">.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl max-w-xl text-gray-300">
            A 3rd Year BSc Computer Science & Electronics Student at North-West University
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 text-3xl text-primary">
            <i className="fa-brands fa-github hover:text-white transition-colors cursor-pointer"></i>
            <i className="fa-brands fa-linkedin hover:text-white transition-colors cursor-pointer"></i>
            <i className="fa-solid fa-envelope hover:text-white transition-colors cursor-pointer"></i>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="src/assets/images/pic head.jpg"
            alt="Profile"
            className="rounded-full md:rounded-xl object-cover shadow-[0_0_20px_rgba(67,26,257,0.9)] w-40 h-40 sm:w-52 sm:h-52 md:w-[26rem] md:h-[30rem] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

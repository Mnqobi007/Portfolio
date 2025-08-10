export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-12">
          Whether you have a project in mind, a question, or just want to say hi, I’d love to hear from you!
        </p>

        {/* Contact Form */}
        <form className="max-w-2xl mx-auto bg-gray-800 bg-opacity-60 p-8 rounded-2xl shadow-lg space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:border-primary focus:outline-none"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:border-primary focus:outline-none"
            />
          </div>
          <textarea 
            placeholder="Your Message" 
            rows="5" 
            className="w-full p-4 rounded-lg bg-gray-900 border border-gray-700 focus:border-primary focus:outline-none"
          ></textarea>
          <button 
            type="submit" 
            className="w-full py-4 rounded-lg bg-primary text-black font-bold text-lg hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-12 text-3xl">
          <a href="#" className="hover:text-primary transition-colors">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:your@email.com" className="hover:text-primary transition-colors">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

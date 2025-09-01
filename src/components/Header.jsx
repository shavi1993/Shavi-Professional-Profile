import { FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Site Title / Logo */}
        <div className="text-3xl font-bold font-heading mb-2 md:mb-0">
          Hello
        </div>
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 font-body text-lg">
            <li><a href="#resume" className="hover:text-accent">Resume</a></li>
            <li><a href="#projects" className="hover:text-accent">Projects</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact</a></li>
            <li className="relative group">
              <button className="hover:text-accent">More</button>
              {/* Example dropdown */}
              <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2 rounded">
                <li><a href="#blog" className="block px-4 py-1 hover:bg-lightGray">Blog</a></li>
                <li><a href="#about" className="block px-4 py-1 hover:bg-lightGray">About</a></li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* Contact & Social Links */}
        <div className="flex items-center space-x-4 font-body text-sm mt-2 md:mt-0">
          <div>Phone: 123-456-7890</div>
          <div>Email: info@mysite.com</div>
          <div className="flex space-x-2">
            <a href="#"><FaLinkedin className="text-xl hover:text-accent" /></a>
            <a href="#"><FaTwitter className="text-xl hover:text-accent" /></a>
          </div>
        </div>
      </div>
    </header>
  );
}

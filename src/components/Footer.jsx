import { FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-6 px-6 md:px-16 flex flex-col sm:flex-row justify-between text-gray-700 border-t">
      <div>
        <strong>Phone</strong>
        <p>+91-7009218272</p>
      </div>
      <div>
        <strong>Email</strong>
        <p>rishishavi@gmail.com</p>
      </div>
      <div>
        <strong>Follow Me</strong>
        <div className="flex space-x-4 mt-2">
          <a
            href="https://www.linkedin.com/in/shavi-rishi-a04076100/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-yellow-400 text-2xl"
          >
            <FaLinkedin />
          </a>
      
        </div>
      </div>
    </footer>
  );
}

export default Footer;

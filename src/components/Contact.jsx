import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* ================= Header ================= */}
      <Navbar />

      {/* ================= Main Contact Section ================= */}
      <main className="flex-grow py-24 px-6 md:px-20 flex flex-col items-center">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-furlencoDarkBlue mb-12 text-center">
          Get in Touch
        </h1>

        {/* Contact Details Card */}
        <div className="max-w-4xl w-full bg-white p-12 rounded-3xl shadow-xl flex flex-col md:flex-row gap-12 md:gap-16 items-start transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
          
          {/* Left Column: Info */}
          <div className="flex-1 flex flex-col gap-6">
            <p className="flex items-center gap-4 text-gray-700 text-lg">
              <span className="text-furlencoYellow text-2xl">📍</span>
              <span>India 147001</span>
            </p>
            <p className="flex items-center gap-4 text-gray-700 text-lg">
              <span className="text-furlencoYellow text-2xl">📞</span>
              <span>+91 7009218272</span>
            </p>
            <p className="flex items-center gap-4 text-gray-700 text-lg">
              <span className="text-furlencoYellow text-2xl">📧</span>
              <span>rishishavi@gmail.com</span>
            </p>
          </div>

          {/* Right Column: Social Links */}
          <div className="flex-1 flex flex-col gap-6">
            <a
              href="https://www.linkedin.com/in/shavi-rishi-a04076100/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition-colors text-center text-lg font-semibold"
            >
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/shavi1993"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded-xl shadow hover:bg-gray-900 transition-colors text-center text-lg font-semibold"
            >
              GitHub Profile
            </a>
          </div>

        </div>
      </main>

      {/* ================= Footer ================= */}
      <Footer />
    </div>
  );
};

export default ContactPage;

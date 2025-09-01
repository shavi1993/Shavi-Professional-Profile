import React, { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import html2pdf from "html2pdf.js";
import { FiDownload } from "react-icons/fi";

const ResumePage = () => {
  const resumeRef = useRef();

  const exportPDF = () => { 
    const element = resumeRef.current;
    const opt = {
      margin: 0,
      filename: "Shavi_Rishi_Resume.pdf",
      html2canvas: {
        scale: 2,
        scrollX: 0,
        scrollY: -window.scrollY,
        width: element.offsetWidth,
        height: element.scrollHeight,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      },
      jsPDF: {
        unit: "pt",
        format: [element.offsetWidth, element.scrollHeight],
        orientation: "portrait",
      },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 relative">
      <Navbar />

      {/* Floating Dark Download Icon */}
      <button
        onClick={exportPDF}
        className="fixed right-6 top-32 z-50 bg-gray-900 hover:bg-gray-700 text-white p-4 rounded-full shadow-lg transition-colors duration-300"
        title="Download Resume PDF"
      >
        <FiDownload size={24} />
      </button>

      {/* Resume Content */}
      <main className="flex-grow flex justify-center pt-24 pb-6 px-0 md:px-0">
        <div
          ref={resumeRef}
          className="w-fit bg-white shadow-lg flex flex-col md:flex-row overflow-hidden"
        >
          {/* Sidebar */}
          <aside className="w-80 bg-gray-900 text-white p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Shavi Rishi</h1>
              <p className="text-yellow-400 font-medium">Software Developer</p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-2">
                Contact
              </h2>
              <p className="text-sm">📍 India 147001</p>
              <p className="text-sm">📞 7009218272</p>
              <p className="text-sm">📧 rishishavi@gmail.com</p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-2">
                Technical Skills
              </h2>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-200">
                <li><strong>Frontend:</strong> React.js, Redux, TypeScript, Next.js, Vue Js, Tailwind CSS, HTML, CSS, JavaScript</li>
                <li><strong>Backend:</strong> Node.js, Express.js, PHP, Laravel, Yii, Shopify, SaaS</li>
                <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
                <li><strong>Version Control:</strong> Git, Bitbucket</li>
                <li><strong>CI/CD & DevOps:</strong> Jenkins, GitHub Actions</li>
                <li><strong>Cloud & Hosting:</strong> AWS</li>
                <li><strong>Project Management:</strong> Agile, Scrum, Jira</li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <section className="p-6 md:p-10 space-y-8 w-[680px]">
            {/* Professional Summary */}
            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Professional Summary
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Well-qualified Full Stack Developer with 5+ years of experience, 
                proficient in a wide range of programming technologies. Adept at backend and 
                frontend development, ensuring seamless integration and efficient performance. 
                A collaborative team player with excellent technical abilities and experience 
                working in Agile environments.
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Work Experience
              </h2>

              {/* Teqberto */}
              <div className="mb-6">
                <div className="flex justify-between">
                  <h3 className="font-bold text-gray-800">Teqberto India Pvt. Ltd</h3>
                  <span className="text-sm text-gray-500">Dec 2024 – Present</span>
                </div>
                <p className="text-sm text-gray-500 italic mb-1">Remote</p>
                <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
  <li>Experienced <strong>Full-Stack Developer</strong> specializing in <strong>React</strong> and <strong>Node.js</strong>, delivering scalable, high-performing web apps.</li>
  <li><strong>Front end:</strong> <strong>Micro-Frontends (MFE)</strong> with <strong>Webpack Module Federation</strong>, configuring <strong>host and remote applications</strong> with <strong>Hot Module Replacement (HMR)</strong>, building scalable apps using <strong>React/Next.js</strong>, state management with <strong>Zustand</strong>, and component libraries with strong DX.</li>
  <li><strong>Back end:</strong> <strong>Node.js</strong> with <strong>Express</strong> and <strong>NestJS</strong>, robust <strong>CORS</strong> policies, and well-designed <strong>REST/GraphQL APIs</strong>.</li>
  <li>Deep experience integrating <strong>third-party services</strong> (<strong>payments, authentication, maps, notifications</strong>) and platform SDKs.</li>
  <li>Applied <strong>AI features</strong> using <strong>LLM</strong> and embedding workflows for <strong>search, recommendations, and automation</strong>.</li>
  <li><strong>Data & Ops:</strong> <strong>PostgreSQL</strong> and <strong>MongoDB</strong>, <strong>CI/CD pipelines</strong>, <strong>testing</strong>, and production observability for reliable releases.</li>
  <li>Used <strong>Git</strong> for version control, participated in <strong>code reviews</strong> to ensure quality.</li>
</ul>

              </div>

              {/* Brihaspati */}
              <div className="mb-6">
                <div className="flex justify-between">
                  <h3 className="font-bold text-gray-800">The Brihaspati Infotech Pvt. Ltd</h3>
                  <span className="text-sm text-gray-500">Jul 2021 – Jun 2023</span>
                </div>
                <p className="text-sm text-gray-500 italic mb-1">India</p>
                <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
                <li>Delivered end-to-end solutions across domains including <strong>FinTech, Crypto-based platforms, Social Chat applications, Banking, E-commerce, and Food services</strong>.</li>
  <li>Developed and customized professional <strong>Shopify applications</strong> using Liquid, React, and API integrations to deliver scalable e-commerce solutions.</li>
  <li>Built scalable backends using <strong>Node.js/Express</strong> and <strong>Laravel</strong>, implementing RESTful APIs, third-party integrations (payments, authentication, maps), and <strong>Redis/Firebase</strong> for caching and real-time features.</li>
  <li>Developed responsive frontends with <strong>React.js</strong> and <strong>Redux</strong> for single-page applications, ensuring seamless interaction with backend services.</li>
  <li>Designed and maintained <strong>reusable modules and libraries</strong>, improving scalability, maintainability, and team productivity.</li>
  <li>Independently managed projects throughout the full lifecycle—from requirements and architecture design to deployment and post-launch support.</li>
  <li>Collaborated with cross-functional teams, led code reviews, and enforced <strong>CI/CD pipelines (Jenkins, Git workflows)</strong> to ensure code quality and reliable releases.</li>
</ul>

              </div>

              {/* Toxsl */}
              <div>
                <div className="flex justify-between">
                  <h3 className="font-bold text-gray-800">Toxsl Technologies Pvt. Ltd</h3>
                  <span className="text-sm text-gray-500">Nov 2018 – Jul 2021</span>
                </div>
                <p className="text-sm text-gray-500 italic mb-1">India</p>
                <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
                <li>Engineered dynamic web applications using <strong>Laravel</strong> and <strong>Yii</strong>, implementing secure authentication systems, modular APIs, and scalable business logic.</li>
  <li>Built and customized <strong>Shopify applications</strong> with Liquid templates, React components, and API integrations to deliver enterprise-grade e-commerce solutions.</li>
  <li>Developed and maintained <strong>WordPress plugins and themes</strong>, optimizing performance and extending CMS functionality for custom business use cases.</li>
  <li>Delivered advanced <strong>Angular</strong> and <strong>CakePHP</strong> applications, focusing on modular architecture, performance optimization, and reusable components.</li>
  <li>Applied <strong>testing tools</strong> such as Jest, Cypress, and PHPUnit to ensure reliability, automate regression tests, and maintain high code quality.</li>
  <li>Collaborated on full project lifecycles, integrating <strong>CI/CD pipelines</strong>, Git workflows, and Agile processes for efficient, production-ready deliveries.</li>
</ul>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Projects
              </h2>

              <div className="mb-4">
  <h3 className="font-bold text-gray-800">
    Formee Express
  </h3>
  <p className="text-gray-600 text-sm">
    <strong>Tech:</strong> Node.js, React.js, PostgreSQL
  </p>
  <p className="text-gray-700 text-sm">
    Lead developer for a <a href="https://www.formeeexpress.com" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
      real-time chatbot service
    </a> for live student support. Designed conversation flows/flowcharts, managed admin panel, built database schema & REST APIs, delivering a scalable 24/7 live-support platform.
  </p>
</div>


<div className="mb-4">
  <h3 className="font-bold text-gray-800">Fixility</h3>
  <p className="text-gray-600 text-sm"><strong>Tech:</strong> PHP, Yii Framework, MySQL</p>
  <p className="text-gray-700 text-sm">
    Built a home services booking platform providing on-demand services such as AC repair, TV installation, and electrical equipment maintenance. Designed and implemented the admin panel, API integrations, and database schema, ensuring seamless service provider management, booking flow, and customer experience.
  </p>
</div>


<div className="mb-4">
  <h3 className="font-bold text-gray-800">Armenia Payment</h3>
  <p className="text-gray-600 text-sm"><strong>Tech:</strong> Shopify, Node.js, PostgreSQL</p>
  <p className="text-gray-700 text-sm">
    Developed a custom Shopify payment application to enable seamless payment transactions on Shopify websites, integrated with Armenia Bank’s payment gateway. As the Lead Developer, I was responsible for designing the overall architecture, creating detailed flowcharts, and implementing REST APIs in Node.js with secure database connectivity in PostgreSQL. Successfully integrated and managed Armenia Bank’s payment API, ensuring reliable and secure payment processing within the Shopify ecosystem.
 
  </p>
</div>

<div className="mb-4">
  <h3 className="font-bold text-gray-800">Crypt Eye</h3>
  <p className="text-gray-600 text-sm">
    <strong>Tech:</strong> React, Node.js, GraphQL, MongoDB
  </p>
  <p className="text-gray-700 text-sm">
    Built a personal crypto journaling application with real-time PnL tracking and interactive charts. Implemented a full-stack solution using Node.js and GraphQL for efficient data fetching, React for a dynamic frontend, and MongoDB for secure data storage. The app allows users to log cryptocurrency transactions, monitor portfolio performance, and visualize market trends in real-time.
  </p>
</div>

            </div>

            {/* Education */}
            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Education
              </h2>
              <p className="text-sm text-gray-700">
                <strong>Punjabi University</strong> – MSc Computer Engineering Technology (2017-2020)
              </p>
              <p className="text-sm text-gray-700">
                <strong>Punjab Technical University</strong> – BSc Computer Science (2011-2015)
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResumePage;

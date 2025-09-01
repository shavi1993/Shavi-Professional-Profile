import React from "react";
import Navbar from "./Navbar"; // Your Navbar component
import Footer from "./Footer"; // Your Footer component

const projectsData = [
  {
    name: "Formee Express",
    description: `Lead developer for a real-time chatbot service for live student support. 
Designed conversation flows/flowcharts, managed admin panel, built database schema & REST APIs, delivering a scalable 24/7 live-support platform.
Website: https://www.formeeexpress.com`,
    technologies: ["Node.js", "React.js", "PostgreSQL"]
  },
  {
    name: "Fixility",
    description: `Built a home services booking platform providing on-demand services such as AC repair, TV installation, and electrical equipment maintenance. 
Designed and implemented the admin panel, API integrations, and database schema, ensuring seamless service provider management, booking flow, and customer experience.`,
    technologies: ["PHP", "Yii Framework", "MySQL"]
  },
  {
    name: "Armenia Payment",
    description: `Developed a custom Shopify payment application to enable seamless payment transactions on Shopify websites, integrated with Armenia Bank’s payment gateway. 
Responsible for designing the overall architecture, creating detailed flowcharts, and implementing REST APIs in Node.js with secure PostgreSQL connectivity. 
Successfully integrated and managed Armenia Bank’s payment API for reliable and secure transactions.`,
    technologies: ["Shopify", "Node.js", "PostgreSQL"]
  },
  {
    name: "Crypt Eye",
    description: `Built a personal crypto journaling application with real-time PnL tracking and interactive charts. 
Implemented a full-stack solution using Node.js and GraphQL for efficient data fetching, React for a dynamic frontend, and MongoDB for secure data storage. 
Users can log cryptocurrency transactions, monitor portfolio performance, and visualize market trends in real-time.`,
    technologies: ["React", "Node.js", "GraphQL", "MongoDB"]
  },
  {
    name: "Onvo Payment",
    description: `Built a robust Laravel-based payment system for e-commerce platforms, integrated with Onvo Payment Gateway. 
  Led backend development, designed database schema in MySQL, created REST APIs, and implemented secure transaction flows. 
  Ensured reliable and scalable payment processing while maintaining high security and seamless user experience.`,
    technologies: ["Laravel", "PHP", "MySQL"]
  },
  {
    name: "ShareValu",
    description: `Developed a Laravel-based peer-to-peer rental platform for high-value items such as tools, equipment, and vehicles. 
    Led backend development, designed database schema in MySQL, created secure REST APIs for frontend users, and integrated payment processing with Stripe. 
    Implemented authentication, real-time communication with Pusher, and ensured a scalable, seamless, and user-friendly rental experience.`,
    technologies: ["Laravel", "PHP", "MySQL", "Stripe", "Pusher"]
  }
  
  
];

const ProjectsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex justify-center py-24 px-4 md:px-16">
        <div className="w-full max-w-6xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
            Projects
          </h1>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-6 text-left font-semibold border-b border-gray-300">
                    Project Name
                  </th>
                  <th className="py-3 px-6 text-left font-semibold border-b border-gray-300">
                    Description
                  </th>
                  <th className="py-3 px-6 text-left font-semibold border-b border-gray-300">
                    Technologies
                  </th>
                </tr>
              </thead>
              <tbody>
                {projectsData.map((project, index) => (
                  <tr key={index} className="hover:bg-gray-50 align-top">
                    <td className="py-3 px-6 border-b border-gray-300 align-top">
                      {project.name}
                    </td>
                    <td className="py-3 px-6 border-b border-gray-300 whitespace-pre-line text-gray-500">
                      {project.description}
                    </td>
                    <td className="py-3 px-6 border-b border-gray-300 align-top">
                      {project.technologies.join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;

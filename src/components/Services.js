import React from 'react';
import { 
  FaLaptopCode, 
  FaCog, 
  FaChalkboardTeacher, 
  FaBullhorn, 
  FaDesktop, 
  FaChartLine, 
  FaCamera, 
  FaLock, 
  FaBell, 
  FaMapMarkerAlt, 
  FaDoorOpen, 
  FaFire 
} from 'react-icons/fa';

const Service = ({ id }) => {
  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-blue-500" />,
      title: "Web Design",
      description: "Creating visually appealing and user-friendly websites with a focus on design and user experience.",
    },
    {
      icon: <FaDesktop className="text-4xl text-green-500" />,
      title: "Development",
      description: "Building custom web applications using the latest technologies to meet your unique business needs.",
    },
    {
      icon: <FaCog className="text-4xl text-orange-500" />,
      title: "System Development",
      description: "Designing and developing scalable systems to optimize business operations and improve efficiency.",
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-yellow-500" />,
      title: "Training for Beginners",
      description: "Offering beginner-friendly training to help you get started in web development and programming.",
    },
    {
      icon: <FaBullhorn className="text-4xl text-purple-500" />,
      title: "Social Media Marketing",
      description: "Helping you boost your online presence with tailored social media marketing strategies to engage your audience.",
    },
    {
      icon: <FaChartLine className="text-4xl text-teal-500" />,
      title: "Forex Training for Beginners",
      description: "Providing comprehensive training to help beginners understand and navigate the forex trading market.",
    },
    {
      icon: <FaCamera className="text-4xl text-red-500" />,
      title: "CCTV Camera Installations",
      description: "Installing high-quality CCTV cameras to ensure the security and surveillance of your premises.",
    },
    {
      icon: <FaLock className="text-4xl text-indigo-500" />,
      title: "Electric Fence Installations",
      description: "Providing durable and efficient electric fencing solutions to secure your property.",
    },
    {
      icon: <FaBell className="text-4xl text-pink-500" />,
      title: "Intruder and Panic Alarm",
      description: "Setting up advanced intruder and panic alarm systems to enhance safety and quick response.",
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-gray-500" />,
      title: "GPRS Tracker",
      description: "Offering GPRS tracking solutions to monitor and safeguard your assets effectively.",
    },
    {
      icon: <FaDoorOpen className="text-4xl text-cyan-500" />,
      title: "Motor Gates",
      description: "Installing automated motor gates for enhanced convenience and security.",
    },
    {
      icon: <FaFire className="text-4xl text-orange-600" />,
      title: "Fire Alarm Installation",
      description: "Providing reliable fire alarm systems to ensure timely alerts and safety from fire hazards.",
    }
  ];

  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <span className="block text-blue-500 text-6xl mb-2 animate-bounce">★</span>
          <h2 className="text-5xl font-extrabold text-gray-800 relative inline-block">
            What I Offer
          </h2>
          <div className="h-1 w-16 bg-blue-500 mx-auto mt-3"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and high-quality websites tailored to your needs.",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating mobile applications with a focus on performance and user experience.",
  },
  {
    title: "Digital Marketing",
    description:
      "Strategies to boost your online presence and grow your business.",
  },
  {
    title: "SEO Optimization",
    description:
      "Improving your website’s visibility on search engines to attract more visitors.",
  },
  {
    title: "Web Development",
    description:
      "Building responsive and high-quality websites tailored to your needs.",
  },
  {
    title: "Web Development",
    description:
      "Building responsive and high-quality websites tailored to your needs.",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600">Our Services</h1>
        <p className="mt-2 text-lg text-black">
          Discover the range of services we offer to help you achieve your
          goals.
        </p>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {service.title}
              </h2>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

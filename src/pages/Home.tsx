import Header from "../Components/Header"; // adjust the path if needed

const features = [
  {
    title: "Wide Selection",
    description:
      "Choose from a variety of new and used cars from trusted brands.",
    icon: (
      <svg
        className="w-8 h-8 text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13l2-2m0 0l7-7 7 7M13 5v6h6"
        />
      </svg>
    ),
  },
  {
    title: "Instant Financing",
    description: "Get approved for car loans in minutes with flexible plans.",
    icon: (
      <svg
        className="w-8 h-8 text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-3.3137 0-6 2.6863-6 6s2.6863 6 6 6 6-2.6863 6-6-2.6863-6-6-6z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14v-4m0 0H8m4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "Top-notch Support",
    description:
      "Need help? Our car experts are available 24/7 to assist you.",
    icon: (
      <svg
        className="w-8 h-8 text-teal-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Linda Akpan",
    role: "Business Owner",
    quote:
      "I found my dream SUV at an unbeatable price. The process was smooth and fast!",
  },
  {
    name: "Emeka Obi",
    role: "Freelancer",
    quote:
      "Excellent customer service and a wide range of vehicles to choose from. Highly recommend!",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />

      {/* Hero Section */}
      <section className="max-w-5xl text-center mx-auto px-4 mt-28 mb-20">
        <h1 className="text-5xl font-bold text-teal-400 mb-4">
          Find Your Perfect Car
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Explore our curated collection of cars, compare prices, and get
          behind the wheel faster with instant financing options.
        </p>
        <button className="px-6 py-3 bg-teal-500 rounded-lg hover:bg-teal-600 transition font-semibold">
          Browse Cars
        </button>
      </section>

      {/* Car Gallery */}
<section className="max-w-6xl mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold text-white text-center mb-12">
    Featured Cars
  </h2>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        name: "2023 Toyota Camry",
        price: "₦38,250,000",
        image:
          "https://www.koonstoyotatysonscorner.com/blogs/4498/wp-content/uploads/2022/11/2023-Toyota-Camry.webp",
      },
      {
        name: "2022 BMW X5",
        price: "₦87,000,000",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/2024-bmw-x5-m60i-102-6602d48787fb7.jpg",
      },
      {
        name: "2024 Tesla Model 3",
        price: "₦59,985,000",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/2024-tesla-model-3-long-range-rwd-120-66feb66119c63.jpg?crop",
      },
    ].map((car, idx) => (
      <div
        key={idx}
        className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
      >
        <div className="relative overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-slate-900 bg-opacity-30 opacity-0 group-hover:opacity-50 transition duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-teal-400 mb-2 group-hover:scale-105 transition-transform duration-200">
            {car.name}
          </h3>
          <p className="text-gray-300 group-hover:text-white transition-colors duration-200">
            {car.price}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-teal-400 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">
          What Our Customers Say
        </h2>
        <div className="space-y-10">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-lg shadow">
              <p className="italic text-gray-300 mb-4">"{t.quote}"</p>
              <h4 className="font-semibold text-teal-400">{t.name}</h4>
              <p className="text-sm text-gray-400">{t.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

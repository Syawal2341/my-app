export default function About() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About Mussyawal Baihaki
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mb-6">
              Mussyawal Baihaki is a premier destination for outdoor enthusiasts, 
              offering breathtaking views and a range of activities from hiking 
              to rock climbing. Our mission is to provide a safe and enjoyable 
              experience for all adventurers.
          </p>
          <div className="flex flex-wrap justify-center">
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
                  Learn More
              </button>
              <button className="ml-4 bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200">
                  Contact Us
              </button>
          </div>
      </div>
  );
}
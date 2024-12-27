import Link from "next/link";

const Contact = () => (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="text-center p-8 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <h1 className="text-4xl font-extrabold mb-4">
          Get in Touch with <span className="text-yellow-300">EduSkill</span>
        </h1>
        <p className="text-lg">
          Have questions or ideas? We’re here to help you grow and connect.
        </p>
      </div>
  
      {/* Contact Form Section */}
      <div className="p-6 md:p-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700 dark:text-gray-300">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Fill out the form below, or reach us at{" "}
          <Link href="mailto:support@eduskill.com" className="text-blue-500 hover:underline">
            hafizabdulahadkhanafridi@gmail.com
          </Link>.
        </p>
        <form className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            rows={5}
          ></textarea>
          <button className="w-full px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all">
            Submit
          </button>
        </form>
      </div>
  
      {/* Additional Information Section */}
      <div className="p-6 bg-gray-200 dark:bg-gray-800 text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-700 dark:text-gray-300">
          Other Ways to Connect
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          You can also reach us by phone at{" "}
          <span className="font-semibold text-blue-500">123-456-7890</span>.
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Follow us on social media for updates and more!
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <Link href="#" className="text-blue-600 hover:text-blue-400 text-2xl">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link href="#" className="text-blue-500 hover:text-blue-300 text-2xl">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="#" className="text-pink-600 hover:text-pink-400 text-2xl">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link href="#" className="text-blue-800 hover:text-blue-600 text-2xl">
            <i className="fab fa-linkedin"></i>
          </Link>
        </div>
      </div>
  
    </div>
  );
  
  export default Contact;
  
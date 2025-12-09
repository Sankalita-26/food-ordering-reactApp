const Contact = () => {
  return (
    <div className="w-full max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8 sm:p-10 mt-10 text-center space-y-6">
      <h1 className="text-4xl font-extrabold text-gray-800">
        📞 Contact Us
      </h1>

      <h3 className="text-xl text-gray-600 font-medium">
        Number: <span className="font-semibold text-blue-600">8582929093</span>
      </h3>

      <div className="space-y-4 text-lg text-gray-700">
        <p>
          📧 Email:{" "}
          <span className="font-semibold text-blue-600">
            monlearning24@gmail.com
          </span>
        </p>

        <p>
          👨‍💻 GitHub:{" "}
          <a
            href="https://github.com/settings/profile"
            target="_blank"
            className="font-semibold text-blue-600 hover:underline"
          >
            Visit Profile
          </a>
        </p>

        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sankalita-nandan-0409861a1"
            target="_blank"
            className="font-semibold text-blue-600 hover:underline"
          >
            View Profile
          </a>
        </p>
      </div>

      <button
        onClick={() =>
          (window.location.href = "https://wa.me/8582929093?text=Hi%2C+I+need+support")
        }
        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition shadow-md flex justify-center items-center gap-2 mx-auto"
      >
        💬 Chat on WhatsApp
      </button>

      <p className="text-gray-500 text-sm pt-4">
        © FoodieHut — All Rights Reserved
      </p>
    </div>
  );
};

export default Contact;

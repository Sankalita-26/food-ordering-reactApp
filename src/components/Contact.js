const Contact = () => {
  return (
    <div className="max-w-xl mx-auto bg-sky-100 shadow-lg rounded-2xl p-10 mt-12 space-y-8 text-center">

      <h1 className="text-4xl font-extrabold text-gray-800">
        📞 Contact Us
      </h1>

      <h3 className="text-2xl font-semibold text-gray-700">
        Get in touch with us anytime
      </h3>

      <div className="space-y-4 text-lg font-medium text-gray-600">

        <p>
          ✉ <span className="text-blue-600 font-semibold">monlearning24@gmail.com</span>
        </p>

        <p>
          🐙 <a
            href="https://github.com/settings/profile"
            target="_blank"
            className="text-gray-800 hover:text-black underline transition"
          >
            GitHub Profile
          </a>
        </p>

        <p>
          💼 <a
            href="https://www.linkedin.com/in/sankalita-nandan-0409861a1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZzoMBteqQPqOyLIaCgwlxw%3D%3D"
            target="_blank"
            className="text-blue-700 hover:text-blue-900 underline transition"
          >
            LinkedIn Profile
          </a>
        </p>

      </div>

      {/* WhatsApp Support */}
      <div className="mt-6">
        <a
          href="https://wa.me/918582929093"
          target="_blank"
          className="flex items-center justify-center gap-3 bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition text-lg"
        >
          💬 Support via WhatsApp
          <span className="text-white font-bold">8582929093</span>
        </a>
      </div>

      {/* Footer note */}
      <p className="text-gray-500 text-sm pt-4">
        © FoodieHut — All rights reserved
      </p>
    </div>
  );
};

export default Contact;

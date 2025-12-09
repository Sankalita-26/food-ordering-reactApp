// import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl rounded-2xl p-12 mt-14 text-center space-y-8">

      <h1 className="text-5xl font-extrabold text-gray-800 tracking-wide drop-shadow-md animate-pulse">
        🚀 Food Delivery App
      </h1>

      <p className="text-xl text-gray-600 font-medium">
        A modern web application built using
        <span className="text-blue-600 font-bold"> React</span> and
        <span className="text-purple-600 font-bold"> Tailwind CSS</span>.
      </p>

      <hr className="border-gray-300" />

      <h3 className="text-3xl font-semibold text-gray-700">
        App Name:
        <span className="text-indigo-600 font-bold ml-2">FoodieHut 🍽️</span>
      </h3>

      <p className="text-lg text-gray-500 max-w-2xl mx-auto">
        FoodieHut allows users to explore top-rated restaurants, browse menus,
        filter by ratings, and order their favourite food online.
      </p>

      {/* Developer Section */}
      <div className="bg-white shadow-md rounded-xl p-6 mt-8 space-y-4">
        <h2 className="text-2xl font-bold text-gray-700">
          👨‍💻 Meet the Developer
        </h2>

        <p className="text-gray-500 text-lg">
          Designed & coded with passion
        </p>

        <div className="flex justify-center">
          <UserClass
            name={"Sankalita Nandan"}
            location={"kalidas singha lane"}
          />
        </div>
      </div>

    </div>
  );
};

export default About;

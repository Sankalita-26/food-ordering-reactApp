// import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl rounded-2xl p-8 sm:p-12 mt-10 text-center space-y-8">

      <h1 className="text-5xl font-extrabold text-gray-800 tracking-wide drop-shadow-sm">
        🚀 Food Delivery App
      </h1>

      <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
        A smart & modern food ordering platform built using{" "}
        <span className="text-blue-600 font-semibold">React</span> and{" "}
        <span className="text-purple-600 font-semibold">Tailwind CSS</span>.
      </p>

      <h3 className="text-3xl font-semibold text-gray-700">
        App Name:{" "}
        <span className="text-indigo-600 font-bold">FoodieHut 🍽️</span>
      </h3>

      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        FoodieHut allows users to explore restaurants, browse menus, check ratings,
        and enjoy freshly cooked meals delivered to their doorstep.
      </p>

      {/* Developer Section */}
      <div className="bg-white shadow-md rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-2xl font-bold text-gray-700">👨‍💻 Meet the Developer</h2>

        <p className="text-gray-500 text-lg">
          Designed & coded with passion
        </p>

        <div className="flex justify-center">
          <UserClass
            name={"Sankalita Nandan"}
            location={"kalidas singha lane"}
          />
        </div>

        <p className="text-gray-500 text-sm pt-2">
          © FoodieHut — All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default About;

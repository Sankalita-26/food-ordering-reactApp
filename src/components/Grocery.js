const Grocery = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-50 to-emerald-100 p-8 text-center space-y-8">

      <h1 className="text-5xl font-extrabold animate-pulse text-emerald-700 drop-shadow-md">
        🛒 Grocery Store
      </h1>

      <p className="text-xl text-gray-600 font-medium max-w-xl">
        Fresh groceries delivered to your doorstep — fast, clean & affordable!
      </p>

      {/* Coming soon or under construction message */}
      <p className="bg-white shadow-md px-6 py-3 rounded-lg text-lg font-semibold text-gray-700 border border-green-200">
        ⚠ This feature is under development. Stay tuned!
      </p>

      {/* CTA button */}
      <button className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition shadow-md">
        🔔 Notify Me When Live
      </button>
    </div>
  );
};
export default Grocery;

const Grocery = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-50 to-emerald-100 p-6 sm:p-10 text-center space-y-8">

      <h1 className="text-5xl font-extrabold animate-bounce text-emerald-700 drop-shadow-md">
        🛒 Grocery Store
      </h1>

      <p className="text-xl text-gray-600 font-medium max-w-xl">
        Fresh groceries delivered to your doorstep — fast, clean & affordable!
      </p>

      <p className="text-lg font-semibold px-6 py-3 rounded-lg bg-white shadow-md border border-emerald-200 text-gray-700">
        ⚠ Grocery section is under development. Stay tuned for exciting updates!
      </p>

      {/* Notify Button */}
      <button className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition shadow-md">
        🔔 Notify Me When Available
      </button>
    </div>
  );
};

export default Grocery;

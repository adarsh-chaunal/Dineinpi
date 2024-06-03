import MainBackground from "@/assets/images/layout/MainBackground.png";

const MainTitle = () => {
  return (
    <div>
      <div className="relative text-center overflow-hidden shadow-2xl">
        <img
          src={MainBackground}
          className="h-[600px] md:w-full max-h-[600px] object-cover blur-sm"
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-opacity-50 bg-white p-6 text-center">
          <h1 className="drop-shadow-xl text-5xl font-bold text-lime-800 m-6">
            Welcome to DineInPi
          </h1>

          <p className="text-xl text-gray-800 mt-5 mb-10 mx-10 sm:mx-20 md:mx-40 lg:mx-60 xl:mx-80 2xl:mx-96">
            Your one-stop destination for delicious food delivered straight to
            your door.<br />Explore our menu and discover your next favorite meal!
          </p>

          <a
            href="/"
            className="text-white bg-lime-500 hover:bg-lime-600 font-semibold py-2 px-4 rounded-full transition duration-500"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;

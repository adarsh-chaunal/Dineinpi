import googlePlay from "@/assets/images/landingPage/GooglePlay.png";
import appStore from "@/assets/images/landingPage/AppStore.png";
import mobileApp from "@/assets/images/landingPage/MobileApp.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 relative">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 ">
        <h1 className="text-3xl font-bold tracking-tight text-lime-600">
          What Are You Craving Today?
        </h1>
        <span className="text-xl">Discover Your Next Meal</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5 text-center">
        <div className="flex flex-col gap-4 items-center justify-center">
            <span className="font-bold text-3xl tracking-tighter">
                Order Delicious Food Anytime Anywhere
            </span>
            <span >
                Introducing DineInPi Mobile App
            </span>
            <img className="w-[200px]" src={googlePlay} />
            <img className="w-[200px]" src={appStore} />
        </div>
        <img className="w-full" src={mobileApp} />
      </div>
    </div>
  );
};

export default HomePage;

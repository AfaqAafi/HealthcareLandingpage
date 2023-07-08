import Button from "./Button";

const Home = () => {
  return (
    <main className="max-w-7xl text-center lg:text-left px-5 w-full mx-auto mt-14 flex flex-col lg:flex-row items-center">
      <div className="basis-1/2">
        <h2 className="text-3xl font-light pb-2">Get Quick</h2>
        <h2 className="text-3xl font-bold pb-4">Medical Services</h2>
        <p className="text-base max-w-3xl leading-7 mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
          saepe nam velit, inventore, autem dolor magni nobis dolorum sapiente
          nemo delectus et earum accusantium facilis sunt adipisci debitis minus
          beatae.
        </p>
        <Button text="Get Services" />
      </div>
      <div className="basis-1/2 relative">
        <div className="relative">
          <img
            className="w-full max-w-[475px] mx-auto object-cover "
            src="/header-bg.png"
            alt="myImage"
          />
          <div
            className="bg-[#209677] w-[450px] h-[450px] absolute top-1/2 left-1/2 transform 
          -translate-x-1/2 -translate-y-1/2 rounded-[50%] -z-10"
          ></div>

          {/* // TODO:  Left span Active Clients  */}
          <div className="bg-white shadow-2xl absolute top-1/3 left-0 rounded py-3 px-6 flex gap-2 items-center">
            <span className="bg-[#bef3e5] w-8 h-8 rounded-[50%] flex items-center justify-center">
              <i className="text-[#209677] text-2xl ri-user-3-line"></i>
            </span>
            <div>
              <h4 className="text-xl">1520+</h4>
              <p className="text-base text-gray-500 font-light">
                Active Clients
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl absolute bottom-1/4 py-5 px-6 right-0">
            <ul>
              <li className="flex items-center font-light">
                <span className="text-[#209677]">
                  <i className="text-2xl ri-check-line"></i>
                </span>
                Get 20% off on every 1st month
              </li>
              <li className="font-light flex items-center">
                <span className="text-[#209677]">
                  <i className="text-2xl ri-check-line"></i>
                </span>
                Expert Doctors
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

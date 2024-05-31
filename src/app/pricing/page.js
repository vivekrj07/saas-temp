import Image from "next/image";
export default function FAQPage() {
  return (
    <>
      <section className="wrapper font-libra">
        <div>
          <h1 className="font-bold text-5xl mt-[136px] text-center mb-3">
            Our Pricing
          </h1>
          <p className="text-center mb-12">
            Choose Your Plan and Start Growing Your Business Today
          </p>
          <div className="flex space-x-5">
            <div className="transition ease-in-out duration-300 hover:border-b-2  hover:border-r-2 hover:shadow-button  p-4 border-2 ">
              <h2 className="font-bold mt-[36px] text-4xl mb-[21px]">FREE</h2>
              <h3 className="font-bold mb-[17px]">Enterprise Plan</h3>
              <ul className="w-[352px]">
                <li className="mb-3 flex">
                  <img className="mr-[17px]" src="/btick.png" />
                  Access to all basic features
                </li>
                <li className="mb-3 flex">
                  <img className="mr-[17px]" src="/btick.png" />
                  5GB storage space
                </li>
                <li className="mb-3 flex">
                  <img className="mr-[17px]" src="/btick.png" />
                  Limited number of users or team members
                </li>
                <li className="mb-3 flex">
                  <img className="mr-[17px]" src="/btick.png" />
                  Basic reporting and analytics
                </li>
                <li className="mb-3 flex">
                  <img className="mr-[17px]" src="/btick.png" />
                  Basic customer support
                </li>
              </ul>
              <button className="rounded-none bg-white text-black py-2 px-6 border-black mt-[66px] border-2  justify-items-center">
                Contact Us
              </button>
            </div>
            <div className="transition ease-in-out duration-300 hover:border-b-2 text-white  hover:border-r-2 hover:shadow-button bg-black  p-4 border-2">
              <div className="flex justify-between mt-[36px] mb-[21px] ]">
                <h2 className="font-bold mr-[121px] text-4xl">
                  <span>$8</span>/mth
                </h2>
                <p className="text-[16px] self-center">RECOMMENDED</p>
              </div>

              <h3 className="mb-[17px]">Starter Plan</h3>
              <ul className="w-[352px]">
                <li className="mb-3 flex">
                  <img className="mr-[17px]" src="/wtick.png" />
                  More advanced features
                </li>
                <li className="mb-3 flex">
                  <img className="mr-[17px]" src="/wtick.png" />
                  50GB storage space
                </li>
                <li className="mb-3 flex">
                  <img className="mr-[17px]" src="/wtick.png" />
                  50 users or team members
                </li>
                <li className="mb-3 flex">
                  <img className="mr-[17px]" src="/wtick.png" />
                  Advanced reporting and analytics
                </li>
                <li className="mb-3 flex">
                  <img className="mr-[17px]" src="/wtick.png" />
                  Priority customer support
                </li>
              </ul>
              <button className="rounded-none bg-black text-white py-2 px-6 border-white mt-[66px] border-2  justify-items-center">
                Get Started
              </button>
            </div>
            <div className="transition ease-in-out duration-300 hover:border-b-2 hover:border-r-2 hover:shadow-button  p-4 border-2">
              <img className=" mt-[36px]  mb-[21px]" src="\mssg.png" />
              <h3 className="font-bold mb-[17px]">Enterprise Plan</h3>
              <ul className="w-[352px]">
                <li className="mb-3 flex">
                  <img className="mr-[17px]" src="/btick.png" />
                  All features
                </li>
                <li className="mb-3 flex">
                  <img className="mr-[17px]" src="/btick.png" />
                  Unlimited storage space
                </li>
                <li className="mb-3 flex">
                  <img className="mr-[17px]" src="/btick.png" />
                  Unlimited users or team members
                </li>
                <li className="mb-3 flex w-[307px]">
                  <img className="mr-[17px] h-4  " src="/btick.png" />
                  Advanced reporting and analytics, including custom reports
                </li>
                <li className="mb-3 flex">
                  <img className="mr-[17px]" src="/btick.png" />
                  24/7 dedicated customer support
                </li>
              </ul>
              <button className="rounded-none bg-white text-black py-2 px-6  mb-[38px] border-black mt-[66px] border-2  justify-items-center">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import CountUp from 'react-countup';

export default function Home() {
  return (
    <>
    <main className='font-manrope'>
      <section className="wrapper">
        <h1 className="text-5xl mt-16 max-w-[648px] mb-12">
          Empowering creators to build their own community and sell their
          products directly
        </h1>
        <div className="space-x-8">
        <button className="relative rounded-none bg-black text-white py-3 px-6 transition ease-in-out duration-300 border border-transparent hover:border-white hover:shadow-lg before:absolute before:inset-0 before:border-2 before:border-transparent before:transition before:duration-300 before:ease-in-out hover:before:border-b-white hover:before:border-r-white">
      Sign Up
    </button>
    <button className="relative rounded-none bg-white border border-slate-950 text-black py-3 px-6 transition ease-in-out duration-300 before:absolute before:inset-0 before:border-2 before:border-transparent before:transition before:duration-300 before:ease-in-out hover:before:border-b-black hover:before:border-r-black">
      Pricing
    </button>
        </div>
        <img width={678} className="ml-auto" src="/hero-img.svg" />
      </section>
      <section className="wrapper divide-black  text-center grid grid-cols-3 divide-x border-t border-b border-black">
        <div className="py-[68px]">
          <h1 className="text-[64px]"><CountUp end={600} />+</h1>
          <p className="text-xl">Solopreneurs Assembled</p>
        </div>
        <div className="py-[68px]">
          <h1 className="text-[64px]"><CountUp end={2000} /></h1>
          <p className="text-xl">Products Sold</p>
        </div>
        <div className="py-[68px]">
          <h1 className="text-[64px]"><CountUp end={10000000} /></h1>
          <p className="text-xl">Revenue Generated</p>
        </div>
      </section>
      <section className=" wrapper  ">
        <div className=" flex mt-[203px]  ">
          <div className="self-start">
            <h4>VERSATILITY</h4>
            <h2 className="text-[32px] mb-[14px] mr-[231px] font-bold ">
              Sell Anything Literally
            </h2>
            <p className=" w-[569px] text-base">
              PEEPSLY offers a comprehensive suite of automation tools for
              product sales. Streamline your process by creating an account with
              us.
            </p>
          </div>
          <img className="ml-auto" src="/g28.png"  />
        </div>
        <img className=" w-[114px]  float-left" src="/bg-acc.svg" />
      </section>
      <section className="wrapper  ">
        <div className="flex mt-[255px]">
          <img className="w-[533px]" src="/feat2.svg" />
          <div className="ml-[115px]  self-center">
            <h4>SERVING YOU BETTER</h4>
            <h2 className="text-[32px] mb-[14px]  font-bold ">
              We Help You Lead{" "}
            </h2>
            <p className=" w-[569px] text-base">
              Relying on one income stream can be risky in today's world. The
              gig economy and the internet provide opportunities to create
              multiple streams of income. Building an online presence and
              sharing your talents and skills can help you achieve financial
              stability and success.
            </p>
          </div>
        </div>
        <img className=" w-[151px] ml-auto mr-[101px]" src="/vec.png"  />
      </section>
      <section className="wrapper  ">
        <div className="flex mt-[255px]">
          <div className="mr-[95px]  self-center">
            <h4>DRIVE AT ALL COST</h4>
            <h2 className="text-[32px] mb-[14px]  font-bold ">
              Focus At Your Best
            </h2>
            <p className=" w-[569px] text-base">
              Relying on one income stream can be risky in today's world. The
              gig economy and the internet provide opportunities to create
              multiple streams of income. Building an online presence and
              sharing your talents and skills can help you achieve financial
              stability and success.
            </p>
          </div>
          <img className="w-[431px]" src="/feat3.svg" />
        </div>
        <img className="h-[84px]" src="/bg-acc.png" />
      </section>

      <section className="wrapper">
        <div className="flex  mt-[152px]">
          <div className="mr-[71px]">
            <h4 className="text-[14px] uppercase">Founder’s note</h4>
            <h2 className="font-bold text-[32px] w-[501px]">
              Empower Your Creativity. Sell Directly.
            </h2>
          </div>
          <p className="w-[552px]">
            At Peepsly, our mission is to empower creators to take control of
            their income and build their own community. We understand the
            challenges that come with being a creator - whether you're a
            musician, artist, designer, or entrepreneur. With our platform,
            you'll be able to unleash your creativity and take control of your
            income, so you can focus on what you love doing. Join us today and
            experience the freedom of being a creator!
          </p>
        </div>
      </section>
      </main>
    </>
  );
}

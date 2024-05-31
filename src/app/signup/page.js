"use client";

import Image from "next/image";
import { useState } from "react";
export default function FAQPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function formHandler(e) {
    e.preventDefault();
    const formData = {
      name,
      email,
    };
    console.log(formData);
  }

  return (
    <>
      <section className="wrapper">
        <div className="flex justify-between mt-[100px] mb-[167px]">
          <img src="/g27.png" />
          <div className="  mt-[50px]  max-w-[519px]">
            <h2 className="text-[32px] font-bold leading-[120%] tracking-[-1.28px] font-manrope">
              Get In Touch
            </h2>
            <p className="leading-[200%] mb-4">
              Don't hesitate to contact us, we'll respond within 24 hours.
            </p>
            <form onSubmit={formHandler}>
              <label className=" leading-[200%] mb-2" for="username ">
                Name*
              </label>
              <input
                className="appearance-none border border-black  mb-4 w-full py-2 px-3  leading-tight "
                id="username"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label className="leading-[200%] mb-2" for="username">
                Email*
              </label>
              <input
                className="appearance-none border border-black  mb-4 w-full py-2 px-3  leading-tight t "
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="leading-[200%] mb-2" for="username">
                About Detail
              </label>
              <input
                className="appearance-none border border-black  mb-4 h-[165px] w-full py-2 px-3  leading-tight "
                id="detail"
                type="text"
              />
              <button type="submit" className="relative rounded-none bg-white border border-slate-950 text-black py-3 px-6 transition ease-in-out duration-300 before:absolute before:inset-0 before:border-2 before:border-transparent before:transition before:duration-300 before:ease-in-out hover:before:border-b-black hover:before:border-r-black">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

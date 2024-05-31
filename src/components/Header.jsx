import Link from "next/link";

export default function Header() {
  return (
    <header className=" border-b border-black py-5  font-manrope  ">
      <div className="wrapper flex justify-between items-center">
        <Link
          href="/"
          className="text-xl lg:text-32px tracking-[2.56px] uppercase font-bold font-libra leading-38.4px"
        >
          Peepsly
        </Link>
        <div className="text-base tracking-[0.46px] leading-[38.4px] space-x-12 hidden lg:block">
          <Link className="hover:underline decoration-blue-900" href="/pricing">
            Pricing
          </Link>
          <Link className="hover:underline decoration-blue-900" href="/faq">
            Careers
          </Link>
          <Link href="/signup">
            <button className=" relative rounded-none bg-black text-white py-1 px-6 transition ease-in-out duration-300  hover:border-opacity-100 hover:shadow-button border-opacity-0 border border-white">
              Sign Up
            </button>
          </Link>
        </div>

        <svg
          ariaHidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
          className="inline w-5 h-5 lg:hidden"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </div>
    </header>
  );
}

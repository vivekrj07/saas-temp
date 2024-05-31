import Link from "next/link";

export default function Footer() {
  return (
    <footer className="wrapper font-manrope">
      <div className="flex mt-[191px]">
        <div>
          <h2 className="text-xl lg:text-32px tracking-[2.56px] uppercase font-bold leading-38.4px mb-1">
            Peepsly
          </h2>
          <p>Empower Your Creativity. Sell Directly.</p>
        </div>
        <div className="flex  ml-auto space-x-24 mb-[50px]">
          <div>
            <h2 className="text-xl lg:text-[16px] tracking-[2.56px] uppercase font-bold leading-38.4px mb-7">
              Navigation
            </h2>
            <ul>
              <li className="mb-6">
                <Link className="hover:underline decoration-blue-900" href="/">
                  Overview
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  className="hover:underline decoration-blue-900"
                  href="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  className="hover:underline decoration-blue-900"
                  href="/faq"
                >
                  Careers
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  className="hover:underline decoration-blue-900"
                  href="/signuo"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl lg:text-[16px] tracking-[2.56px] uppercase font-bold leading-38.4px mb-7">
              Contact
            </h2>
            <ul>
              <li className="mb-6">
                <a href="/sdd">404</a>
              </li>
              <li className="mb-6">
                <p>Gumroad</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-black opacity-10" />
      <div className="flex my-6">
        <p>© 2023 PEEPSLY. All rights reserved.</p>
        <a className="ml-auto hover:underline decoration-blue-900" href="/wddw">
          Socials
        </a>
      </div>
    </footer>
  );
}

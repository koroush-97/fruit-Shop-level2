import React from "react";

export function Footer() {
  return (
    <footer className="container mb-[68px]">
      <div className="mb-[68px]">
        <div className="rounded-[6px] md:rounded-[14px] lg:rounded-[30px] bg-hero-pattern bg-[rgba(59,128,126,.2)] bg-opacity-20 bg-cover bg-top bg-no-repeat flex justify-between items-center mt-[38px] relative">
          <div className="min-h-[160px] pl-3 pt-3 sm:pl-4 sm:pt4 md:pl-6 md:pt-6 lg:pl-10 lg:py-10 xl:pl-14 xl:py-14 2xl:py-[72px] 2xl:pl-[72px]">
            <h2 className="max-w-[60%] text-heading5 sm:text-heading4 md:text-heading3 lg:text-heading2 tracking-[-0.04%] text-blue-300">
              Stay home &amp; get your daily needs from our shop
            </h2>
            <div className="font-lato text-large tracking-[-0.04%] text-[#2B3D34] mt-8 hidden lg:block">
              Start Your Daily Sopping with Nest Mart
            </div>
          </div>
          <img
            src="../assets/images/Screenshot (76).png"
            className="absolute bottom-0 right-0 sm:h-full h-3/4"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between flex-wrap gap-[16px] divide-y-2 md:divide-y-0 mb-[70px]">
        <div className="max-w-[346px]">
          <img
            src="../assets/images/Logo.png"
            alt="logo"
            width={215}
            height={66}
          />
          <div className="font-lato text-medium mt-4 lg:mt-6">
            Pellentesque posuere orci lobortis
          </div>
          <div className="flex items-start gap-2.5 mt-4 lg:mt-6">
            <i className="icon-marker-brand" />
            <div className="font-lato text-medium text-blue-300">
              <span className="font-bold">Address:</span> 5171 W Campbell Ave
              undefined Kent, Utah 53127 United States
            </div>
          </div>
          <div className="flex items-start gap-2.5 mt-2 lg:mt-3">
            <i className="icon-headset text-brand1" />
            <div className="font-lato text-medium text-blue-300">
              <span className="font-bold">Call Us:</span> (+91) - 540-025-124553
            </div>
          </div>
          <div className="flex items-start gap-2.5 mt-2 lg:mt-3">
            <i className="icon-paper-plane text-[24px] text-brand1" />
            <div className="font-lato text-medium text-blue-300">
              <span className="font-bold">Email:</span> contact@nestmart.com
            </div>
          </div>
          <div className="flex items-start gap-2.5 mt-2 lg:mt-3">
            <i className="icon-time-fast text-brand1" />
            <div className="font-lato text-medium text-blue-300">
              <span className="font-bold">Hours:</span> 10:00 - 18:00, Mon - Sat
            </div>
          </div>
        </div>
        <div className="pt-4 md:pt-0">
          <div className="flex text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading4 text-blue-300 toggle">
            Company{" "}
            <i className="icon-down-dark text-[24px] inline-block sm:hidden" />
          </div>
          <ul className="hidden md:flex flex-col gap-2.5">
            <li className="font-lato text-medium text-blue-300 mt-4 lg:mt-6">
              <a href="#">About Us</a>
            </li>
            <li className="font-lato text-medium text-blue-300">
              <a href="#">Delivery Information</a>
            </li>
            <li className="font-lato text-medium text-blue-300">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="font-lato text-medium text-blue-300">
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li className="font-lato text-medium text-blue-300">
              <a href="#">Contact Us</a>
            </li>
            <li className="font-lato text-medium text-blue-300">
              <a href="#">Support Center</a>
            </li>
            <li className="font-lato text-medium text-blue-300">
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="pt-4 md:pt-0">
          <div className="flex text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading4 text-blue-300 toggle">
            Information{" "}
            <i className="icon-down-dark text-[24px] inline-block sm:hidden" />
          </div>
          <ul className="hidden md:flex flex-col gap-2.5">
            <li className="font-lato text-medium text-blue-300 mt-4 lg:mt-6">
              <a href="#">Search Terms</a>
            </li>
            <li className="font-lato text-medium text-blue-300">
              <a href="#">Advanced Search</a>
            </li>
            <li className="font-lato text-medium text-blue-300">
              <a href="#">Help &amp; FAQ's</a>
            </li>
            <li className="font-lato text-medium text-blue-300">
              <a href="#">Store Location</a>
            </li>
            <li className="font-lato text-medium text-blue-300">
              <a href="#">Orders &amp; Returns</a>
            </li>
            <li className="font-lato text-medium text-blue-300">
              <a href="#">Feedback for us</a>
            </li>
          </ul>
        </div>
        <div className="pt-4 md:pt-0">
          <div className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading4 text-blue-300">
            App &amp; Payment
          </div>
          <div className="font-lato text-small text-blue-300 mt-4 lg:mt-6">
            Install NetMart App from App Store or Google Play
          </div>
          <div className="flex items-center gap-6 justify-center xl:justify-start pt-4 lg:pt-5">
            <a href="#">
              <img
                src="../assets/images/va724oeh 1.png"
                alt="Download app from apple store"
                width={129}
                height={39}
              />
            </a>
            <a href="#">
              <img
                src="../assets/images/17kw6njp 1.png"
                alt="Download app from google play"
                width={129}
                height={39}
              />
            </a>
          </div>
          <div className="font-lato text-small text-blue-300 text-center lg:text-left pt-4 lg:pt-5">
            Secured Payment Gateways
          </div>
          <div className="flex justify-center xl:justify-start pt-4 lg:pt-5">
            <img
              src="../assets/images/payment-method%201.png"
              alt="payment methods"
              width={225}
              height={33}
            />
          </div>
        </div>
      </div>
      {/*copyright*/}
      <div className="flex justify-center border-t-2 py-[38px] border-green-100">
        <div className="font-lato text-medium text-blue-300">
          © 2021, <span className="text-green-200">NestMart</span> - HTML
          Ecommerce Template
        </div>
      </div>
    </footer>
  );
}

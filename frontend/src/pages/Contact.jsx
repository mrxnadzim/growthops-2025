import Navbar from "../components/Navbar.jsx";
import { useState, useRef } from "react";
import { arrowdown, redgradients, cyanGradient } from "../assets";
import { Link } from "react-router-dom";
import {
  FaArrowUpRightFromSquare,
  FaPhone,
  FaLocationDot,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FiAtSign } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const offices = [
    {
      continent: "Asia",
      city: "Kuala Lumpur",
      phone: "+60 3 2789 9038",
      email: "my@growthops.asia",
      location:
        "Level 11, Block B, Plaza Zurich, No. 12, Jalan Gelenggang, Bukit Damansara, 50490 Kuala Lumpur, Malaysia",
    },
    {
      continent: "Asia",
      city: "Hong Kong",
      phone: "+852 2805 9009",
      email: "hkg@growthops.asia",
      location: "29/F, Infinitus Plaza, 199 Des Voeux Road Central, Hong Kong",
    },
    {
      continent: "Asia",
      city: "Manila",
      phone: "+63 2 7586 4771",
      email: "man@growthops.asia",
      location:
        "KMC Solutions, 5F V Corporate Center, L.P. Leviste, Salcedo Village, Makati City 1227",
    },
    {
      continent: "Asia",
      city: "Singapore",
      phone: "+65 6220 8383",
      email: "sg@growthops.asia",
      location: "1 Neil Rd, #02-02, Singapore 088804",
    },
    {
      continent: "Middle East",
      city: "United Arab Emirates",
      location: "Building 1, Unit B304, Dubai Design District",
    },
  ];

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    const formEl = form.current;
    const fullName = formEl.fullname.value.trim();
    const phoneNo = formEl.phoneno.value.trim();
    const email = formEl.user_email.value.trim();
    const inquiryType = formEl.inquiry_type.value;
    const message = formEl.message.value.trim();
    const tncChecked = formEl.tnc.checked;

    if (!fullName) {
      toast.error("Please enter your full name", { 
        position: "top-center",
       });
      return;
    }
    if (!phoneNo) {
      toast.error("Please enter your phone number", {
        position: "top-center",
      });
      return;
    }
    if (!email) {
      toast.error("Please enter your email address", {
        position: "top-center",
      });
      return;
    }
    if (!inquiryType) {
      toast.error("Please select an inquiry type", { position: "top-center" });
      return;
    }
    if (!message) {
      toast.error("Please enter your message", { position: "top-center" });
      return;
    }
    if (!tncChecked) {
      toast.error(
        "You must agree to the website's terms & conditions before submitting.",
        {
          position: "top-center",
        }
      );
      return; // Stop form submission
    }

    emailjs
      .sendForm("service_6ssy6ou", "template_6sya3c8", form.current, {
        publicKey: "atEFUpC5Chw5PG8DI",
      })
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!", {
            position: "top-center",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email. Please try again later.", {
            position: "top-center",
          });
        }
      );
  };

  return (
    <div className="bg-black min-h-screen overflow-auto font-montserrat relative z-0 scroll-smooth">
      <ToastContainer />
      <div className="absolute inset-x-0 top-10 pointer-events-none -z-1 opacity-80 md:top-20 md:bottom-480 md:blur-3xl lg:bottom-400">
        <img
          src={redgradients}
          alt="red gradient svg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden absolute inset-x-0 top-200 pointer-events-none opacity-80 -z-1 lg:block">
        <img
          src={cyanGradient}
          alt="Cyan Gradient"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-white text-5xl text-center font-extrabold mt-30 lg:ml-20 lg:text-left xl:text-start xl:ml-20 xl:text-8xl">
        CONTACT US
      </p>
      <p className="text-white text-xl font-medium max-xs:px-6 mt-6 xs:max-w-md xs:mx-auto lg:ml-20 xl:text-3xl">
        Let's create something awesome together
      </p>
      <form
        onSubmit={sendEmail}
        ref={form}
        className="mt-10 max-w-screen flex flex-col gap-y-5 justify-center max-xs:px-6 xs:max-lg:max-w-md xs:max-lg:mx-auto 
        lg:ml-20 lg:mr-120 xl:mr-135"
      >
        <div>
          <label
            htmlFor="fullname"
            className="text-[#999D9F] text-base font-semibold block"
          >
            Full name
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="border border-input p-2 rounded-lg mt-2 w-full h-13 bg-[#0E1015] text-white lg:rounded-xl xl:w-[47.9%]"
          />
        </div>
        <div className="space-y-5 xl:flex xl:space-y-0 xl:gap-x-10">
          <div className="flex-1">
            <label
              htmlFor="phoneno"
              className="text-[#999D9F] text-base font-semibold block"
            >
              Phone number
            </label>
            <div className="flex items-center">
              <div className="mt-2 flex items-center relative">
                <select
                  name="country_code"
                  id="country_code"
                  className="appearance-none pl-4 pr-10 text-white text-base h-13 bg-[#1B1D24] rounded-l-lg border border-y-input border-l-input border-r-0 lg:rounded-l-xl"
                >
                  <option>+60</option>
                  <option>+65</option>
                  <option>+852</option>
                  <option>+63</option>
                </select>
                <div className="absolute px-3 right-0 pointer-events-none">
                  <img src={arrowdown} alt="Arrow down" />
                </div>
              </div>
              <input
                type="tel"
                name="phoneno"
                id="phoneno"
                className="border border-y-input border-r-input border-l-0 p-2 rounded-r-lg mt-2 w-full h-13 bg-[#0E1015] text-white lg:rounded-r-xl"
              />
            </div>
          </div>
          <div className="flex-1">
            <label
              htmlFor="user_email"
              className="text-[#999D9F] text-base font-semibold block"
            >
              Work email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              className="border border-input p-2 rounded-lg mt-2 w-full h-13 bg-[#0E1015] text-white lg:rounded-xl"
            />
          </div>
        </div>
        <p className="text-[#999D9F] font-semibold mb-1 lg:-mb-1">I want to</p>
        <div className="space-y-4 mb-7 xl:flex xl:items-center xl:gap-x-15 xl:space-y-0">
          <div className="flex items-center">
            <input
              type="radio"
              name="inquiry_type"
              id="client"
              value="Become a client"
              className="appearance-none w-4 h-4 border border-[#666666] rounded-full checked:bg-[#666666] checked:bg-clip-content checked:p-[2px]"
            />
            <label
              htmlFor="client"
              className="text-[#F5F5F5] ml-2 cursor-pointer"
            >
              Become a client
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="inquiry_type"
              id="jointheteam"
              value="Join the team"
              className="appearance-none w-4 h-4 border border-[#666666] rounded-full checked:bg-[#666666] checked:bg-clip-content checked:p-[2px]"
            />
            <label
              htmlFor="jointheteam"
              className="text-[#F5F5F5] ml-2 cursor-pointer"
            >
              Join the team
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="inquiry_type"
              id="investorenquiry"
              value="Investor enquiry"
              className="appearance-none w-4 h-4 border border-[#666666] rounded-full checked:bg-[#666666] checked:bg-clip-content checked:p-[2px]"
            />
            <label
              htmlFor="investorenquiry"
              className="text-[#F5F5F5] ml-2 cursor-pointer"
            >
              Investor enquiry
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="inquiry_type"
              id="others"
              value="Others"
              className="appearance-none w-4 h-4 border border-[#666666] rounded-full checked:bg-[#666666] checked:bg-clip-content checked:p-[2px]"
            />
            <label
              htmlFor="others"
              className="text-[#F5F5F5] ml-2 cursor-pointer"
            >
              Others
            </label>
          </div>
        </div>
        <div>
          <div className="mb-2">
            <span className="text-[#999D9F] font-semibold hidden lg:inline">
              Tell us more
            </span>
          </div>
          <textarea
            name="message"
            id="message"
            rows="8"
            className="resize-none w-full border border-input bg-[#0E1015] rounded-lg p-3 text-white placeholder:text-[#666666] 
            placeholder:text-center lg:placeholder:text-left lg:p-5 lg:rounded-xl"
            placeholder="Briefly describe your message here"
          ></textarea>
        </div>
        <div className="relative flex items-start mt-4">
          <input
            type="checkbox"
            name="subscribe"
            id="subscribe"
            className="cursor-pointer appearance-none w-5 h-5 border border-[#666666] rounded-xs shrink-0 peer checked:bg-blue-500"
          />
          <div className="absolute top-0 left-0 w-5 h-5 text-white pointer-events-none opacity-0 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z" />
            </svg>
          </div>
          <label
            htmlFor="subscribe"
            className="text-[#F5F5F5] ml-2 cursor-pointer"
          >
            I want to subscribe to the occasional insightful materials from
            GrowthOps. (optional)
          </label>
        </div>
        <div className="relative flex items-start">
          <input
            type="checkbox"
            name="tnc"
            id="tnc"
            className="cursor-pointer appearance-none w-5 h-5 border border-[#666666] rounded-xs shrink-0 peer checked:bg-blue-500"
          />
          <div className="absolute top-0 left-0 w-5 h-5 text-white pointer-events-none opacity-0 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z" />
            </svg>
          </div>
          <label htmlFor="tnc" className="text-[#F5F5F5] ml-2 cursor-pointer">
            I have read and agree to the website's terms & conditions.
          </label>
        </div>
        <div className="flex justify-center mt-8 lg:justify-start">
          <button
            type="submit"
            className="text-white text-[18px] font-bold text-lg bg-[#33FF85] py-4 px-10 rounded-full shadow-[0_0_16px_0_#FF336680] 
            hover:shadow-[0_0_16px_3px_#FF336680] mb-10 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Offices Section */}
      <p className="text-white text-5xl font-extrabold text-center mt-30 mb-12 xl:text-[88px]">
        OUR OFFICES
      </p>
      <section
        className="officecards max-w-sm mx-[24px] shrink-0 flex flex-col gap-y-15 
      xs:mx-auto md:max-w-2xl md:grid md:grid-cols-2 md:gap-10 lg:max-w-screen lg:mx-20 lg:grid-cols-3"
      >
        {offices.map((office, index) => (
          <div
            key={index}
            className="p-6 border-2 border-[#F5F5F514] rounded-2xl bg-[#0405068F] 
            backdrop-blur-2xl shadow-[0_4px_24px_-1px_rgba(0,0,0,0.25)]"
          >
            <div>
              <span className="text-[#07DDDA] text-[12px] font-semibold uppercase lg:text-[#B4B4B4]">
                {office.continent}
              </span>
              <h1 className="text-[#07DDDA] font-extrabold text-[24px]">
                {office.city}
              </h1>
            </div>
            <div className="mt-6 space-y-4">
              {office.phone && (
                <div className="flex items-center space-x-2">
                  <span className="text-[#07DDDA] lg:text-[#B4B4B4]">
                    <FaPhone />
                  </span>
                  <p className="text-white">{office.phone}</p>
                </div>
              )}
              {office.email && (
                <div className="flex items-center space-x-2">
                  <span className="text-[#07DDDA] lg:text-[#B4B4B4]">
                    <FiAtSign />
                  </span>
                  <p className="text-white">{office.email}</p>
                </div>
              )}
              {office.location && (
                <div className="flex space-x-2 items-start">
                  <span className="text-[#07DDDA] lg:text-[#B4B4B4]">
                    <FaLocationDot />
                  </span>
                  <p className="text-white">{office.location}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
      <h1
        className="text-white font-extrabold ml-[24px] my-12 text-4xl 
      xs:text-center xs:ml-0 xs:text-5xl md:text-6xl lg:mt-30 xl:text-[88px]"
      >
        KEEP <span className="block xs:inline">IN TOUCH</span>
      </h1>
      <div className="bg-ellipse">
        <PinkIntersect />
        <MidIntersect />
        <BottomIntersect />
      </div>
      <ul className="text-white ml-[24px] mb-20 mt-12 gap-4 flex flex-col lg:hidden">
        <li className="text-[#666666] font-semibold">ASIA</li>
        <li>Hong Kong</li>
        <li>Kuala Lumpur</li>
        <li>Manila</li>
        <li>Singapore</li>
        <li className="text-[#666666] font-semibold">MIDDLE EAST</li>
        <li>United Arab Emirates </li>
      </ul>
      <footer>
        <ul className="hidden lg:flex lg:justify-center lg:text-white lg:gap-12 lg:my-10">
          <li>
            <Link to="#">
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span>Works</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span>Insights</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span>Careers</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <span>Contact Us</span>
            </Link>
          </li>
        </ul>
        <ul className="flex justify-evenly items-center text-white lg:justify-center lg:gap-18 mb-10">
          <Link
            to="https://www.linkedin.com/company/growthops-asia/"
            className="p-2"
          >
            <li>
              <FaLinkedinIn size={28} />
            </li>
          </Link>
          <Link to="https://www.facebook.com/growthopsasia" className="p-2">
            <li>
              <FaFacebookF size={28} />
            </li>
          </Link>
          <Link to="https://www.instagram.com/growthopsasia/" className="p-2">
            <li>
              <FaInstagram size={28} />
            </li>
          </Link>
          <Link to="https://www.youtube.com/@growthopsasia" className="p-2">
            <li>
              <FaYoutube size={28} />
            </li>
          </Link>
        </ul>
        <ul className="hidden lg:flex lg:justify-between lg:text-[12px] lg:my-10 lg:mx-20">
          <li className="text-[#6F7176] font-semibold uppercase">
            © Copyright GrowthOps. All rights reserved.
          </li>
          <div className="flex gap-12 text-white">
            <Link to="https://www.growthops.asia/">
              <li className="flex items-center gap-2">
                <FaArrowUpRightFromSquare />
                Go to global GrowthOps website
              </li>
            </Link>
            <Link to="#">
              <li>Privacy Policy</li>
            </Link>
          </div>
        </ul>
      </footer>
    </div>
  );
};

export const PinkIntersect = () => {
  return (
    <div className="pink-intersect">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 375 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.3"
          d="M202.42 0C265.077 2.4031 323.814 20.1683 375 49.6523V50.8076C319.88 18.9449 255.951 0.719727 187.783 0.719727C119.479 0.719776 55.4314 19.0188 0.236328 51H0V49.9795C51.3193 20.2997 110.258 2.41202 173.146 0H202.42Z"
          fill="#FF3366"
        />
      </svg>
    </div>
  );
};

export const MidIntersect = () => {
  return (
    <div className="mid-intersect sm:-mt-10 lg:-mt-20 xl:-mt-32">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 375 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M202.42 0C265.077 2.4031 323.814 20.1683 375 49.6523V50.8076C319.88 18.9449 255.951 0.719727 187.783 0.719727C119.479 0.719776 55.4314 19.0188 0.236328 51H0V49.9795C51.3193 20.2997 110.258 2.41202 173.146 0H202.42Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export const BottomIntersect = () => {
  return (
    <div className="bottom-intersect sm:-mt-10 lg:-mt-20 xl:-mt-32">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 375 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.9"
          d="M202.42 0C265.077 2.4031 323.814 20.1683 375 49.6523V50.8076C319.88 18.9449 255.951 0.719727 187.783 0.719727C119.479 0.719776 55.4314 19.0188 0.236328 51H0V49.9795C51.3193 20.2997 110.258 2.41202 173.146 0H202.42Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Contact;

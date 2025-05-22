import { useState, useEffect } from "react";
import {
  redcircles,
  fadedrect,
  mockup,
  resultEllipse,
  purpleEllipse,
  leftshadowOverlay,
  rightshadowOverlay,
  mockupfordesktop,
  greenleafgradient,
  vector11,
  logoRim,
  Shadow,
} from "../assets";
import * as clientLogos from "../assets/clientlogos";
import { PinkIntersect, MidIntersect, BottomIntersect } from "./Contact";
import { Link } from "react-router-dom";
import {
  FaArrowUpRightFromSquare,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";

const Home = () => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTransition(true);
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      document.body.style.overflow = "auto"; // Reset overflow so that scrolling is enabled after the transition
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  const translateY = transition ? "-translate-y-full" : "translate-y-0";

  const services = [
    {
      id: 1,
      title: "Performance Marketing & Analytics",
      subServices: [
        "Performance Media",
        "Search Engine Optimisation",
        "Web & App Analytics",
        "Conversion Rate Optimisation Through Personalisation",
      ],
    },
    {
      id: 2,
      title: "Digital-First Creative",
      subServices: [
        "Brand & Marketing Strategy",
        "Content Hubs",
        "Creative Services",
      ],
    },
    {
      id: 3,
      title: "Marketing Technology",
      subServices: [
        "Technology Consulting",
        "MarTech Deployment & Partnerships",
        "Cloud Readiness & Migration",
        "Mobile Development",
        "Custom Web Development",
        "Solution Architecture",
      ],
    },
    {
      id: 4,
      title: "Experience Design & Strategy",
      subServices: [
        "Digital Transformation & Change Management",
        "User Experience Strategy and Design",
      ],
    },
  ];

  const logosAnimation = [
    {
      logosRow1: [
        clientLogos.uob,
        clientLogos.toyota,
        clientLogos.posb,
        clientLogos.singlife,
        clientLogos.amway,
        clientLogos.fitnessfirst,
        clientLogos.sony,
        clientLogos.xrvision,
        clientLogos.crown,
        clientLogos.aia,
        clientLogos.wwf,
      ],
    },
    {
      logosRow2: [
        clientLogos.malaysiaairlines,
        clientLogos.maxis,
        clientLogos.grab,
        clientLogos.dbs,
        clientLogos.treasure,
        clientLogos.microsoft,
        clientLogos.logitech,
        clientLogos.dreamscape,
        clientLogos.standardchartered,
        clientLogos.sitebeat,
        clientLogos.mizuho,
      ],
    },
    {
      logosRow3: [
        clientLogos.cimb,
        clientLogos.rhb,
        clientLogos.nikkoam,
        clientLogos.mannhummel,
        clientLogos.chubb,
        clientLogos.ntuc,
        clientLogos.taylorsuni,
        clientLogos.esplanade,
        clientLogos.proton,
        clientLogos.triumph,
      ],
    },
  ];

  const repeatRow1 = [logosAnimation[0].logosRow1, logosAnimation[0].logosRow1];
  const repeatRow2 = [logosAnimation[1].logosRow2, logosAnimation[1].logosRow2];
  const repeatRow3 = [logosAnimation[2].logosRow3, logosAnimation[2].logosRow3];

  return (
    <div className="bg-black min-h-screen overflow-hidden scroll-smooth relative font-montserrat">
      <div
        className={`${translateY} z-10 text-white font-extrabold bg-[#33FFF3] w-full min-h-screen pointer-events-none fixed top-0 left-0 transition delay-2000 duration-1200`}
      >
        <div className="fixed bottom-17 flex flex-col gap-6 mx-6 sm:mx-12 sm:bottom-30 md:flex-row md:gap-10 md:items-end lg:left-0 lg:right-0 lg:bottom-40 lg:mx-20">
          <p className=" text-[53px] leading-none md:text-6xl lg:text-[83px] xl:text-9xl">
            We're <span className="block">GrowthOps</span>
          </p>
          <span className="inline-block -rotate-[9.47deg] text-[40px] text-center w-fit text-[#33FFF3] bg-white rounded-full px-10 py-4 md:py-2 lg:px-12 lg:py-1 lg:text-[70px] xl:text-8xl xl:py-7 xl:px-14">
            Asia
          </span>
        </div>
      </div>
      <div className="redcircles absolute inset-x-0 z-0 -top-5 pointer-events-none sm:hidden">
        <img
          src={redcircles}
          alt="Red circles background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="redcircleshadow absolute z-0 top-160 inset-x-0 xs:top-220 sm:hidden pointer-events-none">
        <img
          src={fadedrect}
          alt=""
          className="w-full h-70 xs:h-80 object-cover"
        />
      </div>
      <div className="logoRim absolute top-20 inset-x-0 min-h-screen hidden sm:inline">
        <img src={logoRim} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="Shadow absolute top-110 inset-x-0 hidden sm:inline sm:top-140 lg:top-180 xl:top-205">
        <img src={Shadow} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="text-white mt-53 max-w-screen mx-6 relative z-1 sm:mx-15 xl:mx-30">
        <p className="font-extrabold uppercase mb-6 text-[32px]/12 sm:text-5xl/16 xl:text-8xl/30">
          Your new-breed, <span className="block text-end">end-to-end</span>{" "}
          <span className="block text-start">digital ally</span>
        </p>
        <p className="text-[#CCCCCC] font-medium text-[14px] ml-24 sm:text-base xl:hidden">
          We are an award-winning marketing transformation partner delivering{" "}
          <em className="font-bold">unforgettable</em> digital brands,
          experiences and technology.
        </p>
      </div>
      <div className="AboutGoServices-Group lg:flex lg:flex-col-reverse">
        <section className="services max-w-screen mx-6 flex flex-col gap-17 xs:max-lg:max-w-lg xs:max-lg:mx-auto lg:-mt-80">
          <p
            className="text-white font-extrabold text-4xl text-center uppercase mt-180 xs:mt-210 
            sm:mt-120 md:text-5xl lg:text-7xl xl:text-[88px]"
>
            What we do
          </p>
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col gap-6 lg:mx-15 lg:h-105 lg:flex-row lg:even:flex-row-reverse lg:gap-10 lg:justify-between lg:items-center xl:h-147 xl:gap-6 xl:mx-25"
            >
              <div className="h-full">
                <img
                  src={mockup}
                  alt="Mockup"
                  className="lg:hidden w-full h-full rounded-2xl lg:rounded-[20px]"
                />
                <img
                  src={mockupfordesktop}
                  alt="Mockup"
                  className="hidden lg:inline w-full h-full rounded-2xl lg:rounded-[20px]"
                />
              </div>
              <div className="flex flex-col gap-5 w-76 xl:w-[349px]">
                <p className="text-white text-lg font-medium border-2 rounded-full w-fit aspect-square flex justify-center items-center p-2">
                  {String(service.id).padStart(2, "0")}
                </p>
                <h2 className="text-white text-2xl font-extrabold xl:text-[40px]">
                  {service.title}
                </h2>
                <div className="flex flex-col gap-4 text-[#CCCCCC]">
                  {service.subServices.map((subService, index) => (
                    <p key={index}>{subService}</p>
                  ))}
                </div>
                <button className="cursor-pointer text-white border w-fit py-3 px-6 rounded-full hover:bg-white hover:text-black">
                  See more
                </button>
              </div>
            </div>
          ))}
        </section>
        <section className="AboutGo mt-30 min-h-screen content-center lg:mt-150 xl:mt-200">
          <div className="mb-15 max-w-sm mx-auto xl:max-w-xl">
            <p className="text-white font-medium text-center text-xl tracking-wide xl:text-[32px]">
              With a fusing <span className="text-[#33FFF3]">strategy</span>,{" "}
              <span className="my-[3px] inline-block border border-[#33FFF3] py-[2px] px-3 relative">
                <div className="text-[#33FFF3] bg-black border size-[10px] absolute -top-[6px] -left-[6px]"></div>
                <div className="text-[#33FFF3] bg-black border size-[10px] absolute -top-[6px] -right-[6px]"></div>
                <div className="text-[#33FFF3] bg-black border size-[10px] absolute -bottom-[6px] -left-[6px]"></div>
                <div className="text-[#33FFF3] bg-black border size-[10px] absolute -bottom-[6px] -right-[6px]"></div>
                <span className="text-[#33FFF3]">design</span>{" "}
              </span>{" "}
              and <span className="text-[#33FFF3]">{`<technology/>`}</span> to
              build and sustain market leaders
            </p>
          </div>
          <p className=" text-white text-xl font-medium text-center mb-10 xl:text-[32px]">
            this is
          </p>
          <p className="bg-gradient-to-r from-[#33FFF3] to-[#98E6FF] text-transparent bg-clip-text text-center font-extrabold text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
            GrowthOps Asia
          </p>
        </section>
      </div>
      <section className="Results my-20 max-w-screen mx-3 space-y-16 sm:max-w-lg sm:mx-auto lg:mt-60 xl:mt-80 lg:max-w-3xl xl:max-w-5xl">
        <h1 className="uppercase text-white text-center text-4xl font-extrabold wrap-break-word md:text-5xl lg:text-7xl xl:text-[88px]">
          <span className="block relative w-fit mx-auto bg-gradient-to-r from-[#004CBA] via-[#19B2A7] to-[#FDD196] text-transparent bg-clip-text">
            <div className="absolute top-0 lg:-top-2 xl:-top-3 inset-x-0 pointer-events-none">
              <img
                src={resultEllipse}
                alt="Text ellipse"
                className="w-full h-fit object-cover -mt-[6px]"
              />
            </div>
            Unforgettable
          </span>{" "}
          results
        </h1>
        <div className="w-[245px] space-y-2 ml-2">
          <h2 className="text-[#07DDDA] text-4xl font-bold xl:text-[64px]">
            400%
          </h2>
          <p className="text-[#07DDDA] text-[14px] font-semibold uppercase">
            Increase in organic page views
          </p>
          <p className="text-[#B4B4B4] text-[14px]">
            Using our SEO services, it also resulted in a{" "}
            <strong>109% increase in page visibility</strong>
          </p>
        </div>
        <div className="flex justify-end">
          <div className="w-[245px] space-y-2 mr-2">
            <h2 className="text-[#07DDDA] text-4xl font-bold xl:text-[64px]">
              4.5%
            </h2>
            <p className="text-[#07DDDA] text-[14px] font-semibold uppercase">
              Increase in sales
            </p>
            <p className="text-[#B4B4B4] text-[14px]">
              Through our creative services, a national automaker experienced a{" "}
              <strong>
                4.5% increase in sales amidst a -4.6% market decline.{" "}
              </strong>
              They also had a <strong>2% increase in market share,</strong> and
              a <strong>5.6 point shift in brand perception</strong>
            </p>
          </div>
        </div>
        <div className="w-[245px] space-y-2 ml-2">
          <h2 className="text-[#07DDDA] text-4xl font-bold xl:text-[64px]">
            96%
          </h2>
          <p className="text-[#07DDDA] text-[14px] font-semibold uppercase">
            faster page launches
          </p>
          <p className="text-[#B4B4B4] text-[14px] mb-4">
            Using AEM, a leading Telco saw these results
          </p>
          <div className="w-full h-10 bg-[#07DDDA33] rounded-sm">
            <div className="bg-[#07DDDA] w-19 h-full rounded-sm"></div>
          </div>
          <p className="text-[#B4B4B4] text-[14px] mb-4">
            Campaign launches cut from <strong>7 days to 2 days</strong>
          </p>
          <div className="w-full h-10 bg-[#07DDDA33] rounded-sm">
            <div className="bg-[#07DDDA] w-3 h-full rounded-sm"></div>
          </div>
          <p className="text-[#B4B4B4] text-[14px]">
            Page launches cut from <strong>2 days to 2 hours</strong>
          </p>
        </div>
        <div className="flex justify-end">
          <div className="w-[245px] space-y-2 mr-2">
            <h2 className="text-[#07DDDA] text-4xl font-bold xl:text-[64px]">
              71%
            </h2>
            <p className="text-[#07DDDA] text-[14px] font-semibold uppercase">
              Reduction in cpl
            </p>
            <p className="text-[#B4B4B4] text-[14px]">
              After optimising the performance media funnel, a leading bank saw{" "}
              <strong>savings over AUD$300 in the first year</strong>
            </p>
          </div>
        </div>
        <div className="w-[245px] space-y-2 ml-2">
          <h2 className="text-[#07DDDA] text-4xl font-bold xl:text-[64px]">
            38%
          </h2>
          <p className="text-[#07DDDA] text-[14px] font-semibold uppercase">
            Conversion rate improvement
          </p>
          <p className="text-[#B4B4B4] text-[14px]">
            Using Adobe Target to A/B test landing pages' forms, we saw an{" "}
            <strong>increase in conversion rate</strong>
          </p>
        </div>
      </section>
      <div className="greenleafgradient relative">
        <div className="absolute right-0 top-30 pointer-events-none xl:hidden">
          <img
            src={greenleafgradient}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute right-0 top-10 pointer-events-none">
          <img
            src={vector11}
            alt=""
            className="hidden xl:inline w-full h-full object-cover"
          />
        </div>
      </div>
      <section className="Clientsay mt-50 mx-2 min-h-screen sm:max-w-sm sm:mx-auto md:max-w-lg lg:max-w-3xl xl:max-w-5xl">
        <p className="text-white text-4xl font-extrabold w-fit mx-auto uppercase text-center md:text-5xl lg:text-7xl xl:text-[88px]">
          What clients say
        </p>
        <ul className="flex my-15 mx-auto w-fit justify-center items-center text-white border border-[#2B2B2B] rounded-full text-center p-[6px]">
          <li className="bg-[#07DDDA] text-black rounded-full font-bold px-5 py-3">
            Telco
          </li>
          <li className="rounded-full px-5 py-3">Insurance</li>
          <li className="rounded-full px-5 py-3">Fintech</li>
          <li className="rounded-full px-5 py-3">IT</li>
        </ul>
        <div className="relative">
          <span className="text-[#07DDDA] text-4xl font-bold absolute">“</span>
          <p className="text-white mx-10 mb-10 text-xl leading-8 font-medium tracking-wide">
            Through this initiative, GrowthOps have shown to have the right
            capabilities to take our platform to the next level. We believe the
            refreshed U.COM.MY will equip us with more insights, enabling us to
            make more data-led decisions that will result in new digital
            experiences that will truly benefit our customers.
          </p>
        </div>
        <div className="mx-10 space-y-2 mb-20">
          <p className="text-white font-bold">Jasmine Lee</p>
          <p className="text-[#CCCCCC]">[Position], [Company Name]</p>
        </div>
      </section>
      <section className="Proudtowork max-w-screen mx-6 my-20 md:mt-30">
        <p className="relative z-0 text-4xl font-extrabold text-white uppercase text-center md:text-5xl lg:text-7xl xl:text-[88px]">
          <span className="relative bg-gradient-to-r from-[#9747FF] to-[#96B3FD] text-transparent bg-clip-text">
            <div className="absolute -z-1 top-0 inset-x-0 pointer-events-none">
              <img
                src={purpleEllipse}
                alt="Purple ellipse"
                className="w-full h-full  object-cover -ml-[6px]"
              />
            </div>
            Super{" "}
          </span>
          proud to <span className="block">work with</span>
        </p>
      </section>
      <section className="clientlogos relative">
        <div className="leftShadowOverlay absolute z-1 h-full">
          <img
            src={leftshadowOverlay}
            alt="Left shadow overlay"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rightShadowOverlay absolute z-1 h-full right-0">
          <img
            src={rightshadowOverlay}
            alt="Right shadow overlay"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6 xl:space-y-9">
          <div className="h-12 xl:h-[62px] gap-5 flex justify-evenly items-center animate-infinite-scrollright min-w-max hover:[animation-play-state:paused]">
            {repeatRow1.flat().map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt=""
                className="h-full opacity-70"
              />
            ))}
          </div>
          <div className="h-12 xl:h-[62px] gap-5 flex justify-evenly items-center animate-infinite-scrollleft min-w-max hover:[animation-play-state:paused]">
            {repeatRow2.flat().map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt=""
                className="h-full opacity-70"
              />
            ))}
          </div>
          <div className="h-12 xl:h-[62px] gap-5 flex justify-evenly items-center animate-infinite-scrollright min-w-max hover:[animation-play-state:paused]">
            {repeatRow3.flat().map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt=""
                className="h-full opacity-70"
              />
            ))}
          </div>
        </div>
      </section>
      <div className="chatbutton w-fit mx-auto">
        <button className="text-white font-extrabold my-80 py-4 px-9 bg-[#33FF85] rounded-full shadow-[0_0_16px_0_#FF336680] cursor-pointer xl:text-lg">
          Let's chat
        </button>
      </div>
      <div className="bg-ellipse">
        <PinkIntersect />
        <MidIntersect />
        <BottomIntersect />
      </div>
      <footer>
        <ul className="flex justify-center flex-wrap text-white gap-x-12 gap-y-6 max-w-screen mx-10 mt-10 mb-17">
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
            <Link to="/contact">
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
        <div className="flex flex-col items-center text-[12px] my-10 mx-10 lg:flex-row lg:justify-between lg:m-20">
          <div className="hidden lg:block text-[#6F7176] text-center font-semibold uppercase">
            © Copyright GrowthOps. All rights reserved.
          </div>
          <div className="flex flex-col gap-4 items-center text-white lg:flex-row">
            <Link to="https://www.growthops.asia/">
              <div className="flex items-center gap-2">
                <FaArrowUpRightFromSquare />
                Go to global GrowthOps website
              </div>
            </Link>
            <Link to="#">
              <div>Privacy Policy</div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

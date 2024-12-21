import React from "react";
import Navbar from "../components/Navbar";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import desktopimg from "../images/desktop.png";
import websiteimg from "../images/website.png";
import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";

const Home = () => {
  const [search,setSeach] = useState("");

//   ## API Integeration 
// Search Functionality 
// ## Display Yes or No : Yes in case of Search found in items , else no
// by eod

const onFetchData = async (e) => {
  e.preventDefault();
  if(!search){
    return alert("Enter to search")
  }
  const url = `https://mocki.io/v1/007194d7-1e15-4060-9e61-0a52cdfa4ac3?query=${search}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response)
    const data = await response.json(); 
    console.log(data)
    if (search && data && Array.isArray(data.items)) {

      const searchResults = data.items.filter(item => {
        return item.name.toLowerCase() === search.toLowerCase()
      });
      if (searchResults.length > 0) {
        alert("Yes")
      } else {
        alert("No")
      }
    } 
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

  return (
    <div className="bg-gray-50">
      <section className="text-center py-20 px-4 text-gray-800">
        <div className="flex justify-center gap-1 my-20 relative mx-auto h-[58px] w-full max-w-[456px] rounded-tl-[9.75px]">
          <button className="bg-white border font-bold text-xl text-right border-gray-200 text-black rounded-l-lg px-4">
            <div>AI</div>
            <div>
              R<span className="text-red-600">Max</span>
            </div>
          </button>
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e)=>setSeach(e.target.value)}
            placeholder="Curious? Let AI Uncover the Answers!"
            className="border border-gray-200 rounded-r-lg py-2 px-4 w-full max-w-md"
          />
          <button 
          className="p-3 bg-[rgba(245,79,53,1)] text-white rounded-md "
          onClick={onFetchData}
          >Search</button>
        </div>
        <h2 className="font-[Urbanist] text-[rgba(25,26,21,1)] text-[30px] md:text-[60px] font-extrabold leading-[40px] md:leading-[60px] text-center mb-4">
          Maximize Your Impact <br />
          <span className="text-[rgba(245,79,53,1)]"> Business with</span> R
          <span className="text-red-800">Max</span>
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-[787px] text-center mx-auto font-roboto text-[18px] font-normal leading-[32px] tracking-[-0.2px]">
          Enhance your business with RMax's all-in-one platform—streamlining
          client engagement, automating workflows, and fueling growth.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 my-20">
          <button className="bg-[rgba(245,79,53,1)] text-white py-2 px-6 rounded-lg flex items-center">
            Get Started <span className="ml-2">→</span>
          </button>
          <button className="bg-white text-black py-2 px-6 rounded-lg border border-gray-300">
            Book A Demo
          </button>
        </div>

        {/* Features */}
        <div className="px-6 sm:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="shadow-custom flex items-center justify-center w-full sm:w-[219px] h-[46px] p-[6px_16px] gap-[10px] rounded-tl-[8px]">
            <h3 className="font-[Urbanist] text-[20px] font-medium text-center">
              Seamless Onboarding
            </h3>
          </div>
          <div className="shadow-custom flex items-center justify-center w-full sm:w-[219px] h-[46px] p-[6px_16px] gap-[10px] rounded-tl-[8px]">
            <h3 className="font-[Urbanist] text-[20px] font-medium text-center">
              Client Engagement
            </h3>
          </div>
          <div className="shadow-custom flex items-center justify-center w-full sm:w-[219px] h-[46px] p-[6px_16px] gap-[10px] rounded-tl-[8px]">
            <h3 className="font-[Urbanist] text-[20px] font-medium text-center">
              Generate Report
            </h3>
          </div>
          <div className="shadow-custom flex items-center justify-center w-full sm:w-[219px] h-[46px] p-[6px_16px] gap-[10px] rounded-tl-[8px]">
            <h3 className="font-[Urbanist] text-[20px] font-medium text-center">
              Revenue Growth
            </h3>
          </div>
        </div>

        <div className="container mx-auto py-12">
          <h2 className="font-[Urbanist] text-black text-5xl font-bold text-center mb-8">
            Onboard business in 3 simple steps
          </h2>
          <p className="text-lg mb-20 text-center">
            Quick assisted onboarding with a 30-day free trial. No credit card
            needed.
          </p>
          <div className="px-6 sm:px-20 lg:px-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="relative w-full h-[351px]">
                <span className="absolute top-0 w-8 h-8 rounded-full bg-gray-50 left-0 text-lg">
                  1
                </span>
                <div className="w-40 h-40 bg-white shadow-lg rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-12 h-12 bg-red-200 flex items-center justify-center rounded-full">
                    <span className="material-symbols-outlined text-[rgba(245,79,53,1)] text-3xl">
                      person
                    </span>
                  </div>
                </div>
                <div className="w-full p-3">
                  <div className="font-roboto text-[24px] font-medium text-[#1F1F1F]">
                    Claim your preset profile
                  </div>
                  <div className="text-[16px] text-[#475467]">
                    Unlock tailored service and seamlessly elevate your
                    experience by claiming your preset profile today.
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[351px]">
                <span className="absolute w-8 h-8 bg-gray-50 rounded-full top-0 left-0 text-lg">
                  2
                </span>
                <div className="w-40 h-40 bg-white shadow-lg rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-12 h-12 bg-red-200 flex items-center justify-center rounded-full">
                    <span className="material-icons text-[rgba(245,79,53,1)] text-3xl">
                      system_update_alt
                    </span>
                  </div>
                </div>
                <div className="relative w-full p-3">
                  <div className="font-roboto text-[24px] font-medium text-[#1F1F1F]">
                    Add services
                  </div>
                  <div className="text-[16px] text-[#475467]">
                    Make use of multiple scheduling, pricing options to add
                    services. Choose from pre-created scheduling templates.
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[351px]">
                <span className="absolute w-8 h-8 rounded-full bg-gray-50 top-0 left-0 text-lg">
                  3
                </span>
                <div className="w-40 h-40 bg-white shadow-lg rounded-full mx-auto mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-200 flex items-center justify-center rounded-full">
                    <span className="material-icons text-[rgba(245,79,53,1)] text-3xl">
                      airplay
                    </span>
                  </div>
                </div>
                <div className="w-full p-3">
                  <div className="font-roboto text-[24px] font-medium text-[#1F1F1F]">
                    Build Website
                  </div>
                  <div className="text-[16px] text-[#475467]">
                    Build your online storefront your way, seamlessly
                    integrating all services for a cohesive and efficient client
                    experience.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Rmax */}
        <div className="container mx-auto py-12">
          <h2 className="font-[Urbanist] text-5xl text-black font-bold text-center mb-8">
            Why Rmax
          </h2>
          <p className="text-lg mb-20 max-w-[1016px] mx-auto text-center">
            Rmax is designed to simplify and transform the way service
            businesses operate. From onboarding, scheduling, and billing to
            client management, payments, and growth, Rmax integrates everything
            in one easy-to-use platform connecting all stakeholders.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-[200px] ">
            <div className="flex flex-col">
              <div className="w-[315px] hover:border-orange-500 mx-auto h-[244px] rounded-lg border border-gray-300 bg-gray-50 p-6 space-y-4  text-center mb-6">
                <span class="material-symbols-outlined text-[rgba(245,79,53,1)] text-[40px] w-[36px] h-[36px] font-[400]">
                  event_available
                </span>
                <h3 className="font-roboto text-[20px] font-semibold text-gray-800">
                  Scheduling
                </h3>
                <p className="text-[16px] font-[400] text-[rgba(71,84,103,1)] mt-2">
                  Manage appointments, classes, and events, workshops with ease.
                </p>
                <a href="#" className="text-blue-500 text-sm mt-4 inline-block">
                  View details &rarr;
                </a>
              </div>
              <div className="w-[315px] mx-auto hover:border-orange-500 h-[476px] rounded-lg border border-gray-300 bg-gray-50  space-y-4  text-center mb-6">
                <img
                  className="h-[320px]  w-[600px]   object-cover  rounded-lg "
                  src={desktopimg}
                />
                <h3 className="font-roboto text-[20px] font-semibold text-gray-800">
                  Billing & Payments
                </h3>
                <p className="text-[16px] font-[400] text-[rgba(71,84,103,1)] mt-2">
                  Streamline invoicing and payments with automated workflows,
                  reducing ...{" "}
                </p>
                <a href="#" className="text-blue-500 text-sm mt-4 inline-block">
                  View details &rarr;
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-[315px] mx-auto hover:border-orange-500  h-[205px] rounded-lg border border-gray-300 bg-gray-50 p-6 space-y-4  text-center mb-6">
                <h3 className="font-roboto font-[600] text-[20px]  text-gray-800">
                  Client Management & CRM
                </h3>
                <p className="text-[16px] font-[400] text-[rgba(71,84,103,1)] mt-2">
                  Keep track of customer data, preferences, and interactions
                  to...{" "}
                </p>
                <a href="#" className="text-blue-500 text-sm mt-4 inline-block">
                  View details &rarr;
                </a>
              </div>
              <div className="w-[315px] mx-auto hover:border-orange-500 h-[282px] rounded-lg border border-gray-300 bg-gray-50 p-6 space-y-4  text-center mb-6">
                <span class="material-symbols-outlined text-[rgba(245,79,53,1)] text-[40px] w-[36px] h-[36px] font-[400]">
                  business_center
                </span>
                <h3 className="font-roboto text-[20px] font-semibold text-gray-800">
                  Marketing & Engagement Tools
                </h3>
                <p className="text-[16px] font-[400] text-[rgba(71,84,103,1)] mt-2">
                  Boost client retention and grow your business with
                  integrated...
                </p>
                <a href="#" className="text-blue-500 text-sm mt-4 inline-block">
                  View details &rarr;
                </a>
              </div>
              <div className="w-[315px] mx-auto hover:border-orange-500 h-[205px] rounded-lg border border-gray-300 bg-gray-50 p-6 space-y-4  text-center mb-6">
                <h3 className="font-roboto font-[600] text-[20px]  text-gray-800">
                  Multi-Location Management
                </h3>
                <p className="text-[16px] font-[400] text-[rgba(71,84,103,1)] mt-2">
                  Manage multiple locations with ease, assigning roles and
                  permissions...
                </p>
                <a href="#" className="text-blue-500 text-sm mt-4 inline-block">
                  View details &rarr;
                </a>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="w-[315px] mx-auto hover:border-orange-500  h-[244px] rounded-lg border border-gray-300 bg-gray-50 p-6 space-y-4  text-center mb-6">
                <span class="material-symbols-outlined text-[rgba(245,79,53,1)] text-[40px] w-[36px] h-[36px] font-[400]">
                  kid_star
                </span>
                <h3 className="font-roboto text-[20px] font-semibold text-gray-800">
                  AI Powered Insights
                </h3>
                <p className="text-[16px] font-[400] text-[rgba(71,84,103,1)] mt-2">
                  Know exactly what is happening in business and get
                  actionable...
                </p>
                <a href="#" className="text-blue-500 text-sm mt-4 inline-block">
                  View details &rarr;
                </a>
              </div>
              <div className="w-[315px] mx-auto h-[476px] hover:border-orange-500 rounded-lg border border-gray-300 bg-gray-50  space-y-4  text-center mb-6">
                <div className="pt-6">
                  <h3 className="font-roboto text-[20px]  font-semibold text-gray-800">
                    Custom Branded website
                  </h3>
                  <p className="text-[16px] font-[400] text-[rgba(71,84,103,1)] mt-2">
                    Qest's Custom Branded Website Builder allows you to create a
                    fully personalized...
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 text-sm mt-4 inline-block"
                  >
                    View details &rarr;
                  </a>
                </div>
                <img
                  className="h-[324px]  w-[588px]   object-cover  rounded-lg "
                  src={websiteimg}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-12">
          <h2 className="font-[Urbanist] max-w-[590px] mx-auto text-5xl text-black font-bold text-center mb-8">
            Empowering Service Providers Across Industries{" "}
          </h2>
          <p className="text-lg mb-20 max-w-[1016px] mx-auto text-center">
            Whether you're in sports, education, wellness, household services,
            or niche markets, our technology simplifies your business
            operations, making it easier for you to focus on what you do best.
          </p>
          <div className="my-20">
            <Carousel />
          </div>
        </div>

        <div className="container mx-auto py-12">
          <h2 className="font-[Urbanist] max-w-[590px] mx-auto text-5xl text-black font-bold text-center mb-5">
            Choose Plan That's Right For You{" "}
          </h2>
          <p className="text-lg mb-9 max-w-[1016px] mx-auto text-center">
            Simple and transparent pricing. Start for free, upgrade when you
            love it.
            <br />{" "}
            <span className="text-[rgba(161,15,15,1)]">
              30 day free trial in a button
            </span>
          </p>
          <div>
            <span className="font-roboto font-[400] ">
              Running a <strong>Growth Business</strong> or <b>Enterprise?</b>{" "}
              Let's connect -{" "}
              <button
                type="button"
                className="text-white bg-[rgba(245,79,53,1)] hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-2 text-center"
              >
                Talks To Sales
              </button>
            </span>
          </div>
          <div>
            <div className="text-center py-6">
              {" "}
              <div className="inline-flex items-center  p-2 rounded-lg">
                {" "}
                <span className="mr-2">Monthly</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only" />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer focus:ring-4 focus:ring-blue-300 peer-checked:bg-blue-600"></div>
                  <div
                    className="absolute left-1 top-0.5 w-5 h-5 bg-white rounded-full transition-transform 
                      peer-checked:transform peer-checked:translate-x-full"
                  ></div>{" "}
                </label>
                <span className="ml-2">Yearly</span>
                <span className="ml-2 text-red-600 bg-red-100 rounded-md   font-semibold p-1">
                  SAVE 25%
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="container py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:px-[200px]  gap-4">
            {/* Pricing Card 1 */}
            <div className="max-w-sm mx-auto bg-white h-[567px] p-6 rounded-lg overflow-hidden border border-gray-300">
              <div className="px-6 py-4">
                <h2 className="text-left text-[14px] font-[700] text-[#F54F35] mb-4">
                  STARTER
                </h2>
                <div className="text-left my-6">
                  <span className="text-[22px] font-[700]">
                    $<span className="text-4xl font-bold">17</span>
                  </span>
                  <span className="text-gray-600"> / month</span>
                  <div className="text-gray-600">billed monthly</div>
                </div>
                <ul className="text-left mb-6 space-y-4">
                  {" "}
                  {/* Increased space between list items */}
                  <li className="flex items-center">
                    <span className="material-icons text-green-500 mr-2">
                      check
                    </span>
                    Commercial License
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons text-green-500 mr-2">
                      check
                    </span>
                    100+ HTML UI Elements
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons text-green-500 mr-2">
                      check
                    </span>
                    Unlimited Domain Support
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons text-red-500 mr-2">
                      close
                    </span>
                    6 Month Premium Support
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons text-red-500 mr-2">
                      close
                    </span>
                    Life Time Updates
                  </li>
                </ul>
                <button className="w-full bg-[#FEF1EF] justify-between flex p-3 rounded text-[#F54F35] transition duration-200">
                  {" "}
                  {/* Increased padding for button */}
                  <span>Get Started</span>
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </button>
                <div className="text-left text-gray-500 text-sm mt-6">
                  {" "}
                  {/* Increased margin-top */}
                  No credit card required
                </div>
              </div>
            </div>
            <div className="max-w-sm mx-auto bg-white h-[567px] p-6 rounded-lg overflow-hidden border border-gray-300">
              <div className="px-6 py-4">
                <h2 className="text-left text-[14px] font-[700] text-[#F54F35] mb-4">
                  Premium
                </h2>
                <div className="text-left my-6">
                  <span className="text-[22px] font-[700]">
                    $<span className="text-4xl font-bold">88</span>
                  </span>
                  <span className="text-gray-600"> / month</span>
                  <div className="text-gray-600">billed monthly</div>
                </div>
                <ul className="text-left mb-6 space-y-4">
                  {" "}
                  {/* Increased space between list items */}
                  <li className="flex items-center">
                    <span className="material-icons text-green-500 mr-2">
                      check
                    </span>
                    Commercial License
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons text-green-500 mr-2">
                      check
                    </span>
                    100+ HTML UI Elements
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons text-green-500 mr-2">
                      check
                    </span>
                    Unlimited Domain Support
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons text-red-500 mr-2">
                      check
                    </span>
                    6 Month Premium Support
                  </li>
                  <li className="flex items-center">
                    <span className="material-icons text-red-500 mr-2">
                      check
                    </span>
                    Life Time Updates
                  </li>
                </ul>
                <button className="w-full bg-[#FEF1EF] justify-between flex p-3 rounded text-[#F54F35] transition duration-200">
                  {" "}
                  {/* Increased padding for button */}
                  <span>Get Started</span>
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </button>
                <div className="text-left text-gray-500 text-sm mt-6">
                  {" "}
                  {/* Increased margin-top */}
                  No credit card required
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-12">
          <h2 className="font-[Urbanist] max-w-[750px] text-[50px] mx-auto text-5xl text-black font-[700] text-center mb-5">
            Manage Your Business On the Go
          </h2>
          <p className="text-lg mb-9 max-w-[1016px] mx-auto text-center">
            With free Business Mobile App, you can manage your entire service
            business from anywhere. Stay connected and stay in control, no
            matter where your day takes you.
          </p>
          <div className="mt-9 flex justify-center gap-12  mx-auto">
            <button className="w-[205px] h-[74px] flex items-center justify-center space-x-1 p-3 rounded-[11.31px] border-[0.85px] border-[#090909] bg-white hover:bg-gray-100 transition">
              <span className="material-icons text-[50px] text-black">
                apple
              </span>
              <a
                href="https://www.apple.com/app-store/"
                className="text-black  font-[500] text-[23px] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store
              </a>
            </button>
            <button className="w-[205px] h-[74px] flex items-center justify-center space-x-1 p-3 rounded-[11.31px] border-[0.85px] border-[#090909] bg-white hover:bg-gray-100 transition">
              <span className="material-icons text-gray-500 text-[50px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#35ab4a"
                    d="M13.488,4.012C10.794,2.508,7.605,3.778,6.45,6.323L24.126,24l9.014-9.014L13.488,4.012z"
                  ></path>
                  <path
                    fill="#f14e5d"
                    d="M33.14,33.014L24.126,24L6.45,41.677 c1.156,2.546,4.345,3.815,7.038,2.312L33.14,33.014z"
                  ></path>
                  <path
                    fill="#ffd844"
                    d="M41.419,28.393 c1.72-0.96,2.58-2.676,2.581-4.393c-0.001-1.717-0.861-3.434-2.581-4.393l-8.279-4.621L24.126,24l9.014,9.014L41.419,28.393z"
                  ></path>
                  <path
                    fill="#0090e6"
                    d="M6.45,6.323C6.168,6.948,6,7.652,6,8.408 v31.179c0,0.761,0.164,1.463,0.45,2.09l17.674-17.68L6.45,6.323z"
                  ></path>
                </svg>
              </span>
              <a
                href="https://www.apple.com/app-store/"
                className="text-black  font-[500] text-[23px] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play
              </a>
            </button>
          </div>
        </div>
      </section>
      <FAQs />
    </div>
  );
};

export default Home;

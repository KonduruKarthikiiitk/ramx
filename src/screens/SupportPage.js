import React from "react";
import supportBg from "../images/supportBg.png";
function SupportPage() {
  return (
    <div>
      <div className=" py-20 bg-white  rounded-lg p-6 my-4">
      <div className="flex justify-center gap-1 my-16 relative mx-auto h-[58px] w-full max-w-[456px] rounded-tl-[9.75px]">
          <button className="bg-white border font-bold text-xl text-right border-gray-200 text-black rounded-l-lg px-4">
            <div>AI</div>
            <div>
              R<span className="text-red-600">Max</span>
            </div>
          </button>
          <input
            type="text"
            placeholder="Curious? Let AI Uncover the Answers!"
            className="border border-gray-200 rounded-r-lg py-2 px-4 w-full max-w-md"
          />
        </div>
        <div className="flex justify-center items-center min-h-screen  p-4">
          <form className="w-full max-w-[900px] bg-white p-6 rounded-lg ">
            <h1 className="max-w-[822px] text-left font-[Urbanist] text-[rgba(25,26,21,1)] text-[30px] md:text-[60px] font-extrabold leading-[40px] md:leading-[60px]  mb-16">
              Get in touch with us.
              <br /> We're here to assist you.
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="business-name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Business Name*
                </label>
                <input
                  type="text"
                  id="business-name"
                  placeholder="Search for your business listing"
                  className="w-full p-5 border bg-gray-50 border-[#FEF1EF] rounded-lg placeholder-gray-400"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-5 border bg-gray-50 border-[#FEF1EF] rounded-lg placeholder-gray-400"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Phone Number*
                </label>
                <div className="flex">
                  <select className="p-5 border bg-gray-50 border-[#FEF1EF] rounded-l-lg ">
                    <option value="+91">+91</option>
                  </select>
                  <input
                    type="text"
                    id="phone"
                    placeholder="1234567890"
                    className="flex-1 p-5 border bg-gray-50 border-[#FEF1EF] rounded-r-lg placeholder-gray-400"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="e.g xyz@gmail.com"
                  className="w-full p-5 border bg-gray-50 border-[#FEF1EF] rounded-lg placeholder-gray-400"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message*
              </label>
              <textarea
                id="message"
                placeholder="Write your message here..."
                className="w-full p-3 border bg-gray-50 border-[#FEF1EF] rounded-lg h-32 placeholder-gray-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[225px] bg-[#F54F35] text-white py-3 rounded-lg font-bold mt-6"
            >
              Leave us a Message
            </button>
          </form>
        </div>
      </div>
      <div
        className=" mx-auto bg-white border  rounded-lg p-8 shadow-md"
        style={{
          backgroundImage: `url(${supportBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="p-8 max-w-full mx-auto   md:px-[200px] ">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 ">
            <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-4">
              Contact Info
            </h3>
            <h2 className="max-w-[500px] font-urbanist text-[30px] md:text-[50px] font-bold leading-[56px] tracking-[-0.03em] text-left">
              We are always happy to assist you
            </h2>

            </div>
            <div className="flex gap-5 flex-col md:flex-row">
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2">Email Address</h4>
              <span>----</span>
              <p className="text-gray-500">Support@RMax.com</p>
              <p className="text-sm text-gray-400 mt-1">
                Assistance hours:
                <br />
                Monday - Friday 6 am to 8 pm EST
              </p>
            </div>

            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2">Contact Number</h4>
              <span>----</span>
              <p className="text-gray-500">+91-8657491236</p>
              <p className="text-sm text-gray-400 mt-1">
                Assistance hours:
                <br />
                Monday - Friday 6 am to 8 pm EST
              </p>
            </div>
            
            <div className="hidden md:block md:w-px md:h-full bg-gray-300"></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FAQs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the faqData based on the search query
  const filteredFaqs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  const navigate = useNavigate();
  return (
    <div className="faq-container   p-8 rounded-lg  max-w-2xl mx-auto">
      <div className="faq-header text-center mb-12">
        <h1
          className="text-5xl mb-9 font-extrabold leading-[56px] tracking-[-0.03em] text-center underline-offset-[3px] decoration-solid"
          style={{ fontFamily: "Urbanist" }}
        >
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600">
          Find answers to common questions about our services and features. For
          more details, contact our support team.
        </p>
      </div>
      <div className="faq-search mb-6 flex">
        <input
          type="text"
          placeholder="Ask Q! e.g Tell me about key Features."
          className="flex-1 p-2 border border-gray-300 rounded-l-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
        />
        <button className="p-2 bg-red-600 text-white rounded-r-lg">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>

      {filteredFaqs.length > 0 ? (
        filteredFaqs.map((faq, index) => (
          <div key={index} className="faq-item mb-4 border rounded-lg p-4">
            <h2
              className="flex justify-between items-center text-lg font-semibold cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}{" "}
              <span>
                {openQuestion === index ? (
                  <span className="material-symbols-outlined">expand_more</span>
                ) : (
                  <span className="material-symbols-outlined">chevron_right</span>
                )}
              </span>
            </h2>
            {openQuestion === index && (
              <p className="mt-2 text-[#475467]">{faq.answer}</p>
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No matching results found.</p>
      )}

      <div className="faq-footer text-center mt-6">
        <p className="text-gray-600">
          Haven't got your answer?{" "}
          <span onClick={()=>{navigate("/support")}} className="text-[#0000EE] hover:underline">
            Contact our support now
          </span>
        </p>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "What is RMax?",
    answer:
      "Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.",
  },
  {
    question: "How does it work?",
    answer: "Details about how it works.",
  },
  {
    question: "How much does it cost?",
    answer: "Details about the cost.",
  },
];

export default FAQs;

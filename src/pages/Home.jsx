import React from "react";
import Step from "../components/Step";
import { Link } from "react-router-dom";
import PricingCard from "../components/PricingCard";
import Services from "../components/Services";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import ContactSection from "../components/ContactSection";

const Home = () => {
  const steps = [
    { number: 1, description: "Submit Intake Form" },
    {
      number: 2,
      description: "We do the search and curation for list of jobs",
    },
    { number: 3, description: "You approve, we do the tedious part(applying)" },
    { number: 4, description: "You get the interviews" },
  ];

  const plans = [
    {
      title: "Starter",
      price: "$50/wk",
      features: [
        "Everything in Promo plan",
        "Resume review and feedback report - format and storytelling",
        "Dedicated search specialist",
        "Up to 50 applications/week",
        "Additional apps $1.5/application",
        "Analyst support with 6 hour SLA / PST hours",
      ],
    },
    {
      title: "Plus",
      price: "$100/wk",
      features: [
        "Everything in Starter",
        "Up to 75 apps/week",
        "Apply to up to 15 job titles",
        "Analyst support (6-hour SLA)",
        "Dedicated application team on Pacific hours",
      ],
    },
    {
      title: "Advanced",
      price: "$150/wk",
      features: [
        "Custom Resumes & CL's",
        "Support for complex search criteria",
        "Up to 20 customized applications/week",
        "Senior advanced application team w/ resume specialist",
        "Access to Founder, CEO and Executive coaches",
      ],
    },
  ];

  const resume=[
    {

    }
  ]

  return (
    <>
      <div className="bg-blue-600 w-full h-8 mt-5"></div>
      <div>
        <div className="mt-10 ml-50">
          <h1 className="text-4xl font-bold">Land Job Interviews</h1>
          <span className="text-4xl font-bold">10x Faster</span>
          <div className="flex">
            <div className=" space-y-4 mt-10 flex flex-col">
              {steps.map((step) => (
                <Step
                  key={step.number}
                  stepNumber={step.number}
                  stepDescription={step.description}
                />
              ))}
            </div>
            <img
              src="https://static.wixstatic.com/media/41ecaa_ece949177dc14b438c5b2501ca635540~mv2.png/v1/crop/x_0,y_93,w_1592,h_2061/fill/w_346,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-10-15%20at%205_26_08%20PM.png"
              className="w-[17%] ml-30"
              alt=""
            />
          </div>
          <a href="https://drive.google.com/file/d/1v-LCTCc3yMW3gAGHXbrwNYs4C0C7oblf/view">
            {" "}
            <button className="ml-[53%] mt-3 bg-blue-600 text-white rounded py-1.5 px-2 hover:bg-blue-800">
              Download Our Free Ebook
            </button>
          </a>
        </div>
      </div>
      <div className="bg-gray-100 w-full h-screen">
        <div className="">
          <h1 className="text-3xl font-bold ml-50 pt-8">About Us</h1>
          <div className="flex">
            <img
              src="https://static.wixstatic.com/media/5bc310_4e0b1ef9b859423da8016acc403cb337~mv2.png/v1/fill/w_248,h_436,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pro%203.png"
              className="w-[8%] ml-60 mt-10"
              alt=""
            />
            <div className="ml-10 mt-10">
              <p className=" mt-4 w-[85%]">
                Ashwin is the founder of mobiusengine.ai. He is an accomplished
                senior executive with over 20 years of experience in cloud
                infrastructure and financial services. With over 2 decades of
                experience at Google and JP Morgan, Ashwin held various product
                and GTM roles. Ashwin is an MBA holder from Yale University.
              </p>

              <p className=" mt-4 w-[85%]">
                Ashwin's vision with Mobius is to give job seekers a significant
                advantage in securing the roles of their dreams.
              </p>
              <a
                href="https://www.linkedin.com/in/agrawalashwin/"
                className="mt-4 text-blue-500"
              >
                Ashwin's LinkedIn
              </a>
            </div>
          </div>
          <div className="flex">
            <img
              src="https://static.wixstatic.com/media/41ecaa_b58e267d5c894607b3235816f7171d92~mv2.jpeg/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-02-24%20at%206_03_02%20PM.jpeg"
              className="w-[10%] ml-53 mt-10 "
              alt=""
            />
            <div className="ml-10 mt-10">
              <p className=" mt-4 w-[85%]">
                Nicole is an Executive coach at Mobius specializing in resume
                builds and career advisory.
              </p>

              <p className=" mt-4 w-[85%]">
                With a B.S. in Business Administration from UC Berkeley and 7+
                years of experience in AI-driven product strategy, she has seen
                firsthand how the proper positioning opens doors. She takes a
                targeted, results-driven approach to help clients confidently
                stand out and land roles that truly match their skills and
                potential.
              </p>
              <a
                href="https://www.linkedin.com/in/nicole-lau-01414517/"
                className="mt-4 text-blue-500"
              >
                Nicole's LinkedIn
              </a>
            </div>
          </div>

          <Link to="/about" className="ml-50 underline text-xl mt-5">
            Learn More about board of advisors
          </Link>
          <p className="text-gray-700 ml-50 mt-3">
            Follow us on our{" "}
            <a href="" className="underline">
              LinkedIn page
            </a>
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold ml-50 mt-4">
          What our clients have to say
        </h1>
        <div className="flex justify-center items-center">
          <div>
            <p className="ml-55 mt-4 w-[50%] text-gray-700">
              Holly is a senior executive who got over 10 job interviews and an
              offer she accepted
            </p>
            <div className="aspect-w-16 aspect-h-9 w-[40%] ml-55 mt-4 pb-10">
              <iframe
                width="380"
                height="200"
                src="https://www.youtube.com/embed/2q30UklnQl0"
                title="Customer Testimonial - Holly"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div>
            <p className="ml-40 mt-4 w-[50%] text-gray-700">
              Joshua is a senior software engineer who has accepted an offer
            </p>
            <div className="aspect-w-16 aspect-h-9 w-[40%] ml-40 mr-15 mt-4 pb-10">
              <iframe
                width="380"
                height="200"
                src="https://www.youtube.com/embed/e3Vyi-wnorM"
                title="Joshua&#39;s experience with Mobiusengine.ai"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <p className="ml-[40%] text-gray-700">
          More Testimonial Content at our{" "}
          <a
            href="https://www.reddit.com/r/mobiusengine/?rdt=56635"
            className="underline"
          >
            LinkedPage
          </a>
        </p>
      </div>
      <div className="bg-gray-100 w-full h-screen">
        <h1 className="text-4xl font-bold ml-50 mt-4">
          Mobius Advanced - Custom Resume for Every Job
        </h1>
        <p className="ml-[30%] mt-2 text-gray-700">
          We use our own proprietary AI model to customize each job application
        </p>
        <p className="ml-[36%] text-xs text-gray-700">
          *currently only available to our advanced customers
        </p>
        <div className="aspect-w-16 aspect-h-9 w-[40%] ml-60 mr-15 mt-4 pb-10">
          <iframe
            width="800"
            height="400"
            src="https://www.youtube.com/embed/IGcxoasEfs8"
            title="Mobius - Resume Customization for each job"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold ml-50 mt-3">Why Choose Us?</h1>
        <p className="ml-50 mt-5">
          <span className="font-semibold">Trusted - </span>Our founding team has
          over 40 years of experience in tech and recruiting.{" "}
        </p>
        <p className="ml-50 mt-5">
          <span className="font-semibold">Human based service - </span>Dedicated
          and trained team. 360 degree services to support your career
          transition
        </p>
        <p className="ml-50 mt-5">
          <span className="font-semibold">Be the first - </span>Our advanced AI
          and human driven search and apply daily ensures you are the first to
          show up.
        </p>
      </div>
      <div className="bg-gray-100 w-full h-screen">
        <PricingCard />
      <div className="bg-gray-100 min-h-screen flex justify-center items-start py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full px-6 h-[50%]">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-blue-500"
          >
            <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
            <p className="text-3xl font-bold text-blue-600 mb-6">
              {plan.price}
            </p>
            <ul className="text-gray-700 text-left space-y-3 ">
              {plan.features.map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>
            <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300">
              Sign up now
            </button>
          </div>
        ))}
      </div>
    </div>
   <div className="bg-gray-100 w-full h-screen">
   <h1 className="text-4xl font-bold ml-[30%] mt-4">
    Resume Building & Coaching
        </h1>
        <Services/>
   </div>
   <ContactSection/>
      </div>
      
   
   
    </>
  );
};

export default Home;

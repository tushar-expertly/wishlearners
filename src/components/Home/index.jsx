import React from "react";
import Layout from "../layout";
// import Slider from "../slider/slider";
// import startupPng from "../../Assets/startup.png";
// import OurExperts from '../OurExperts'
// import Testimonials from '../Testimonials'
import { Link } from "react-router-dom";
// import abouut from "../../Assets/logo/abouut.jpg";
// const ButtonArrow = () => {
//   return (
//     <svg
//       className="size-5 rtl:rotate-180"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M17 8l4 4m0 0l-4 4m4-4H3"
//       />
//     </svg>
//   );
// };

function Home() {
  return (
    <Layout>
      <div className="relative bg-gray-800 text-white">
        <div className="w-full h-64 sm:h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-2">
              Welcome to Wishlearners
            </h1>
            <p className="text-lg sm:text-xl mb-6">
              We are glad to have you here. Learn more about our services.
            </p>
            <Link
              to={"/training"}
              className="bg-white text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <dl className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-12">
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <dt>
                  <p className="font-heading text-xl leading-7 font-semibold text-gray-800 mb-3">
                    About wishlearners
                  </p>
                </dt>
                <dd className="text-base text-gray-600">
                  Welcome to wishlearners, your partner in lifelong learning.
                  We're dedicated to providing accessible, high-quality online
                  training that empowers individuals to thrive in a rapidly
                  evolving world.
                </dd>
              </div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <dt>
                  <p className="font-heading text-xl leading-7 font-semibold text-gray-800 mb-3">
                    Meet Our Experts
                  </p>
                </dt>
                <dd className="text-base text-gray-600">
                  Our team comprises dedicated instructors and seasoned industry
                  professionals with extensive experience. Learn more about our
                  experts on our dedicated team page!
                </dd>
              </div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <dt>
                  <p className="font-heading text-xl leading-7 font-semibold text-gray-800 mb-3">
                    Our Commitment to You
                  </p>
                </dt>
                <dd className="text-base text-gray-600">
                  When you choose Wishlearners, you're not just enrolling in a
                  course; you're joining a community dedicated to your success.
                  From enrollment to completion, we're here to support you every
                  step of the way.
                </dd>
              </div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <dt>
                  <p className="font-heading text-xl leading-7 font-semibold text-gray-800 mb-3">
                    Personalized Learning Experiences
                  </p>
                </dt>
                <dd className="text-base text-gray-600">
                  We are dedicated to providing engaging and interactive online
                  training. Whether you prefer visual, auditory, or hands-on
                  learning, we offer training approaches tailored to your unique
                  learning style.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      {/* <Slider /> */}
    </Layout>
  );
}

export default Home;

// import UserClass from "./UserClass";
// import React from "react";

// class About extends React.Component {
//     constructor(props) {
//         super(props)
//         console.log("Parent constructor");
//     }

//     render() {
//         console.log("Parent render");
//         return (
//             <div>
//                 <h1>This is About Us Page</h1>

//                 <UserClass />
//             </div>

import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-green-100 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mt-8">
          About Us
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          Delivering Happiness, One Meal at a Time! 🍲
        </p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <img
              src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg"
              alt="Fast Delivery"
              className="mx-auto mb-4"
              width={100}
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Fast Delivery
            </h3>
            <p className="mt-2 text-gray-600">
              Get your favorite meals delivered to your doorstep in record time!
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <img
              src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Best Restaurants"
              className="mx-auto mb-4"
              width={100}
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Best Restaurants
            </h3>
            <p className="mt-2 text-gray-600">
              Partnering with top-rated restaurants to ensure quality food.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <img
              src="https://images.pexels.com/photos/4468126/pexels-photo-4468126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Customer Support"
              className="mx-auto mb-4 h-20"
              width={100}
            />
            <h3 className="text-xl font-semibold text-gray-800">
              24/7 Support
            </h3>
            <p className="mt-2 text-gray-600">
              Our dedicated team is here to assist you anytime, anywhere.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/110/603/non_2x/affordable-prices-rubber-stamp-seal-vector.jpg"
              alt="Affordable Pricing"
              className="mx-auto mb-4"
              width={150}
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Affordable Pricing
            </h3>
            <p className="mt-2 text-gray-600">
              Enjoy your favorite dishes without breaking the bank.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <img
              src="https://images.pexels.com/photos/16230559/pexels-photo-16230559/free-photo-of-a-bowl-of-food-on-a-table-with-a-wooden-top.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Hygienic Food"
              className="mx-auto mb-4"
              width={100}
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Hygienic Food
            </h3>
            <p className="mt-2 text-gray-600">
              Food prepared with utmost hygiene and safety standards.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <img
              src="https://images.pexels.com/photos/16230559/pexels-photo-16230559/free-photo-of-a-bowl-of-food-on-a-table-with-a-wooden-top.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Wide Variety"
              className="mx-auto mb-4"
              width={100}
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Wide Variety
            </h3>
            <p className="mt-2 text-gray-600">
              Explore a wide range of cuisines to satisfy your cravings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

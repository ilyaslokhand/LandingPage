import React, { useState } from "react";

const testimonials = [
  {
    text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    name: "Mike Taylor",
    location: "Lahore, Pakistan",
  },
  {
    text: "“Great experience! The team was incredibly supportive and always ready to help. I would definitely recommend them.”",
    name: "Sarah Lee",
    location: "New York, USA",
  },
  {
    text: "“Exceptional service and dedication. Truly appreciate the hard work and attention to detail.”",
    name: "John Doe",
    location: "Sydney, Australia",
  },
];

const Page4 = () => {
  const [activecomment, setActivecomment] = useState(0);

  const handleCommentButton = (index) => {
    setActivecomment(index);
  };

  return (
    <div className=" mt-10 pl-20 pr-20 " id="Testimonials">
      {" "}
      <div className="flex justify-center ">
        <div>
          <p className="font-semibold text-gray-500 text-3xl flex justify-center">
            Testimonials
          </p>
          <p className="font-bold text-3xl sm:flex sm:justify-center text-center">
            What people say about Us.
          </p>
        </div>
      </div>
      <div className="text-center mt-5 bg-white shadow-2xl rounded-2xl p-5">
        <p>{testimonials[activecomment].text}</p>
        <p className="font-semibold mt-6">{testimonials[activecomment].name}</p>
        <p className="text-gray-500 mt-3">
          {testimonials[activecomment].location}
        </p>
      </div>
      <div className="mt-5 flex justify-center">
        {testimonials.map((e, index) => (
          <div
            key={index}
            onClick={() => handleCommentButton(index)}
            style={{
              height: "25px",
              width: "25px",
              backgroundColor: activecomment === index ? "#333" : "#bbb",
              borderRadius: "50%",
              display: "inline-block",
              marginRight: "10px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Page4;

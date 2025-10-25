import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Mail, User, LocateFixed, Send, UserPen } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { gsap } from "gsap";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [myData, setMyData] = useState(() => {
    const savedData = localStorage.getItem("myData");
    return savedData ? JSON.parse(savedData) : [];
  });

  const titleRef = useRef(null);
  const detailsRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);

  const onSubmit = (data) => {
    const updatedData = [...myData, data];
    setMyData(updatedData);
    localStorage.setItem("myData", JSON.stringify(updatedData));
    toast.success("Message Sent Successfully");
    reset();
  };

  const myDetails = [
    {
      icon: <UserPen />,
      title: "Name",
      description: "Souvik Chatterjee",
    },
    {
      icon: <Mail />,
      title: "Email id",
      description: "csouvik2006@gmail.com",
    },
    {
      icon: <User />,
      title: "Social Media",
      description: "Connect with me on github, linkedin and instagram",
    },
  ];

  const formFields = [
    {
      id: 1,
      label: "First Name: ",
      example: "firstName",
    },
    {
      id: 2,
      label: "Last Name: ",
      example: "lastName",
    },
    {
      id: 3,
      label: "Email Id: ",
      example: "emailId",
    },
    {
      id: 4,
      label: "Message:  ",
      example: "messageArea",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      detailsRef.current.children,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        delay: 0.3,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      formRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
      mapRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-40 pb-20 px-4 sm:px-8 md:px-16">
      <div ref={titleRef}>
        <h1 className="text-4xl text-center mx-auto font-semibold text-white">
          Get in Touch
        </h1>
        <p className="mt-4 text-[20px] text-gray-300 text-center max-w-2xl">
          Have a question or want to work together? Drop me a message!
        </p>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row items-start justify-center gap-8 w-full max-w-6xl">
        <div
          ref={detailsRef}
          className="flex flex-col items-start gap-4 p-5 w-full lg:w-1/2"
        >
          {myDetails.map((detail, index) => {
            return (
              <div key={index} className="flex flex-row items-center gap-2">
                <div className="text-blue-500 bg-blue-50 p-3 rounded-lg">
                  {detail.icon}
                </div>
                <div className="flex flex-col items-start gap-1">
                  <h1 className="text-white text-xl font-semibold">
                    {detail.title}
                  </h1>
                  <p className="text-blue-400 text-[15px] font-normal break-words">
                    {detail.description}
                  </p>
                </div>
              </div>
            );
          })}
          <div
            ref={mapRef}
            className="flex flex-col items-start gap-3 mt-5 w-full"
          >
            <div className="flex items-center gap-2">
              <LocateFixed size={24} className="text-blue-600" />
              <h1 className="text-2xl font-semibold text-white">Find Me: </h1>
            </div>
            <div className="rounded-lg w-full overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d228.33303939694747!2d86.98108072067726!3d23.699955691279335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1761029370039!5m2!1sen!2sin"
                className="w-full h-64 sm:h-72 md:h-80 lg:h-[300px]"
                allowFullScreen=""
                style={{ border: 0, filter: "invert(100%) grayscale(100%)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div
          ref={formRef}
          className="bg-[#202223] p-5 rounded-lg shadow-md w-full lg:w-1/2  shadow-blue-400"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-stretch gap-5 "
          >
            {formFields.map((field) => {
              return (
                <div key={field.id} className="w-full">
                  <label className="block">
                    <span className="block mb-1 text-white font-medium">
                      {field.label}
                    </span>
                    {field.id === 3 ? (
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        {...register(field.example, {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        })}
                        className="w-full mt-1 px-5 py-2 rounded-lg text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-400"
                      />
                    ) : field.id === 4 ? (
                      <textarea
                        rows="5"
                        placeholder="Your message here..."
                        {...register(field.example, {
                          required: true,
                          maxLength: 500,
                        })}
                        className="w-full mt-1 px-5 py-2 rounded-lg text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-400 resize-none"
                      ></textarea>
                    ) : (
                      <input
                        type="text"
                        placeholder={field.id === 1 ? "John" : "Doe"}
                        {...register(field.example, { required: true })}
                        className="w-full mt-1 px-5 py-2 rounded-lg text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-400"
                      />
                    )}
                  </label>
                </div>
              );
            })}
            <button
              type="submit"
              className="w-full px-5 py-2 rounded-lg bg-blue-500 text-white cursor-pointer active:bg-blue-600 duration-200 transition-all ease-in-out flex items-center gap-2 justify-center"
            >
              <span>
                <Send size={18} />
              </span>
              Send a Message{" "}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="dark"
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        newestOnTop={true}
      />
    </div>
  );
};

export default Contact;

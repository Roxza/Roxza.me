import React from "react";
import Snackbar from "@windui/snackbar";
export default function contact() {
  const contactForm = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    if (result.status) {
      event.target.reset();
      new Snackbar({
        options: {
          duration: 3000,
          speed: 500,
          type: "success",
          align: "right",
          position: "bottom",
        },
        title: "Success",
        message: "We received your submission, thank you!.",
      }).show();
    } else if (result.error === "401") {
      new Snackbar({
        options: {
          duration: 3000,
          speed: 500,
          type: "error",
          align: "right",
          position: "bottom",
        },
        title: "The form could not be submitted",
        message: "Please fill in all fields.",
      }).show();
    } else {
      new Snackbar({
        options: {
          duration: 3000,
          speed: 500,
          type: "error",
          align: "right",
          position: "bottom",
        },
        title: "Error",
        message: "An unexpected error has occurred, please try again later.",
      }).show();
    }
  };
  return (
    <>
      <div className="p-10">
        <div className="py-5 space-y-5">
          <div className="relative mb-5 w-full">
            <h1 className="heading-text absolute bottom-5 left-5 text-3xl text-black dark:text-white font-bold text-center">
              <span className="text-aqua-500">Contact</span>
            </h1>
            <h1 className="heading-text-small absolute bottom-1 left-5 text-sm text-black dark:text-zinc-100  font-light text-center">
              You can contact me by filling out the fields below.
            </h1>
          </div>
          <div>
            <form name="contact" id="contact" onSubmit={contactForm}>
              <label
                className="mx-auto block lg:w-1/2 md:w-2/3 w-full text-sm opacity-75"
                htmlFor="email"
              >
                E-Mail:
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-200 dark:hover:bg-[#101010] dark:bg-[#080808] text-black dark:text-white py-2 px-4 text-sm mx-auto block input lg:w-1/2 md:w-2/3 focus:outline-none rounded-md w-full"
                placeholder="xxx@gmail.com"
              />
              <label
                className="mt-3 mx-auto block lg:w-1/2 md:w-2/3 w-full text-sm opacity-75"
                htmlFor="email"
              >
                Name:
              </label>
              <input
                name="name"
                type="text"
                className="bg-gray-200 dark:hover:bg-[#101010] dark:bg-[#080808] text-black dark:text-white  py-2 px-4 text-sm mx-auto block input lg:w-1/2 md:w-2/3 focus:outline-none rounded-md w-full"
                placeholder="Roxza"
              />
              <label
                className="mt-3 mx-auto block lg:w-1/2 md:w-2/3 w-full text-sm opacity-75"
                htmlFor="email"
              >
                Description:
              </label>
              <textarea
                name="message"
                type="text"
                placeholder="Description"
                className="bg-gray-200 dark:hover:bg-[#101010] dark:bg-[#080808] text-black dark:text-white color-white py-2 px-4 text-sm mx-auto block input lg:w-1/2 md:w-2/3 focus:outline-none rounded-md w-full"
              ></textarea>
              <div className="flex items-center justify-center py-5">
                <button
                  type="submit"
                  className="text-center bg-gray-400 hover:bg-gray-500 text-black dark:bg-zinc-500/5 dark:hover:bg-zinc-500/10 dark:text-white w-32 h-10 cursor-pointer py-1.5 px-3 rounded-md transition-all duration-200"
                >
                  <a style={{ fontSize: "17px" }}>Submit</a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

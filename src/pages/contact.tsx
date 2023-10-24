import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div className="w-1/2 m-auto bg-primary text-secondary border rounded-md px-8 py-4 grid grid-cols-2">
        <div className="col-span-1 flex flex-col justify-center">
          <div className="pl-4">
            <h3 className="text-2xl">Admin Details:</h3>
            <p className="mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              tparmar3@binghamton.edu
            </p>
            <p className="mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              +1 607 405 7650
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="text-4xl">Contact</h2>
          <div className="pl-4 mt-4">
            <div className="basic-input-group">
              <h3>Name:</h3>
              <input type="text" />
            </div>
            <div className="basic-input-group">
              <h3>Email:</h3>
              <input type="text" />
            </div>
            <div className="basic-input-group">
              <h3>Message:</h3>
              <textarea rows={5} />
            </div>
            <div className=" text-primary font-semibold">
              <button className="bg-lightHighlight px-4 py-2 rounded-md ">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

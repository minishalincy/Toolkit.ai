import React from "react";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <img className="h-9" src={assets.logo} alt="dummyLogoDark" />
          <p className="mt-6 text-sm">
            Experience the power of AI with Toolkit.ai transform your content
            creation with our suite of premium AI tools. Write articles,generate
            images, and enhance your workflow.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 mb-5">Social</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                Twitter
              </a>
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                Facebook
              </a> */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                GitHub
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 mb-5">Contact Us</h2>
            <div className="flex flex-col space-y-3 text-sm">
              <div>
                <p className="font-medium">Email</p>
                <a
                  href="mailto:contact@example.com"
                  className="hover:text-indigo-600"
                >
                  contact@example.com
                </a>
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+1234567890" className="hover:text-indigo-600">
                  +1 (234) 567-890
                </a>
              </div>
              <button className="bg-primary text-white w-32 h-9 rounded mt-2 hover:bg-indigo-700">
                Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2025 ©{" "}
        <a href="https://personal-portfolio-q9lq.vercel.app/">MinishaLincy</a>.
        All Right Reserved.
      </p>
    </footer>
  );
}

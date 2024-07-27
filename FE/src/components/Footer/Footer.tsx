import React from "react";

const Footer = () => {
  return (
    <div className="mt-[50px]">
      <footer className="bg-blue-600 text-white py-4 sticky bottom-0 left-0 w-full">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; 2024 Your Company. All rights reserved.</p>
        {/* Uncomment this block if you need navigation links */}
        {/* <ul className="flex justify-center space-x-4">
          <li>
            <a href="/privacy" className="hover:text-blue-300">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:text-blue-300">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-300">
              Contact Us
            </a>
          </li>
        </ul> */}
      </div>
    </footer>
    </div>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center">
          <p className="text-gray-300 text-center">
            © {currentYear} Sadik Zaman Abir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

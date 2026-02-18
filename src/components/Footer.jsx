import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 border-t border-violet-500/10">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center">
          <p className="text-slate-400 text-center">
            © {currentYear} Sadik Zaman Abir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

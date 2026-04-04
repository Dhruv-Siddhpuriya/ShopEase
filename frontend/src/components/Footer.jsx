import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 py-8">
      <div className="container mx-auto px-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
        <p className="text-sm mt-2">Built for demo purposes.</p>
      </div>
    </footer>
  );
};

export default Footer;

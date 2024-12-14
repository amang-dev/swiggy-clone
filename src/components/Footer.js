const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-white">Swiggy Clone</h3>
              <p className="text-sm mt-2">
                Your favorite meals, delivered to your doorsteps in no time. Experience fast, reliable, and delightful delivery!
              </p>
            </div>
  
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Contact</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Terms of Service</a>
                </li>
              </ul>
            </div>
  
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-white mb-3">Stay Updated</h4>
              <p className="text-sm mb-4">
                Subscribe to our newsletter for the latest updates and offers!
              </p>
              <div className="flex flex-col md:flex-row items-center md:justify-end">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md text-gray-800 focus:outline-none"
                />
                <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-2 md:mt-0 md:ml-3 hover:bg-green-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center px-6">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
  
            <p className="text-sm text-gray-500 text-center">
              © {new Date().getFullYear()} Swiggy Clone. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
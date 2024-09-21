import { useState, useEffect } from 'react';
import logo from "../assets/logo.jpeg"; 

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isHowItWorksOpen, setHowItWorksOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isUseCasesOpen, setUseCasesOpen] = useState(false);
  const [isNeedHelpOpen, setNeedHelpOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeAllDropdownsExcept = (dropdown) => {
    if (dropdown !== "howItWorks") setHowItWorksOpen(false);
    if (dropdown !== "services") setServicesOpen(false);
    if (dropdown !== "useCases") setUseCasesOpen(false);
    if (dropdown !== "needHelp") setNeedHelpOpen(false);
  };

  const toggleHowItWorks = () => {
    setHowItWorksOpen(!isHowItWorksOpen);
    closeAllDropdownsExcept("howItWorks");
  };

  const toggleServices = () => {
    setServicesOpen(!isServicesOpen);
    closeAllDropdownsExcept("services");
  };

  const toggleUseCases = () => {
    setUseCasesOpen(!isUseCasesOpen);
    closeAllDropdownsExcept("useCases");
  };

  const toggleNeedHelp = () => {
    setNeedHelpOpen(!isNeedHelpOpen);
    closeAllDropdownsExcept("needHelp");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar-menu') && !event.target.closest('.hamburger')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center text-black px-3 py-1.5 md:px-28 bg-white drop-shadow-md">
      <a href="#" className="">
        <img src={logo} alt="Logo" className="w-40 hover:scale-105 transition-all" />
      </a>

      <button onClick={toggleMenu} className="hamburger flex flex-col justify-between h-6 w-8 md:hidden">
        <span className="block w-8 h-1 bg-green-500"></span>
        <span className="block w-8 h-1 bg-green-500"></span>
        <span className="block w-8 h-1 bg-green-500"></span>
      </button>

      <ul className="hidden md:flex items-center gap-12 font-semibold text-base">
        <li>Catalog</li>
        <li className="relative">
          <button onClick={toggleHowItWorks} className="flex items-center focus:outline-none">
            How it works
            <span className={`ml-2 transform transition-transform ${isHowItWorksOpen ? 'rotate-180' : 'rotate-0'}`}>
              ▼
            </span>
          </button>
          {isHowItWorksOpen && (
            <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg p-4 rounded-md w-48 text-sm">
              <li className="py-2 hover:bg-gray-100 cursor-pointer">How Printify works</li>
              <li className="py-2 hover:bg-gray-100 cursor-pointer">Print on demand</li>
              <li className="py-2 hover:bg-gray-100 cursor-pointer">Printify quality promise</li>
              <li className="py-2 hover:bg-gray-100 cursor-pointer">What to sell?</li>
            </ul>
          )}
        </li>
        <li>Pricing</li>
        <li>Blog</li>
        <li className="relative">
          <button onClick={toggleServices} className="flex items-center focus:outline-none">
            Services
            <span className={`ml-2 transform transition-transform ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`}>
              ▼
            </span>
          </button>
          {isServicesOpen && (
            <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg p-4 rounded-md w-48 text-sm">
              <li className="py-2 hover:bg-gray-100 cursor-pointer">Printify Studio</li>
              <li className="py-2 hover:bg-gray-100 cursor-pointer">Printify Express Delivery</li>
              <li className="py-2 hover:bg-gray-100 cursor-pointer">Transfer Products</li>
              <li className="py-2 hover:bg-gray-100 cursor-pointer">Order In Bulk</li>
              <li className="py-2 hover:bg-gray-100 cursor-pointer">Experts Program</li>
            </ul>
          )}
        </li>
        <li className="relative">
          <button onClick={toggleNeedHelp} className="flex items-center focus:outline-none">
            Need help?
            <span className={`ml-2 transform transition-transform ${isNeedHelpOpen ? 'rotate-180' : 'rotate-0'}`}>
              ▼
            </span>
          </button>
          {isNeedHelpOpen && (
            <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg p-4 rounded-md w-48 text-sm">
              <li className="py-2 hover:bg-gray-100 cursor-pointer">Help Center</li>
              <li className="py-2 hover:bg-gray-100 cursor-pointer">Contacts</li>
              <li className="py-2 hover:bg-gray-100 cursor-pointer">My Requests</li>
            </ul>
          )}
        </li>
      </ul>

      <button className="border border-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-all">
        Log in
      </button>
      <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-all">
        Sign up
      </button>

      {isMenuOpen && (
        <ul className="navbar-menu fixed inset-0 bg-green-500 z-100 shadow-md md:hidden flex flex-col p-4 font-semibold text-sm text-black">
          <li className="py-2 hover:bg-green-600 cursor-pointer">Catalog</li>
          <li className="py-2 hover:bg-green-600 cursor-pointer" onClick={toggleHowItWorks}>How it works</li>
          <li className="py-2 hover:bg-green-600 cursor-pointer" onClick={toggleServices}>Services</li>
          <li className="py-2 hover:bg-green-600 cursor-pointer" onClick={toggleUseCases}>Use-cases</li>
          <li className="py-2 hover:bg-green-600 cursor-pointer" onClick={toggleNeedHelp}>Need help?</li>
          <li className="py-2 hover:bg-green-600 cursor-pointer">Pricing</li>
          <li className="py-2 hover:bg-green-600 cursor-pointer">Blog</li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;

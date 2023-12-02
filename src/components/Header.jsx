import Logo from "../../assets/Logo.png";
const Header = () => {
  return (
    <div className="w-full h-32">
      <div className="w-full h-full px-16 flex justify-between items-center">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex space-x-12">
          <ul className="flex justify-between items-center space-x-6">
            <li className="text-white font-medium text-xl">About</li>
            <li className="text-white font-medium text-xl">Features</li>
            <li className="text-white font-medium text-xl">Pricing</li>
            <li className="text-white font-medium text-xl">Help</li>
          </ul>
          <button className="bg-[#F53855] text-black px-8 py-2 rounded-full font-medium">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

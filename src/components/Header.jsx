import { Link } from "react-router-dom";
import { logo } from "../constant";

const navArray = [
  { title: "Home", link: "/" },
  { title: "Todo", link: "/todo" },
  { title: "Projects", link: "/projects" },
  { title: "Contact", link: "/contact" },
];

const Header = () => {
  return (
    <div className="h-20 shadow-lg shadow-gray-300">
      <div className="max-w-[1140px] mx-auto px-4 lg:px-0 h-full flex items-center justify-between">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 p-2 border border-gray-500 rounded-full"
          />
        </Link>
        <div className=" hidden md:inline-flex gap-5">
          {navArray?.map((item) => (
            <Link
              to={item?.link}
              className="text-sm text-gray-700 font-semibold cursor-pointer hover:text-blue-600 duration-200 relative group"
              key={item?.title}
            >
              {item?.title}
              <span className=" absolute bottom-0 left-0 w-0 h-[1px] group-hover:w-full duration-500 bg-black" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

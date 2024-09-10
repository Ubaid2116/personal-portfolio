import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 px-4 text-[#ADB7BE] text-lg font-medium rounded-md transition-colors duration-300 hover:text-[#e047ffb2] hover:bg-[#33353F] hover:shadow-lg"
    >
      {title}
    </Link>
  );
};

export default NavLink;

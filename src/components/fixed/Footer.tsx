import { navList } from "../../utils/constants";

export const Footer = () => {
  return (
    <footer className="py-2 border-t border-gray-200">
      <ul className="text-md flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-8">
        <li>
          <span>
            ©<a href="#">Survz</a> 2024, All rights reserved.
          </span>
        </li>
        {navList.map((nav, index) => (
          <li key={index}>
            <a href={`${nav.url}`}> {nav.title} </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

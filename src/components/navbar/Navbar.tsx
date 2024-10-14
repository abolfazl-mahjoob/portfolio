import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { GoGoal, GoHome, GoMention, GoPerson } from "react-icons/go";
import { ReactElement } from "react";

type ListNav = {
  title: string;
  icon: ReactElement;
  link: string;
}[];

function Navbar() {
  const listNav: ListNav = [
    {
      title: "home",
      icon: <GoHome />,
      link: "/",
    },
    {
      title: "about",
      icon: <GoPerson />,
      link: "/about",
    },
    {
      title: "contact",
      icon: <GoMention />,
      link: "/contact",
    },
    {
      title: "experts",
      icon: <GoGoal />,
      link: "/experts",
    },
  ];
  return (
    <ul className="navbar">
      {listNav.map((el) => (
        <li key={el.link}>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to={el.link}
          >
            {el.icon}
            <span>{el.title}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;

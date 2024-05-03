import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavLinkWithActiveClassProps {
  to: string;
  exact?: boolean;
  className?: string;
  children: ReactNode;
}

export const NavLinkWithActiveClass: React.FC<NavLinkWithActiveClassProps> = ({ to, exact,className, children }) => {
  const isActive = exact ? window.location.pathname === to : window.location.pathname.startsWith(to);

  return (
    <li>
      <NavLink to={to} className={isActive ? `${className} active` : `${className || ''}`}>
        {children}
      </NavLink>
    </li>
  );
};
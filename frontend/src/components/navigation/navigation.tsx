import { useState } from "react";
import Middle from "./middle";
import NavLinks from "./nav-links";
import Top from "./top";

const Navigation: React.FC = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Top />
      <Middle setShowNavLinks={setShowNavLinks} />
      <NavLinks
        isNavLinkVisible={showNavLinks}
        setShowNavLinks={setShowNavLinks}
      />
    </div>
  );
};

export default Navigation;

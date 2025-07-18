import { navItems } from "../../Constants/Paths";
import NavlinkComponent from "../../Hocs/NavlinkComponent";
import { SideNavbarWrapper } from "./styledComponents";

const SideNavBar = () => {
  return (
    <SideNavbarWrapper>
      <nav>
        {navItems.map((each) => {
          return  <NavlinkComponent key={each.path} details={each}/> 
        })}
      </nav>
    </SideNavbarWrapper>
  );
};
export default SideNavBar;

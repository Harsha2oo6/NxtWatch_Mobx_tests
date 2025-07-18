import { navItems, type NavItem } from "../../Constants/Paths";
import NavlinkComponent from "../../Hocs/NavlinkComponent";
import Footer from "../Footer";
import { NavItemsWrapper, SideNavbarWrapper } from "./styledComponents";

export const RenderNavlinks = ({ navItems }: { navItems: NavItem[] }) => {
  return (
    <>
      {navItems.map((each) => (
        <NavlinkComponent key={each.path} details={each} />
      ))}
    </>
  );
};

const SideNavBar = () => {
    
  return (
    <SideNavbarWrapper>
      <NavItemsWrapper>
        <RenderNavlinks navItems={navItems}/>
      </NavItemsWrapper>
      <Footer/>
    </SideNavbarWrapper>
  );
};
export default SideNavBar;

import { NavlinkWrapper, NavlinkContent, NavIconWrapper } from "./styledComponents";

const NavlinkComponent = (props: any) => {
  const { path, name, icon } = props.details;

  return (
    <NavlinkWrapper to={path} >
      {({ isActive }) => (
        <NavlinkContent $isActive={isActive}>
          <NavIconWrapper>{icon}</NavIconWrapper>
          <p>{name}</p>
        </NavlinkContent>
      )}
    </NavlinkWrapper>
  );
};

export default NavlinkComponent;

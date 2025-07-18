import { NavlinkWrapper } from "./styledComponents";

const NavlinkComponent = (props: any) => {
  const { toPath, name, icon } = props.details;

  return (
    <NavlinkWrapper
      to={toPath}
      end
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      <div>
        <div>{icon}</div>
        <p>{name}</p>
      </div>
    </NavlinkWrapper>
  );
};

export default NavlinkComponent;

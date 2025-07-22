import { PathArray } from "../../Constants/Paths";
import { IconContainer, RouteHeaderWrapper, RouteName } from "./styledComponents";

type Props = {
  routeName: string;
};

const RouteHeader = ({ routeName }: Props) => {
  const routeDetails = PathArray.find((each) => each.name === routeName);

  if (!routeDetails) return null;

  const { name, icon } = routeDetails;

  return (
    <RouteHeaderWrapper>
      <IconContainer >{icon}</IconContainer>
      <RouteName >{name}</RouteName>
    </RouteHeaderWrapper>
  );
};

export default RouteHeader;

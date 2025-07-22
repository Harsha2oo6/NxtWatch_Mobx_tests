import { useState } from "react";
import { LightThemeLogo } from "../../Common/Images";
import {
  AddRemoveButton,
  AdvertisementWrapper,
  AdvertisementPara,
  GetItNow,
} from "./styledComponents";
import { LogoImage } from "../Header/styledComponents";

const Advertisement = () => {
  const [isMounted, setIsMounted] = useState(true);
  return isMounted ? (
    <AdvertisementWrapper>
      <LogoImage height="40px" width="160px" src={LightThemeLogo} alt="logo" />
      <AddRemoveButton onClick={() => setIsMounted(false)}>x</AddRemoveButton>

      <AdvertisementPara>
        Buy Nxt Watch Premium prepaid plans with <br></br> UPI
      </AdvertisementPara>
      <div>
        <GetItNow className="getit">GET IT NOW</GetItNow>
      </div>
    </AdvertisementWrapper>
  ) : null;
};
export default Advertisement;

import { FacebookIcon, LinkedinIcon, TwitterIcon } from "../../Common/Icons";
import { FooterWrapper, H3, Icon, IconsWrapper, Para } from "./styledComponents";

const Footer = () => {
  return (
    <FooterWrapper>
      <H3>CONTACT US</H3>
      <IconsWrapper>
        <Icon className="facebook"><FacebookIcon /></Icon>
        <Icon className="twitter"><TwitterIcon /></Icon>
        <Icon className="linkedin"><LinkedinIcon /></Icon>
      </IconsWrapper>
      <Para>
        Enjoy! Now to see your <br />
        channels and <br />
        recommendations!
      </Para>
    </FooterWrapper>
  );
};
export default Footer;

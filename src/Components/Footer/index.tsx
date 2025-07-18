import { FacebookIcon, LinkedinIcon, TwitterIcon } from "../../Common/Icons";
import { FooterWrapper, Icon, IconsWrapper } from "./styledComponents";

const Footer = () => {
  return (
    <FooterWrapper>
      <h3>CONTACT US</h3>
      <IconsWrapper>
        <Icon><FacebookIcon /></Icon>
        <Icon><TwitterIcon /></Icon>
        <Icon><LinkedinIcon /></Icon>
      </IconsWrapper>
      <p>
        Enjoy! Now to see your <br />
        channels and <br />
        recommendations!
      </p>
    </FooterWrapper>
  );
};
export default Footer;

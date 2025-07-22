
import { themeStore } from '../../Stores/ThemeStore/themeStore';
import { PagenotfoundDark, PagenotfoundLight } from '../Images';
import {
  PageContainer,
  NoPageImage,
  TextContainer,
  Heading,
  Paragraph} from './styledComponents' 

const PageNotFound = () => {
 

  const imageUrl = themeStore.isDark
    ? PagenotfoundDark
    : PagenotfoundLight;

  return (
    <PageContainer>
      <NoPageImage src={imageUrl} alt="Page not found" />
      <TextContainer>
        <Heading>Page not found</Heading>
        <Paragraph>
          We are sorry, the page you requested could not be found
        </Paragraph>
      </TextContainer>
    </PageContainer>
  );
};

export default PageNotFound;

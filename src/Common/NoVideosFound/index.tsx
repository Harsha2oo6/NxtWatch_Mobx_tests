
import { NovideosImage } from '../Images';
import {
  NoVideosWrapper,
  NoVideosImage,
  Heading,
  SubText,
  RetryButton,
} from './styledComponents';

export const RenderNoVideosView = () => {
  
  return (
    <NoVideosWrapper>
      <NoVideosImage
        src={NovideosImage}
        alt="noVideos"
      />
      <Heading>No Search results found</Heading>
      <SubText>Try different key words or remove search filter</SubText>
      <RetryButton >Retry</RetryButton>
    </NoVideosWrapper>
  );
};



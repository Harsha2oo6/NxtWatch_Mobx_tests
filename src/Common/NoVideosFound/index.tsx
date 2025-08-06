
import type { RenderFailureProps } from '../FailurePage';
import { NovideosImage } from '../Images';
import {
  NoVideosWrapper,
  NoVideosImage,
  Heading,
  SubText,
  RetryButton,
} from './styledComponents';

export const RenderNoVideosView = ({onRetry}:RenderFailureProps) => {
  
  return (
    <NoVideosWrapper data-testid="novideosview">
      <NoVideosImage
        src={NovideosImage}
        alt="noVideos"
      />
      <Heading>No Search results found</Heading>
      <SubText>Try different key words or remove search filter</SubText>
      <RetryButton onClick={onRetry}>Retry</RetryButton>
    </NoVideosWrapper>
  );
};



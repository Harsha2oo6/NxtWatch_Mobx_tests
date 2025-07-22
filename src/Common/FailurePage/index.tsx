import {
  FailureImage,
  Heading,
  SubHeading,
  Description,
  FailureWrapper,
} from './styledComponents';
import { themeStore } from '../../Stores/ThemeStore/themeStore';
import { RetryButton } from '../NoVideosFound/styledComponents';

type RenderFailureProps = {
  onRetry: () => void;
};

const RenderFailure = ({ onRetry }: RenderFailureProps) => {
  return (
    <FailureWrapper>
      <FailureImage
        src={
          themeStore.isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failed"
      />
      <Heading>Oops! Something went wrong</Heading>
      <SubHeading>
        We are having some trouble to complete your request.
      </SubHeading>
      <Description>Please try again</Description>
      <RetryButton onClick={onRetry}>Retry</RetryButton>
    </FailureWrapper>
  );
};

export default RenderFailure;

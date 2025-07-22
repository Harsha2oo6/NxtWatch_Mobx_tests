import { BeatLoader } from "react-spinners";
import styled from "styled-components";
import { themeStore } from "../../Stores/ThemeStore/themeStore";

const LoaderWrapper = styled.div`
  min-height: 50vh; 
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => (theme.isDark ? "#181818" : "#f8f8f4")};
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <BeatLoader size={13} color={themeStore.theme === "dark" ? "white" : "#000"} />
    </LoaderWrapper>
  );
};

export default Loader;

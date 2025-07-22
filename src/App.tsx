
import { ThemeProvider } from "styled-components";
import Layout from "./Hocs/Layout";
import { GlobalStyle } from "./Hocs/Layout/styledComponents";
import AppRoutes from "./Routes";
import { themeStore } from "./Stores/ThemeStore/themeStore";
// import { darkTheme,lightTheme } from "./Stores/ThemeStore/themeStore";
import { observer } from "mobx-react-lite";

const  App=observer(()=> {
  return (
    <>
    <ThemeProvider theme={{isDark:themeStore.isDark}}>
      <GlobalStyle />
      <Layout>
        <AppRoutes/>
      </Layout>
      </ThemeProvider>
    </>
  );
})

export default App;

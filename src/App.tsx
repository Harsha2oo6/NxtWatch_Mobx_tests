
import Layout from "./Hocs/Layout";
import { GlobalStyle } from "./Hocs/Layout/styledComponents";
import AppRoutes from "./Routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <AppRoutes/>
      </Layout>
    </>
  );
}

export default App;

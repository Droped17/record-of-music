import { useAuthen } from "./hooks/use-auth";
import Route from "./router/route";
import Loading from "./components/Loading";
import ProductContextProvider from "./context/ProductContext";
function App() {
  const { loadingTime } = useAuthen();
  if (loadingTime) {
    return <Loading></Loading>;
  }

  return (
    <>
      <ProductContextProvider>
        <Route></Route>
      </ProductContextProvider>
    </>
  );
}

export default App;

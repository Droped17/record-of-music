import { useAuthen } from "./hooks/use-auth";
import Route from "./router/route";
import Loading from "./components/Loading";
import ProductContextProvider from "./context/ProductContext";
import CartContextProvider from "./context/CartContext";
function App() {
  const { loadingTime } = useAuthen();
  if (loadingTime) {
    return <Loading></Loading>;
  }

  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Route></Route>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;

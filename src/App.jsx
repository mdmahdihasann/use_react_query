import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import "./global.css";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import { useState } from "react";
import ProductAdd from "./components/ProductAdd";

function App() {
  const [id, setId] = useState(1);
  const queryClient = new QueryClient();

  function handleDetails(id) {
    setId(id);
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="flex">
          <ProductAdd/>
          <Product onDetails={handleDetails} />
          <ProductDetails id={id} />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;

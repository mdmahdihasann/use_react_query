import axios from "axios";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async ({queryKey}) => {
  const response = await axios.get(`http://localhost:8000/${queryKey}`);
  return response.data;
};

const Product = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  if (isLoading) return "feaching data....";
  if (error) return `this is error find ${error.message}`;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold text-center mt-5 mb-4">All Product</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 w-full max-w-[1200px] mx-auto">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Product;

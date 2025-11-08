import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProductDetails = async ({ queryKey }) => {
  
  const response = await axios.get(
    `http://localhost:8000/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

const ProductDetails = ({ id }) => {
    const {
      data: product,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["products", id],
      queryFn: fetchProductDetails,
    });
  if(isLoading) return "Fetching data...";
  if(error) return `this data has error ${error.message}`

  return <div className="p-4 rounded bg-white">
    <img src={product?.thumbnail} />
    <h2 className="text-[20px] font-bold mb-1 mt-2">{product?.title}</h2>
    <p className="mb-2">{product?.description}</p>
    <p className="font-bold">Price: ${product?.price}</p>
  </div>;
};

export default ProductDetails;

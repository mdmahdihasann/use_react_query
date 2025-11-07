import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProductDetails = async ({ queryKey, productId }) => {
  const response = await axios.get(
    `http://localhost:8000/${queryKey}/${productId}`
  );
  return response.data;
};

const ProductDetails = async ({ productId }) => {
    const {
      data: product,
      isLoading,
      error,
    } = useQuery({
      queryKey: ["productDetials", productId],
      queryFn: fetchProductDetails,
    });
  console.log(product);

  return <div>ProductDetails</div>;
};

export default ProductDetails;

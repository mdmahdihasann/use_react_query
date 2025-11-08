import axios from "axios";
import Input from "./reusecomponents/Input";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
function ProductAdd() {
  const queryClient = useQueryClient();
  const [state, setState] = useState({
    title: "",
    description: "",
    price: 0,
    thumbnail: "",
  });

  const mutation = useMutation({
    mutationFn: (updatedData) =>
      axios.post("http://localhost:8000/products", updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  function handleChange(e) {
    const name = e.target.name;
    const value =
      e.target.type === "number" ? e.target.valueAsNumber : e.target.value;

    setState({
      ...state,
      [name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newData = { ...state, id: crypto.randomUUID().toString() };
    mutation.mutate(newData);
  }
  return (
    <div className="ml-2 mt-2">
      <h3 className="mb-2 text-lg ">Product Add</h3>
       <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 rounded p-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Product Title
            </label>
            <Input
              placeholder="Enter product title"
              value={state.title}
              name="title"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Description
            </label>
            <Input
              placeholder="Enter product description"
              value={state.description}
              name="description"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Price
            </label>
            <Input
              placeholder="Enter price"
              type="number"
              value={state.price}
              name="price"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Thumbnail URL
            </label>
            <Input
              placeholder="Enter image URL"
              value={state.thumbnail}
              name="thumbnail"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-200"
          >
            Add Product
          </button>
        </form>
    </div>
  );
}

export default ProductAdd;

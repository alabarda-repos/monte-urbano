// pages/product/[id].js

import Image from "next/image";
import { useRouter } from "next/router";

export const ProductView = () => {
  const router = useRouter();
  const { id } = router.query;

  // Example product data
  const product = {
    id,
    name: "Product Name",
    description: "lorem ipsum dolor sit amet tempor inv  sapien ",
    price: "59.99",
    image: "/images/blog/bp1-1.png",
  };

  return (
    <div className=" mt-8 flex  flex-col rounded-lg bg-white p-4 shadow-md lg:flex-row lg:p-8">
      {/* Left: Product Image */}
      <div className="flex justify-center lg:w-1/2">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="h-auto w-full rounded-lg"
        />
      </div>

      {/* Right: Product Details */}
      <div className="mt-6 lg:mt-0 lg:w-1/2 lg:pl-10">
        <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
        <p className="mt-4 text-gray-600">{product.description}</p>
        <p className="mt-4 text-2xl font-bold text-gray-800">
          R${product.price}
        </p>

        {/* Product Actions */}
        <div className="mt-6 flex items-center space-x-4">
          <button className="rounded-lg bg-mugreen px-6 py-2 text-white hover:bg-mugreen/80 focus:outline-none">
            action 1
          </button>
          <button className="rounded-lg bg-gray-200 px-6 py-2 text-gray-700 hover:bg-gray-300 focus:outline-none">
            action 2
          </button>
        </div>

        {/* Additional Details */}
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-700">Product Details</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
            <li>High-quality material</li>
            <li>Available in various sizes</li>
            <li>One-year warranty</li>
            <li>30-day return policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

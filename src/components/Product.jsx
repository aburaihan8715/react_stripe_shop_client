const Product = () => {
  return (
    <div className="border rounded-md p-5 space-y-1 flex-1">
      <h2 className="font-semibold">GoPro</h2>
      <p className="font-thin">$ 57</p>
      <button className="bg-blue-500 hover:ring-1 hover:ring-yellow-50 capitalize  px-4 py-2 rounded">Add to Cart</button>
    </div>
  );
};

export default Product;

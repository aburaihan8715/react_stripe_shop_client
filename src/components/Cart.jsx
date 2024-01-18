const items = [
  {
    id: "1",
    name: "GoPro",
    price: 57,
    quantity: 2,
  },
  {
    id: "2",
    name: "Tripod",
    price: 7.99,
    quantity: 1,
  },
  {
    id: "3",
    name: "Bag",
    price: 4.99,
    quantity: 1,
  },
];

const Cart = () => {
  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/orders/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          items: items,
        }),
      });

      const data = await res.json();
      window.location = data.url;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="border p-4 rounded-md">
      <h3 className="text-center capitalize font-medium mb-5">Your Cart</h3>
      <ul className="space-y-1">
        <li className="flex justify-between items-center">
          <div>
            <p className="">Tripod</p>
            <p className="font-thin">$ 49 x 2</p>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <button className="w-8 h-8 rounded bg-red-500 hover:ring-1 hover:ring-yellow-50">-</button>
            <button className="w-8 h-8 rounded bg-blue-500 hover:ring-1 hover:ring-yellow-50">+</button>
          </div>
        </li>
      </ul>

      <p className="font-medium my-4">Total Amount: $ 450</p>
      <button onClick={handleCheckout} className="bg-green-500 px-4 py-2 rounded capitalize hover:ring-1 hover:ring-yellow-50">
        checkout now
      </button>
    </div>
  );
};

export default Cart;

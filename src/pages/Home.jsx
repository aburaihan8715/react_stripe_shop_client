import Cart from "../components/Cart";
import Product from "../components/Product";

const Home = () => {
  return (
    <main className="space-y-6">
      <section>
        <h1 className="text-2xl font-medium capitalize mb-5">E-commerce Card System</h1>
        <div className="flex gap-4">
          <Product />
          <Product />
          <Product />
        </div>
      </section>

      <section>
        <Cart />
      </section>
    </main>
  );
};

export default Home;

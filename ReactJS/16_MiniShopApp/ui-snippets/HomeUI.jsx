import FilterBar from "../components/FilterBar";
import ProductGrid from "../components/ProductGrid";

const products = [
    {
      id: 0,
      title: "string",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://example.com",
    },
];


export default function Home() {
  return (
    <section className="w-full">
      <FilterBar onChange={setFilters} />
      <ProductGrid products={products} />
    </section>
  );
}

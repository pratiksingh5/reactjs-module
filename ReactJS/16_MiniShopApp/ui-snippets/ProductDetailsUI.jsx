export default function ProductDetails() {
  const id = 1;

  return (
    <section className="grid gap-6 md:grid-cols-2">
      <div className="card p-6">
        <div className="h-80 w-full grid place-items-center overflow-hidden rounded-xl bg-neutral-50">
          {/* <img
            src={product.image}
            alt={product.title}
            className="h-72 object-contain"
          /> */}
        </div>
      </div>
      <div className="card p-6">
        <h1 className="text-xl font-semibold">"product.title"</h1>
        <div className="mt-1 text-sm text-neutral-500 capitalize">
          {product.category}
        </div>
        <div className="mt-3 text-2xl font-semibold">85</div>
        <p className="mt-4 text-neutral-600 leading-relaxed">
          "product.description"
        </p>
        <div className="mt-6 flex gap-3">
          <button onClick={add} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

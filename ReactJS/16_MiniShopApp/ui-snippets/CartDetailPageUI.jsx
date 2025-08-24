export default function Cart() {
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

  return (
    <section className="grid lg:grid-cols-3 gap-6">
      {/* Items */}
      <div className="lg:col-span-2 card">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="font-semibold">Cart 5</h2>
          <button className="text-sm text-neutral-500 hover:text-neutral-900">
            Clear all
          </button>
        </div>
        <ul className="divide-y">
          {products.map((item) => (
            <li key={item.id} className="p-4 flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 object-contain bg-neutral-50 rounded-xl"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium line-clamp-1">
                  {item.title}
                </h4>
                <div className="text-xs text-neutral-500 mt-0.5"> 555</div>
              </div>
              <div className="flex items-center gap-2">
                <button className="btn">-</button>
                <input
                  className="input w-16 text-center"
                  type="number"
                  min="1"
                  max="99"
                />
                <button className="btn">+</button>
              </div>
              <div className="w-24 text-right font-medium">555</div>
              <button className="ml-2 text-sm text-red-600 hover:underline">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Summary */}
      <div className="card p-4 h-fit sticky top-20">
        <h3 className="font-semibold">Order Summary</h3>
        <div className="mt-3 flex justify-between text-sm">
          <span>Items</span>
          <span>{totalItems}</span>
        </div>
        <div className="mt-1 flex justify-between text-sm">
          <span>Subtotal</span>
          <span> 555 </span>
        </div>
        <div className="mt-6">
          <button className="btn btn-primary w-full">Checkout</button>
        </div>
        <p className="mt-2 text-xs text-neutral-500">
          * This is a demo. No orders are placed.
        </p>
      </div>
    </section>
  );
}

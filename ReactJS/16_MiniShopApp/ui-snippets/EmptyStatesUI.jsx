export default function EmptyState({
  title = "Nothing here",
  subtitle = "Try changing filters or come back later.",
  cta = null,
}) {
  return (
    <div className="text-center py-20">
      <div className="text-6xl">🛍️</div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-neutral-500">{subtitle}</p>
      {cta && <div className="mt-4">{cta}</div>}
    </div>
  );
}

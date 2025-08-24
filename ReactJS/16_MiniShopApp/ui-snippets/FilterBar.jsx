
/**
 * FilterBar
 * - Teaches controlled inputs, debounced search, derived filtered list via parent
 * - Emits filter state to parent via onChange
 */
export default function FilterBar(){

  return (
    <div className="w-full card p-3 md:p-4 mb-4 flex flex-col md:flex-row gap-3 md:items-end">
      <div className="flex-1">
        <label className="block text-xs text-neutral-500 mb-1">Search</label>
        <input className="input" placeholder="Search by title..." />
      </div>
      <div>
        <label className="block text-xs text-neutral-500 mb-1">Category</label>
        <select className="input">
          <option value="all">All</option>
          {/* {categories.map(c => <option key={c} value={c}>{c}</option>)} */}
        </select>
      </div>
    </div>
  )
}

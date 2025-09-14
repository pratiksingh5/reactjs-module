import React , {useState, useEffect} from 'react'
import { api } from "../api/axios";


const FilterBar = ({setFilters}) => {

  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('all');
  const [name, setName] = useState('');


  useEffect(() => {
    api.get('/products/categories')
    .then((response) => setCategories(response.data || []))
  },  [])


  useEffect(() => {
    console.log("Hiii", category);
    setFilters?.({category, name})
  }, [category, setFilters, name])

  
  return (
       <div className="w-full card p-3 md:p-4 mb-4 flex flex-col md:flex-row gap-3 md:items-end">
      <div className="flex-1">
        <label className="block text-xs text-neutral-500 mb-1">Search</label>
        <input className="input" placeholder="Search by title..." value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <div>
        <label className="block text-xs text-neutral-500 mb-1">Category</label>
        <select className="input" onChange={(e)=> setCategory(e.target.value)}>
          <option value="all">All</option>
          {/* {console.log("catr", categories)} */}
          {categories.length > 0 && categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
    </div>
  )
}

export default FilterBar
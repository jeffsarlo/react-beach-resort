import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext)
  const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context
  
  // get unique room types
  let types = getUnique(rooms, 'type')
  //  add all
  types = ['all', ...types]
  // map to jsx
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })
  
  // get unique capacity
  let people = getUnique(rooms, 'capacity')
  people = people.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
  })
  
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form action="" className="filter-form">
        {/* room type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select 
            name="type" 
            id="type"
            className="form-control"  
            value={type} 
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end room type */}
        {/* capacity */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select 
            name="capacity" 
            id="capacity"
            className="form-control" 
            value={capacity}  
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end capacity */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">
            room price ${price}
            </label>
          <input 
            type="range" 
            name="price" 
            id="price" 
            className="form-control"
            min={minPrice} 
            max={maxPrice} 
            value={price} 
            onChange={handleChange} 
          />
          
        </div>
        {/* end room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input 
              type="number" 
              name="minSize" 
              id="size" 
              className="size-input"
              value={minSize} 
              onChange={handleChange} 
            />
            <input 
              type="number" 
              name="maxSize" 
              id="size" 
              className="size-input"
              value={maxSize} 
              onChange={handleChange} 
            />
          </div>
        </div>
        {/* end size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input 
              type="checkbox" 
              name="breakfast" 
              id="breakfast" 
              checked={breakfast} 
              onChange={handleChange} 
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input 
              type="checkbox" 
              name="pets" 
              id="pets" 
              checked={pets} 
              onChange={handleChange} 
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end extras */}
      </form> 
    </section>
  )
}

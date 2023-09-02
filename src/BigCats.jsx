import {useState} from 'react'
import SingleCat from "./SingleCat"

function BigCats() {
  const cats = [
  { name: 'Cheetah', latinName: 'Acinonyx jubatus', imageURL: "http://placekitten.com/200/120" },
  { name: 'Cougar', latinName: 'Puma concolor', imageURL: "http://placekitten.com/160/120" },
  { name: 'Jaguar', latinName: 'Panthera onca', imageURL: "http://placekitten.com/180/120" },
  { name: 'Leopard', latinName: 'Panthera pardus', imageURL: "http://placekitten.com/220/120" },
  { name: 'Lion', latinName: 'Panthera leo', imageURL: "http://placekitten.com/160/120" },
  { name: 'Snow leopard', latinName: 'Panthera uncia', imageURL: "http://placekitten.com/140/120" },
  { name: 'Tiger', latinName: 'Panthera tigris', imageURL: "http://placekitten.com/120/120" },
]

  const [catList, setCatList] = useState([...cats])
  
  function handleSort() {
    const newList = [...catList]
    newList.sort((a, b) => a.name < b.name ? -1 : 1)
    setCatList(newList)
  }

  function handleReverse() {
    const newList = [...catList]
    newList.reverse()
    setCatList(newList)
  }

  function handleFilter() {
    const newList = catList.filter(ele => ele.latinName.includes("Panthera"))
    setCatList(newList)
  }

  function handleReset() {
    setCatList([...cats])
  }
 
  return (
   <>
   <button onClick={handleSort}>Sort</button>
   <button onClick={handleReverse}>Reverse</button>
   <button onClick={handleFilter}>Filter</button>
   <button onClick={handleReset}>Reset</button>
   <ul style={{display: "flex"}}>
     {catList.map((cat, i) => (<SingleCat key={i} cat={cat}/>))}
   </ul>
   </>
 )
}

export default BigCats;
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
 return (
   <ul style={{display: "flex"}}>
     {catList.map((cat, i) => (<SingleCat key={i} cat={cat}/>))}
   </ul>
 )
}

export default BigCats;
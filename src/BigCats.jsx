function BigCats() {
  const cats = [
  { name: 'Cheetah', latinName: 'Acinonyx jubatus' },
  { name: 'Cougar', latinName: 'Puma concolor' },
  { name: 'Jaguar', latinName: 'Panthera onca' },
  { name: 'Leopard', latinName: 'Panthera pardus' },
  { name: 'Lion', latinName: 'Panthera leo' },
  { name: 'Snow leopard', latinName: 'Panthera uncia' },
  { name: 'Tiger', latinName: 'Panthera tigris' },
]
 return (
   <ul>
     {cats.map((cat, i) => (<li key={i}>
       <p>{cat.name}</p>
       <p>{cat.latinName}</p>
     </li>))}
   </ul>
 )
}

export default BigCats;
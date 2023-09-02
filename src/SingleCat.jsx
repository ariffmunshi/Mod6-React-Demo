function SingleCat({cat, onDeleteCat}) {
  function handleDelete() {
    onDeleteCat(cat.name)
  }
  return(
    <li>
      <img src={cat.imageURL} />
      <p>{cat.name}, 
      <br />  
      {cat.latinName}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default SingleCat;
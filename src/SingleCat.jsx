function SingleCat({cat}) {
  return(
    <li>
      <img src={cat.imageURL} />
      <p>{cat.name}, 
      <br />  
      {cat.latinName}</p>
    </li>
  )
}

export default SingleCat;
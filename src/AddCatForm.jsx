import {useState} from 'react';

function AddCatForm({onAddCat}) {
  const [cat, setCat] = useState({
    name: "",
    latinName: "",
    imageURL: ""
  })

  function handleSubmit(e) {
    e.preventDefault();
    onAddCat(cat)
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setCat(prev => ({...cat, [name]: value}))
  }
  return(
    <>
      <form onSubmit={handleSubmit}>
        <label>Cat Name:
          <input type="text"
            value={cat.name}
            name="name"
            onChange={handleChange}/>
        </label>
        <br />
        <label>Cat Latin Name:
          <input type="text"
            value={cat.latinName}
            name="latinName"
            onChange={handleChange}/>
        </label>
        <br />
        <label>Img URL:
          <input type="text"
            value={cat.imageURL}
            name="imageURL"
            onChange={handleChange}/>
        </label>
        <br />
        <button>Add Cat</button>
        <hr />
      </form>
    </>
  )
}

export default AddCatForm;
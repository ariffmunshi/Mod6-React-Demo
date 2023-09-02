import {useState} from 'react';

function AddCatForm({onAddCat}) {
  const [name, setName] = useState("")
  const [latinName, setLatinName] = useState("")
  const [imageURL, setImageURL] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onAddCat({name, latinName, imageURL})
  }
  return(
    <>
      <form onSubmit={handleSubmit}>
        <label>Cat Name:
          <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
        </label>
        <br />
        <label>Cat Latin Name:
          <input type="text"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}/>
        </label>
        <br />
        <label>Img URL:
          <input type="text"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}/>
        </label>
        <br />
        <button>Add Cat</button>
        <hr />
      </form>
    </>
  )
}

export default AddCatForm;
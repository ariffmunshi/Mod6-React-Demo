import Greeting from './Greeting'
import BigCats from './BigCats'

export default function App() {
  return (
    <main>
      <Greeting name="Cats" >
        <h2>Looking good</h2>
      </Greeting>
      <BigCats />
    </main>
  )
}

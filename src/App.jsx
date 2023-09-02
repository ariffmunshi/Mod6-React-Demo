import Greeting from './Greeting'
import BigCats from './BigCats'
import Emoji from './Emoji'
import ExplodingBomb from './ExplodingBomb'

export default function App() {
  return (
    <main>
      <Greeting name="Cats" >
        <h2>Looking good</h2>
      </Greeting>
      <BigCats />
      <Emoji />
      <ExplodingBomb />
    </main>
  )
}

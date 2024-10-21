import './index.css'
import './App.css'
import Header from './components/Header/Header'
import Bottles from './components/bottles/bottles'


function App() {

  return (
    <>
      <h1 className='text-center mb-3 text-purple-400'>React Water Bottle</h1>
      <Header></Header>
      <Bottles></Bottles>
    </>
  )
}

export default App

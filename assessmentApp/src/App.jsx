
import './App.css'
import Comment from '../src/components/Comment'

function App() {
 

  return (
    <div className='bg-bodyBackground h-screen  flex justify-center  ' >
     <div className="container sm:w-3/5 md:w-3/5 lg:w-3/5 h-auto mt-6 " style={{border:'2px solid red'}} >
     {/* <div className="container h-2/4 w-2/4 " style={{border:'2px solid red'}} > */}
  <Comment/>
  <Comment/>
  <Comment/>

</div>

    </div>
  )
}

export default App

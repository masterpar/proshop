import Header from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {HomePage} from "./pages/HomePage";



function App() {

  return (
        <div className='flex flex-col h-screen justify-between bg-slate-50'>
            <Header/>
                <HomePage/>
            <Footer/>
        </div>
  )
}

export default App

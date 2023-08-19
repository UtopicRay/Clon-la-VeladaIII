import './App.css'
import {LandingHeader} from "./Components/LandingHeader.jsx";
import {LandindMain} from "./Components/LandindMain.jsx";
import {LandingPromo} from "./Components/LandingPromo.jsx";
import {LandingFooter} from "./Components/LandingFooter.jsx";

function App() {

  return (
    <>
        <LandingHeader/>
        <main className='flex flex-col justify-center items-center'>
        <LandindMain/>
        <LandingPromo/>
        </main>
        <LandingFooter/>
    </>
  )
}

export default App

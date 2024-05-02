
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Navbar } from './components/Navbar';
import { Sec1 } from './components/Sec1';
import { Sec2 } from './components/Sec2';
import { Sec3 } from './components/Sec3';

function App() {
let heading1 = <h2>Lorem ipsum dolor sit. h1</h2>
let heading2 = <h2>Lorem ipsum dolor sit. h2</h2>
let heading3 = <h2>Lorem ipsum dolor sit. h3</h2>

let para1 = <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut deserunt ea nihil eaque at accusamus sed consequuntur voluptates nobis quae, animi temporibus itaque ut officiis inventore. Praesentium, tenetur facilis.</p>

let para2 = <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut deserunt ea nihil eaque at accusamus sed consequuntur voluptates nobis quae, animi temporibus itaque ut officiis inventore. Praesentium, tenetur facilis.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut deserunt ea nihil eaque at accusamus sed consequuntur voluptates nobis quae, animi temporibus itaque ut officiis inventore. Praesentium, tenetur facilis.
</p>

let para3 = <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut deserunt ea nihil eaque at accusamus sed consequuntur voluptates nobis quae, animi temporibus itaque ut officiis inventore. Praesentium, tenetur facilis.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut deserunt ea nihil eaque at accusamus sed consequuntur voluptates nobis quae, animi temporibus itaque ut officiis inventore. Praesentium, tenetur facilis.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut deserunt ea nihil eaque at accusamus sed consequuntur voluptates nobis quae, animi temporibus itaque ut officiis inventore. Praesentium, tenetur facilis.
</p>

let img1 = <img src="https://img.freepik.com/premium-photo/laptop-computer-with-hologram-screen-displaying-source-code_163855-140.jpg?w=996" alt="" className=' img-fluid rounded-2'/>
let img2 = <img src="https://img.freepik.com/premium-photo/big-data-concept-digital-data-flow-transferring-big-data-transfer-storage-data-sets-database-protection-secure-transmission-information-blockchain-networks-3d-rendering_34629-1162.jpg?w=1060" alt="" className=' img-fluid rounded-2' />
let img3 = <img src="https://img.freepik.com/premium-psd/3d-web-development-software-development-web-design-coding-programing_566602-175.jpg?w=740" alt="" className=' img-fluid rounded-2' />


  return (
    <>
   <Sec3 title ={"logo"}/>
   {/* <Sec3/> */}

  <Navbar about={"About"}/>
  {/* <Navbar/> */}
 
   <Sec1 sec1h={heading1} btn={'bnt 1'} para={para1} sec1IMG={img1} />
   <Sec1 sec1h={heading2} btn={'bnt 2'} para={para2} sec1IMG={img2}/>
   <Sec1 sec1h={heading3} btn={'bnt 3'} para={para3} sec1IMG={img3}/>
   <Sec2/>
  

 

    </>
  )
}

export default App

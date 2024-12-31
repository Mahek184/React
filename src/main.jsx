import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import MyCustComp from './lec3112/propexmp3'
import Purefunc1 from './lec3112/purefunc1'
import MyCustomButton from './lec3112/purefunc2'
//import StateMerge from './lec29_12/statemanagement3'
//import StateXYZ from './lec29_12/statemanagement2'
//import StateABC from './lec29_12/statemanagement1'
//import Timetable from './lec24_12/timetale'
//import TimetableComp from './lec24_12/timetale'
// import Component1 from './lec24_12/component1'
// import HtmlComponent from './lec24_12/htmlcomp'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Component1/> */}
    {/* <HtmlComponent/> */}
    {/* <TimetableComp/> */}
    {/* <StateABC/> */}
    {/* <StateXYZ/> */}
    {/* <StateMerge/> */}
    {/* <MyCustComp/> */}

    {/* this is for purefunc1.jsx file */}
    {/* <Purefunc1 var1={true} var2={"hello"}/>
    <Purefunc1 var1={false} var2={"How are you"}/> */}

    {/* this is for purefunc.jsx file */}
    <MyCustomButton/>
    <br/>
    <MyCustomButton var1={true}/>
    <br/>
    <MyCustomButton var2={"6CEB"}/>
    <br/>
    <MyCustomButton var1={true} var2={"BTech"}/>

  </StrictMode>,
)
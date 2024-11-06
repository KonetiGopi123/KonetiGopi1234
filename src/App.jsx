import AboutUs from "./AboutUs";
import Apples from "./Apples";
import ContactUs from "./ContactUs";
import CourseGoal from "./courseGoal";
import CricketScore from "./CricketScore";
import Greeting from "./Greeting";
import Shopping from "./Shopping";
import UseStateIncrement from "./UseStateIncrement";
import Welcome from "./Welcome";
import Blog from "./Blog";
import Apps from "./Apps";
import MovieGrid from "./MovieGrid";
import CurrentDate from "./CurrentDate";
import CurrentTime from "./CurrentTime";
import AdditionNum from "./AdditionNum";
import StudentMarks from "./StudentMarks";
import Calculator from "./Calculator";

function App()
{
  return(
    <>
    <h1>This is App.jsx file</h1>
    <AboutUs />
    <ContactUs/>
    <Greeting/>
    
    <UseStateIncrement />
    <CricketScore />
    <Apples/>
    <Shopping/>
    <Welcome name="ratan"/>
    <Welcome name="Ravi"/>
    <Welcome name="Naveen"/>
    <CourseGoal title="Learn react" description="In-depth"/>
    <CourseGoal title="About ratan sir" description="ratan sir is nice"/>
    <Blog/>
    <Apps/>
    <MovieGrid/>
    <CurrentDate/>
    <CurrentTime/>
    <AdditionNum/>
    <StudentMarks/>
    <Calculator/>

    
    </>
  )
}
export default App;
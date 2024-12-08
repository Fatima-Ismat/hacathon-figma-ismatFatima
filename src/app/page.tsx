import Dessert from "@/components/Dessert/Dessert"
// import Hero from "@/components/HeroSection/Hero";
import MainCours from "@/components/MainCourse/MainCourse";
import StartMenu from "@/components/Menu/StartMenu";

import HomePage from "./HomePage/page";






export default function Home() {
  return (
    <div>

  
  {/* <Hero/> */}
  <HomePage/>
  
  <StartMenu/>
  <MainCours/>
  <Dessert/>
  
  

  

    </div>
   
   
  );
}


import Dessert from "@/components/Dessert/Dessert"
// import Hero from "@/components/HeroSection/Hero";
import HomePage from "./HomePage/page";
import StartMenu from "@/components/Menu/StartMenu";
import MainCours from "@/components/MainCourse/MainCourse";
import Experience from "@/components/Experience";
import MeetChef from "@/components/Meetchefs/Meetchefs";
import ActiveRestaurant from "@/components/ActiveResturant";
import Blogending from "@/components/blogending/blogending";









export default function Home() {
  return (
    <div>
    
  
  {/* <Hero/> */}
  
  <HomePage/>
  <Experience/>
  <MeetChef/>
  <ActiveRestaurant/>
  <Blogending/>
  
  <StartMenu/>
  <MainCours/>
  
  <Dessert/>
  
  

  

    </div>
   
   
  );
}

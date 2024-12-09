import Navbar from "./components/navbar";

import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import AboutUs from "./components/aboutUs";
import FoodCategory from "./components/food_category";
import MenuCom from "./components/menu";
import MeetShef from "./components/meetShef";


export default function Home(){
return (
  <div>
   
    <Hero />
    <AboutUs/>
    <FoodCategory />
    <MenuCom />
    <MeetShef />
    
  </div>
)


}
import './App.css';
import './App-2.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { LanguageContext } from './LanguageContext';
import { useState } from 'react';
import Menu from './Components/Menu';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from "./Pages/Login"
import Start from './Pages/Start';
import Books from './Pages/Books';
import Orders from './Pages/Orders';
import Profil from './Pages/Profil';
import ProfilSettings from "./Pages/ProfileSettings"
import ChangeLang from './Pages/ChangeLang';
import axios from 'axios';

export const uz = {
  header:"Maktab kutubxonasi",
  qidirish:"Qidirish",
  menuHeader:"Maktab Kutubxonasi",
  shior:"Biz bilan har doim oson :)",
  main:"Asosiy sahifa",
  kitoblar:"Kitoblar",
  buyurtmalar:"Buyurtmalar",
  settings:"Sozlamalar",
  qollanma:"Qo'llanma",
  about:"Dastur haqida",
  janrla:"Janrlar",
  seeAll:"Barchasi...",
  register:"Registratsiya",
  nameSurname:"Ism, familiya:",
  parol:"Parol:",
  enterName:"Ism va familiyangizni kiriting",
  enterEmail:"Emailni kiriting",
  enterParol:"Parolni kiriting",
  alreadyRegisteres:"Allaqachon ro'yxatdan o'tganmisiz?",
  goLogin:"Tizimga kirish",
  signup:"Ro'yxatdan o'tish",
  notRegistered:"Ro'yxatdan o'tmaganmisiz?",
  goSignUp:"Ro'yxatdan o'ting",
  enter:"Kirish",
  profil:"Profil",
  profilSozlash:"Profilni sozlash",
  changeLang:"Ilova tilini o'zgartirish",
  Sozlamalar:"Sozlamalar",
  Saqlash:"Saqlash",
  Mavjud:"Mavjud",
  MavjudEmas:"Mavjud emas",
  navbaty:"Navbatga yozilish",
  hozirchayoq:"Hozircha sizda buyurtma mavjud emas."
}


export const en = {
  header:"School library",
  qidirish:"Search",
  menuHeader:"School Library",
  shior:"It's always easy with us",
  main:"Main page",
  kitoblar:"Books",
  buyurtmalar:"Orders",
  settings:"Settings",
  qollanma:"Guide",
  about:"About the app",
  janrla:"Genres",
  seeAll:"View all...",
  register:"Registration",
  nameSurname:"Full name:",
  parol:"Password:",
  enterName:"Enter your full name",
  enterEmail:"Enter your email",
  enterParol:"Enter your password",
  alreadyRegisteres:"Are you already registered?",
  goLogin:"Log in",
  signup:"Sign up",
  notRegistered:"Not signed up yet?",
  goSignUp:"Sign up",
  enter:"Sign up",
  profil:"Profile",
  profilSozlash:"Profile settings",
  changeLang:"Changing language",
  Sozlamalar:"Settings",
  Saqlash:"Save",
  Mavjud:"Available",
  MavjudEmas:"Not available",
  navbaty:"add to que",
  hozirchayoq:"You haven't any orders"
}

const api = axios.create({
  baseURL: `https://ps-library-backend.herokuapp.com/api`,
  // withCredentials: false
})

function App() {
  const [lang, setLang] = useState(uz)
  const [isSearchActive, setIsSearchActive] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
      <LanguageContext.Provider value={lang}  >
        <Menu/>
        <Routes>
          <Route path='/all-books' element={<Books setIsSearchActive={setIsSearchActive} api={api} />}  />
          <Route path='/orders' element={<Orders api={api} />}/>
          <Route path='/change-lang' element={<ChangeLang setUzbek={()=>{setLang(uz)}} setEnglish={()=>{setLang(en)}} api={api} />}/>
          <Route path='/settings' element={<ProfilSettings api={api} />}/>
          <Route path='/profile' element={<Profil api={api} />}/>
          <Route path='/register' element={<SignUp api={api} />}/>
          <Route path='/login' element={<Login api={api} />}/>
          <Route path='/start' element={<Start api={api} />}/>
          <Route path='/' element={<Home isSearchActive={isSearchActive} setIsSearchActive={setIsSearchActive} api={api} />}/>
          <Route path="*" element={<Start api={api} />} />
        </Routes>
      </LanguageContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

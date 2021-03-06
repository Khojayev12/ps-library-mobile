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
  book1:"1984",
  book12:"Jorj Ouell",
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
  enter:"Kirish"
}

export const en = {
  header:"School's library",
  qidirish:"Search",
  menuHeader:"School Library",
  shior:"With us always easy :)",
  main:"Main page",
  kitoblar:"Books",
  buyurtmalar:"Orders",
  settings:"Settings",
  qollanma:"Guide",
  about:"About app",
  janrla:"Genres",
  seeAll:"View all...",
  book1:"1984",
  book12:"Jorj Ouell",
  register:"Registration",
  nameSurname:"Name, surname:",
  parol:"Password:",
  enterName:"Enter your name and surname",
  enterEmail:"Enter your email",
  enterParol:"Enter your password",
  alreadyRegisteres:"Are you already registered?",
  goLogin:"Log in",
  signup:"Sign up",
  notRegistered:"Not registered?",
  goSignUp:"Sign up",
  enter:"Sign up"

}

function App() {
  const [lang] = useState(uz)
  const [isSearchActive, setIsSearchActive] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
      <LanguageContext.Provider value={lang}  >
        <Menu/>
        <Routes>
          <Route path='/all-books' element={<Books setIsSearchActive={setIsSearchActive} api={api} />}  />
          <Route path='/orders' element={<Orders api={api} />}/>
          <Route path='/change-lang' element={<ChangeLang setUzbek={()=>{setLang(uz)}} setEnglish={()=>{setLang(en)}} />}/>
          <Route path='/settings' element={<ProfilSettings api={api} />}/>
          <Route path='/profile' element={<Profil api={api} />}/>
          <Route path='/register' element={<SignUp api={api} />}/>
          <Route path='/login' element={<Login api={api} />}/>
          <Route path='/start' element={<Start api={api} />}/>
          <Route path='/' element={<Home isSearchActive={isSearchActive} setIsSearchActive={setIsSearchActive} />} />
        </Routes>
      </LanguageContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

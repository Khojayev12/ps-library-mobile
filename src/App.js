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
import About from './Pages/About';
import Guide from './Pages/Guide';

export const uz = {
  code: 'uz',
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
  hozirchayoq:"Hozircha sizda buyurtma mavjud emas.",
  aboutHeader:"Ilova haqida",
  aboutInfo:"Bizning elektron kutubxona ilovamiz hayotimizni osonlashtirish va maktab kutubxonalaridagi qog‘ozlarni raqamlashtirish orqali kamaytirib, ekologiya harakatlariga hissa qo‘shish uchun yaratilgan. U maktab yoki universitet kutubxonalari uchun javob beradi va xavfsiz, juda tez va foydalanish uchun qulay. Siz kutubxonani koʻrib chiqishingiz, oʻzingiz yoqtirgan har qanday tilda sevimli kitobingizni qidirishingiz va unga talaba yoki kutubxonachi sifatida buyurtma berishingiz mumkin, siz kitoblarga buyurtma bergan talabalarni kuzatib borishingiz, ularning soʻrovini maʼqullashingiz yoki rad qilishingiz hamda qoʻshishingiz yoki olib tashlashingiz mumkin. kutubxonangizda yangi kitoblar mavjud. Ilovadan foydalanish juda oddiy, hatto ro'yxatdan o'tish va kirish jarayonlari ham juda oddiy va tushunarli, ammo bu ilova xavfsiz emas degani emas. Talabalar va kutubxonachilarning shaxsiy ma'lumotlari turli xil shifrlash va shifrlash texnologiyalari bilan himoyalangan. Tez orada, bizning rejalarimiz bo'yicha, ilova yanada kengaytiriladi va umid qilamanki, butun mamlakat bo'ylab va hatto butun dunyoda qo'llaniladi.",
  Chiqish:"Chiqish"
}


export const en = {
  code: 'en',
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
  hozirchayoq:"You haven't any orders",
  aboutHeader:"About app",
  aboutInfo:"Our app E-library is made to make our lives easier and contribute to ecology movements by reducing the amount of paperwork in school libraries by digitalizing it. It is suited for school or university libraries and it is secure, quite fast and comfortable to use. You can browse the library, search for your favourite book in any of your language of preference, and order it as a student, or as a librarian, you can keep track of students who ordered books, approve or reject their request and add or remove new books available in your library. Usage of the app is quite simple, even the registration and login processes are really basic and easy to understand, but it doesn't mean the app isn't secure. The personal information of students and librarians are protected by various encrypting and decrypting technologies. Soon, according to our plans, the app will be expanded even more and hopefully will be used nationwide, and even worldwide.",
  Chiqish:"Exit"
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
          <Route path='/about' element={<About/>}/>
          <Route path='/guide' element={<Guide/>}/>
          <Route path='/' element={<Home isSearchActive={isSearchActive} setIsSearchActive={setIsSearchActive} api={api} />}/>
          <Route path="*" element={<Start api={api} />} />
        </Routes>
      </LanguageContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

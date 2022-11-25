import { useState } from "react";
import { 
  RiHome3Line,
  RiShoppingCart2Line,
  RiFunctionLine,
  RiSwordLine,
  RiDownloadLine,
  RiSettings4Line,
  RiAlignCenter,
  RiCloseLine,
  RiNotification3Line,
  RiSearchLine} from "react-icons/ri";
import { ImFeed } from "react-icons/im";
import { FaCircle } from "react-icons/fa";



function App() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu (!showMenu);
  };
  return (
    <div className="bg-[#141414] min-h-screen">
      <sidebar className={`fixed top-0 w-90 h-full border-r border-gray-800 p-8 flex flex-col justify-between bg-[#141414] transition-all duration-500 lg:left-0 z-50 ${showMenu ? "left-0" : "-left-full"}`}>
        {/* Logo*/}
        <div>
        <div className="text-gray-300 uppercase font-bold text-2xl tracking-[5px] mb-10">
          <img src="data:image/png;base64,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" alt="Mi Logo" />
        </div>
        <ul>
          <li>
            <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-4 px-4 rounded-xl transition-colors">
              <RiHome3Line />
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-4 px-4 rounded-xl transition-colors">
              <RiShoppingCart2Line />
              Store
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-4 px-4 rounded-xl transition-colors">
              <RiFunctionLine />
              Library
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-4 px-4 rounded-xl transition-colors">
              <RiSwordLine />
              Friends
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-4 px-4 rounded-xl transition-colors">
              <ImFeed />
              Live
            </a>
          </li>
        </ul>
        </div>
        <div>
          <ul>
          <li>
            <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-4 px-4 rounded-xl transition-colors">
              <RiDownloadLine />
              Downloads
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-4 px-4 rounded-xl transition-colors">
              <RiSettings4Line />
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="relative text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-4 px-4 rounded-xl transition-colors">

              <img src="https://img.freepik.com/foto-gratis/retrato-joven-barbudo-concentrado_171337-17199.jpg" alt="" className="w-6 h-6 object-cover rounded-full" />
              <FaCircle className="absolute text-green-500 bottom-3 left-7 text-xs"/>
              Marcelo
            </a>
          </li>
          </ul>
        </div>
        {/*Btn Menu Movil*/}
        <button onClick={toggleMenu} className="lg:hidden bg-gradient-to-r from-cyan-500 to-blue-500 text-white fixed bottom-8 right-6 p-2 text-lg rounded-full z-50">
            {showMenu ? <RiCloseLine/> :  <RiAlignCenter />}
        </button>
      </sidebar>
      {/*Header*/}
      <header className="fixed lg:pl-[340px] w-full flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-[#141414] z-40">
        <nav className="flex items-center gap-4 order-1 lg:order-none">
          <a className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-full" href=""
          >Discover
          </a>
          <a className="text-gray-500 py-2 px-4 rounded-full" href=""
          >Browse
          </a>
          <a className="text-gray-500 py-2 px-4 rounded-full" href=""
          >Wishlist
          </a>
        </nav>
        <ul className="flex items-center gap-4">
            <li>
              <a href="#" className="text-gray-500 text-lg"> 
              {" "}
              <RiNotification3Line />{" "}
              </a>
            </li>
            <li>
              <form className="relative">
                <RiSearchLine className="text-gray-500 absolute top-3 left-2"/>
                <input type="text" placeholder="Search" className="bg-[#232323] outline-none text-gray-300 rounded-full py-2 pl-8 pr-4" />
              </form>
            </li>
          </ul>
      </header>
      {/*Content*/}
      <main className="lg:pl-[340px] p-8 pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-2">
          <div className="col-span-5 relative">
            <img src="https://adrenaline.com.br/uploads/chamadas/imagem_2022-09-14_163412548.png" className="w-full h-[500px] object-cover rounded-tl-xl rounded-bl-xl" />
            <h1 className="absolute top-4 left-4 text-3xl font-bold text-white">Call of Dutty</h1>
            <div className="absolute left-0 bottom-0 p-8 max-w-2xl">
              <p className="text-white text-xl">
                Update
                </p>
              <h2 className="text-3xl text-white mb-5 font-bold">
                In Call of Duty®: Modern Warfare® II, players will be drawn into a conflict on an global scale.</h2>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl text-lg gap-2">
                Play now
              </button>
            </div>
          </div>
          {/*Games*/}
          <div className="col-span-1 w-full bg-[#232323] rounded-tr-xl rounded-br-xl">
            <ul className="p-4 flex flex-col gap-4 h-[500px] overflow-scroll">
              <li>
                <a href="#" className="flex items-center gap-4 text-white text-lg hover:bg-gray-600">
                  <img src="https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg" className="w-20 h-30 object-cover"
                  /> {" "}
                  Fornite
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4 text-white text-lg hover:bg-gray-600">
                  <img src="https://static-cdn.jtvnw.net/ttv-boxart/30921-272x380.jpg" className="w-20 h-30 object-cover"
                  /> {" "}
                  Rocket League
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4 text-white text-lg hover:bg-gray-600">
                  <img src="https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg" className="w-20 h-30 object-cover"
                  /> {" "}
                  Minecraft
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4 text-white text-lg hover:bg-gray-600">
                  <img src="https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg" className="w-20 h-30 object-cover"
                  /> {" "}
                  Grand Theft Auto V
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4 text-white text-lg hover:bg-gray-600">
                  <img src="https://media.vandal.net/m/75962/genshin-impact-20209417573364_1.jpg" className="w-20 h-30 object-cover"
                  /> {" "}
                  Genshin Impact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
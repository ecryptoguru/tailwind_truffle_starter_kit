import Logo from '../assets/logo.png'
import ethlogo from '../assets/ethlogo.png'

const Footer = () => (
 <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
   <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
     <div className="flex flex-[0.25] justify-center items-center">
       <img src={Logo} alt="logo" className="w-32" />
     </div>

     <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
       <p className="text-white text-base text-center mx-2 cursor-pointer">
         Market
       </p>
       <p className="text-white text-base text-center mx-2 cursor-pointer">
         Artist
       </p>
       <p className="text-white text-base text-center mx-2 cursor-pointer">
         Features
       </p>
       <p className="text-white text-base text-center mx-2 cursor-pointer">
         Community
       </p>
     </div>

     <div className="flex flex-[0.25] justify-center items-center">
     <p className="text-white text-right text-mx-2">
     Made with Love ❤️ 
       </p>
     </div>
   </div>
   <div className="flex flex-row justify-center items-center mt-2">
        <img src={ethlogo} alt="logo" className="w-8" />
        <span className="text-white text-xs">
        &copy;2023 FusionAI NFT Marketplace. All rights reserved.
        </span>
      </div>
 </div>
 
)

export default Footer


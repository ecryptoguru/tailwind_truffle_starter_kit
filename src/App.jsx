import { useEffect } from 'react'
import { isWallectConnected } from './Blockchain.Services'
import Alert from "./components/Alert"
import Header from "./components/Header"
import Hero from "./components/Hero"
import CreateNFT from "./components/CreateNFT"
import Artworks from "./components/Artworks"
import Transactions from "./components/Transactions"
import Loading from "./components/Loading"
import ShowNFT from "./components/ShowNFT"
import UpdateNFT from "./components/UpdateNFT"
import Footer from "./components/Footer"


const App = () => {
  useEffect(async () => {
    await isWallectConnected()
  }, [])
 
 return (
   <div className="min-h-screen">
     <div className="gradient-bg-hero">
       <Header />
       <Hero />
     </div>
     <Artworks />
     <Transactions />
     <CreateNFT />
     <ShowNFT />
     <UpdateNFT />
     <Footer />
     <Alert />
     <Loading />
   </div>
 )
}

export default App
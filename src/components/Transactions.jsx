import { BiTransfer } from 'react-icons/bi'
import { MdOpenInNew } from 'react-icons/md'

const Transactions = () => {
 return (
   <div className="bg-[#151c25]">
     <div className="w-4/5 py-10 mx-auto">
       <h4 className="text-white text-3xl font-bold uppercase text-gradient">
         Latest Transactions
       </h4>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-2 py-2.5">
         {Array(3)
           .fill()
           .map((tx, i) => (
             <Transaction key={i} tx={i + 1} />
           ))}
       </div>

       <div className="text-center my-5">
         <button
           className="shadow-xl shadow-black text-white
           bg-[#e32970] hover:bg-[#bd255f]
           rounded-full cursor-pointer p-2"
         >
           Load More
         </button>
       </div>
     </div>
   </div>
 )
}

const Transaction = ({ tx }) => (
 <div className="flex justify-between items-center border border-pink-500 text-gray-400 w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
   <div className="rounded-md shadow-sm shadow-pink-500 p-2">
     <BiTransfer />
   </div>

   <div>
     <h4 className="text-sm">#{tx} Fund Transfered</h4>
     <small className="flex flex-row justify-start items-center">
       <span className="mr-1">Received by</span>
       <a href="#" className="text-pink-500 mr-2">
         0x21...02af
       </a>
       <a href="#">
         <MdOpenInNew />
       </a>
     </small>
   </div>

   <p className="text-sm font-medium">0.32 ETH</p>
 </div>
)

export default Transactions

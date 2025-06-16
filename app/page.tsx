import { CardDemo } from "@/components/CardDemo";
import EmptyBox from "@/components/emptybox";
import { Header } from "@/components/Header";


export default function Home() {
  return (
    <>
    <Header />
    <div className="flex flex-row bg-gray-300 h-full justify-evenly">{/* for the main section  */}


        <CardDemo />
        <CardDemo />
        
    </div>

    {/* <section></section> use karke karo ho jayega */}
      <div className=" flex-row" >
         <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Heyy, I am Vedang Kanade
      </h2>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Aaaaaaaa
      </h2>
      </div>
    
    
    
   
   
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <> 
    <div className="flex justify-center items-center flex-col text-white min-h-[44vh] gap-4 px-5 md:px-10 text-base md:text-lg">
      <div className="font-bold text-xl md:text-4xl flex justify-center items-center">
        <span>The Nameless Patron </span>
        <span><img width={90} height={90} src="/No-Face2.gif" alt="Logo" /></span>
      </div>
      <p className="text-center md:text-left">A crowd funding platform for creators to fund their projects</p>
      <p className="text-center md:text-left">A place where fans can support your innovative ideas. Unleash the power of your fans and get the support you need.</p>
      <div className="flex gap-2 mb-2">
        <Link href="/login">
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-md px-4 py-2.5">Start Now</button>
        </Link>
        <Link href="/about">
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-md px-4 py-2.5">Read More</button>
        </Link>
      </div>
    </div>
    <div className="bg-white opacity-10 h-1"></div>
    
    <div className="text-white container mx-auto pb-32 pt-14">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">Your nameless creatures can buy you a soul</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="item space-y-4 flex flex-col items-center justify-center text-center">
          <img className="bg-slate-500 rounded-full p-2" width={70} height={70} src="/Mans.gif" alt="Fans Collaboration" />
          <p className="font-bold">Fans Want to Collaborate</p>   
          <p>Emphasizes fan collaboration on projects.</p> 
        </div>
        <div className="item space-y-4 flex flex-col items-center justify-center text-center">
          <img className="bg-slate-500 rounded-full p-2" width={70} height={70} src="/Coins.gif" alt="Support" />
          <p className="font-bold">Support through Contributions</p>   
          <p>Fans support your creative ideas.</p>  
        </div>
        <div className="item space-y-4 flex flex-col items-center justify-center text-center">
          <img className="bg-slate-500 rounded-full p-2" width={70} height={70} src="/Group.gif" alt="Community Engagement" />
          <p className="font-bold">Engage with the Community</p>   
          <p>Connect with like-minded individuals.</p>
        </div>
      </div>
    </div>

    <div className="bg-white opacity-10 h-1"></div>

    <div className="text-white container mx-auto pb-32 pt-14 flex justify-center items-center flex-col">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">Learn More About Us</h2>
      <div className="w-full md:w-3/4 lg:w-2/3">
        <iframe className="w-full h-64 md:h-96" src="https://www.youtube.com/embed/b7my7O-UG-8" title="Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
    
    </>
  );
}

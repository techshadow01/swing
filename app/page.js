import Image from "next/image"
import Link from "next/link";
import Footer from "./components/Footer";
import coffee from './assets/coffee.png'
import man from './assets/man.png'

export default function Home() {
  return (
    <>
      {/* top */}
      <div className="">
        <div className="flex flex-col items-center justify-center gap-4 h-[95vh]">
          <div className="flex flex-col items-center justify-center gap-5 text-8xl font-bold">
            {/* <span><Image className='bg-transparent' src={coffee} alt="" width="64" height="64" /></span> */}
            <div>Fund your</div>
            <div>Dream Project</div>
          </div>
          <div className="text-xl">
            a Crowdfunding Platform for Creators. Get funded by your Fans.
          </div>
          <Link href={"/login"}><button type="button" class="text-xl text-white bg-blue-700 h-16 w-40 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Started</button></Link>
        </div>

        <div className="h-1 bg-gray-500"></div>

        {/* sec2 */}
        <div className="flex items-center justify-center gap-2 text-3xl font-semibold text-center">
          <div className="pt-2">Buy Me a Coffee</div>
          <span><Image src={coffee} alt="" width={50} height={40} /></span>
        </div>

        {/* sec2 part2 */}
        <div className="flex h-[30vh]">
          <div className="flex flex-col items-center justify-center gap-2 m-3 w-[30vw]">
            <span ><Image className="rounded-full" src={man} alt="" width={70} height={70} /></span>
            <div>fans want to help</div>
            <div className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 m-3 w-[30vw]">
            <span ><Image className="rounded-full" src={man} alt="" width={70} height={70} /></span>
            <div>fans want to help</div>
            <div className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 m-3 w-[30vw]">
            <span ><Image className="rounded-full" src={man} alt="" width={70} height={70} /></span>
            <div>fans want to help</div>
            <div className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

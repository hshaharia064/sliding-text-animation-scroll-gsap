'use client'
import { useEffect } from "react";
import gsap from "gsap/all";

export default function Home() {


  useEffect(() => {
    window.addEventListener('wheel', handleWheel)

    function handleWheel(events) {
      if (events.deltaY >= 0) {
        console.log('scrolling down')

         gsap.to('.mark', {
      transform: 'translatex(200%)',
      duration: 2,
      // delay : 2
      ease: 'none',
      // repeat: -1
    })

    gsap.to('.mark img', {
      rotate: 180,
      duration: 1,
      // delay : 2,

    })
      } else {
        console.log('scrolling up');
         gsap.to('.mark', {
      transform: 'translatex(0%)',
      duration: 2,
      // delay : 2
      ease: 'none',
      // repeat: -1
    })

    gsap.to('.mark img', {
      rotate: 0,
      duration: 1,
      // delay : 2,
      // repeat : -1

    })

      }
    }


   



    return () => {
      window.removeEventListener('wheel')
    }




  }, [])

  return (
    <>
      <div id="page1" className="h-[100vh] w-full overflow-x-hidden">hello</div>


      <div id="page2" className="h-[100vh] w-full ">hello
        <div id="move" className="bg-lime-600 py-10 px-5 flex overflow-hidden ">
          <div className="mark flex shrink-0 gap-10 items-center  text-gray-950 ">
            <h1 className="text-7xl font-semibold">Nothing Like Anything</h1>
            <img
              className="size-20"
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="img" />
          </div>
          <div className="mark flex shrink-0 gap-10 items-center text-gray-950">
            <h1 className="text-7xl font-semibold">Nothing Like Anything</h1>
            <img
              className="size-20"
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="img" />
          </div>
          <div className="mark flex shrink-0 gap-10 items-center text-gray-950">
            <h1 className="text-7xl font-semibold">Nothing Like Anything</h1>
            <img
              className="size-20"
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="img" />
          </div>
          <div className="mark flex shrink-0 gap-10 items-center text-gray-950">
            <h1 className="text-7xl font-semibold">Nothing Like Anything</h1>
            <img
              className="size-20"
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="img" />
          </div>
          <div className="mark flex shrink-0 gap-10 items-center text-gray-950">
            <h1 className="text-7xl font-semibold">Nothing Like Anything</h1>
            <img
              className="size-20"
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="img" />
          </div>
        </div>
      </div>

      <div id="page3" className="h-[100vh] w-full overflow-x-hidden">hello</div>

    </>
  );
}

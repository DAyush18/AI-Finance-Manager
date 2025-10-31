// "use client";
// import Link from "next/link";
// import { Button } from "./ui/button";
// import Image from "next/image";
// import { useEffect, useRef } from "react";

// const HeroSection = () => {

//     const imageRef = useRef();
//     useEffect(() => {
//         const imageElement = imageRef.current;

//         const handleScroll = () => {
//             const scrollPosition = window.scrollY;
//             const scrollThreshold = 100; // Adjust this value to control when the effect starts

//             if(scrollPosition > scrollThreshold) {
//                 imageElement.classList.add("scrolled");
//             }else{
//                 imageElement.classList.remove("scrolled");
//             }

//         };

//         window.addEventListener('scroll',handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);



    
//     return (
//         <div className="pb-20 px-4">
//             <div className="container mx-auto text-center">
//                 <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
//                     Manage Your Finances <br /> with Intelligence
//                 </h1>

//                 <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//                     An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.
//                 </p>

//                 <div className="flex justify-center space-x-4">
//                     <Link href="/dashboard">
//                         <Button size="lg" className="px-8">Get Started</Button>
//                     </Link>


//                     <Link href="#">
//                         <Button size="lg" variant="outline" className="px-8">Watch Demo</Button>
//                     </Link>
//                 </div>

//                 <div className="hero-image-wrapper ">
//                     <div ref={imageRef} className="hero-image">
//                         <Image src="/bannerr.jpg" alt="Dashboard preview" width={1280} height={720}
//                             className="rounded-lg shadow-2xl border mx-auto"
//                             priority />
//                     </div>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default HeroSection;

"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef();

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
          Manage Your Finances <br /> with Intelligence
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>

        {/* ✅ Action Buttons Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Get Started Button */}
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>

          {/* Watch Demo Button */}
          <Link href="#">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>

          {/* 🧠 New Chat with AI Button */}
          <Link
            href="https://f-inance-gpt.vercel.app/chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              💬 Chat with AI
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="hero-image-wrapper mt-16">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/bannerr.jpg"
              alt="Dashboard preview"
              width={1280}
              height={720}
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


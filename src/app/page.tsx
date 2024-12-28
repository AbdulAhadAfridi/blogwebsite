"use client";
import CommunitySection from '@/components/Communitysection';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';


const Home = () => (
  <>
 
    {/* ///////Hero section */}
    <section className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 text-center text-white">
        <h1 className="text-5xl sm:text-6xl font-bold">
          <span className="">Build </span>
          <span className="bg-gradient-to-r from-blue-500 text-green-300"
          >
            <Typewriter
              words={["Your Skills", "Your Future", "Your Education"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="mt-4 text-xl sm:text-2xl font-light max-w-3xl">
          "Education is the most powerful weapon which you can use to change
          the world." — Nelson Mandela
        </p>
        <div className="mt-8 flex items-center space-x-6">
          {/* Start Learning Button */}
          <button
            className="text-lg font-semibold border-b-2 border-red-500 hover:text-green-500 transition focus:outline-none"
            aria-label="Start Learning"
          >
            Start Learning →
          </button>
        </div>
      </div>
  
    </section>
    <section className="bg-blue-50 py-40 px-6 sm:px-12 lg:px-24">
      <div className="min-w-full mx-auto text-center">
        <h1 className=" text-2xl md:text-4xl font-bold text-gray-900 sm:text-5xl">
          Empower Your Future—<span className="whitespace-nowrap">Through Learning</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Discover resources and opportunities to grow your skills and knowledge 
          in the ever-evolving world.
        </p>
        <button
          className="mt-8 px-6 py-3 bg-black text-white text-lg font-semibold rounded-full shadow-md hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-500"
          aria-label="Start Learning Today"
        >
          Start Learning Today
        </button>
      </div>
    </section>
      

    <div className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
  {/* Hero Section */}
  <div className="relative p-8 sm:p-12 lg:p-28 text-center bg-blue-500 text-white">
    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight">
      Welcome to <span className="text-yellow-300">EduSkill</span>
    </h1>
    <p className="mt-4 text-base sm:text-lg lg:text-xl">
      Empowering your journey in education and skill-building.
    </p>
    <div className="mt-6 flex flex-col sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <Link href="/blogs">
        <button className="px-6 py-3 bg-yellow-300 text-blue-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition-all">
          Explore Blogs
        </button>
      </Link>
      <Link href="#">
        <button className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-all">
          Join Community
        </button>
      </Link>
    </div>
  </div>
</div>

<CommunitySection />


</>
  
);

export default Home;



























 

 
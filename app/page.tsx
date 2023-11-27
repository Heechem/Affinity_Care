'use client';
import Image from 'next/image';
import Link from 'next/link';
import Video from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <main className="flex flex-col justify-between mb-10">
      <div className="flex flex-col sm:flex-row  w-full justify-center items-center mt-12 mb-20 ">
        <div className="flex flex-col justify-between items-center px-4 w-1/2 mb-10 text-center z-[99] h-[68%] text-3xl">
          {/* <p>Affinity Respite Services</p>
          <p>Care services that you won&apos;t find anywhere else</p>
          <p>More details </p> */}
          <p className="mb-5">Affinity Respite Services</p>
          <TypeAnimation
            sequence={[
              "Care services that you won't find anywhere else",
              1000,
              'Fro more details :',
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />

          <div className="mt-6 active:scale-95 ">
            <Link
              href={'/contact'}
              className="mt-6 border w-1/3 text-center p-4 rounded-xl shadow-md text-xl  hover:bg-amber-400 transition-all ease-in-out"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center  w-1/2">
          <video
            autoPlay
            style={{ width: '100%', borderRadius: '10px' }}
            loop
            muted
          >
            <source src="/homevid.mp4" />
          </video>
        </div>
      </div>
      <div className=" mt-10">
        <h2 className="hTitle  text-center">Welcome to Affinity Home Care</h2>
        <p className="pText">
          At Affinity, we believe in more than just care; we believe in
          compassionate support tailored to your needs. Our mission is to
          provide exceptional care services that bring comfort, trust, and
          reliability into your home.
        </p>
        <h2 className="hTitle">Who We Are</h2>
        <p className="pText">
          Affinity Home Care is a dedicated team of professionals committed to
          enhancing the quality of life for our clients. With a focus on
          personalized care plans, we prioritize your well-being above all else.
          Our caregivers are extensively trained, compassionate, and dedicated
          to ensuring your comfort and safety.
        </p>
        <Link
          href={'/service'}
          className="hTitle  underline underline-offset-2 hover:text-amber-400"
        >
          Our Services
        </Link>
        <p className="pText">
          We offer a comprehensive range of home care services designed to meet
          your unique requirements. Whether it&apos;s assistance with daily
          activities, skilled nursing care, companionship, or specialized
          support, we&apos;re here to help. Our goal is to empower you to live
          life to the fullest in the comfort of your own home.
        </p>
        <h2 className="hTitle">Why Choose Affinity</h2>

        <ul className=" list-outside ml-2 my-4">
          <li>
            Personalized Care: Tailored care plans that suit your individual
            needs.
          </li>
          <li>
            Compassionate Team: Trained professionals who genuinely care about
            your well-being.
          </li>
          <li>Trust & Reliability: Dependable services you can count on.</li>
          <li>
            Commitment to Excellence: Striving for the highest quality care for
            every client.
          </li>
        </ul>

        <Link
          href={'/contact'}
          className="hTitle hover:text-amber-400  underline underline-offset-2"
        >
          Get In Touch
        </Link>
        <p className="pText">
          Ready to experience exceptional home care? Contact us today to discuss
          how Affinity Home Care can provide the support and assistance you
          deserve.
        </p>
      </div>
    </main>
  );
}

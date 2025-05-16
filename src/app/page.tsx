"use client";

import Head from "next/head";
import ServicesSection from "./Sections/Services";
import About from "./Sections/About";
import Testimonials from "./Sections/Testimonials";
import Hero from "./Sections/Hero";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Elite Dirt Works | Excavation & Landscaping in Zimmerman, MN
        </title>
        <meta
          name="description"
          content="Elite Dirt Works offers professional excavation, tree removal, and dirt work services in Zimmerman, MN. Over 10 years of experience. Get a free quote today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Elite Dirt Works" />
        <meta
          property="og:description"
          content="Trusted excavation and landscaping services in Zimmerman, MN."
        />
        <meta property="og:image" content="/placeholder-hero.jpg" />
        <meta property="og:url" content="https://elitedirtworks.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Header />
        <Hero />
        <ServicesSection />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

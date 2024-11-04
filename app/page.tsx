"use client"
// pages/index.js

import Head from "next/head";
import Navbar from "@/Components/Navbar";
import HeadSection from "@/Components/HeadSection";
import DifferencePage from "@/Components/DifferencePage";
import Footer from "@/Components/Footer";
import Resource from "@/Components/Resource";
import Clients from '@/Components/Clients';
import Start from "@/Components/Start";

export default function Home() {
  return (
    <>
    <div className="aurora-background relative min-h-screen overflow-hidden bg-gray-900">
      <Head>
        <title>Addifico</title>
        <meta
          name="description"
          content="Competitive Edge through Creativity & Technology"
        />
      </Head>
      <Navbar />
      <div className="py-28 px-20">
        <HeadSection />
      </div>
      <DifferencePage />
      </div>
      <Clients/>
      <Resource/>
      <Start/>
      <div className="p-5">
        <Footer />
      </div>
      </>
  );
}

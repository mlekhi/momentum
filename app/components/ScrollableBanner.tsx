"use client";

import React, { useMemo } from "react";
import Head from "next/head";

// Dummy JSON data
const dummyData = [
  { message: "Atnasia is building @nasiacooks, into a gut-friendly food platform on Instagram." },
  { message: "Maya is developing Yaps: a mobile game about her pet dog." },
  { message: "Robin is developing a machine learning research paper club and building his own series of video generation models." },
  { message: "Daniel is writing a blog about startups & developments in climate tech." },
  { message: "Arianna is writing poetry to compile and publish a collection." },
  { message: "Xander is building Hollo, an aesthetic holographic display device that you can talk to and interact with." },
  { message: "Vincent is working on @in.intuition, a personal blog at the intersection of technology, philosophical musings, and the self." },
];

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  console.log(shuffled);
  return shuffled;
};

const ScrollableBanner: React.FC = () => {
  const shuffledData = useMemo(() => shuffleArray(dummyData), []);
  const scrollingText = shuffledData.map((item) => item.message).join(" • ");
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: shuffledData.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.message,
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="w-full h-12 md:h-14 overflow-hidden bg-gray-800 flex items-center">
        <div className="scroll-container flex whitespace-nowrap">
          <div className="scroll-text text-white md:text-xl font-semibold">
            {scrollingText} • {scrollingText}
          </div>
        </div>
        <style jsx>{`
          .scroll-container {
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            height: 100%;
          }
          .scroll-text {
            display: inline-block;
            white-space: nowrap;
            animation: scroll 30s linear infinite;
          }
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default ScrollableBanner;

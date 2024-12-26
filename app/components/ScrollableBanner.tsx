"use client";

import React from "react";
import Head from "next/head";

// Dummy JSON data
const dummyData = [
  { message: "Atnasia is building @nasiacooks, into a gut-friendly food platform on Instagram." },
  { message: "Maya is developing Yaps: a mobile game about her pet dog." },
  { message: "Robin is developing a machine learning research paper club and building his own series of video generation models." },
  { message: "Daniel is writing a blog about startups & developments in climate tech." },
  { message: "Arianna is writing poetry to compile and publish a collection." },
  { message: "Vincent is working on @in.intuition, a personal blog at the intersection of technology, philosophical musings, and the self." },
];

const ScrollableBanner: React.FC = () => {
  const scrollingText = dummyData.map((item) => item.message).join(" • ");
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: dummyData.map((item, index) => ({
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

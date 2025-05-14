"use client";
import { Hero } from "./home/Hero";
import { Steps } from "./home/Steps";
import { QuestionsAndAnswers } from "./home/QuestionsAndAnswers";

export default function Home() {
  return (
    <main className="relative mx-auto overflow-hidden bg-gradient-to-br from-indigo-50/30 via-white to-indigo-50/40">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dot opacity-5 pointer-events-none"></div>
      
      <div className="relative mx-auto max-w-screen-2xl px-4 pb-24 sm:px-6 lg:px-8">
        <Hero />
        <Steps />
        <QuestionsAndAnswers />
      </div>
    </main>
  );
}

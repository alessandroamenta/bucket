import { WeeksCounter } from "@/components/WeeksCounter";
import BucketList from "@/components/BucketList";
import LottieAnimation from "@/components/LottieAnimation";

export default function Home() {
  return (
    <main className="flex flex-col w-full pb-8">
      <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
        <LottieAnimation />
        <div className="text-center space-y-0">
          <p className="intro mb-0">hi, i&apos;m ale, and these are</p>
          <h1 className="font-light mt-0 mb-0 leading-tight">
            the things i wanna do before i die
          </h1>
          <WeeksCounter />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl">
          <BucketList />
        </div>
      </div>
    </main>
  );
}

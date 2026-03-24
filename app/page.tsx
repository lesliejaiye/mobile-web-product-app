'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800">Just Skn</h1>
      <button className="text-lg text-gray-600" onClick={() => router.push('/onboard')}>Enter</button>
    </>
  );
}

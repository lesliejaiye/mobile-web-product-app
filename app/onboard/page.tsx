'use client';
import { useRouter } from 'next/navigation';

export default function Onboard() {
  const router = useRouter();
  return (
    <>
      <button className="mb-4 px-8 py-2 bg-pink-200 text-white rounded-lg border border-pink-300 text-base" onClick={() => router.push('/onboard/login')}>Login</button>
      <button className="px-6 py-2 bg-pink-300 text-white rounded-lg border border-pink-400 text-base" onClick={() => router.push('/onboard/signup')}>Sign Up</button>
    </>
  );
}
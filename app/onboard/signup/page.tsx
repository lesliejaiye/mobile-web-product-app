
'use client';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
        <input type="email" id="email" placeholder="Email" className="border border-black rounded-md p-2 placeholder:text-gray-400" />
        <input type="password" id="password" placeholder="Password" className="border border-black rounded-md p-2 placeholder:text-gray-400" />
        </div>
      <button className="bg-gray-200 text-black rounded-md p-2">Sign Up</button>
      <p className="text-blue-500 text-right text-sm">Forgot password?</p>
    </div>
  );
}
'use client';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  
  // TODO: Add authentication logic

  return (
    <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
        <input type="email" id="email" placeholder="Email" className="border border-black rounded-md p-2 placeholder:text-gray-400" />
        <input type="password" id="password" placeholder="Password" className="border border-black rounded-md p-2 placeholder:text-gray-400" />
        <p className="text-blue-500 text-right text-sm">Forgot password?</p>
        </div>
      <button className="bg-gray-200 text-black rounded-md p-2" onClick={() => router.push('/dashboard')}>Sign In</button>
      <p className="text-blue-500 text-right text-sm">Don't have an account? <button onClick={() => router.push('/onboard/signup')} className="text-blue-500 underline">Sign Up</button></p>
    </div>
  );
}
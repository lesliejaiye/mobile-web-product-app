
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
        {/* Right now when clicked, it automatically goes to the user questions page. 
        We need to add validation to ensure the user has entered valid email and password */}
      <button className="bg-gray-200 text-black rounded-md p-2" onClick={() => router.push('/onboard/signup/userQuestions')}>Sign Up</button>
    </div>
  );
}
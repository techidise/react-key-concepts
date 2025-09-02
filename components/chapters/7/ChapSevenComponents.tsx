'use client';

import { useState, useRef } from 'react';

// import { Button } from '@/components/ui/button';
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';

// import { z } from 'zod';

// const formSchema = z.object({
//   username: z.string,
// });

// Code with hooks.
// These components are being using to display how Refs work in React JS.

// export const EmailForm = () => {
//   const [enteredEmail, setEnteredEmail] = useState<string>('');

//   console.log(enteredEmail);

//   const handleUpdateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEnteredEmail(e.target.value);
//   };

//   const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

// Reset form state by setting the state & using the value prop below.
//   setEnteredEmail('');
// };

//   return (
//     <form className="bg-slate-600 p-4 rounded-full mt-4">
//       onSubmit={handleSubmitForm}
//       <label htmlFor="email">Your Email</label>
//       <input
//         type="email"
//         id="email"
//         onChange={handleUpdateEmail}
//         value={enteredEmail}
//         className="bg-amber-50 rounded-2xl p-2 m-2 text-xl font-normal text-gray-600"
//       />
//       <button className="bg-slate-700 w-30 rounded-full p-3 hover:bg-slate-800 hover:cursor-pointer">
//         Enter
//       </button>
//     </form>
//   );
// };

// Counter Component
// export const Counters = () => {
// const [counter1, setCounter1] = useState<number>(0);
//   const counterRef1 = useRef<number>(0);
//   const counterRef2 = useRef<number>(0);
//   let counter2 = 0;

//   const handleChangeCounters = () => {
//     // setCounter1((prev) => prev + 1);
//     counterRef1.current += 1;
//     counter2 += 1;
//     console.log(`Counter #1 ${counterRef1}`);
//     counterRef2.current += 1;
//   };
//   return (
//     <>
//       <Button
//         onClick={handleChangeCounters}
//         className="bg-slate-600 p-4 rounded-full m-2 hover:bg-slate-700"
//       >
//         Change Counter
//       </Button>
//       <ul className="bg-slate-600 p-4 rounded-full">
//         <li>Counter 1: {counterRef1.current}</li>
//         <li>Counter 2: {counter2}</li>
//         <li>counter 3: {counterRef2.current}</li>
//       </ul>
//     </>
//   );
// };

// Form + Preferences Components
const Preferences = ({ ref }) => {
  const [wantsNewProdInfo, setWantsNewProdInfo] = useState<boolean>(false);
  const [wantsProdUpdateInfo, setWantsProduUpdateInfo] =
    useState<boolean>(false);

  const handleChangeNewProdPref = () => {
    setWantsNewProdInfo((prevPref) => !prevPref);
  };

  const handleChangeUpdateProdPref = () => {
    setWantsProduUpdateInfo((prevPref) => !prevPref);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="">
        <input
          type="checkbox"
          id="pref-new"
          checked={wantsNewProdInfo}
          onChange={handleChangeNewProdPref}
          className="hover:cursor-pointer"
        />
        <span className="p-2 text-gray-500 font-semibold">New Products</span>
      </label>
      <label htmlFor="">
        <input
          type="checkbox"
          id="pref-updates"
          checked={wantsProdUpdateInfo}
          onChange={handleChangeUpdateProdPref}
          className="hover:cursor-pointer"
        />
        <span className="p-2 text-gray-500 font-semibold">Product Updates</span>
      </label>
    </div>
  );
};

export const FormExample = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="bg-red-50 p-7 rounded-2xl"
    >
      <div className="">
        <label htmlFor="" className="text-gray-500 font-semibold">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-500 rounded-full m-2 p-1 hover:cursor-pointer"
        />
      </div>
      <Preferences />
      <button className="rounded-full bg-slate-500 w-full p-2 m-2 font-semibold hover:cursor-pointe hover:bg-slate-400">
        Submit
      </button>
    </form>
  );
};

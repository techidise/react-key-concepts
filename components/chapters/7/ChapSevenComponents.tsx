'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

// Code with hooks.
// These components are being using to display how Refs work in React JS.

export const EmailForm = () => {
  const [enteredEmail, setEnteredEmail] = useState<string>('');

  console.log(enteredEmail);

  const handleUpdateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(e.target.value);
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset form state by setting the state & using the value prop below.
    setEnteredEmail('');
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="bg-slate-600 p-4 rounded-full mt-4"
    >
      <label htmlFor="email">Your Email</label>
      <input
        type="email"
        id="email"
        onChange={handleUpdateEmail}
        value={enteredEmail}
        className="bg-amber-50 rounded-2xl p-2 m-2 text-xl font-normal text-gray-600"
      />
      <button className="bg-slate-700 w-30 rounded-full p-3 hover:bg-slate-800 hover:cursor-pointer">
        Enter
      </button>
    </form>
  );
};

// Counter Component
export const Counters = () => {
  // const [counter1, setCounter1] = useState<number>(0);
  const counterRef1 = useRef<number>(0);
  const counterRef2 = useRef<number>(0);
  let counter2 = 0;

  const handleChangeCounters = () => {
    // setCounter1((prev) => prev + 1);
    counterRef1.current += 1;
    counter2 += 1;
    console.log(`Counter #1 ${counterRef1}`);
    counterRef2.current += 1;
  };
  return (
    <>
      <Button
        onClick={handleChangeCounters}
        className="bg-slate-600 p-4 rounded-full m-2 hover:bg-slate-700"
      >
        Change Counter
      </Button>
      <ul className="bg-slate-600 p-4 rounded-full">
        <li>Counter 1: {counterRef1.current}</li>
        <li>Counter 2: {counter2}</li>
        <li>counter 3: {counterRef2.current}</li>
      </ul>
    </>
  );
};

// 'use client';

// import { useState, useRef, forwardRef, useImperativeHandle } from 'react';

// // Define what the parent can access via the ref
// export type PreferencesRef = {
//   reset: () => void;
//   selectedPreferences: {
//     newProductInfo: boolean;
//     productUpdateInfo: boolean;
//   };
// };

// // Preferences component
// export const Preferences = forwardRef<PreferencesRef>((_, ref) => {
//   const [wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
//   const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false);

//   const reset = () => {
//     setWantsNewProdInfo(false);
//     setWantsProdUpdateInfo(false);
//   };

//   // Expose methods/values to the parent
//   useImperativeHandle(
//     ref,
//     () => ({
//       reset,
//       selectedPreferences: {
//         newProductInfo: wantsNewProdInfo,
//         productUpdateInfo: wantsProdUpdateInfo,
//       },
//     }),
//     [wantsNewProdInfo, wantsProdUpdateInfo]
//   );

//   return (
//     <div className="flex flex-col">
//       <label>
//         <input
//           type="checkbox"
//           id="pref-new"
//           checked={wantsNewProdInfo}
//           onChange={() => setWantsNewProdInfo((prev) => !prev)}
//           className="hover:cursor-pointer"
//         />
//         <span className="p-2 text-gray-500 font-semibold">New Products</span>
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           id="pref-updates"
//           checked={wantsProdUpdateInfo}
//           onChange={() => setWantsProdUpdateInfo((prev) => !prev)}
//           className="hover:cursor-pointer"
//         />
//         <span className="p-2 text-gray-500 font-semibold">Product Updates</span>
//       </label>
//     </div>
//   );
// });

// Preferences.displayName = 'Preferences'; // Needed when using forwardRef

// // FormExample component
// export const FormExample = () => {
//   const preferencesRef = useRef<PreferencesRef>(null);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Access preferences on submit
//     console.log(preferencesRef.current?.selectedPreferences);

//     // Reset checkboxes
//     preferencesRef.current?.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-red-50 p-7 rounded-2xl">
//       <div>
//         <label htmlFor="email" className="text-gray-500 font-semibold">
//           Your Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           className="bg-gray-500 rounded-full m-2 p-1 hover:cursor-pointer"
//         />
//       </div>
//       <Preferences ref={preferencesRef} />
//       <button
//         type="submit"
//         className="rounded-full bg-slate-500 w-full p-2 m-2 font-semibold hover:cursor-pointer hover:bg-slate-400"
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

// Previous version without forwardRef and useImperativeHandle
// ----------------------------------------------------

// 'use client';

// import { useState, useRef } from 'react';

// export type PreferencesRef = {
//   reset: () => void;
// };

// // Form + Preferences Components
// export const Preferences = ({ ref }: { ref: PreferencesRef }) => {
//   const [wantsNewProdInfo, setWantsNewProdInfo] = useState<boolean>(false);
//   const [wantsProdUpdateInfo, setWantsProdUpdateInfo] =
//     useState<boolean>(false);

//   const handleChangeNewProdPref = () => {
//     setWantsNewProdInfo((prevPref) => !prevPref);
//   };

//   const handleChangeUpdateProdPref = () => {
//     setWantsProdUpdateInfo((prevPref) => !prevPref);
//   };

//   const reset = (): void => {
//     setWantsNewProdInfo(false);
//     setWantsProdUpdateInfo(false);
//   };

//   ref.current.reset = reset;
//   ref.current.selectedPreferences = {
//     newProductInfo: wantsNewProdInfo,
//     productUpdateInfo: wantsProdUpdateInfo,
//   };

//   return (
//     <div className="flex flex-col">
//       <label htmlFor="">
//         <input
//           type="checkbox"
//           id="pref-new"
//           checked={wantsNewProdInfo}
//           onChange={handleChangeNewProdPref}
//           className="hover:cursor-pointer"
//         />
//         <span className="p-2 text-gray-500 font-semibold">New Products</span>
//       </label>
//       <label htmlFor="">
//         <input
//           type="checkbox"
//           id="pref-updates"
//           checked={wantsProdUpdateInfo}
//           onChange={handleChangeUpdateProdPref}
//           className="hover:cursor-pointer"
//         />
//         <span className="p-2 text-gray-500 font-semibold">Product Updates</span>
//       </label>
//     </div>
//   );
// };

// export const FormExample = () => {
//   const preferencesRef = useRef(null);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//   };

//   console.log(preferencesRef.current);
//   preferencesRef.current?.reset();

//   return (
//     <form
//       action=""
//       onSubmit={handleSubmit}
//       className="bg-red-50 p-7 rounded-2xl"
//     >
//       <div className="">
//         <label htmlFor="" className="text-gray-500 font-semibold">
//           Your Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           className="bg-gray-500 rounded-full m-2 p-1 hover:cursor-pointer"
//         />
//       </div>
//       <Preferences ref={preferencesRef} />
//       <button className="rounded-full bg-slate-500 w-full p-2 m-2 font-semibold hover:cursor-pointe hover:bg-slate-400">
//         Submit
//       </button>
//     </form>
//   );
// };

'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

// import { useState, forwardRef } from 'react'; // when using React < 19

// function Preferences() {
// const Preferences = forwardRef((props, ref) => { // forwardRef needed when using React < 19

// ========> Preferenes Component <======== //
function Preferences({ ref }) {
  // ref can be accepted & used like any other prop when using React >= 19
  const [wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
  const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false);

  const handleChangeNewProdPref = () => {
    setWantsNewProdInfo((prevPref) => !prevPref);
  };

  const handleChangeUpdateProdPref = () => {
    setWantsProdUpdateInfo((prevPref) => !prevPref);
  };

  const reset = () => {
    setWantsNewProdInfo(false);
    setWantsProdUpdateInfo(false);
  };

  ref.current.reset = reset;
  ref.current.selectedPreferences = {
    newProductInfo: wantsNewProdInfo,
    productUpdateInfo: wantsProdUpdateInfo,
  };

  return (
    <div className={''}>
      <label>
        <input
          type="checkbox"
          id="pref-new"
          checked={wantsNewProdInfo}
          onChange={handleChangeNewProdPref}
        />
        <span>New Products</span>
      </label>
      <label>
        <input
          type="checkbox"
          id="pref-updates"
          checked={wantsProdUpdateInfo}
          onChange={handleChangeUpdateProdPref}
        />
        <span>Product Updates</span>
      </label>
    </div>
  );
}

export const Form = () => {
  const preferencesRef = useRef({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(preferencesRef.current);
    preferencesRef.current.reset();
  }

  return (
    <>
      <form className={''} onSubmit={handleSubmit}>
        <div className={''}>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" />
        </div>
        <Preferences ref={preferencesRef} />
        <button>Submit</button>
      </form>

      {/* Card Sample */}
      <Card className="w-full max-w-sm bg-slate-600 border-slate-500">
        <CardHeader>
          <CardTitle className="flex">Enter your Email</CardTitle>
          <CardDescription className="text-justify">
            Enter your email below to login to your account.
          </CardDescription>

          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="email">Email</label>
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="bg-gray-300 rounded-md m-2 p-3 hover:cursor-pointer"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <label htmlFor="password">Password</label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="bg-gray-300 rounded-md m-2 p-3 hover:cursor-pointer"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full rounded-full hover:cursor-pointer"
          >
            Login
          </Button>
          <Button
            // variant="outline"
            className="w-full rounded-full hover:cursor-pointer"
          >
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
// ========> End Preferences Component <======== //

// ======> EmailForm Component <======= //
export const EmailForm = () => {
  // const emailRef = useRef(null);
  const [enteredEmail, setEnteredEmail] = useState('');

  console.log(enteredEmail);

  const handleUpdateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(e.target.value);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setEnteredEmail(' ');
    // const enteredEmail = emailRef.current.value;
    // console.log(enteredEmail);
    // Could send enteredEmail to backend API here
  };

  return (
    <>
      <Card className="w-full max-w-sm bg-slate-950 border-slate-900 mb-5">
        <CardHeader>
          <CardTitle className="text-justify font-semibold text-slate-50">
            Login to your account
          </CardTitle>
          <CardDescription className="text-justify font-extralight text-slate-50">
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button
              variant={'link'}
              className="text-slate-50 hover:underline hover:cursor-pointer"
            >
              Sign Up
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitForm}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-1">
                <Label htmlFor="email" className="text-slate-50">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="email@example.com"
                  required
                  // ref={emailRef}
                  onChange={handleUpdateEmail}
                  value={enteredEmail}
                  className="bg-slate-300 border border-slate-400 rounded-md mb-4 p-3 w-full"
                />
              </div>
            </div>
            {/* <button className="bg-red-500">Save</button> */}
            <Button
              variant="outline"
              type="submit"
              className="rounded-full w-full bg-transparent text-slate-50 hover:cursor-pointer hover:bg-slate-500"
            >
              Enter
            </Button>
          </form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};
// =========> End EmailForm Component <======== //

// ========> Counter Component <======== //
export const Counters = () => {
  const [counter1, setCounter1] = useState(0);
  const counterRef = useRef(0);
  let counter2 = 0;

  const handleChangeCounters = () => {
    setCounter1(1);
    counter2 = 1;
    counterRef.current = 1;
  };

  return (
    <>
      <Card className="w-full max-w-sm bg-slate-950 border-slate-900 mb-5">
        <Button
          onClick={handleChangeCounters}
          className="hover:cursor-pointer m-5 mb-0 bg-slate-600 text-slate-50 rounded-full hover:bg-slate-500"
        >
          Change Counter
        </Button>
        <CardContent>
          <ul className="text-slate-50">
            <li>Counter 1: {counter1}</li>
            <li>Counter 2: {counter2}</li>
            <li>Counter Ref: {counterRef.current}</li>
          </ul>
        </CardContent>
      </Card>
    </>
  );
};

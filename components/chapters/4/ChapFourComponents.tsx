'use client';
import { ChangeEventHandler, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

//========<*> This file contains components for Chapter Four of the React Key Concepts course. <*>=========//

//===================<*> Login Form Component using one state object slice <*>===================//
export const LoginForm = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    errorMessage: '',
  });

  const handleUpdateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Email input blurred');
    setUserData((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
    if (userData.errorMessage) {
      setUserData((prevState) => ({
        ...prevState,
        errorMessage: 'Invalid email update',
      }));
    }
  };

  const handleUpdatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Password input blurred');
    setUserData((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
    if (userData.errorMessage) {
      setUserData((prevState) => ({
        ...prevState,
        errorMessage: 'Invalid password update',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      setUserData((prevState) => ({
        ...prevState,
        errorMessage: 'Both fields are required',
      }));
    } else {
      setUserData((prevState) => ({
        ...prevState,
        errorMessage: '',
      }));
      console.log('Login successful:', userData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center bg-amber-100 p-6 rounded-lg shadow-md shadow-amber-100 mt-8"
    >
      <Input
        type="email"
        placeholder="Email"
        className="border-2 border-gray-300 rounded-full p-2 mb-4 w-full max-w-xs text-gray-500"
        onBlur={handleUpdateEmail}
        value={userData.email}
        onChange={(e) =>
          setUserData((prevState) => ({
            ...prevState,
            email: e.target.value,
          }))
        }
      />
      <Input
        type="password"
        placeholder="Password"
        className="border-2 border-gray-300 rounded-full p-2 mb-4 w-full max-w-xs text-gray-500"
        onBlur={handleUpdatePassword}
        value={userData.password}
        onChange={(e) =>
          setUserData((prevState) => ({
            ...prevState,
            password: e.target.value,
          }))
        }
      />
      <Button
        type="submit"
        className="bg-red-400 text-white rounded-full p-2 w-full max-w-xs hover:bg-red-300 transition-colors hover:cursor-pointer"
      >
        Login
      </Button>
      {userData.errorMessage && (
        <p className="text-red-500 mt-2">{userData.errorMessage}</p>
      )}
    </form>
  );
};

//============<*> Counter Component <*>============// Book Page: 72
export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="flex flex-col items-center bg-amber-100 p-6 rounded-lg shadow-md shadow-amber-100 mt-8 hover:cursor-pointer">
      <h2 className="text-3xl text-gray-500 font-bold mb-4">
        Counter: {counter}
      </h2>
      <Button
        onClick={handleIncrement}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors hover:cursor-pointer"
      >
        Increment
      </Button>
      <Button
        onClick={() => setCounter((prevCounter) => prevCounter - 1)}
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors mt-4 hover:cursor-pointer"
      >
        Decrement
      </Button>
      <Button
        onClick={() => setCounter((prevCounter) => prevCounter + 5)}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors mt-4 hover:cursor-pointer"
      >
        Increment by 5
      </Button>
      <Button
        onClick={() => setCounter((prevCounter) => prevCounter - 5)}
        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors mt-4 hover:cursor-pointer"
      >
        Decrement by 5
      </Button>
      <Button
        onClick={() => setCounter((prevCounter) => prevCounter * 2)}
        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors mt-4 hover:cursor-pointer"
      >
        Increase x2
      </Button>
      <Button
        onClick={() => setCounter(0)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors mt-4 hover:cursor-pointer"
      >
        Reset
      </Button>
    </div>
  );
};

//============<*> Two-Way Binding Component <*>============//
export const NewsLetterField = () => {
  const [email, setEmail] = useState('');

  // Function to handle email input change and onBlur event.
  const handleUpdateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Function to handle clearing the email input onClick.
  const handleClearInput = () => {
    setEmail('');
  };

  return (
    <div className="flex flex-col items-center mx-8 bg-amber-100 p-6 rounded-lg shadow-md shadow-amber-100">
      <Input
        className="text-green-600 border-2 border-gray-300 rounded-full p-2 mb-4 w-full max-w-xs"
        type="text"
        placeholder="Enter your email"
        onBlur={handleUpdateEmail}
        value={email}
        onChange={handleUpdateEmail}
      />
      <p className="text-xl text-gray-500">You typed: {email}</p>
      <Button
        className="bg-red-400 text-white rounded-full p-2 w-full max-w-xs hover:bg-red-300 transition-colors hover:cursor-pointer"
        onClick={handleClearInput}
      >
        Reset
      </Button>
    </div>
  );
};

//============<*> Repeater Component <*>============//
export const Repeater = () => {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  const handleClearInput = () => {
    setUserInput('');
  };

  return (
    <div className="flex flex-col items-center mx-8 bg-amber-100 p-6 rounded-lg shadow-md shadow-amber-100">
      <Input
        className="text-green-600 border-2 border-gray-300 rounded-full p-2 mb-4 w-full max-w-xs"
        type="text"
        placeholder="Type something"
        value={userInput}
        onChange={handleInputChange}
      />
      <p className="text-xl text-gray-500">You typed: {userInput}</p>

      <Button
        className="bg-red-400 text-white rounded-full p-2 w-full max-w-xs hover:bg-red-300 transition-colors hover:cursor-pointer"
        onClick={handleClearInput}
      >
        Reset
      </Button>
    </div>
  );
};

//============<*> CharCounter Component <*>============//
// This component counts the number of entered characters in an input field.
// Then it displays this informtation to the user.
export const CharCounter = () => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    console.log('Input changed:', e.target.value);
  };

  const numChars = userInput.length;

  return (
    <div className="flex flex-col items-center mx-8 bg-amber-100 p-6 rounded-lg shadow-md shadow-amber-100">
      <Input
        className="rounded-full bg-red-950 border-indigo-400 border-2 p-2 mb-4 w-full max-w-xs text-gray-500 font-black"
        type="text"
        onChange={handleChange}
      />
      <p className="text-2xl text-gray-800 font-black">
        Characters entered: {numChars}
      </p>
    </div>
  );
};

// ===================<*> Form and Form submission Component <*>===================//
export const NewsletterSignUp = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleUpdateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Could add email validation here
    setEmail(e.target.value);
  };

  const handleUpdateAgreement = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreed(e.target.checked); // Update the agreement state based on checkbox. Checkbox is a default JS boolean.
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior.
  };

  const userData = { userEmail: email, userAgrees: agreed };
  console.log('User Data:', userData);

  return (
    <form
      className="flex flex-col items-center mx-8 bg-amber-100 p-6 rounded-lg shadow-md shadow-amber-100"
      onSubmit={handleSignUp}
    >
      <div>
        <label htmlFor="email">Your Email</label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={handleUpdateEmail}
          className="border-2 border-gray-300 rounded p-2 mb-4 w-full max-w-xs"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <Input type="checkbox" id="agree" onChange={handleUpdateAgreement} />
        <label htmlFor="agree">Agree to terms and conditions</label>
      </div>
    </form>
  );
};

//==========<*> Lifting State Up Component <*>==========//
const SearchBar = (onUpdateSearch: ChangeEventHandler<HTMLInputElement>) => {
  return (
    <Card className="w-full max-w-sm bg-red-300">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
        <CardAction>
          <Button
            className="text-red-500 text-shadow-red-50 hover:cursor-pointer"
            variant="link"
          >
            Sign Up
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Input
          className="border bg-red-100"
          type="search"
          onChange={onUpdateSearch}
        />
        <form>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="#"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline hover:cursor-pointer"
              >
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full hover:cursor-pointer">
          Login
        </Button>
        <Button variant="outline" className="w-full hover:cursor-pointer">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  );
};

const Overview = ({ currentTerm }: { currentTerm: string }) => {
  return <p>Currently searching for {currentTerm}.</p>;
};

export const LiftingStateUp = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleUpdateSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    console.log('Search term updated:', e.target.value);
  };

  return (
    <>
      <SearchBar onUpdateSearch={handleUpdateSearchTerm} />
      <Overview currentTerm={searchTerm} />
    </>
  );
};

// ************> AI Code Snippet <************ //// This component counts the number of characters typed in an input field.
// It uses a single state slice

// export const CharCounter = () => {
//   const [text, setText] = useState('');
//   const [charCount, setCharCount] = useState(0);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const inputText = e.target.value;
//     setText(inputText);
//     setCharCount(inputText.length);
//   };

//   return (
//     <div className="flex flex-col items-center mx-8 bg-amber-100 p-6 rounded-lg shadow-md shadow-amber-100">
//       <Input
//         className="text-green-600 border-2 border-gray-300 rounded-full p-2 mb-4 w-full max-w-xs"
//         type="text"
//         placeholder="Type something"
//         value={text}
//         onChange={handleInputChange}
//       />
//       <p className="text-xl text-gray-500">Character Count: {charCount}</p>
//     </div>
//   );
// };

//===================<*> Login Form Component using individual state slices <*>===================//
// export const LoginForm = () => {
//   const [enteredEmail, setEnteredEmail] = useState('');
//   const [enteredPassword, setEnteredPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

// Function to handle Email update.
// const handleUpdateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
//   console.log('Email input blurred');
//   setEnteredEmail(e.target.value);
//   if (errorMessage) {
//     setErrorMessage('Invalid email update');
//   }
// };

// Function to handle Password update.
// const handleUpdatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
//   console.log('Password input blurred');
//   setEnteredPassword(e.target.value);
//   if (errorMessage) {
//     setErrorMessage('Invalid password update');
//   }
// };

// Function to validate email format
// const handleSubmit = (e: React.FormEvent) => {
//   e.preventDefault();
//   if (!enteredEmail || !enteredPassword) {
//     setErrorMessage('Both fields are required');
//   } else {
//     setErrorMessage('');
//     // Handle successful login logic here
//     console.log('Login successful:', { enteredEmail, enteredPassword });
//   }
// };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
//       <input
//         type="email"
//         placeholder="Email"
//         onBlur={handleUpdateEmail}
//         value={enteredEmail}
//         onChange={(e) => setEnteredEmail(e.target.value)}
//         className="border-2 border-gray-300 rounded p-2 mb-4 w-full max-w-xs"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         onBlur={handleUpdatePassword}
//         value={enteredPassword}
//         onChange={(e) => setEnteredPassword(e.target.value)}
//         className="border-2 border-gray-300 rounded p-2 mb-4 w-full max-w-xs"
//       />
//       <button
//         type="submit"
//         className="bg-blue-500 text-white rounded p-2 w-full max-w-xs hover:bg-blue-600 transition-colors "
//       >
//         Login
//       </button>
//       {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
//     </form>
//   );
// };

// export const EmailInput = () => {
//   const [errorMessage, setErrorMessage] = useState(''); // State to hold the error message
// Function to handle email input change

// const evaluateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
//   const email = event.target.value;
//   // Simple email validation regex
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Check if the email matches the regex
//     if (!emailRegex.test(email)) {
//       setErrorMessage('The entered email address is invalid');
//     } else {
//       setErrorMessage('');
//     }
//   };

//   return (
//     <div className="text-5xl text-red-50">
//       <input
//         className="border-amber-200 border-2 rounded-full p-2 w-full"
//         placeholder="Your email"
//         type="email"
//         onBlur={evaluateEmail}
//       />
//       <p className="text-2xl text-red-600 rounded-full p-2 mt-4 text-center">
//         {errorMessage}
//       </p>
//     </div>
//   );
// };

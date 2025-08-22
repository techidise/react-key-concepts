'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Navigation
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"

//=======> map() Method examples <======//
// export const Todos = () => {
//   const [todos, setTodos] = useState(['Learn React', 'Recommend this book']);

//   const handleAddTodo = () => {
//     setTodos([...todos, 'A new todo item']);
//   };

//   return (
//     <div>
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo) => (
//           <li>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export const Users = () => {
  const [users, setUsers] = useState([
    { id: 'u1', name: 'Max', age: 35 },
    { id: 'u2', name: 'Anna', age: 32 },
  ]);

  const handleAddUsers = () => {
    setUsers([...users, { id: 'u3', name: 'Fried', age: 34 }]);
  };

  return (
    <Card className="flex flex-col w-full mt-96">
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>Users Description</CardDescription>
        <CardAction>User Action</CardAction>
      </CardHeader>
      <CardContent>
        <Button onClick={handleAddUsers} className="hover:cursor-pointer">
          Add New User
        </Button>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className="bg-neutral-500 rounded-md items-center text-center justify-center m-2 p-2"
            >
              {user.name}
            </li>
          ))}
        </ul>
        <CardFooter>
          <p>User Footer</p>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

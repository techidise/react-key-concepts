'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Individual Form Components
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field';

// Individual Card Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Individual Tabs Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// React-Hook-Form + Shadcn example.

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// interface URLProp {
//   url: string;
// }

// Type guard function
// const isPostArray = (data: unknown): data is Post[] => {
//   return (
//     Array.isArray(data) &&
//     data.every(
//       (item) =>
//         typeof item === 'object' &&
//         item !== null &&
//         typeof (item as Post).id === 'number' &&
//         typeof (item as Post).userId === 'number' &&
//         typeof (item as Post).title === 'string' &&
//         typeof (item as Post).body === 'string'
//     )
//   );
// };

export const FormNoActions = () => {
  const handleFormSubmit = (event: HTMLFormElement) => {
    event.preventDefault();
    console.log('Submitted!');
  };

  return (
    <>
      <Card className="flex w-full max-w-sm flex-col gap-6 mx-auto px-3.5 mb-3">
        <form onSubmit={handleFormSubmit}>
          <CardContent className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" />
            </div>
          </CardContent>
          <CardFooter className="mt-3">
            <Button
              variant="outline"
              className="text-red-50 hover:cursor-pointer"
            >
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
};

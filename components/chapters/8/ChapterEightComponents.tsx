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

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface URLProp {
  url: string;
}

// Type guard function
const isPostArray = (data: unknown): data is Post[] => {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        typeof item === 'object' &&
        item !== null &&
        typeof (item as Post).id === 'number' &&
        typeof (item as Post).userId === 'number' &&
        typeof (item as Post).title === 'string' &&
        typeof (item as Post).body === 'string'
    )
  );
};

const fetchPosts = async (url: string): Promise<Post[]> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

  const blogPosts = await response.json();

  if (!isPostArray(blogPosts)) {
    throw new Error('Invalid response format');
  }

  return blogPosts;
};

// Blog Post Component
export const BlogPosts = ({ url }: URLProp) => {
  const [loadedPosts, setLoadedPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts(url);
        setLoadedPosts(fetchedPosts);
        setError(null);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    if (url) {
      loadPosts();
    }
    // fetchPosts(url).then((fetchedPosts) => setLoadedPosts(fetchedPosts));
  }, [url]);

  const handleFetchPost = async () => {
    try {
      const fetchedPosts = await fetchPosts(url);
      setLoadedPosts(fetchedPosts);
      // fetchPosts(url).then((fetchedPosts) => setLoadedPosts(fetchedPosts));
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div>
      <Button
        onClick={handleFetchPost}
        variant="destructive"
        className="hover:cursor-pointer"
      >
        Fetch Posts
      </Button>

      {error && <p className="text-red-500">{error}</p>}

      <ul>
        {loadedPosts.map((post) => (
          <li
            key={post.id}
            className="bg-blue-400 rounded-2xl text-black my-3 py-3"
          >
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Alert Component
export const Alert = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const handleUpdateEmail = (event) => {
    setEnteredEmail(event.target.value);
  };

  const handleUpdatePassword = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmail = useCallback(() => {
    if (!enteredEmail.includes('@')) {
      console.log('Invalid Email!');
    }
  }, [enteredEmail]);

  useEffect(() => {
    validateEmail();
  }, [validateEmail]);

  return (
    <Card className="flex flex-col w-full max-w-sm gap-6">
      <CardContent>
        <form className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="">Email</Label>
            <Input type="email" onChange={handleUpdateEmail} />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="">Password</Label>
            <Input type="password" onChange={handleUpdatePassword} />
          </div>
          <CardFooter className="mt-3">
            <Button className="hover:cursor-pointer">Save</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

// Signup or SignIn \\
export const TabsDemo = () => {
  return (
    <div className="flex flex-col w-full max-w-sm gap-6 mt-10">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. <br /> Click save when
                you&apos;re done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input id="tabs-demo-name" defaultValue="Pistol Plasma" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Username</Label>
                <Input id="tabs-demo-username" defaultValue="@PistolPlasma" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="hover:cursor-pointer">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. <br /> After saving you&apos;ll be
                logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current Password</Label>
                <Input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New Password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="hover:cursor-pointer">Save Password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

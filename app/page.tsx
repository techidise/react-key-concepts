import { Button } from '@/components/ui/button';
import DarkMode from '@/components/shadcn-example/DarkMode';

export default function Home() {
  return (
    <>
      <DarkMode />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <p className="text-9xl text-green-200">Hello React on NextJS</p>
        </div>
        <div>
          <Button className="rounded-full bg-green-500 hover:bg-green-600 text-white">
            Click Me
          </Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </>
  );
}

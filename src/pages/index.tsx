import { Button } from "~/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-primary text-3xl">Hello World</h1>
        <Button>Click me!</Button>
        <Button
          size="icon"
          onClick={() => {
            setTheme("dark");
          }}
        >
          <Moon />
        </Button>
        <Button
          size="icon"
          onClick={() => {
            setTheme("light");
          }}
        >
          <Sun />
        </Button>
      </main>
    </>
  );
}

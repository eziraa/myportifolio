"use client";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./button";
import MobileNav from "./MobileNav";
const Header = () => {
  // const [isDarkMode, setIsDarkMode] = useState(true);

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [isDarkMode]);
  return (
    <header className="py-6 xl:py-9 text-white bg-pink-50/5">
      <div className="container mx-auto flex justify-between ">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ezira <span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

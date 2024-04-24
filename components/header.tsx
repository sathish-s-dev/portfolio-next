import Link from "next/link";
import { SocialLinks } from "./social-links";
import { ModeToggle } from "./theme-toggle";
import { DrawerOpen, MobileDrawer } from "./nav-drawer";

const Header = () => {
  return (
    <header className="fixed top-0 z-30 w-full border-b border-slate-300 bg-gradient-to-b from-slate-200 py-6 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-800/30 dark:from-inherit ">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <DrawerOpen />
          <Link href={"/"}>
            <p className="text-xl font-bold text-black dark:text-white">
              Sathish
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <ModeToggle />
          {/* <SocialLinks /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;

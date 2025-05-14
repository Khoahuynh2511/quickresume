"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.svg";
import { cx } from "lib/cx";

export const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-indigo-100 px-3 lg:px-12",
        isHomePage ? "bg-gradient-to-r from-indigo-500 to-purple-600" : "bg-white"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
        <Link href="/">
          <span className="sr-only">QuickResume</span>
          <div className="flex items-center">
            <Image
              src={logoSrc}
              alt="QuickResume Logo"
              width={32}
              height={32}
              className="h-8 w-8"
              priority
            />
            <span className={cx(
              "ml-2 text-2xl font-bold",
              isHomePage ? "text-white" : "text-indigo-700"
            )}>
              QuickResume
            </span>
          </div>
        </Link>
        <nav
          aria-label="Site Nav Bar"
          className="flex items-center gap-2 text-sm font-medium"
        >
          {[
            ["/resume-builder", "Tạo CV"],
            ["/resume-parser", "Phân tích CV"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className={cx(
                "rounded-md px-1.5 py-2 hover:bg-indigo-100 focus-visible:bg-indigo-100 lg:px-4",
                pathName === href 
                  ? isHomePage 
                    ? "bg-white/20 text-white font-semibold" 
                    : "bg-indigo-100 text-indigo-700 font-semibold" 
                  : isHomePage 
                    ? "text-white" 
                    : "text-gray-600"
              )}
              href={href}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

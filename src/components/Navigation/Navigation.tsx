"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <>
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          {session?.data && (
            <>
              <li>
                <Link
                  href="/profile"
                  className={pathname === "/profile" ? "active" : ""}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={pathname === "/blog" ? "active" : ""}
                >
                  Blog
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
          Sign Out
        </Link>
      ) : (
        <Link href="/signin">Sign In</Link>
      )}
      <Link href="/signup">Sign Up</Link>
    </>
  );
};

export default Navigation;

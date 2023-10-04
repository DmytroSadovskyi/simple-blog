import Link from "next/link";
import { Metadata } from "next";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "About",
};

const AboutLayout = ({ children }: Props) => {
  return (
    <>
      <h1 className=" text-center font-bold text-2xl">About us</h1>
      <ul>
        <li>
          <Link href="/about/team">Our team</Link>
        </li>
        <li>
          <Link href="/about/contacts">Our contacts</Link>
        </li>
      </ul>
      {children}
    </>
  );
};

export default AboutLayout;

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main>
      <p
        className={`${roboto.className} text-sky-500 text-center font-bold text-2xl`}
      >
        This is a simple blog for practicing in Next JS
      </p>
    </main>
  );
}

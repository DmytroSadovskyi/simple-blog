import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const Team = () => {
  return (
    <h2 className={`${roboto.className} font-bold text-lg text-center`}>
      Team page
    </h2>
  );
};

export default Team;

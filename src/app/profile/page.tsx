import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

const Profile = async () => {
  const session = await getServerSession(authConfig);
  const userName = session?.user?.name || "User";
  return (
    <div className="flex flex-col items-start gap-3 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ">
      {session?.user?.image && (
        <Image
          src={session?.user?.image}
          width={60}
          height={60}
          alt={`picture of ${userName}`}
          className="rounded-full"
          priority
        />
      )}
      <p className="text-left">
        <span className="font-bold">Name:</span> {session?.user?.name}
      </p>
      <p className="text-left">
        <span className="font-bold">Email:</span> {session?.user?.email}
      </p>
    </div>
  );
};

export default Profile;

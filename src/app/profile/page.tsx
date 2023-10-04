import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

const Profile = async () => {
  const session = await getServerSession(authConfig);
  const userName = session?.user?.name || "User";
  return (
    <div className="flex flex-row justify-center items-center gap-3 mt-7">
      <h1>{session?.user?.name}</h1>
      {session?.user?.image && (
        <div>
          <Image
            src={session?.user?.image}
            width={60}
            height={60}
            alt={`picture of ${userName}`}
            className="rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default Profile;

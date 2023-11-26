"use client";

import Image from "next/image";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";

const ProtectedPage = () => {
  const { user } = useUser();
  const { userId } = useAuth();

  console.log("user:", user);
  console.log("userId:", userId);

  return (
    <div className="flex justify-center flex-col items-center h-full">
      <Image
        src={user?.imageUrl! ?? "/images/logo.svg"}
        alt={user?.fullName! ?? "Unknown"}
        width={32}
        height={32}
        className="w-auto h-auto"
      />
      <p>User: {user?.firstName}</p>
      <p>userId: {userId}</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default ProtectedPage;

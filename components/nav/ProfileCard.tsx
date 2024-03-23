import { useUserStore } from "@/utils/stores/userStore";
import React from "react";
import Image from "next/image";

function ProfileCard() {
  const user = useUserStore((state) => state.user);

  return (
    <Image
      src={user?.user_metadata.avatar_url}
      alt={user?.aud as string}
      width={50}
      height={50}
    ></Image>
  );
}

export default ProfileCard;

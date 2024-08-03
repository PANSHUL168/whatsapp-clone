import { User } from "@prisma/client";
import React, { useCallback, useState } from "react";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface UserBoxProps {
  data: User;
  handleRemoveContact: (newContacts: User[]) => void;
}

const UserBox = ({ data, handleRemoveContact }: UserBoxProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleContactClick = useCallback(() => {
    setIsLoading(true);
    axios
      .post(`/api/conversations`, { userId: data.id })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [data, router]);

  const handleRemoveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsLoading(true);
    console.log("removing Contact");
    axios
      .post(`/api/contacts`, {
        phoneNumber: data.phoneNumber,
        action: "remove",
      })
      .then((response) => {
        const newContacts = response.data;
        handleRemoveContact(newContacts);
      })
      .catch((error) => {
        console.log("Error removing client contact", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Separator />
      <div
        onClick={handleContactClick}
        className="w-full relative flex items-center space-x-3 bg-white p-3 hover:bg-neutral-100 transition cursor-pointer"
      >
        <div className="flex w-full items-center ">
          <Avatar className="w-12 h-12 ">
            <AvatarImage src="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="ml-4 text-left space-y-1 relative">
            <h4 className="text-[1rem] absolute bottom-0">{data.username}</h4>
            <h4 className="text-[0.75rem] absolute top-0">{data.about}</h4>
          </div>
          <div className="group w-full flex justify-end ">
            <Button
              className="bg-inherit hover:bg-inherit p-0"
              onClick={handleRemoveClick}
            >
              <Trash2 className="invisible group-hover:visible text-red-700 w-5 h-5 " />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBox;

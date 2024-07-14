import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return <div>this page can only be seen by authenticated users
    <UserButton afterMultiSessionSingleSignOutUrl="/" />
  </div>;
}

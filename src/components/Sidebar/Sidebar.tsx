import { getCurrentUser } from "@/actions/getCurrentUser"; 
import DesktopSidebarHeader from "./DesktopSidebarHeader";
import getConversations from "@/actions/getConversations"; 
import ConversationList from "@/app/conversations/_components/ConversationList";

async function Sidebar({ children }: { children: React.ReactNode }) {
  const { currentUserPrisma } = await getCurrentUser();
  const conversations = await getConversations();
  return (
    <div className="h-full w-screen flex">
      <aside className="h-full min-w-[300px] bg-zinc-400">
        <DesktopSidebarHeader currentUser={currentUserPrisma} />
        <ConversationList conversations={conversations} />
      </aside>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;

import { getCurrentUser } from "@/actions/getCurrentUser";
import {getConversations} from "@/actions/getConversations"
import DesktopSidebarHeader from "./DesktopSidebarHeader";
import ConversationList from "@/app/conversations/_components/ConversationList";

async function Sidebar({ children }: { children: React.ReactNode }) {
  const { currentUserPrisma } = await getCurrentUser()
  const conversations = await getConversations()
  return (
    <div className="h-full w-screen flex">
      <aside className="h-full min-w-[300px] bg-zinc-400">
        <DesktopSidebarHeader />
        <ConversationList
        
        />
      </aside>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;

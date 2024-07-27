import Appbar from "@/components/appbar";
import SidebarComponent from "@/components/sidebar-component";
import { SidebarItem } from "@/components/sidebar-item";
import { BookOpenText, Search } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Appbar />
      <div className='flex'>
        <SidebarComponent>
          <SidebarItem
            title='Dashboard'
            href='/dashboard'
            icon={<BookOpenText />}
          />
          <SidebarItem title='Browse' href='/browse' icon={<Search />} />
        </SidebarComponent>
        {children}
      </div>
    </div>
  );
}

import { SidebarHeader } from './sidebar-header';
import { SidebarProfile } from './sidebar-profile';
import { SidebarNav } from './sidebar-nav';
import { SidebarFooter } from './sidebar-footer';

interface SidebarProps {
  setOpenLeftMenu?: any;
  openLeftMenu?: boolean;
}

export default function Sidebar(props: SidebarProps) {
  return (
    <>
      {/* Sidebar Header */}
      <SidebarHeader
        openLeftMenu={props.openLeftMenu}
        setOpenLeftMenu={props.setOpenLeftMenu}
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className='no-scrollbar h-[calc(100%-3.75rem)] w-[85%] overflow-y-auto lg:w-full'
      >
        <div className='flex h-full flex-col bg-white'>
          <SidebarProfile />
          <SidebarNav />
          <SidebarFooter />
        </div>
      </div>
    </>
  );
}

function SidebarComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-56 border-r h-[calc(100vh-68px)] pt-16 flex flex-col items-start'>
      {children}
    </div>
  );
}

export default SidebarComponent;

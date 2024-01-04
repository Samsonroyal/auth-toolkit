const DashboardLayout = ({ children }:{ children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-y-4">
        <nav className="flex gap-x-4">
            
        </nav>
        {children}      
    </div>
  );
}

export default DashboardLayout;
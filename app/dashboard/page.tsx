const DashboardPage = async () => {
    const users = await fetch('/api/users');
   
    return <div>
        Hello! welcome to the dashboard page
        
        </div>;
    }

    export default DashboardPage;
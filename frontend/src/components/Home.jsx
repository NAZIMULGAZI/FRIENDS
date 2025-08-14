const Home = () => {
    useGetAllPost();
    useGetSuggestedUsers();
    
    return (
        <div className="flex h-screen">
            {/* Main feed area */}
            <div className="flex-grow overflow-y-auto">
                <Feed />
                <Outlet />
            </div>

            {/* Right sidebar */}
            <div className="w-80 overflow-y-auto flex-shrink-0 border-l ">
                <RightSidebar />
            </div>
        </div>
    );
};

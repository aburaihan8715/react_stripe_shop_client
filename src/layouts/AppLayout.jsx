import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto mt-20">
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;

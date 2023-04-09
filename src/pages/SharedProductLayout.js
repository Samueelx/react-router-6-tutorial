import { Outlet } from "react-router-dom";

const SharedProductLayout = () => {
  return (
    <>
      <h2 style={{marginLeft: '6rem', marginTop: '1rem'}}>Products</h2>
      <Outlet />
    </>
  );
};
export default SharedProductLayout;

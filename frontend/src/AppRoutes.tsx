import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/layouts/Layout";
import HomePage from "./pages/home/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/user-profile" element={<span>User Profile</span>} />
      <Route path="*" element={<Navigate to="/" />} />{/*  catch all root, for root that donot exist or can't understand*/}
    </Routes>
  );
};

export default AppRoutes;
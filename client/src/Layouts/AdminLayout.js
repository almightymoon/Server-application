import { Routes, Route } from "react-router-dom";

const AdminLayout = () => {
  return (
    <Routes>
      <Route path='/Admin' element={<div>This is the first Element</div>} />
    </Routes>
  );
};

export default AdminLayout;

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Context from "./context/Context";
import Home from "./Pages/Home/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import AddBlog from "./Pages/Dashboard/AddBlog/AddBlog";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageAllBlog from "./Pages/Dashboard/ManageAllBlog/ManageAllBlog";
import PendingAllBlog from "./Pages/Dashboard/PendingAllBlog/PendingAllBlog";
import UpdateBlog from "./Pages/Dashboard/UpdateBlog/UpdateBlog";
import AdminPrivateRoute from "./PrivateRoute/AdminPrivateRoute";
import UserPrivateRoute from "./PrivateRoute/UserPrivateRoute"


function App() {
  return (
    <Context>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={
            <UserPrivateRoute>
              <Dashboard />
            </UserPrivateRoute>
          } >
            <Route path="add-blog" element={<AddBlog />} />
            <Route path="all-blog" element={
              <AdminPrivateRoute>
                <ManageAllBlog />
              </AdminPrivateRoute>
            } />
            <Route path="update-blog/:blogId" element={
              <AdminPrivateRoute>
                <UpdateBlog />
              </AdminPrivateRoute>
            } />
            <Route path="pending-blog" element={
              <AdminPrivateRoute>
                <PendingAllBlog />
              </AdminPrivateRoute>
            } />
            <Route path="add-new-admin" element={
              <AdminPrivateRoute>
                <MakeAdmin />
              </AdminPrivateRoute>
            } />
          </Route>
        </Routes>
      </Router>
    </Context>
  );
}

export default App;

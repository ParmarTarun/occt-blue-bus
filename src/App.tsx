import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home";
import AdminPage from "./pages/admin";
import ContactPage from "./pages/contact";
import Layout from "./components/Layout";
import NotFound from "./pages/notFound";
import Notifications from "./pages/notifications";

const App = () => {
  return (
    <BrowserRouter basename="/occt-blue-bus">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home";
import AdminPage from "./pages/admin";
import ContactPage from "./pages/contact";
import Layout from "./components/Layout";
import NotFound from "./pages/notFound";
import Notifications from "./pages/notifications";
import { NotificationsProvider } from "./context/notification";
import { AdminProvider } from "./context/admin";
import Preferences from "./pages/preferences";
import { PreferenceProvider } from "./context/preference";
import { ScheduleProvider } from "./context/schedule";

const App = () => {
  return (
    <BrowserRouter basename="/occt-blue-bus">
      <ScheduleProvider>
        <AdminProvider>
          <NotificationsProvider>
            <PreferenceProvider>
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/preferences" element={<Preferences />} />
                  <Route path="/admin" element={<AdminPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </Layout>
            </PreferenceProvider>
          </NotificationsProvider>
        </AdminProvider>
      </ScheduleProvider>
    </BrowserRouter>
  );
};

export default App;

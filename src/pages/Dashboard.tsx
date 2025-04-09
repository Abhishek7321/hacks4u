import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Book, PlayCircle, Award, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md min-h-screen">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            <p className="text-sm text-gray-600 mt-1">{user?.email}</p>
          </div>
          <nav className="mt-4">
            <Link
              to="/dashboard"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <Book className="h-5 w-5 mr-2" />
              My Courses
            </Link>
            <Link
              to="/dashboard/progress"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <PlayCircle className="h-5 w-5 mr-2" />
              Progress
            </Link>
            <Link
              to="/dashboard/certificates"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <Award className="h-5 w-5 mr-2" />
              Certificates
            </Link>
            <Link
              to="/dashboard/settings"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <Settings className="h-5 w-5 mr-2" />
              Settings
            </Link>
            <button
              onClick={handleSignOut}
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Sign Out
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

const MyCourses = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Course cards will be rendered here */}
      </div>
    </div>
  );
};

const Progress = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Learning Progress</h1>
      {/* Progress tracking UI */}
    </div>
  );
};

const Certificates = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Certificates</h1>
      {/* Certificates list */}
    </div>
  );
};

const AccountSettings = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>
      {/* Settings form */}
    </div>
  );
};

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<MyCourses />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/settings" element={<AccountSettings />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
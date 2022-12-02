import Dashboard from '../pages/admin/dashboard/Dashboard';
import Complaints from '../pages/admin/complaints/Complaints';
import FarmingTips from '../pages/admin/farming-tips/FarmingTips';
import Users from '../pages/admin/users/Users';
import Profile from '../pages/admin/profile/Profile';

export const admin = [
  { path: '/admin/dashboard', element: <Dashboard /> },
  { path: '/admin/complaints', element: <Complaints /> },
  { path: '/admin/farming-tips', element: <FarmingTips /> },
  { path: '/admin/profile', element: <Profile /> },
  { path: '/admin/user-list', element: <Users /> },
];

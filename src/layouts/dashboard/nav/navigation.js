import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import GroupIcon from '@mui/icons-material/Group';

export const adminRoutes = [
  {
    title: 'ADMIN DASHBOARD',
    path: '/admin/dashboard',
    icon: <DashboardIcon />,
  },
  {
    title: 'COMPLAINT PAGE',
    path: '/admin/complaints',
    icon: <SmsFailedIcon />,
  },
  {
    title: 'FARMING TIPS',
    path: '/admin/farming-tips',
    icon: <TipsAndUpdatesIcon />,
  },
  {
    title: 'USERS',
    path: '/admin/user-list',
    icon: <GroupIcon />,
  },
  {
    title: 'PROFILE',
    path: '/admin/profile',
    icon: <AccountBoxIcon />,
  },
];

export const supplierRoutes = [
  {
    title: 'ADMIN DASHBOARD',
    path: '/farmer/dashboard',
    icon: <DashboardIcon />,
  },
  {
    title: 'COMPLAINT PAGE',
    path: '/farmer/complaints',
    icon: <AccountBoxIcon />,
  },
  {
    title: 'FARMING TIPS',
    path: '/farmer/products',
    icon: <SmsFailedIcon />,
  },
  {
    title: 'USERS',
    path: '/dashboard/blog',
    icon: <SmsFailedIcon />,
  },
  {
    title: 'PROFILE',
    path: '/login',
    icon: <SmsFailedIcon />,
  },
  {
    title: 'Not found',
    path: '/404',
    icon: <SmsFailedIcon />,
  },
];

export const farmerRoutes = [
  {
    title: 'FARMER DASHBOARD',
    path: '/dashboard/app',
    icon: <DashboardIcon />,
  },
  {
    title: 'COMPLAINT PAGE',
    path: '/dashboard/user',
    icon: <AccountBoxIcon />,
  },
  {
    title: 'FARMING TIPS',
    path: '/dashboard/products',
    icon: <SmsFailedIcon />,
  },
  {
    title: 'USERS',
    path: '/dashboard/blog',
    icon: <SmsFailedIcon />,
  },
  {
    title: 'PROFILE',
    path: '/login',
    icon: <SmsFailedIcon />,
  },
  {
    title: 'Not found',
    path: '/404',
    icon: <SmsFailedIcon />,
  },
];

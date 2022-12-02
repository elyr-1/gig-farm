import FarmingTips from '../pages/farmer/farming-tips/FarmingTips';
import Advertisements from '../pages/farmer/advertisements/Advertisements';
import FarmerComplaints from '../pages/farmer/complaints/FarmerComplaints';
import FarmerCrops from '../pages/farmer/crops/FarmerCrops';
import FarmerDashboard from '../pages/farmer/dashboard/FarmerDashboard';
import FarmerOffers from '../pages/farmer/offers/FarmerOffers';
import CropOrders from '../pages/farmer/orders/CropOrders';
import FarmerProfile from '../pages/farmer/profile/FarmerProfile';
import FarmerTraining from '../pages/farmer/training/FarmerTraining';

export const farmer = [
  { path: '/farmer/dashboard', element: <FarmerDashboard /> },
  { path: '/farmer/crops', element: <FarmerCrops /> },
  { path: '/farmer/complaints', element: <FarmerComplaints /> },
  { path: '/farmer/offers', element: <FarmerOffers /> },
  { path: 'farmer/advertisements', element: <Advertisements /> },
  { path: 'farmer/tips', element: <FarmingTips /> },
  { path: '/farmer/orders', element: <CropOrders /> },
  { path: '/farmer/profile', element: <FarmerProfile /> },
  { path: '/farmer/trainings', element: <FarmerTraining /> },
];

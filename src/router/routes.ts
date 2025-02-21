// import {
//   DashboardIcon,
//   HomeIcon,
//   MessagesIcon,
//   DocumentsIcon,
//   ConstructionIcon,
// } from '@/components/Icons';
import { Library} from '@/pages';
import { IRoutes } from '@/types';

const routes: IRoutes[] = [
  {
    path: '/',
    name: 'Library',
    component: Library,
    isUnauthorized: true,
  },
];

export default routes;

import React, {JSX} from 'react';

import { ILayoutProps } from './types';

const Layout: React.FC<ILayoutProps> = ({
  children,
  user,
}: ILayoutProps): JSX.Element => {

  return (
    <div>
      {children}
    </div>
  );
};
export default Layout;

import { Typography } from '../Mui/material';

import Logo from 'components/Atoms/Logo';
import Link from 'next/link';

const LogoSection = () => {
  return (
    <Typography
      noWrap
      component={Link}
      to='/'
    >
      <Logo />
    </Typography>
  );
};

export default LogoSection;

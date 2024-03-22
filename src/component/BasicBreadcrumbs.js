import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Breadcrumbs, Link, Typography } from '@mui/material';

function BreadcrumbItem({ to, label }) {
    return (
      <Link component={RouterLink} to={to} color="inherit">
        {label}
      </Link>
    );
  }
const BasicBreadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {pathnames.length > 0 ? (
        <BreadcrumbItem to="/" label="Home" />
      ) : (
        <Typography>Home</Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={name}>{name}</Typography>
        ) : (
          <BreadcrumbItem key={name} to={routeTo} label={name} />
        );
      })}
    </Breadcrumbs>
  )
}

export default BasicBreadcrumbs

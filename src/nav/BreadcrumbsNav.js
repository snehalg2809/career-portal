import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";

function BreadcrumbsNav() {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
      <Link component={RouterLink} underline="hover" color="inherit" to="/home" sx={{ fontWeight: 600}}>
        Home
      </Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        
        return isLast ? (
          <Typography key={index} color="text.primary" sx={{ textTransform: "capitalize", fontWeight: 700 }}>
            {name.replace(/-/g, " ")}
          </Typography>
        ) : (
          <Link
            component={RouterLink}
            underline="hover"
            color="inherit"
            to={routeTo}
            key={index}
            sx={{ textTransform: "capitalize", fontWeight: 600 }}
          >
            {name.replace(/-/g, " ")}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

export default BreadcrumbsNav;

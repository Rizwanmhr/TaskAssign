import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import useStyles from "./Sidebar.style";

interface SideDataInterface {
  title: string;
  path: string;
  icon: React.ReactNode;
  cName: string;
}

const Sidebar = ({ children }: any) => {
  const [value, setValue] = useState<SideDataInterface[]>(SidebarData);
  // const classes = useStyles();
  const classes = useStyles();
  return (
    <div>
      <Grid container justify="flex-start">
        <Grid item lg={3}>
          <Typography className={classes.side}>
            {value.map((currValue, index) => {
              const { title, path, icon } = currValue;
              return (
                <ul>
                    <li key={index} style={{ listStyle: "none"}}>
                      <Link
                        to={path}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          color: "#fff" 
                        }}
                      >
                        {icon}
                        <span>{title}</span>
                      </Link>
                    </li>
                </ul>
              );
            })}
          </Typography>
        </Grid>

        <Grid item lg={9}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default Sidebar;

import React, { forwardRef } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Box, Checkbox, Typography, ListItem } from "@mui/material";

const AppMenuItemComponent = (props) => {
  const { className, onClick, link, children, name, id, isDisabled } = props;

  const completed = useSelector((state) => state.progress.completedLessons);
  const isComplete = completed.join(",").includes(id);
  console.log(id, completed, isComplete);

  if (!link || typeof link !== "string") {
    return (
      <ListItem button className={className} onClick={onClick}>
        {children}
      </ListItem>
    );
  }
  return (
    <ListItem
      disabled={isDisabled}
      button
      className={className}
      // eslint-disable-next-line react/display-name
      component={forwardRef((props, ref) => (
        <Box display="flex">
          <Checkbox disabled size="small" checked={isComplete} />
          <Link href={link} {...props} innerref={ref}>
            <Typography variant="body2">{name}</Typography>
          </Link>
        </Box>
      ))}
    >
      {children}
    </ListItem>
  );
};

export default AppMenuItemComponent;

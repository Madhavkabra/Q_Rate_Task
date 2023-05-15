import React, { forwardRef } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Box, Checkbox, Typography, ListItem } from "@mui/material";
import { useParams } from "next/navigation";

const AppMenuItemComponent = (props) => {
  const param = useParams();
  const { className, onClick, link, children, name, id } = props;

  const completed = useSelector((state) => state.progress.completedLessons);
  const isComplete = completed.join(",").includes(id);

  if (!link || typeof link !== "string") {
    return (
      <ListItem button className={className} onClick={onClick}>
        {children}
      </ListItem>
    );
  }

  return (
    <ListItem
      selected={param.lesson === id}
      button
      className={className}
      // eslint-disable-next-line react/display-name
      component={forwardRef((props, ref) => (
        <Link href={link} {...props} innerref={ref}>
          <Box display="flex" gap="2rem">
            <Checkbox disabled size="small" checked={isComplete} />
            <Typography variant="body2">{name}</Typography>
          </Box>
        </Link>
      ))}
    >
      {children}
    </ListItem>
  );
};

export default AppMenuItemComponent;

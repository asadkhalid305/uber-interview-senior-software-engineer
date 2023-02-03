import { Paper } from "@mui/material";

export default function CustomBox({ index, item, handleClick }) {
  return (
    <Paper
      elevation={5}
      sx={{
        ...(index === 4 && {
          gridColumn: "1",
        }),
        border: "solid 2px black",
        width: "100px",
        height: "100px",
        ...(item && {
          backgroundColor: "green",
        }),
      }}
      onClick={() => handleClick(index, item)}
    ></Paper>
  );
}

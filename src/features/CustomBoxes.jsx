import { useEffect, useRef, useState } from "react";
import { Box, Paper } from "@mui/material";

import CustomBox from "../components/CustomBox";

export default function Boxes() {
  const [boxesState, setBoxesState] = useState(Array(7).fill(false));
  const [clickOrder, setClickOrder] = useState([]);

  const boxesStateRef = useRef(boxesState);
  boxesStateRef.current = boxesState;

  const intervalRef = useRef();

  useEffect(() => {
    if (boxesState.every((item) => !!item)) {
      intervalRef.current = setInterval(() => {
        if (clickOrder.length) {
          const index = clickOrder.pop();
          const newBoxesState = [...boxesStateRef.current];
          newBoxesState[index] = false;
          setBoxesState(newBoxesState);
        }
      }, 1000);
    }

    return () => {
      if (boxesStateRef.current.every((item) => !item)) {
        clearInterval(intervalRef.current);
      }
    };
  }, [boxesState, clickOrder]);

  const handleClick = (index, value) => {
    if (!!value) {
      return;
    }
    toggleBoxState(index, true);
    toggleClickOrder(index);
  };

  const toggleBoxState = (index, value) => {
    let newBoxesState = [...boxesState];
    newBoxesState.splice(index, 1, value);
    setBoxesState(newBoxesState);
  };

  const toggleClickOrder = (index) => {
    setClickOrder([...clickOrder, index]);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        backgroundColor: "#FEFFFF",
        paddingTop: 2,
        paddingBottom: 2,
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          height: "40vh",
          justifyItems: "center",
          width: "26vw",
        }}
      >
        {boxesState.map((item, index) => (
          <CustomBox
            key={index}
            index={index}
            item={item}
            handleClick={handleClick}
          />
        ))}
      </Box>
    </Paper>
  );
}

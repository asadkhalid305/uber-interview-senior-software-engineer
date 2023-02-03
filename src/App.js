import { Grid } from "@mui/material";

import CustomBoxes from "./features/CustomBoxes.jsx";
import Example from "./features/Example.jsx";

function App() {
  return (
    <Grid
      container
      direction="column"
      sx={{
        alignItems: "center",
        backgroundColor: "#DEF2F1",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Example />
      <CustomBoxes />
    </Grid>
  );
}

export default App;

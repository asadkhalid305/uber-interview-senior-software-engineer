import { Box, Paper, Typography } from "@mui/material";

import ExampleVideo from "../assets/example.mov";

export default function Example() {
  return (
    <Box mb={4} textAlign="center" width={500}>
      <Paper elevation={4} sx={{ padding: 3, backgroundColor: "#FEFFFF" }}>
        <Typography variant="h5" mb={4}>
          Clone the Following Behavior
        </Typography>
        <video controls src={ExampleVideo} width="100%">
          Sorry, your browser does not support the video tag.
        </video>
      </Paper>
    </Box>
  );
}

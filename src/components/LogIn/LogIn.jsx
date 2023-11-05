import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { padding } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const ariaLabel = { "aria-label": "description" };

export const LogIn = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box>
            <div>
                <h1 style={{textAlign: 'center', marginTop:'20px'}}>Login</h1>
            </div>
        </Box>
        <Box
          component="form"
          sx={{ bgcolor: "#ededee", display: 'flex', flexDirection: "column", mt: 5 }}
          noValidate
          autoComplete="off"
        >
          <Input placeholder="Name" inputProps={ariaLabel} />
          <Input placeholder="Last Name" inputProps={ariaLabel} />
          <Input placeholder="Email" inputProps={ariaLabel} />
          <Input placeholder="Phone" inputProps={ariaLabel} />
          <Button variant="contained" size="large">
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default LogIn;

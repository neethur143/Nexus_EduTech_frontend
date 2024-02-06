import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, CircularProgress, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Link as RouterLink } from "react-router-dom";


const LoginForm = ({ onSubmit, onForgotPassword }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Simulate API call (replace this with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Handling form submission
    onSubmit(formData);
    setLoading(false);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, margin: "auto", mt: 4 }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Sign In"}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2" onClick={onForgotPassword}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to=" C:\Users\neethu\Desktop\Nexus Frontend\nexus-frontend\src\Components\forms\RegisterForm.jsx" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default LoginForm;

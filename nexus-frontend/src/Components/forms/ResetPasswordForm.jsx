import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";

const ResetPasswordForm = ({ onCancel }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Simulate API call (replace this with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate success
    navigate("/reset_password");
    setLoading(false);
  };

  return (
    <Box component="form" noValidate onSubmit={handleResetPassword} sx={{ mt: 5 }}>
      {/* Reset Password form fields */}
      <TextField
        margin="normal"
        required
        fullWidth
        id="registerEmail"
        label="Email Address"
        name="registerEmail"
        autoComplete="email"
      />
      <LoadingButton
        type="submit"
        fullWidth
        loading={loading}
        loadingPosition="start"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {loading ? "Please Wait..." : "Send Reset Link"}
      </LoadingButton>
      <Link component="button" variant="body2" onClick={onCancel}>
        Back to Login
      </Link>
    </Box>
  );
};

export default ResetPasswordForm;

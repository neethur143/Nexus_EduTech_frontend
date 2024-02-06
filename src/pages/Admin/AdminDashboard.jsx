import styled from "@emotion/styled";
import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import TeachersList from "../../Components/home/TeachersList";

const AdminDashboard = () => {
  const ComponentWrapper = styled(Box)({
    marginTop: "10px",
    paddingBottom: "10px",
  });

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Dashboard
      </Typography>


      <ComponentWrapper>
        <Grid container spacing={3}>

          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                boxShadow: "none !important",
                borderRadius: "12px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "divider",
                height: "100%",
              }}
            >
              <TeachersList />
            </Paper>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </Box>
  );
};

export default AdminDashboard;

import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import TakeAttendanceForm from "../components/forms/TakeAttandanceForm";
import { errorToast, successToast } from "../components/utils/toastUtils";
import { columns, rows } from "../data/takeAttendance";
import TableEditable from "../components/TableEditable";

const TakeAttendance = () => {
  const [data, setData] = useState(rows); // Use local data directly
  const [loading, setLoading] = useState(false);

  const handleSearchResult = (selectedClassroom, selectedStream) => {
    setLoading(true);

    // Simulate fetching and filtering with local data
    const filteredData = rows.filter(
      (row) =>
        row.stream === selectedStream && row.classroom === selectedClassroom
    );

    setData(filteredData);

    if (filteredData.length) {
      successToast("Success");
    } else {
      errorToast("No results found for the selected session.");
    }

    setLoading(false);
  };

 const ComponentWrapper = styled(Box)({
    marginTop: "10px",
    paddingBottom: "10px",
  });
  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <ToastContainer />
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Results
      </Typography>
      <ComponentWrapper>{/* <Stats /> */}</ComponentWrapper>

      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <TakeAttendanceForm
              onSubmit={handleSearchResult}
              loading={loading}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}></Grid>
        </Grid>
      </ComponentWrapper>

      <ComponentWrapper>
        <Typography variant="h5" sx={{ my: 3 }}>
          Student Attendance Record
        </Typography>
        {data ? (
          <TableEditable myData={data} myColumns={columns} />
        ) : (
          <Typography variant="body1">
            {loading ? "Searching for data..." : "No Result Found!"}
          </Typography>
        )}
      </ComponentWrapper>
    </Box>
  );
};

export default TakeAttendance;

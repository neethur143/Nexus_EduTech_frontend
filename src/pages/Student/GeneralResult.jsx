import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Table } from "../components/Table";
import { resultsData, resultColumn } from "../data/results";
import GeneralResultForm from "../components/forms/GeneralResultForm";
import { errorToast, successToast } from "../components/utils/toastUtils";

const GeneralResult = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(resultsData); // Use local data directly

  const handleCheckResult = (selectedSession, selectedClassroom) => {
    // Filter or modify local data based on selections, if needed
    const filteredData = resultsData.filter((result) => {
      // Add your filtering logic here
      return result.session === selectedSession && result.classroom === selectedClassroom;
    });

    setData(filteredData);
    setLoading(true);

    // Simulate a delay for loading (remove if unnecessary)
    setTimeout(() => {
      if (filteredData.length > 0) {
        console.log(
          "Checking results for Session:",
          selectedSession,
          "Classroom:",
          selectedClassroom
        );
        setLoading(false);
        successToast("Success");
      } else {
        errorToast("No results found for the selected session.");
        setLoading(false);
      }
    }, 500);
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
        <Grid container>
          <Grid item xs={12} md={6} lg={12}>
            <GeneralResultForm onSubmit={handleCheckResult} loading={loading} />
          </Grid>
          <Grid item xs={12} md={6} lg={3}></Grid>
        </Grid>
      </ComponentWrapper>

      <ComponentWrapper>
        <Typography variant="h5" sx={{ my: 3 }}>
          Result
        </Typography>
        {data ? (
          <Table
            data={data} // Use the filtered data
            fields={resultColumn}
            numberOfRows={data.length}
            enableTopToolBar={true}
            enableBottomToolBar={true}
            enablePagination={false}
            enableRowSelection={false}
            enableColumnFilters={false}
            enableEditing={false}
            enableColumnDragging={false}
          />
        ) : (
          <Typography variant="body1">
            {loading
              ? "Checking Result..."
              : "No results found for the selected session."}
          </Typography>
        )}
      </ComponentWrapper>
    </Box>
  );
};

export default GeneralResult;

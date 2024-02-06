import { Box, Typography } from "@mui/material";
import React from "react";
import TableEditable from "../components/TableEditable";
import { myData, myColumns } from "../data/leaveRequests";

const LeaveRequests = () => {
  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h6">Leave Requests</Typography>
      </Box>
      {/* Directly use local data for the table */}
      <TableEditable
        myData={myData}
        myColumns={myColumns}
        enableSubmitButton={false}
        enableAddNewRow={false}
        Decision={"John Cena"}
      />
    </Box>
  );
};

export default LeaveRequests;

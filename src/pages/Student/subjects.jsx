import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Table from "../components/Table";
import { useUser } from "../components/utils/userContext";
import { subjectColumns, subjects } from "../data/subjects"; // Access local data

const Subjects = () => {
  const { role } = useUser();
  const [loadedSubjects, setLoadedSubjects] = useState(subjects); // Use local data

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
        <Typography variant="h6">
          {role === "Student" ? "Enrolled Subjects" : "Assigned Subjects"}
        </Typography>
      </Box>
      {loadedSubjects ? (
        <Table
          data={loadedSubjects}
          fields={subjectColumns}
          numberOfRows={loadedSubjects.length}
          enableTopToolBar={true}
          enableBottomToolBar={true}
          enablePagination={true}
          enableRowSelection={false}
          enableColumnFilters={true}
          enableEditing={false}
          enableColumnDragging={true}
          showPreview={false}
          routeLink="subjects"
        />
      ) : (
        <p>
          {role === "Teacher"
            ? "No Subject Assigned Yet!"
            : "No Subjects Enrolled Yet"}
        </p>
      )}
    </Box>
  );
};

export default Subjects;

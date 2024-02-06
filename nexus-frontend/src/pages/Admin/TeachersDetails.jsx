import { Box, Grid, Divider, TextField, Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SubjectsSelectionComponent from "./SubjectSelection";
import { errorToast, successToast } from "../utils/toastUtils";

const TeachersDetails = () => {
  const { id } = useParams();
  const [teacherData] = useState({
    // Initialize with sample teacher data or use default values
  });
  const [subjects] = useState([]);
  const [selectedClassrooms, setSelectedClassrooms] = useState([]);
  const [selectedSubjects, setSelectedsubjects] = useState([]);
  const [userSubjects, setUserSubjects] = useState([]);
  const [classrooms] = useState([
    // Initialize with sample classroom data or use default values
  ]);
  const [loading, setLoading] = useState(false);

  const handleClassroomToggle = (classroomId) => {
    const updatedSelection =
      selectedClassrooms[0] === classroomId ? [] : [classroomId];
    setSelectedClassrooms(updatedSelection);
    setSelectedsubjects([]);
    setUserSubjects([]);
  };

  const handleAssignSubjectSelection = (selectedSubjects, ...selectedIds) => {
    const updatedSelectedSubjects = [...selectedSubjects, ...selectedIds];
    setSelectedsubjects(updatedSelectedSubjects);
  };

  const handleUpdateProfile = async () => {
    setLoading(true);

    // Simulate an API call or perform any desired action
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check for success or error condition (in this example, consider always success)
    successToast(`${teacherData.username}'s Profile Updated!`);
    setLoading(false);
  };

  if (!teacherData) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Box>
        <Typography variant="h6" sx={{ my: 3 }}>
          {`${teacherData.username}'s Profile Information`}
        </Typography>
        <Divider />
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1">Profile image</Typography>
          <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 4 }}>
            {/* ... */}
          </Box>
          {/* ... (rest of the code remains unchanged) */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 3,
            }}
          >
            <LoadingButton
              type="submit"
              loading={loading}
              loadingPosition="start"
              variant="contained"
              onClick={handleUpdateProfile}
              sx={{ width: "180px" }}
            >
              {loading ? "Please Wait..." : "Save Changes"}
            </LoadingButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TeachersDetails;

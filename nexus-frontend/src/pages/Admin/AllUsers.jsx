import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Switch,
  Dialog,
  Box,
  Paper,
  Toolbar,
  Typography,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { column } from "../../data/allUsers";
import { successToast } from "../utils/toastUtils";
import LoadingButton from "@mui/lab/LoadingButton";
import { ActionsDropdown } from "../utils/actionDropDownAllUsers";

const DataTable = () => {
  const initialData = [
    { id: 1, username: "user1", is_active: true },
    { id: 2, username: "user2", is_active: false },
    // Add more user data as needed
  ];

  const [rows, setRows] = React.useState(initialData);
  const [loading, setLoading] = React.useState(false);
  const [confirmationDialog, setConfirmationDialog] = React.useState({
    open: false,
    action: null,
    rowIndex: null,
  });

  const handleSwitchChange = (id) => {
    const updatedRows = [...rows];
    const index = updatedRows.findIndex((row) => row.id === id);
    if (index !== -1) {
      updatedRows[index].is_active = !updatedRows[index].is_active;
      setRows(updatedRows);
    }
  };

  const handleActionSelect = (action, id) => {
    let confirmationMessage = "";

    switch (action) {
      case "resendActivation":
        confirmationMessage =
          "Are you sure you want to resend activation link?";
        break;
      case "deleteUser":
        confirmationMessage =
          "Are you sure you want to delete this user permanently?";
        break;
      case "makeSuperAdmin":
        confirmationMessage =
          "Are you sure you want to make this user a Super Admin?";
        break;
      // Additional cases for other actions can be added here
      default:
        break;
    }

    setConfirmationDialog({
      open: true,
      action,
      rowIndex: rows.findIndex((row) => row.id === id),
      confirmationMessage,
    });
  };

  const confirmUserAction = async (confirmed) => {
    if (confirmed) {
      const updatedRows = [...rows];
      const rowIndex = confirmationDialog.rowIndex;

      // Handle the logic based on the selected action
      if (confirmationDialog.action === "resendActivation") {
        setLoading(true);
        // Implement the logic to resend activation link
        successToast(`Activation Link Sent to ${updatedRows[rowIndex].username}`);
        setLoading(false);
      } else if (confirmationDialog.action === "deleteUser") {
        setLoading(true);
        // Implement the logic to delete user permanently
        successToast(`Deleted user permanently with username ${updatedRows[rowIndex].username}`);
        updatedRows.splice(rowIndex, 1);
        setLoading(false);
      } else if (confirmationDialog.action === "makeSuperAdmin") {
        setLoading(true);
        // Implement the logic to make the user a super admin
        successToast(`Made user with username ${updatedRows[rowIndex].username} a Super Admin`);
        setLoading(false);
      } else if (
        confirmationDialog.action === "activate" ||
        confirmationDialog.action === "deactivate"
      ) {
        updatedRows[rowIndex].is_active = !updatedRows[rowIndex].is_active;
      }

      setRows(updatedRows);
    }

    setConfirmationDialog({
      open: false,
      action: null,
      rowIndex: null,
      confirmationMessage: "",
    });
  };

  const columns = [
    ...column,
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <ActionsDropdown
          id={params.row.id}
          onActionSelect={handleActionSelect}
          rows={rows}
        />
      ),
    },
    {
      field: "is_active",
      headerName: "Active",
      width: 90,
      renderCell: (params) => (
        <Switch
          checked={params.row.is_active}
          onChange={() => handleSwitchChange(params.row.id)}
        />
      ),
    },
  ];

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "background.default",
        pb: "20px",
        mt: "80px",
      }}
    >
      <Paper sx={{ mb: 1 }}>
        <Toolbar>
          <Typography variant="h7" noWrap component="div">
            Deactivate/Activate Users
          </Typography>
        </Toolbar>
      </Paper>
      <div style={{ height: 480, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>

      <Dialog open={confirmationDialog.open}>
        <DialogTitle>
          {(() => {
            switch (confirmationDialog.action) {
              case "activate":
                return "Confirm User Activation";
              case "deactivate":
                return "Confirm User Deactivation";
              case "resendActivation":
                return "Confirm Resending Activation Link";
              case "deleteUser":
                return "Confirm Permanently Deleting User";
              case "makeSuperAdmin":
                return "Confirm Making User SuperAdmin";
              default:
                return "Confirm User Action";
            }
          })()}
        </DialogTitle>
        <DialogContent>
          {(() => {
            switch (confirmationDialog.action) {
              case "activate":
                return "Are you sure you want to activate this user?";
              case "deactivate":
                return "Are you sure you want to deactivate this user?";
              case "resendActivation":
                return "Are you sure you want to resend the activation link?";
              case "deleteUser":
                return "Are you sure you want to delete this user permanently?";
              case "makeSuperAdmin":
                return "Are you sure you want to make this User SuperAdmin";
              default:
                return "Are you sure you want to perform this action?";
            }
          })()}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => confirmUserAction(false)}
            sx={{ color: "red" }}
          >
            Cancel
          </Button>
          <LoadingButton
            loading={loading}
            onClick={() => confirmUserAction(true)}
            sx={{ color: "green" }}
          >
            {loading ? "Please Wait..." : "Confirm"}
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DataTable;

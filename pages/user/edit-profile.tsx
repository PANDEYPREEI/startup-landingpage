import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form } from "formik";
import { useSession } from "next-auth/react";
import React from "react";

function EditUserProfile() {
  const { data: session } = useSession();
  const Item = styled(Box)(({ theme }) => ({
    border: 1,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box sx={{ pr: "8%", pl: "8%" }}>
      <Grid
        container
        spacing={2}
        sx={{ border: 1, mt: "2%", borderColor: "#D3D3D3" }}
      >
        <Grid item xs={3} sx={{ borderRight: 1, borderColor: "#D3D3D3" }}>
          <Item>
            <Avatar
              alt="Profile"
              sx={{
                width: 90,
                height: 90,
                margin: "auto",
              }}
              src={`${session?.user?.image}`}
            />
            <Typography
              component={"h1"}
              sx={{ ml: "10px", mt: "10px", fontWeight: "600" }}
            >{`${session?.user?.name}`}</Typography>
            <List>
              <ListItem>
                <ListItemText>View public profile</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Profile</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Photo</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Notifications</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Close account</ListItemText>
              </ListItem>
            </List>
          </Item>
        </Grid>
        <Grid item xs={9}>
          <Item>
            <Typography
              component={"h1"}
              sx={{
                ml: "10px",
                fontWeight: "600",
                fontSize: "1.3rem",
              }}
            >
              Public Profile
            </Typography>
            <p>Add information about yourself </p>
            <Divider />
            <h6>Basics</h6>
            <Box sx={{ pl: "10%", pr: "10%", m: "auto" }}>
              <form>
                <input
                  type="text"
                  name="name"
                  style={{ padding: "15px", width: "90%" }}
                  value={`${session?.user?.name}`}
                />
                <br />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    borderRadius: "2px",
                    mt: "10px",
                    width: "10%",
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  Save
                </Button>
              </form>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default EditUserProfile;

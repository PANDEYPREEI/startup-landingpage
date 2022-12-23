import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = { email, password };
    let res = await fetch("http://localhost:3001/api/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    // if (response.success) {
    //   setEmail("");
    //   setPassword("");
    //   alert("You are logged in");
    // } else {
    //   alert("OOPS Something went wrong" + response.error);
    // }
  };
  return (
    <Box sx={{ textAlign: "center", mt: "5%" }}>
      <Typography>Log in to your Learn account</Typography>
      <form onSubmit={handleSubmit} method="POSTs">
        <TextField
          sx={{ borderRadius: "2px", mt: "10px" }}
          label="Email"
          type="email"
          value={email}
          onChange={(currentEmail) =>
            setEmail(currentEmail.currentTarget.value)
          }
        />
        <br />
        <TextField
          sx={{ borderRadius: "2px", mt: "10px" }}
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(currentPassword) =>
            setPassword(currentPassword.currentTarget.value)
          }
        />
        <Button
          sx={{
            color: "#FFFFFF",
            fontWeight: "600",
            border: 1,
            m: "auto",
            mt: "2%",
            width: "30%",
            textAlign: "center",
            borderRadius: "1px",
            backgroundColor: "#a020f0",
            display: { xs: "none", md: "flex" },
          }}
          type="submit"
        >
          Log in
        </Button>
      </form>
    </Box>
  );
}

export default SignUp;

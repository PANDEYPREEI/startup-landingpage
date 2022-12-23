import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function Login() {
  const { data: session } = useSession();
  console.log(session);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = { email, password };
    let res = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    if (response.success) {
      localStorage.setItem("token", response.token);
      setEmail("");
      setPassword("");
      alert("You are logged in");
      router.push("http://localhost:3001/");
    } else {
      alert("OOPS Something went wrong" + response.error);
    }

    if (session) {
    }
  };

  return (
    <Box sx={{ textAlign: "center", mt: "5%" }}>
      <h4>Log in to your Learn account</h4>

      <Button
        onClick={() => signIn("google")}
        variant="contained"
        sx={{ borderRadius: "2px", fontWeight: "600", textTransform: "none" }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/google.png"
          sx={{ height: "30px", width: "30px", mr: "10px" }}
        />{" "}
        Continue with Google
      </Button>
      <br />
      <Button
        onClick={() => signIn("facebook")}
        variant="contained"
        sx={{
          borderRadius: "2px",
          mt: "10px",
          fontWeight: "600",
          textTransform: "none",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/facebook.png"
          sx={{ height: "30px", width: "30px", mr: "10px" }}
        />{" "}
        Continue with facebook
      </Button>
      <br />
      {/* <button onClick={() => signOut()}>Sign out</button> */}
      <form onSubmit={handleSubmit} method="POST">
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
            backgroundColor: "#a020f0",
            fontWeight: "600",
            border: 1,
            m: "auto",
            mt: "2%",
            width: "180px",
            textAlign: "center",
            borderRadius: "1px",
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

export default Login;

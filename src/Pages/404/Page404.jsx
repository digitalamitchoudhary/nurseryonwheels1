import { Box, Button, Typography } from "@mui/material";
 import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdArrowBack } from 'react-icons/md'
export default function Page404() {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f1f8f4",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background circles */}
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          bgcolor: "rgba(46, 125, 50, 0.15)",
          borderRadius: "50%",
          top: -80,
          left: -80,
          filter: "blur(60px)",
          animation: "pulse 6s infinite",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 320,
          height: 320,
          bgcolor: "rgba(76, 175, 80, 0.2)",
          borderRadius: "50%",
          bottom: -100,
          right: -100,
          filter: "blur(70px)",
          animation: "pulse 6s infinite",
        }}
      />

      {/* Content */}
      <Box textAlign="center"  display="flex"
  flexDirection="column"
  alignItems="center"zIndex={1} px={3}>
        {/* Free plant SVG */}
        <Box
          component="img"
          src="https://www.svgrepo.com/show/227533/plant-leaf.svg"
          alt="Plant illustration"
          sx={{
            width: 180,
            mb: 2,
            animation: "float 4s ease-in-out infinite",
          }}
        />

        <Typography
          variant="h1"
          fontWeight={800}
          color="success.main"
        >
          404
        </Typography>

        <Typography variant="h5" mt={1} color="success.dark">
         Oops! This Page Didn’t Grow 🌱
        </Typography>

        <Typography
          variant="body1"
          mt={2}
          maxWidth={420}
          mx="auto"
          color="text.secondary"
        >
            This page tried to grow… but became compost  
            <br />
          Let’s get you back to the main garden.
        </Typography>

        {/* Actions */}
        <Box mt={4} display="flex" gap={2} justifyContent="center">
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="success"
            startIcon={<FaHome />}
            sx={{ px: 3, borderRadius: 99 }}
          >
            Home
          </Button>

          <Button
            onClick={() => window.history.back()}
            variant="outlined"
            color="success"
            startIcon={<MdArrowBack />}
            sx={{ px: 3, borderRadius: 99 }}
          >
            Back
          </Button>
        </Box>
      </Box>

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0); }
          }

          @keyframes pulse {
            0% { opacity: 0.6; }
            50% { opacity: 1; }
            100% { opacity: 0.6; }
          }
        `}
      </style>
    </Box>
  );
}

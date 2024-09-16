import React, { useState } from "react";
import { Timeline } from "@mui/lab";
import calculateLeaps from "../utils/leaps";
import { DatePicker } from "@mui/x-date-pickers";
import { Container, Stack, TextField, Typography } from "@mui/material";
import Leap from "./Leap";

const LeapCalculator = () => {
  const [birthdate, setBirthdate] = useState(null);
  const [leaps, setLeaps] = useState([]);

  const handleDateChange = (newDate) => {
    setBirthdate(newDate);
    if (newDate) {
      const calculatedLeaps = calculateLeaps(newDate);
      setLeaps(calculatedLeaps);
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 5 }}>
      <Typography variant="h3" gutterBottom>
        The Wonder Weeks Calculator Free
      </Typography>
      <Typography variant="h5" gutterBottom>
        Enter the calculated date of birth of your child (by your doctor)
      </Typography>
      <DatePicker
        label="Calculated Date of birth"
        value={birthdate}
        onChange={handleDateChange}
        renderInput={(params) => <TextField fullWidth {...params} />}
      />
      {leaps.length > 0 && (
        <Timeline
          position="alternate"
          sx={{ marginTop: 4, display: { xs: "none", md: "block" } }}
        >
          {leaps.map((leap, index) => (
            <Leap
              key={index}
              leap={leap}
              leaps={leaps}
              index={index}
              asTimelineItem={true}
            />
          ))}
        </Timeline>
      )}
      {leaps.length > 0 && (
        <Stack spacing={2} sx={{ marginTop: 4, display: { xs: "block", md: "none" } }}>
          {leaps.map((leap, index) => (
            <Leap
              key={index}
              leap={leap}
              leaps={leaps}
              index={index}
              asTimelineItem={false}
            />
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default LeapCalculator;

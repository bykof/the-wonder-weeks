import React, { useState } from "react";
import { Timeline } from "@mui/lab";
import calculateLeaps from "../utils/leaps";
import { DatePicker } from "@mui/x-date-pickers";
import { Container, TextField, Typography } from "@mui/material";
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
        The Wonder Weeks Calcutor Free
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
        <Timeline position="alternate" sx={{ marginTop: 4 }}>
          {leaps.map((leap, index) => (
            <Leap key={index} leap={leap} leaps={leaps} index={index} />
          ))}
        </Timeline>
      )}
    </Container>
  );
};

export default LeapCalculator;

import React, { useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import calculateLeaps from "../utils/leaps";
import { DatePicker } from "@mui/x-date-pickers";
import {
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";

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
        Enter the calculated date of birth of your child
      </Typography>
      <DatePicker
        label="Geburtsdatum auswählen"
        value={birthdate}
        onChange={handleDateChange}
        renderInput={(params) => <TextField fullWidth {...params} />}
      />
      {leaps.length > 0 && (
        <Timeline position="alternate" sx={{ marginTop: 4 }}>
          {leaps.map((leap, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index < leaps.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6">{`Leap #${index + 1}`}</Typography>
                    <Typography color="textSecondary">
                      {`Start: ${leap.start.format("DD.MM.YYYY")} (${
                        leap.daysLeft
                      } Days)`}
                    </Typography>
                    <Typography color="textSecondary">
                      {`End: ${leap.end.format("DD.MM.YYYY")}`}
                    </Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </Container>
  );
};

export default LeapCalculator;

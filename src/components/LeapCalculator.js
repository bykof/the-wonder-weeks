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
      <Typography variant="h4" gutterBottom>
        Oje, ich wachse! Sprünge berechnen
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
                    <Typography variant="h6">{`Sprung #${
                      index + 1
                    }`}</Typography>
                    <Typography color="textSecondary">
                      {`Beginn: ${leap.start.format("DD.MM.YYYY")} (${
                        leap.daysLeft
                      } Tage)`}
                    </Typography>
                    <Typography color="textSecondary">
                      {`Ende: ${leap.end.format("DD.MM.YYYY")}`}
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

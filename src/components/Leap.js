import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import {
  Alert,
  Card,
  CardContent,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
import { useToggle } from "@uidotdev/usehooks";

const Leap = ({ leaps, leap, index, asTimelineItem }) => {
  const [showInfo, toggleInfo] = useToggle(false);

  const card = (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">{`Leap #${index + 1}`}</Typography>
        <Typography color="textSecondary">
          {`Start: ${leap.start.format("DD.MM.YYYY")} (${
            leap.daysLeft
          } Days left)`}
        </Typography>
        <Typography color="textSecondary">
          {`End: ${leap.end.format("DD.MM.YYYY")}`}
        </Typography>
        <FormControlLabel
          control={<Switch value={showInfo} onChange={toggleInfo} />}
          label="Show info"
        />
        {showInfo && <Alert severity="info">{leap.info}</Alert>}
      </CardContent>
    </Card>
  );

  if (asTimelineItem) {
    return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          {index < leaps.length - 1 && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>{card}</TimelineContent>
      </TimelineItem>
    );
  }

  return card;
};

export default Leap;

import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab'
import {
  Alert,
  Card,
  CardContent,
  FormControlLabel,
  Switch,
  Typography,
} from '@mui/material'
import { useToggle } from '@uidotdev/usehooks'
import { useTranslation } from 'react-i18next'

const Leap = ({ leaps, leap, index, asTimelineItem }) => {
  const { t } = useTranslation()
  const [showInfo, toggleInfo] = useToggle(false)

  const card = (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">
          {leap.number
            ? `${t('leap.title')} #${leap.number}`
            : t('leap.shallowLeap.title')}
        </Typography>
        <Typography color="textSecondary">
          {`${t('leap.start')}: ${leap.start.format('L')} (${
            leap.daysLeft
          } ${t('leap.daysLeft')})`}
        </Typography>
        <Typography color="textSecondary">
          {`${t('leap.end')}: ${leap.end.format('L')}`}
        </Typography>
        <FormControlLabel
          control={<Switch value={showInfo} onChange={toggleInfo} />}
          label={t('leap.showInfo')}
        />
        {showInfo && (
          <Alert severity="info" sx={{ textAlign: 'justify' }}>
            {leap.number
              ? t(`leap.info.${leap.number}`)
              : t('leap.info.shallowLeap')}
          </Alert>
        )}
      </CardContent>
    </Card>
  )

  if (asTimelineItem) {
    return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          {index < leaps.length - 1 && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>{card}</TimelineContent>
      </TimelineItem>
    )
  }

  return card
}

export default Leap

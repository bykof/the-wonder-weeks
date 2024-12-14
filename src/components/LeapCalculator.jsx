import React, { useState } from 'react'
import { Timeline } from '@mui/lab'
import calculateLeaps from '../utils/leaps'
import { DatePicker } from '@mui/x-date-pickers'
import Leap from './Leap'
import { useTranslation } from 'react-i18next'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { Helmet } from 'react-helmet'
import { Box, FormControl } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'

const LeapCalculator = () => {
  const { t, i18n } = useTranslation()
  const [birthdate, setBirthdate] = useState(null)
  const [leaps, setLeaps] = useState([])

  const handleDateChange = (newDate) => {
    setBirthdate(newDate)
    if (newDate) {
      const calculatedLeaps = calculateLeaps(newDate)
      setLeaps(calculatedLeaps)
    }
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid size={12} display={'flex'} justifyContent={'flex-end'}>
          <a
            href={'https://github.com/bykof/the-wonder-weeks'}
            target={'_blank'}
          >
            <GitHubIcon />
          </a>
        </Grid>
      </Grid>
      <Box height={32} />
      <Helmet>
        <html lang={i18n.resolvedLanguage} />
        <title>{t('title')}</title>
        <meta name={'description'} content={t('description')} />
      </Helmet>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="h3" gutterBottom>
            {t('title')}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {t('subtitle')}
          </Typography>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth>
            <DatePicker
              label={t('input.dateOfBirth')}
              value={birthdate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {leaps.length > 0 && (
          <Timeline
            position="alternate"
            sx={{ marginTop: 4, display: { xs: 'none', md: 'block' } }}
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
          <Stack
            spacing={2}
            sx={{ marginTop: 4, display: { xs: 'block', md: 'none' } }}
          >
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
      </Grid>
    </Container>
  )
}

export default LeapCalculator

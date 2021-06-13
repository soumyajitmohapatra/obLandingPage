import React from "react"
import momemt from "moment"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import styled from "styled-components"

const minuteSeconds = 60
const hourSeconds = 3600
const daySeconds = 86400

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
}

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  )
}

const getTimeSeconds = time => (minuteSeconds - time) | 0
const getTimeMinutes = time => ((time % hourSeconds) / minuteSeconds) | 0
const getTimeHours = time => ((time % daySeconds) / hourSeconds) | 0
const getTimeDays = time => (time / daySeconds) | 0

export default function Countdown() {
  const stratTime = momemt().unix() // use UNIX timestamp in seconds
  const endTime = momemt("30-08-2021", "DD-MM-YYYY").unix() // use UNIX timestamp in seconds
  const remainingTime = endTime - stratTime
  const days = Math.ceil(remainingTime / daySeconds)
  const daysDuration = days * daySeconds

  return (
    <CountdownWrapper>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#7E2E84"]]}
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime }) =>
          renderTime("days", getTimeDays(daysDuration - elapsedTime))
        }
      </CountdownCircleTimer>
      <Gap></Gap>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#D14081"]]}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={totalElapsedTime => [
          remainingTime - totalElapsedTime > hourSeconds,
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("hours", getTimeHours(daySeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      <Gap></Gap>

      <CountdownCircleTimer
        {...timerProps}
        colors={[["#EF798A"]]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={totalElapsedTime => [
          remainingTime - totalElapsedTime > minuteSeconds,
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      <Gap></Gap>

      <CountdownCircleTimer
        {...timerProps}
        colors={[["#218380"]]}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={totalElapsedTime => [remainingTime - totalElapsedTime > 0]}
      >
        {({ elapsedTime }) =>
          renderTime("seconds", getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>
    </CountdownWrapper>
  )
}

const CountdownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const Gap = styled.div`
  height: 1rem;
  width: 1rem;
`

import { useEffect, useMemo } from 'react'
import type { FC } from 'react'
import { useSpring, animated } from '@react-spring/web'

import { NoteScore, useScoreStore } from '../../store/score'
import { getScoreAngle } from '../../utils/getScoreAngle'
import { getScoreTransformDistance } from '../../utils/getScoreTransformDistance'
import { useStyles } from './HitScore.styles'
import { transformRadiansToAngle } from '../../utils/transformRadiansToAngle'
import { useTimeout } from '../../hooks/useTimeout'

export type HitScoreConfig = Array<{
  above: number
  color: string
  fontSize: number
  [key: string]: any
}>

export type HitScoreSharedProps = {
  unmountTime: number
  config: HitScoreConfig
  scoreCutShift: number
  maxRotate: number
}

export type HitScoreProps = HitScoreSharedProps & {
  maxRow: number
  note: NoteScore
}

export const HitScore: FC<HitScoreProps> = ({
  note,
  unmountTime,
  maxRow,
  config,
  maxRotate,
  scoreCutShift
}) => {
  const { radians } = note
  const { classes } = useStyles({ ...note, maxRow, config })
  const { unmountScoreNote } = useScoreStore()

  const transform = useMemo(() => {
    const angle = transformRadiansToAngle(radians)
    const { x0, x1, y0, y1 } = getScoreTransformDistance(angle, scoreCutShift)
    const scoreAngle = getScoreAngle(angle, maxRotate)

    return {
      x0,
      x1,
      y0,
      y1,
      rotate: scoreAngle
    }
  }, [maxRotate, radians, scoreCutShift])

  const [styles] = useSpring(() => ({
    from: {
      x: transform.x0,
      y: transform.y0,
      rotate: 0,
      opacity: 0
    },
    to: {
      x: transform.x1,
      y: transform.y1,
      rotate: transform.rotate,
      opacity: 1
    },
    config: {
      tension: 260,
      friction: 20,
      velocity: 0.01
    }
  }))

  useTimeout(() => {
    unmountScoreNote(note.id)
  }, unmountTime)

  return (
    <animated.div className={classes.score} style={styles}>
      {note.score}
    </animated.div>
  )
}
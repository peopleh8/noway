import { getDayInSeason, getCurrentSeason } from './getDate'
import { SeasonEnum } from '@/types'

export const calculatePoints = (): string => {
  const date: Date = new Date()
  
  const currentSeason: SeasonEnum = getCurrentSeason(date)
  const dayInSeason: number = getDayInSeason(date, currentSeason)
  const pointsArr: number[] = []

  for (let i = 0; i < dayInSeason; i++) {
    pointsArr[i] = i === 0 ? 2 : i === 1 ? 3 : pointsArr[i - 2] + (pointsArr[i - 1] * .6)
  }

  return pointsArr[pointsArr.length - 1] >= 1000 && pointsArr[pointsArr.length - 1] <= 1000000 
    ? `${Math.ceil(pointsArr[pointsArr.length - 1] / 1000)}K`
    : pointsArr[pointsArr.length - 1] >= 1000000
    ? `${Math.ceil(pointsArr[pointsArr.length - 1] / 1000000)}M`
    : pointsArr[pointsArr.length - 1].toFixed(2).toString()
}
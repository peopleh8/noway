import seedrandom, { PRNG } from 'seedrandom'

export const getRandom = (seed: string, min: number, max: number): number => {
  const rng: PRNG = seedrandom(seed)
  const randomValue: number = rng()
  const range: number = max - min + 1
  const scaledValue: number = randomValue * range
  const result: number = scaledValue + min

  return parseFloat(result.toFixed(2))
}
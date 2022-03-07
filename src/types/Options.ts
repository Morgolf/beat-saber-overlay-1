import type { ColorInputProps, NumberInputProps, SelectProps, SliderProps } from '@mantine/core'

export enum Option {
  NUMBER,
  SLIDER,
  CODE,
  OBJECT,
  SELECT,
  COLOR,
  SCORE_VISUALIZER_CONFIG
}

// eslint-disable-next-line @typescript-eslint/ban-types
type OptionsBase<N extends Option, Props extends object = {}> = {
  inputTypeName: N
  propName: string
} & Props

type Options =
  | OptionsBase<Option.NUMBER, NumberInputProps>
  | OptionsBase<Option.SELECT, SelectProps>
  | OptionsBase<Option.COLOR, ColorInputProps>
  | OptionsBase<Option.SLIDER, SliderProps>

export type ComponentOptions = {
  name: string
  slug: string
  category: string
  order: number
  image: string
  description: string
  options: (Options & { options?: Options[] })[]
  component: any
  defaultProps: any
}
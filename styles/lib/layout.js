import * as style from '../variables'

export function makeGrid (col, gutter, breakpoint) {
  let gridUnit = (100/12).toFixed(15)
  gutter = gutter || '.5rem'
  breakpoint = breakpoint || style.BREAKPOINT
  return `
    flex-basis: 100%;
    max-width: 100%;
    padding-left: ${ gutter };
    padding-right: ${ gutter };
    @media (min-width: ${ breakpoint.SM }px and max-width: ${ +breakpoint.MD - 1 }px) {
      flex-basis: ${ gridUnit*col }%;
      max-width: ${ gridUnit*col }%;
    }
  `
}
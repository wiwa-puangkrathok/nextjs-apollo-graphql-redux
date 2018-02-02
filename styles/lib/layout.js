import * as style from '../variables'

export function makeGrid (col, gutter, breakpoint) {
  let gridUnit = (100/12).toFixed(15)
  gutter = gutter || '.5rem'
  breakpoint = breakpoint || style.BREAKPOINT
  console.log(`@media (min-width: ${ breakpoint.SM }px) and (max-width: ${ breakpoint.MD - 1 }px)`)
  return `
    flex: 0 0 100%;
    max-width: 100%;
    padding-left: ${ gutter };
    padding-right: ${ gutter };
    @media (min-width: ${ breakpoint.LG }px) and (max-width: ${ breakpoint.XLG-1 }px) {
      flex: 0 0 ${ gridUnit*col }%;
      max-width: ${ gridUnit*col }%;
    }
    @media (min-width: ${ breakpoint.XLG }px) {
      flex: 0 0 ${ gridUnit*col }%;
      max-width: ${ gridUnit*col }%;
    }
  `
}

// @media (min-width: ${ breakpoint.SM }px) and (max-width: ${ breakpoint.MD - 1 }px) {
//   flex-basis: ${ gridUnit*col }%;
//   max-width: ${ gridUnit*col }%;
// }
// @media (min-width: ${ breakpoint.MD }px) and (max-width: ${ breakpoint.LG - 1 }px) {
//   flex-basis: ${ gridUnit*col }%;
//   max-width: ${ gridUnit*col }%;
// }
// @media (min-width: ${ breakpoint.LG }px) and (max-width: ${ breakpoint.XLG - 1 }px) {
//   flex-basis: ${ gridUnit*col }%;
//   max-width: ${ gridUnit*col }%;
// }
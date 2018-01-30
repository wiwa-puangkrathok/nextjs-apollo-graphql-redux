/* =======================================================
  Basic Transistion
======================================================= */
export function transistion (property, duration, style) {
  let p = property || 'all'
  let d = duration || '.2s'
  let s = style || 'ease-in-out'
  return `
    transition: ${ p } ${ d } ${ s };
  `
}

/* =======================================================
  Clearfix
======================================================= */
export function clearfix () {
  return `
    &:before,
    &:after {
      content: '';
      display: table;
    }
    &:after {
      clear: both;
    }
  `
}
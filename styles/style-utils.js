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
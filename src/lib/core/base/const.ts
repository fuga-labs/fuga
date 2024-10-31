let mixins = `
@mixin sm {
@media (max-width: 599px) { @content; }
}
@mixin base {
@media (min-width: 600px) { @content; }
}
@mixin md {
@media (min-width: 900px) { @content; }
}
@mixin lg{
@media (min-width: 1200px) { @content; }
}
@mixin xl {
@media (min-width: 1800px) { @content; }
}
`



let ExcludedProps = ["paddingY", "paddingX", "marginX", "marginY"]


export { mixins, ExcludedProps }
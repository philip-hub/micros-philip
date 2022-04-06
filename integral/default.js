
//example preset varibles
// let firstTerm = 1/(2*3.14)**.5
// let e = 2.71
// const eq = x => firstTerm*(e**((-1*(x-0)**2)/2**2))

const width = 4;
const x_scale = 4;
const y_scale = 4;
const eq = x =>((x**1.3)/8)
// the two functions
graphEquation(eq, x_scale, y_scale)
trapizoid(eq, width, x_scale, y_scale)
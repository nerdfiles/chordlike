var STR = '-[a]-b-c--d-e__f-g__'
const log = console.log

const SCALES = {
  major: [2, 2, 1, 2, 2, 2],
  blues: [3, 2, 1, 1, 3],
  natural_minor: [2, 1, 2, 2, 1, 2],
  harmonic_minor: [2, 1, 2, 2, 1, 3],
  melodic_minor: [2, 1, 2, 2, 2, 2, 1, -2, -2, -1, -2, -2, -1, -2]
}

const SPLIT = STR.split('')
const LENGTH = SPLIT && SPLIT.length

// [1 1 2 3]
// [5 8 13 21]...
// ...
// log(SPLIT[0])
// log(SPLIT[2])
// log(SPLIT[5])
// log(SPLIT[7])
// log(SPLIT[10])
// log(SPLIT[12])
// log(SPLIT[15])
// log(SPLIT[17])
log(SPLIT)

// log(SCALES.major)
// log(LENGTH)

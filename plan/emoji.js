const review = console.table
const log = console.log

const World2 = [
  0, 1, 0, 1, 0,
  0, 1, 0, 1, 0,
  0, 1, 0, 1, 0,
  0, 1, 0, 1, 0,
  0, 1, 0, 1, 0
]

const World = [
  0, -1, 0, -1, 0,
  -1, 0, 0, 0, -1,
  0, 0, 0, 0, 0,
  -1, 0, 0, 0, -1,
  0, -1, 0, -1, 0
]

const rand = (MAX) => Math.floor(Math.random() * MAX)

const world = World.map((ref, key) => {
  const x = 10
  return x - Math.pow(x, ref * rand(x))
})

const world2 = World2.map((ref, key) => {
  const x = 10
  return x - Math.pow(x, ref * rand(x))
})

//review(world)
review(world2)

for (let i = 0; i < World.length; i++) {
  if (World[i] === -1) {
    // log('--- output')
    // log(World[i])
    // log('--- endoutput')
  }
}

// EOF

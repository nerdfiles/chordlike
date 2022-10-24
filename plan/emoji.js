const review = console.table
const log = console.log
const world = [
  0, -1, 0, -1, 0,
  -1, 0, 0, 0, -1,
  0, 0, 0, 0, 0,
  -1, 0, 0, 0, -1,
  0, -1, 0, -1, 0
]

const rand = (MAX) => Math.floor(Math.random() * MAX)

const w = world.map((ref, key) => {
  const x = 10
  return x - Math.pow(x, ref * rand(x))
})

review(w)

for (let i = 0; i < world.length; i++) {
  if (world[i] === -1) {
    //log(world[i])
  }
}

// EOF

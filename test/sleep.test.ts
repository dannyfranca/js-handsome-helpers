import Helpers from '../src/index'

test('sleep', async (resolve) => {
  const p1 = Helpers.sleep(1000)
  const p2 = Helpers.sleep()

  await Promise.all([p1, p2])
  resolve()
})

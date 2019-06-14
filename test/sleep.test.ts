import Helpers from '../src/index'

test('', async () => {
  await expect(Helpers.sleep(1000)).toResolve()
})

// @flow
// @see https://github.com/facebook/jest/blob/77744a24816d0978b6c478987426c36d615864bd/packages/jest-haste-map/src/lib/__tests__/normalize_path_sep.test.js

describe('normalizePathSep', () => {
  it('does nothing on posix', () => {
    jest.resetModules()
    // $FlowFixMe
    jest.mock('path', () => require.requireActual('path').posix)
    const normalizePathSep = require('.') // eslint-disable-line global-require
    expect(normalizePathSep('foo/bar/baz.js')).toEqual('foo/bar/baz.js')
  })

  it('replace slashes on windows', () => {
    jest.resetModules()
    // $FlowFixMe
    jest.mock('path', () => require.requireActual('path').win32)
    const normalizePathSep = require('.') // eslint-disable-line global-require
    expect(normalizePathSep('foo/bar/baz.js')).toEqual('foo\\bar\\baz.js')
  })
})

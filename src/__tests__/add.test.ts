import { describe, it, test, expect } from 'vitest'

describe('ts测试', function () {
  test('加法测试（1 + 5 = 6）', function () {
    const a = 1 + 5
    expect(a).toBe(6)
  })
  test('乘法测试（2 * 5 = 10）', function () {
    const a = 2 * 5
    expect(a).toBe(10)
  })
})

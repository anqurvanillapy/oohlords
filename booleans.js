'use strict'

/**
 * a.k.a. K combinator: Kxy = x
 */
export const TRUE = a => () => a

/**
 * a.k.a. SK combinator: SKxy = Ky(xy) = y
 */
export const FALSE = () => b => b

export const AND = p => q => p(q)(p)

export const OR = p => q => p(p)(q)

export const NOT = p => a => b => p(b)(a)

export const XOR = a => b => a(NOT(b))(b)

/**
 * predicate x then-clause else-clause
 */
export const IF = p => a => b => p(a)(b)

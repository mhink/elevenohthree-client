import React from 'react'

export const PDF = ({subscript}) => <span>\u003A6<sub>{subscript}</sub></span>
export const RV_B = "\u1D401"
export const UNIF = (min, max) => `\u1D4B0{${min}, ${max}`
export const FSUB = ({children}) => (<span>\u1D453<sub>{children}</sub></span>)

// const PDF_Y = "&phi;<sub>y</sub>"
// const CDF_X = "&phi;<sub>x</sub>"
// const CDF_Y = "&phi;<sub>y</sub>"
// const UNIF  = "&#119984;"
// const NORM  = "&#119977;"
// const REALS = "&#8477;"
// const ELEM  = "&#8712;"
// const SET_A = "&#119808;"
// const SET_B = "&#119809;"
// const LT    = "&lt;"
// const LTE   = "&#8804;"
// const INTEGERS = "&#8484;"

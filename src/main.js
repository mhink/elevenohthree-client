import $ from 'jquery'

require("siimple")

import {
  mainStyle
} from "./styles.css"

$(document).ready(() => {
  console.log("Hello, world!")
  $("main").prepend("<p>Injected by JS</p>")
})

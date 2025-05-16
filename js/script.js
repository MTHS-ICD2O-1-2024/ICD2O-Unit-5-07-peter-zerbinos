// Copyright (c) 2025 Peter Zerbinos All rights reserved
//
// Created by: Peter Zerbinos
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the sum of numbers.
 */
function calculateSumOfNumbers() {
  const userNumber = parseInt(document.getElementById("user-number").value)
  let sumOfNumbers = 0

  for (let counter = userNumber; counter > 0; counter--) {
    sumOfNumbers += counter
  }

  document.getElementById("result").innerText =
    "The sum of all the natural numbers up to " + userNumber + " is " + sumOfNumbers + "."
}

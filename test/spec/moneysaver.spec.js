/**
 * @file
 *
 * ### Responsibilities
 * - unit test moneysaver.js
 *
 * Scaffolded with generator-microjs v0.1.2
 *
 * @author Sean Keery <>
 */
'use strict';

/*global moneysaver*/
describe('moneysaver.js', function () {
  beforeEach(function () {
    // add spies
  });

  it('should have a working test harness', function () {
    // arrange
    // act
    // assert
    expect(true).not.toBe(false);
  });

  it('should exist', function () {
    // arrange
    // act
    // assert
    expect(typeof moneysaver).toBe('function');
  });

  it('should return nothing', function () {
    // arrange
    // act
    var result = moneysaver();
    // assert
    expect(result).toBeUndefined();
  });

});
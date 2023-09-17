/**
 * This file is all about interface.
 * this is to improve code readability and
 * code reusability.
 *
 */

/**
 * Validation Error Interface
 *
 */
export interface ValidationInterface {
  type: string;
  value: any;
  msg: string;
  path: string;
}

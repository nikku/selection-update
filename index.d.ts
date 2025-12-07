type SelectionRange = {
  start: number,
  end: number
};

/**
 * Calculate the selection update for the given
 * current and new input values.
 *
 * @param currentSelection as {start, end}
 *
 * @param currentValue
 * @param newValue
 *
 * @return newSelection
 */
export declare function calculateUpdate(currentSelection: SelectionRange, currentValue: string, newValue: string): SelectionRange;


/**
 * Utility method for creating a new selection range {start, end} object.
 *
 * @param start
 * @param end
 *
 * @return new range
 */
export declare function createRange(start: number, end?: number) : SelectionRange;
/**
 * Returns the first item from the collection with the given id.
 * @param {[{ id: any }]} items
 * @param {any} target
 */
export const findById = (items, target) => items.find(({ id }) => id === target);

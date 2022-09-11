/**
 * Legal characters for the unique ID.
 * Should be all on a US keyboard. No XML special characters or control codes.
 */
const SOUP =
  "!#%()*+,-./:;=?@[]^_`{|}~" +
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const SOUP_LEN = 87; // SOUP.length;
const ID_LEN = 20;
const CARRIER: string[] = [];

/**
 * Generate a unique ID, from Blockly. This should be globally unique.
 * 87 characters ^ 20 length > 128 bits (better than a UUID).
 */
export function uid(): string {
  for (let i = 0; i < ID_LEN; i++) {
    CARRIER[i] = SOUP.charAt(Math.random() * SOUP_LEN);
  }
  return CARRIER.join("");
}

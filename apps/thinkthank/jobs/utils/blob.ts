/**
 * Converts a Blob object to a serializable array of numbers
 *
 * This function is useful when you need to transfer Blob data across contexts
 * that require serialization (e.g., Web Workers, IndexedDB storage, or JSON serialization).
 *
 * @param blob - The Blob object to convert
 * @returns A Promise that resolves to an array of numbers representing the Blob's binary data
 *
 * @example
 * ```ts
 * const myBlob = new Blob(['Hello World'], { type: 'text/plain' });
 * const serialized = await blobToSerializable(myBlob);
 * // serialized is now a number[] that can be safely transferred or stored
 * ```
 *
 * @throws {Error} If the Blob cannot be converted to an ArrayBuffer
 */
export async function blobToSerializable(blob: Blob) {
    const arrayBuffer = await blob.arrayBuffer()
    return Array.from(new Uint8Array(arrayBuffer))
}

/**
 * Creates a new Blob from a serialized array of numbers
 *
 * This function reverses the serialization performed by blobToSerializable,
 * reconstructing a Blob from its serialized form.
 *
 * @param array - The array of numbers representing the Blob's binary data
 * @param contentType - The MIME type of the Blob (e.g., 'image/jpeg', 'text/plain').
 *                     Defaults to an empty string if not specified.
 * @returns A new Blob instance containing the binary data with the specified content type
 *
 * @example
 * ```ts
 * // Reconstruct a text blob
 * const serializedData = [72, 101, 108, 108, 111]; // "Hello" in ASCII
 * const blob = serializableToBlob(serializedData, 'text/plain');
 *
 * // Reconstruct an image blob
 * const imageBlob = serializableToBlob(imageData, 'image/jpeg');
 * ```
 *
 * @remarks
 * The content type parameter is important for correctly interpreting the Blob's data.
 * Common content types include:
 * - 'text/plain' for plain text
 * - 'image/jpeg' or 'image/png' for images
 * - 'application/json' for JSON data
 * - 'application/octet-stream' for generic binary data
 */
export function serializableToBlob(array: number[], contentType = '') {
    return new Blob([new Uint8Array(array)], { type: contentType })
}

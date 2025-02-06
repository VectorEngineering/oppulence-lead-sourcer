/**
 * Parses an unknown error object into a standardized error format
 *
 * This utility function safely extracts error information from various error
 * types and formats them into a consistent structure.
 *
 * @param error - The unknown error object to parse
 * @returns A standardized error object with code and message
 *
 * @example
 * ```ts
 * try {
 *   // Some operation that might fail
 * } catch (error) {
 *   const { code, message } = parseAPIError(error);
 *   console.error(`Error ${code}: ${message}`);
 * }
 * ```
 *
 * @remarks
 * - Returns a default error if the input cannot be parsed
 * - Always returns an object with 'code' and 'message' properties
 */
export function parseAPIError(error: unknown) {
    if (typeof error === 'object' && error !== null && 'error' in error) {
        const apiError = error as { error: { code: string; message: string } }
        return {
            code: apiError.error.code,
            message: apiError.error.message
        }
    }
    return { code: 'unknown', message: 'An unknown error occurred' }
}

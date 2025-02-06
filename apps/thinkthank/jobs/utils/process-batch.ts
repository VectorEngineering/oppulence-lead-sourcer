/**
 * Processes an array of items in batches with a specified batch size
 *
 * This utility function helps handle large arrays of items by processing them
 * in smaller chunks, preventing memory issues and improving performance.
 *
 * @param items - Array of items to process
 * @param limit - Maximum number of items to process in each batch
 * @param fn - Async function to process each batch of items
 * @returns Promise resolving to an array of processed results
 *
 * @example
 * ```ts
 * const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * const results = await processBatch(
 *   items,
 *   3,
 *   async (batch) => {
 *     return batch.map(x => x * 2);
 *   }
 * );
 * ```
 *
 * @remarks
 * - Processes batches serially to prevent overwhelming resources
 * - Maintains order of results relative to input items
 * - Concatenates results from all batches into a single array
 */
export async function processBatch<T, R>(items: T[], limit: number, fn: (batch: T[]) => Promise<R[]>): Promise<R[]> {
    const batches: T[][] = []
    let result: R[] = []

    // Split the items into batches
    for (let i = 0; i < items?.length; i += limit) {
        batches.push(items.slice(i, i + limit))
    }

    // Process batches serially
    for (const batch of batches) {
        const processedBatch = await fn(batch)
        result = result.concat(processedBatch)
    }

    return result
}

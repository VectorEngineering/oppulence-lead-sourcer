import type { BatchRunHandle } from '@trigger.dev/sdk/v3'

/**
 * Constant defining the maximum number of items to process in a single batch
 */
const BATCH_SIZE = 100

/**
 * Represents an item in a batch with its payload
 */
interface BatchItem<T> {
    payload: T
}

/**
 * Interface for a batch trigger task
 */
interface BatchTriggerTask<T> {
    batchTrigger: (items: BatchItem<T>[]) => Promise<BatchRunHandle<string, T, void>>
}

/**
 * Triggers batch processing of data items
 *
 * This utility function breaks down large datasets into manageable chunks
 * and processes them using the provided batch trigger task.
 *
 * @param data - Array of items to process in batches
 * @param task - The batch trigger task configuration
 *
 * @example
 * ```ts
 * await triggerBatch(items, {
 *   batchTrigger: async (batch) => {
 *     return processBatchItems(batch);
 *   }
 * });
 * ```
 *
 * @remarks
 * - Processes items in chunks of BATCH_SIZE (100 items)
 * - Handles each batch sequentially
 * - Useful for preventing memory issues with large datasets
 */
export async function triggerBatch<T>(data: T[], task: BatchTriggerTask<T>) {
    for (let i = 0; i < data.length; i += BATCH_SIZE) {
        const chunk = data.slice(i, i + BATCH_SIZE)

        await task.batchTrigger(
            chunk.map((item) => ({
                payload: item
            }))
        )
    }
}

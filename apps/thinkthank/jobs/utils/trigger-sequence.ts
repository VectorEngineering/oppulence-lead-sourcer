import type { BatchResult, BatchRunHandle, TaskOptions } from '@trigger.dev/sdk/v3'

type BaseTaskOptions = {
    delayMinutes?: number
    delay?: string
    [key: string]: unknown
}
/**
 * Interface for a trigger task with batch processing capabilities
 */
interface TriggerTask<T> {
    batchTriggerAndWait: (
        items: { payload: T; options?: BaseTaskOptions }[],
        options?: BaseTaskOptions
    ) => Promise<BatchResult<string, void>>
}

/**
 * Triggers a sequence of items with configurable delays between each
 *
 * This utility function processes items sequentially with specified delays,
 * useful for rate-limited operations or scheduled processing.
 *
 * @param items - Array of items to process in sequence
 * @param task - The trigger task configuration
 * @param options - Optional configuration including delay between items
 * @returns Promise resolving to the batch run handle
 *
 * @example
 * ```ts
 * await triggerSequenceAndWait(items, triggerTask, {
 *   delayMinutes: 5,
 *   // other options...
 * });
 * ```
 *
 * @remarks
 * - Default delay between items is 1 minute
 * - Delays are cumulative (first item: 0min, second: 1min, third: 2min, etc.)
 * - Supports additional task run options
 */
export async function triggerSequenceAndWait<T>(items: T[], task: TriggerTask<T>, options?: BaseTaskOptions) {
    const { delayMinutes = 1, ...restOptions } = options ?? {}

    const batchItems = items.map((item, i) => ({
        payload: item,
        options: {
            ...restOptions,
            delay: `${i * delayMinutes}min`
        }
    }))

    return task.batchTriggerAndWait(batchItems, restOptions)
}

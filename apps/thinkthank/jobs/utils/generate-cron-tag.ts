/**
 * Generates a deterministic cron expression based on a team ID
 *
 * This function creates a daily cron schedule that's unique but consistent
 * for each team, spreading team-specific jobs across different times of day
 * to avoid clustering of scheduled tasks.
 *
 * @param workspaceId - The unique identifier for the team
 * @returns A cron expression in the format "minute hour * * *" that will run daily
 *
 * @example
 * ```ts
 * const cronExpression = generateCronTag("team_123");
 * // Might return something like "45 13 * * *" (runs at 13:45 daily)
 * ```
 *
 * @remarks
 * - The minute and hour values are deterministically generated from the workspaceId
 * - The same workspaceId will always generate the same cron expression
 * - Minutes range from 0-59, Hours range from 0-23
 */
export function generateCronTag(workspaceId: string): string {
    // Use workspaceId to generate a deterministic random minute and hour
    const hash = Array.from(workspaceId).reduce((acc, char) => acc + char.charCodeAt(0), 0)

    // Generate minute (0-59) and hour (0-23) based on hash
    const minute = hash % 60
    const hour = hash % 24

    // Return cron expression that runs daily at the generated time
    // Format: minute hour * * *
    return `${minute} ${hour} * * *`
}

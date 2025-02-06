import { BusinessConfig as platform } from '@dub/platform-config'
/**
 * Revalidates the cache for a specific tag and ID
 *
 * This function sends a request to the cache revalidation endpoint to
 * invalidate cached data for a specific resource.
 *
 * @param params - The parameters for cache revalidation
 * @param params.tag - The cache tag to revalidate
 * @param params.id - The specific resource ID to revalidate
 * @returns Promise resolving to the fetch response
 *
 * @example
 * ```ts
 * await revalidateCache({
 *   tag: "user-profile",
 *   id: "user_123"
 * });
 * ```
 *
 * @remarks
 * - Requires MIDDAY_PUBLIC_APP_URL and MIDDAY_CACHE_API_SECRET environment variables
 * - Uses POST method with authorization header
 * - Sends tag and id in the request body as JSON
 */
export async function revalidateCache({ tag, id }: { tag: string; id: string }) {
    return fetch(`${platform.platformUrl}/api/webhooks/cache/revalidate`, {
        headers: {
            Authorization: `Bearer ${process.env.PLATFORM_CACHE_API_SECRET}`
        },
        method: 'POST',
        body: JSON.stringify({ tag, id })
    })
}

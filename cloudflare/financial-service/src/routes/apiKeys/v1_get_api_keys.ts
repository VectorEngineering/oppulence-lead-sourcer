import { APIKeysQuerySchema, APIKeysSchema } from './schema'
import { createRoute, z } from '@hono/zod-openapi'

import { App } from '@/hono/app'
import { openApiErrorResponses as ErrorResponses } from '@/errors'
import { Routes } from '@/route-definitions/routes'

/**
 * OpenAPI route configuration for retrieving API keys.
 * @constant
 */
const route = createRoute({
    tags: [...Routes.ApiKeys.base.tags],
    operationId: Routes.ApiKeys.base.operationId,
    method: Routes.ApiKeys.base.method,
    path: Routes.ApiKeys.base.path,
    security: [{ bearerAuth: [] }],
    summary: Routes.ApiKeys.base.summary,
    request: {
        query: APIKeysQuerySchema
    },
    responses: {
        200: {
            content: {
                'application/json': {
                    schema: APIKeysSchema
                }
            },
            description: 'Retrieve API Keys'
        },
        ...ErrorResponses
    }
})

export type V1GetApiKeysRoute = typeof route
export type V1GetApiKeysResponse = z.infer<(typeof route.responses)[200]['content']['application/json']['schema']>

/**
 * Registers the GET API keys endpoint with the application.
 *
 * This function sets up a route to handle the retrieval of API keys for a specific user. It performs the following steps:
 * 1. Extracts the database connection from the context.
 * 2. Retrieves the userId from the query parameters.
 * 3. Fetches the API keys associated with the userId from the database.
 *
 * @param {App} app - The Hono application instance.
 * @returns {void}
 *
 * @example
 * // Usage in main application file
 * import { registerV1GetApiKeys } from './routes/apiKeys/v1_get_api_keys';
 *
 * const app = new App();
 * registerV1GetApiKeys(app);
 */
export const registerV1GetApiKeys = (app: App) => {
    app.openapi(route, async (c) => {
        /**
         * Extract the userId from the validated query parameters.
         * @type {string}
         */
        const query = c.req.valid('query')
        const { userId } = query

        // convert id to number
        const id = parseInt(userId, 10)
        /**
         * Retrieve the API key repository from the context.
         * @type {APIKeyRepository}
         */
        const repository = c.get('repo')

        /**
         * Fetch API keys associated with the userId.
         * @type {Array<APIKey>}
         */
        const apiKeys = await repository.apiKey.getByUserId(id)

        const transformedKeys = apiKeys.map((key) => ({
            userId: key.userId,
            id: key.id,
            name: key.name || null,
            createdAt: key.createdAt?.toString() || null,
            key: key.key,
            expiresAt: key.expiresAt?.toString() || new Date(8640000000000000).toISOString() // Far future date if null
        }))

        /**
         * @todo Implement caching for API keys in Redis.
         * Specifically, cache the active, non-revoked keys for improved performance.
         *
         * Example implementation:
         * const redisClient = c.get('redis');
         * await redisClient.set(`user:${userId}:apiKeys`, JSON.stringify(apiKeys));
         */

        return c.json({ data: transformedKeys }, 200)
    })
}

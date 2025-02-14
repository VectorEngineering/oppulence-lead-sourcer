import { z } from '@hono/zod-openapi'

export const APIKeySchema = z
    .object({
        id: z.number(),
        userId: z.number(),
        key: z.string(),
        name: z.string().nullable(),
        createdAt: z.string().nullable().openapi({
            example: '2024-01-01T00:00:00Z',
            description: 'ISO 8601 timestamp'
        }),
        expiresAt: z.string().openapi({
            example: '2025-01-01T00:00:00Z',
            description: 'ISO 8601 timestamp'
        })
    })
    .openapi('APIKeySchema')

export const CreateAPIKeySchema = APIKeySchema.omit({
    id: true,
    key: true,
    createdAt: true
}).openapi('CreateAPIKeySchema')

export const APIKeysSchema = z
    .object({
        data: z.array(APIKeySchema)
    })
    .openapi('APIKeysSchema')

export const APIKeyParamsSchema = z
    .object({
        id: z.string().openapi({
            description: 'API Key ID',
            param: {
                name: 'id',
                in: 'query'
            },
            example: '1'
        })
    })
    .openapi('APIKeyParamsSchema')

export const APIKeysQuerySchema = z
    .object({
        userId: z.string().openapi({
            description: 'User ID',
            param: {
                name: 'userId',
                in: 'query'
            },
            example: '1'
        })
    })
    .openapi('APIKeysQuerySchema')

export const DeleteAPIKeySchema = z
    .object({
        success: z.boolean().openapi({
            example: true
        })
    })
    .openapi('DeleteAPIKeySchema')

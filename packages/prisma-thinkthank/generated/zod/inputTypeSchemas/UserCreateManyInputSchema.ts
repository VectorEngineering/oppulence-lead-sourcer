import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string().optional().nullable(),
        email: z.string().optional().nullable(),
        emailVerified: z.coerce.date().optional().nullable(),
        image: z.string().optional().nullable(),
        isMachine: z.boolean().optional(),
        passwordHash: z.string().optional().nullable(),
        invalidLoginAttempts: z.number().int().optional(),
        lockedAt: z.coerce.date().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        subscribed: z.boolean().optional(),
        source: z.string().optional().nullable(),
        defaultWorkspace: z.string().optional().nullable(),
        defaultPartnerId: z.string().optional().nullable(),
        referralLinkId: z.string().optional().nullable(),
        fullName: z.string().optional().nullable(),
        dateFormat: z.string().optional().nullable(),
        locale: z.string().optional().nullable(),
        timeFormat: z.number().int().optional().nullable(),
        timezone: z.string().optional().nullable(),
        weekStartsOnMonday: z.boolean().optional().nullable()
    })
    .strict()

export default UserCreateManyInputSchema

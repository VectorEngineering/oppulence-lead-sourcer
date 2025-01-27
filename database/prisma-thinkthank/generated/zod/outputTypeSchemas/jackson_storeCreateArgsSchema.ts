import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_storeCreateInputSchema } from '../inputTypeSchemas/jackson_storeCreateInputSchema'
import { jackson_storeUncheckedCreateInputSchema } from '../inputTypeSchemas/jackson_storeUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const jackson_storeSelectSchema: z.ZodType<Prisma.jackson_storeSelect> = z
    .object({
        key: z.boolean().optional(),
        value: z.boolean().optional(),
        iv: z.boolean().optional(),
        tag: z.boolean().optional(),
        namespace: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        modifiedAt: z.boolean().optional()
    })
    .strict()

export const jackson_storeCreateArgsSchema: z.ZodType<Prisma.jackson_storeCreateArgs> = z
    .object({
        select: jackson_storeSelectSchema.optional(),
        data: z.union([jackson_storeCreateInputSchema, jackson_storeUncheckedCreateInputSchema])
    })
    .strict()

export default jackson_storeCreateArgsSchema

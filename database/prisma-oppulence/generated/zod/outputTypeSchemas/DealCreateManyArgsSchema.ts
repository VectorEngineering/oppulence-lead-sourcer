import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DealCreateManyInputSchema } from '../inputTypeSchemas/DealCreateManyInputSchema'

export const DealCreateManyArgsSchema: z.ZodType<Prisma.DealCreateManyArgs> = z
    .object({
        data: z.union([DealCreateManyInputSchema, DealCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default DealCreateManyArgsSchema

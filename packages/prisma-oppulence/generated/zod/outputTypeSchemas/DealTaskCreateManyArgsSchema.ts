import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealTaskCreateManyInputSchema } from '../inputTypeSchemas/DealTaskCreateManyInputSchema'

export const DealTaskCreateManyArgsSchema: z.ZodType<Prisma.DealTaskCreateManyArgs> = z.object({
  data: z.union([ DealTaskCreateManyInputSchema,DealTaskCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default DealTaskCreateManyArgsSchema;

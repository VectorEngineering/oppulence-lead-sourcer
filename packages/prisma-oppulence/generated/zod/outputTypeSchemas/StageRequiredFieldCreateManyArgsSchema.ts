import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StageRequiredFieldCreateManyInputSchema } from '../inputTypeSchemas/StageRequiredFieldCreateManyInputSchema'

export const StageRequiredFieldCreateManyArgsSchema: z.ZodType<Prisma.StageRequiredFieldCreateManyArgs> = z.object({
  data: z.union([ StageRequiredFieldCreateManyInputSchema,StageRequiredFieldCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default StageRequiredFieldCreateManyArgsSchema;

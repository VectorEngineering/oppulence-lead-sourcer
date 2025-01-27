import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramResourceCreateManyInputSchema } from '../inputTypeSchemas/ProgramResourceCreateManyInputSchema'

export const ProgramResourceCreateManyArgsSchema: z.ZodType<Prisma.ProgramResourceCreateManyArgs> = z.object({
  data: z.union([ ProgramResourceCreateManyInputSchema,ProgramResourceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ProgramResourceCreateManyArgsSchema;

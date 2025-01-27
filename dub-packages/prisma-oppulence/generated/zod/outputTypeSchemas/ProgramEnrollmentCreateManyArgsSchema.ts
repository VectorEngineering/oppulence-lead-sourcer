import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramEnrollmentCreateManyInputSchema } from '../inputTypeSchemas/ProgramEnrollmentCreateManyInputSchema'

export const ProgramEnrollmentCreateManyArgsSchema: z.ZodType<Prisma.ProgramEnrollmentCreateManyArgs> = z.object({
  data: z.union([ ProgramEnrollmentCreateManyInputSchema,ProgramEnrollmentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ProgramEnrollmentCreateManyArgsSchema;

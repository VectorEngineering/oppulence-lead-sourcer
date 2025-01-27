import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramEnrollmentWhereInputSchema } from '../inputTypeSchemas/ProgramEnrollmentWhereInputSchema'

export const ProgramEnrollmentDeleteManyArgsSchema: z.ZodType<Prisma.ProgramEnrollmentDeleteManyArgs> = z.object({
  where: ProgramEnrollmentWhereInputSchema.optional(),
}).strict() ;

export default ProgramEnrollmentDeleteManyArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramEnrollmentUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProgramEnrollmentUpdateManyMutationInputSchema'
import { ProgramEnrollmentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProgramEnrollmentUncheckedUpdateManyInputSchema'
import { ProgramEnrollmentWhereInputSchema } from '../inputTypeSchemas/ProgramEnrollmentWhereInputSchema'

export const ProgramEnrollmentUpdateManyArgsSchema: z.ZodType<Prisma.ProgramEnrollmentUpdateManyArgs> = z.object({
  data: z.union([ ProgramEnrollmentUpdateManyMutationInputSchema,ProgramEnrollmentUncheckedUpdateManyInputSchema ]),
  where: ProgramEnrollmentWhereInputSchema.optional(),
}).strict() ;

export default ProgramEnrollmentUpdateManyArgsSchema;

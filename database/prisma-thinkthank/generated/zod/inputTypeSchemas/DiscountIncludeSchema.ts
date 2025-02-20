import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramArgsSchema } from "../outputTypeSchemas/ProgramArgsSchema"
import { ProgramEnrollmentFindManyArgsSchema } from "../outputTypeSchemas/ProgramEnrollmentFindManyArgsSchema"
import { DiscountCountOutputTypeArgsSchema } from "../outputTypeSchemas/DiscountCountOutputTypeArgsSchema"

export const DiscountIncludeSchema: z.ZodType<Prisma.DiscountInclude> = z.object({
  program: z.union([z.boolean(),z.lazy(() => ProgramArgsSchema)]).optional(),
  programEnrollments: z.union([z.boolean(),z.lazy(() => ProgramEnrollmentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DiscountCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default DiscountIncludeSchema;

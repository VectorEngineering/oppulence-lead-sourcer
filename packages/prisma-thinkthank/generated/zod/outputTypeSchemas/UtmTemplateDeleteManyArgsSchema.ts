import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UtmTemplateWhereInputSchema } from '../inputTypeSchemas/UtmTemplateWhereInputSchema'

export const UtmTemplateDeleteManyArgsSchema: z.ZodType<Prisma.UtmTemplateDeleteManyArgs> = z.object({
  where: UtmTemplateWhereInputSchema.optional(),
}).strict() ;

export default UtmTemplateDeleteManyArgsSchema;

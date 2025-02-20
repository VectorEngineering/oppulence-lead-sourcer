import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UtmTemplateCreateManyInputSchema } from '../inputTypeSchemas/UtmTemplateCreateManyInputSchema'

export const UtmTemplateCreateManyArgsSchema: z.ZodType<Prisma.UtmTemplateCreateManyArgs> = z.object({
  data: z.union([ UtmTemplateCreateManyInputSchema,UtmTemplateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default UtmTemplateCreateManyArgsSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UtmTemplateUpdateManyMutationInputSchema } from '../inputTypeSchemas/UtmTemplateUpdateManyMutationInputSchema'
import { UtmTemplateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/UtmTemplateUncheckedUpdateManyInputSchema'
import { UtmTemplateWhereInputSchema } from '../inputTypeSchemas/UtmTemplateWhereInputSchema'

export const UtmTemplateUpdateManyArgsSchema: z.ZodType<Prisma.UtmTemplateUpdateManyArgs> = z.object({
  data: z.union([ UtmTemplateUpdateManyMutationInputSchema,UtmTemplateUncheckedUpdateManyInputSchema ]),
  where: UtmTemplateWhereInputSchema.optional(),
}).strict() ;

export default UtmTemplateUpdateManyArgsSchema;

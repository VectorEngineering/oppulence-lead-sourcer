import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceTemplateUpdateManyMutationInputSchema } from '../inputTypeSchemas/InvoiceTemplateUpdateManyMutationInputSchema'
import { InvoiceTemplateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/InvoiceTemplateUncheckedUpdateManyInputSchema'
import { InvoiceTemplateWhereInputSchema } from '../inputTypeSchemas/InvoiceTemplateWhereInputSchema'

export const InvoiceTemplateUpdateManyArgsSchema: z.ZodType<Prisma.InvoiceTemplateUpdateManyArgs> = z.object({
  data: z.union([ InvoiceTemplateUpdateManyMutationInputSchema,InvoiceTemplateUncheckedUpdateManyInputSchema ]),
  where: InvoiceTemplateWhereInputSchema.optional(),
}).strict() ;

export default InvoiceTemplateUpdateManyArgsSchema;

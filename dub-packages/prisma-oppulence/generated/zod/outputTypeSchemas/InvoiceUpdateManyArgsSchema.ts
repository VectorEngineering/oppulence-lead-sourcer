import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceUpdateManyMutationInputSchema } from '../inputTypeSchemas/InvoiceUpdateManyMutationInputSchema'
import { InvoiceUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/InvoiceUncheckedUpdateManyInputSchema'
import { InvoiceWhereInputSchema } from '../inputTypeSchemas/InvoiceWhereInputSchema'

export const InvoiceUpdateManyArgsSchema: z.ZodType<Prisma.InvoiceUpdateManyArgs> = z.object({
  data: z.union([ InvoiceUpdateManyMutationInputSchema,InvoiceUncheckedUpdateManyInputSchema ]),
  where: InvoiceWhereInputSchema.optional(),
}).strict() ;

export default InvoiceUpdateManyArgsSchema;

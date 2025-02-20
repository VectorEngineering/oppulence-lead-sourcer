import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PayoutUpdateManyMutationInputSchema } from '../inputTypeSchemas/PayoutUpdateManyMutationInputSchema'
import { PayoutUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PayoutUncheckedUpdateManyInputSchema'
import { PayoutWhereInputSchema } from '../inputTypeSchemas/PayoutWhereInputSchema'

export const PayoutUpdateManyArgsSchema: z.ZodType<Prisma.PayoutUpdateManyArgs> = z.object({
  data: z.union([ PayoutUpdateManyMutationInputSchema,PayoutUncheckedUpdateManyInputSchema ]),
  where: PayoutWhereInputSchema.optional(),
}).strict() ;

export default PayoutUpdateManyArgsSchema;

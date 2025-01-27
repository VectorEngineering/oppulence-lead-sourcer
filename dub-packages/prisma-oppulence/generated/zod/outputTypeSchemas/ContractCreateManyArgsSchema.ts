import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractCreateManyInputSchema } from '../inputTypeSchemas/ContractCreateManyInputSchema'

export const ContractCreateManyArgsSchema: z.ZodType<Prisma.ContractCreateManyArgs> = z.object({
  data: z.union([ ContractCreateManyInputSchema,ContractCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ContractCreateManyArgsSchema;

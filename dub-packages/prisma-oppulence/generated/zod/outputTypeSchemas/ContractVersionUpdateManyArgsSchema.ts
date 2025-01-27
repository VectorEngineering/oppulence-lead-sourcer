import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractVersionUpdateManyMutationInputSchema } from '../inputTypeSchemas/ContractVersionUpdateManyMutationInputSchema'
import { ContractVersionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ContractVersionUncheckedUpdateManyInputSchema'
import { ContractVersionWhereInputSchema } from '../inputTypeSchemas/ContractVersionWhereInputSchema'

export const ContractVersionUpdateManyArgsSchema: z.ZodType<Prisma.ContractVersionUpdateManyArgs> = z.object({
  data: z.union([ ContractVersionUpdateManyMutationInputSchema,ContractVersionUncheckedUpdateManyInputSchema ]),
  where: ContractVersionWhereInputSchema.optional(),
}).strict() ;

export default ContractVersionUpdateManyArgsSchema;

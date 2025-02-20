import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractUpdateManyMutationInputSchema } from '../inputTypeSchemas/ContractUpdateManyMutationInputSchema'
import { ContractUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ContractUncheckedUpdateManyInputSchema'
import { ContractWhereInputSchema } from '../inputTypeSchemas/ContractWhereInputSchema'

export const ContractUpdateManyArgsSchema: z.ZodType<Prisma.ContractUpdateManyArgs> = z.object({
  data: z.union([ ContractUpdateManyMutationInputSchema,ContractUncheckedUpdateManyInputSchema ]),
  where: ContractWhereInputSchema.optional(),
}).strict() ;

export default ContractUpdateManyArgsSchema;

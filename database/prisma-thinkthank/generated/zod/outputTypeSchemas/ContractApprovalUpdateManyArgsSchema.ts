import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractApprovalUpdateManyMutationInputSchema } from '../inputTypeSchemas/ContractApprovalUpdateManyMutationInputSchema'
import { ContractApprovalUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ContractApprovalUncheckedUpdateManyInputSchema'
import { ContractApprovalWhereInputSchema } from '../inputTypeSchemas/ContractApprovalWhereInputSchema'

export const ContractApprovalUpdateManyArgsSchema: z.ZodType<Prisma.ContractApprovalUpdateManyArgs> = z.object({
  data: z.union([ ContractApprovalUpdateManyMutationInputSchema,ContractApprovalUncheckedUpdateManyInputSchema ]),
  where: ContractApprovalWhereInputSchema.optional(),
}).strict() ;

export default ContractApprovalUpdateManyArgsSchema;

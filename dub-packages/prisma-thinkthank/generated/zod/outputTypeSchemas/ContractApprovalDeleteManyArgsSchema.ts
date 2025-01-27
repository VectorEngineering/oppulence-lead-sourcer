import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractApprovalWhereInputSchema } from '../inputTypeSchemas/ContractApprovalWhereInputSchema'

export const ContractApprovalDeleteManyArgsSchema: z.ZodType<Prisma.ContractApprovalDeleteManyArgs> = z.object({
  where: ContractApprovalWhereInputSchema.optional(),
}).strict() ;

export default ContractApprovalDeleteManyArgsSchema;

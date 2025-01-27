import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractApprovalCreateManyInputSchema } from '../inputTypeSchemas/ContractApprovalCreateManyInputSchema'

export const ContractApprovalCreateManyArgsSchema: z.ZodType<Prisma.ContractApprovalCreateManyArgs> = z.object({
  data: z.union([ ContractApprovalCreateManyInputSchema,ContractApprovalCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ContractApprovalCreateManyArgsSchema;

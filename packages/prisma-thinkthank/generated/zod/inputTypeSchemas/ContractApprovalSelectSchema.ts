import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractArgsSchema } from "../outputTypeSchemas/ContractArgsSchema"

export const ContractApprovalSelectSchema: z.ZodType<Prisma.ContractApprovalSelect> = z.object({
  id: z.boolean().optional(),
  contractId: z.boolean().optional(),
  stage: z.boolean().optional(),
  status: z.boolean().optional(),
  approverRole: z.boolean().optional(),
  approverId: z.boolean().optional(),
  comments: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  contract: z.union([z.boolean(),z.lazy(() => ContractArgsSchema)]).optional(),
}).strict()

export default ContractApprovalSelectSchema;

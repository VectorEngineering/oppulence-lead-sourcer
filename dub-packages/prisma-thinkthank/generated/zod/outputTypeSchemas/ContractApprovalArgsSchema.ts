import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractApprovalSelectSchema } from '../inputTypeSchemas/ContractApprovalSelectSchema';
import { ContractApprovalIncludeSchema } from '../inputTypeSchemas/ContractApprovalIncludeSchema';

export const ContractApprovalArgsSchema: z.ZodType<Prisma.ContractApprovalDefaultArgs> = z.object({
  select: z.lazy(() => ContractApprovalSelectSchema).optional(),
  include: z.lazy(() => ContractApprovalIncludeSchema).optional(),
}).strict();

export default ContractApprovalArgsSchema;

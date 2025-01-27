import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ContractCountOutputTypeSelectSchema: z.ZodType<Prisma.ContractCountOutputTypeSelect> = z.object({
  childContracts: z.boolean().optional(),
  contractEvents: z.boolean().optional(),
  contractApprovals: z.boolean().optional(),
  contractDocuments: z.boolean().optional(),
  contractVersions: z.boolean().optional(),
}).strict();

export default ContractCountOutputTypeSelectSchema;

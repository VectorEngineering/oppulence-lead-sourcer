import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ContractVersionContractIdVersionNumberCompoundUniqueInputSchema: z.ZodType<Prisma.ContractVersionContractIdVersionNumberCompoundUniqueInput> = z.object({
  contractId: z.string(),
  versionNumber: z.number()
}).strict();

export default ContractVersionContractIdVersionNumberCompoundUniqueInputSchema;

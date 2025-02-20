import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractSelectSchema } from '../inputTypeSchemas/ContractSelectSchema';
import { ContractIncludeSchema } from '../inputTypeSchemas/ContractIncludeSchema';

export const ContractArgsSchema: z.ZodType<Prisma.ContractDefaultArgs> = z.object({
  select: z.lazy(() => ContractSelectSchema).optional(),
  include: z.lazy(() => ContractIncludeSchema).optional(),
}).strict();

export default ContractArgsSchema;

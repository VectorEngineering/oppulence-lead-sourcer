import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ContractArgsSchema } from "../outputTypeSchemas/ContractArgsSchema"

export const ContractEventIncludeSchema: z.ZodType<Prisma.ContractEventInclude> = z.object({
  contract: z.union([z.boolean(),z.lazy(() => ContractArgsSchema)]).optional(),
}).strict()

export default ContractEventIncludeSchema;

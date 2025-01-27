import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramArgsSchema } from "../outputTypeSchemas/ProgramArgsSchema"
import { PartnerArgsSchema } from "../outputTypeSchemas/PartnerArgsSchema"
import { PayoutArgsSchema } from "../outputTypeSchemas/PayoutArgsSchema"
import { CustomerArgsSchema } from "../outputTypeSchemas/CustomerArgsSchema"

export const SaleIncludeSchema: z.ZodType<Prisma.SaleInclude> = z.object({
  program: z.union([z.boolean(),z.lazy(() => ProgramArgsSchema)]).optional(),
  partner: z.union([z.boolean(),z.lazy(() => PartnerArgsSchema)]).optional(),
  payout: z.union([z.boolean(),z.lazy(() => PayoutArgsSchema)]).optional(),
  customer: z.union([z.boolean(),z.lazy(() => CustomerArgsSchema)]).optional(),
}).strict()

export default SaleIncludeSchema;

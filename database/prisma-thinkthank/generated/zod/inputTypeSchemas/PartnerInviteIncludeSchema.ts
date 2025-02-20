import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PartnerArgsSchema } from "../outputTypeSchemas/PartnerArgsSchema"

export const PartnerInviteIncludeSchema: z.ZodType<Prisma.PartnerInviteInclude> = z.object({
  partner: z.union([z.boolean(),z.lazy(() => PartnerArgsSchema)]).optional(),
}).strict()

export default PartnerInviteIncludeSchema;

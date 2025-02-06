import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PartnerArgsSchema } from "../outputTypeSchemas/PartnerArgsSchema"

export const PartnerInviteSelectSchema: z.ZodType<Prisma.PartnerInviteSelect> = z.object({
  email: z.boolean().optional(),
  expires: z.boolean().optional(),
  partnerId: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  partner: z.union([z.boolean(),z.lazy(() => PartnerArgsSchema)]).optional(),
}).strict()

export default PartnerInviteSelectSchema;

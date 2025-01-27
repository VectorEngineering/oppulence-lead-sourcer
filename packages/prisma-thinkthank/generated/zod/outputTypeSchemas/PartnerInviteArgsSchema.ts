import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PartnerInviteSelectSchema } from '../inputTypeSchemas/PartnerInviteSelectSchema';
import { PartnerInviteIncludeSchema } from '../inputTypeSchemas/PartnerInviteIncludeSchema';

export const PartnerInviteArgsSchema: z.ZodType<Prisma.PartnerInviteDefaultArgs> = z.object({
  select: z.lazy(() => PartnerInviteSelectSchema).optional(),
  include: z.lazy(() => PartnerInviteIncludeSchema).optional(),
}).strict();

export default PartnerInviteArgsSchema;

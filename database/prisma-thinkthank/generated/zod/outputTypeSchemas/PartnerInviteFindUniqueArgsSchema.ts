import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PartnerInviteIncludeSchema } from '../inputTypeSchemas/PartnerInviteIncludeSchema'
import { PartnerInviteWhereUniqueInputSchema } from '../inputTypeSchemas/PartnerInviteWhereUniqueInputSchema'
import { PartnerArgsSchema } from "../outputTypeSchemas/PartnerArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PartnerInviteSelectSchema: z.ZodType<Prisma.PartnerInviteSelect> = z.object({
  email: z.boolean().optional(),
  expires: z.boolean().optional(),
  partnerId: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  partner: z.union([z.boolean(),z.lazy(() => PartnerArgsSchema)]).optional(),
}).strict()

export const PartnerInviteFindUniqueArgsSchema: z.ZodType<Prisma.PartnerInviteFindUniqueArgs> = z.object({
  select: PartnerInviteSelectSchema.optional(),
  include: PartnerInviteIncludeSchema.optional(),
  where: PartnerInviteWhereUniqueInputSchema,
}).strict() ;

export default PartnerInviteFindUniqueArgsSchema;

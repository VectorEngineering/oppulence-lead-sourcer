import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PartnerUserIncludeSchema } from '../inputTypeSchemas/PartnerUserIncludeSchema'
import { PartnerUserCreateInputSchema } from '../inputTypeSchemas/PartnerUserCreateInputSchema'
import { PartnerUserUncheckedCreateInputSchema } from '../inputTypeSchemas/PartnerUserUncheckedCreateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { PartnerArgsSchema } from "../outputTypeSchemas/PartnerArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PartnerUserSelectSchema: z.ZodType<Prisma.PartnerUserSelect> = z.object({
  id: z.boolean().optional(),
  role: z.boolean().optional(),
  userId: z.boolean().optional(),
  partnerId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  partner: z.union([z.boolean(),z.lazy(() => PartnerArgsSchema)]).optional(),
}).strict()

export const PartnerUserCreateArgsSchema: z.ZodType<Prisma.PartnerUserCreateArgs> = z.object({
  select: PartnerUserSelectSchema.optional(),
  include: PartnerUserIncludeSchema.optional(),
  data: z.union([ PartnerUserCreateInputSchema,PartnerUserUncheckedCreateInputSchema ]),
}).strict() ;

export default PartnerUserCreateArgsSchema;

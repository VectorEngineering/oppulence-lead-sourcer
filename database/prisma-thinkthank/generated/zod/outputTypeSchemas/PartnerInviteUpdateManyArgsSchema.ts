import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PartnerInviteUpdateManyMutationInputSchema } from '../inputTypeSchemas/PartnerInviteUpdateManyMutationInputSchema'
import { PartnerInviteUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PartnerInviteUncheckedUpdateManyInputSchema'
import { PartnerInviteWhereInputSchema } from '../inputTypeSchemas/PartnerInviteWhereInputSchema'

export const PartnerInviteUpdateManyArgsSchema: z.ZodType<Prisma.PartnerInviteUpdateManyArgs> = z.object({
  data: z.union([ PartnerInviteUpdateManyMutationInputSchema,PartnerInviteUncheckedUpdateManyInputSchema ]),
  where: PartnerInviteWhereInputSchema.optional(),
}).strict() ;

export default PartnerInviteUpdateManyArgsSchema;

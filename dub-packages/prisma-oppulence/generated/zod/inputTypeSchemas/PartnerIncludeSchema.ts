import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramEnrollmentFindManyArgsSchema } from "../outputTypeSchemas/ProgramEnrollmentFindManyArgsSchema"
import { ProgramApplicationFindManyArgsSchema } from "../outputTypeSchemas/ProgramApplicationFindManyArgsSchema"
import { PartnerUserFindManyArgsSchema } from "../outputTypeSchemas/PartnerUserFindManyArgsSchema"
import { PartnerInviteFindManyArgsSchema } from "../outputTypeSchemas/PartnerInviteFindManyArgsSchema"
import { PayoutFindManyArgsSchema } from "../outputTypeSchemas/PayoutFindManyArgsSchema"
import { SaleFindManyArgsSchema } from "../outputTypeSchemas/SaleFindManyArgsSchema"
import { PartnerCountOutputTypeArgsSchema } from "../outputTypeSchemas/PartnerCountOutputTypeArgsSchema"

export const PartnerIncludeSchema: z.ZodType<Prisma.PartnerInclude> = z.object({
  programs: z.union([z.boolean(),z.lazy(() => ProgramEnrollmentFindManyArgsSchema)]).optional(),
  applications: z.union([z.boolean(),z.lazy(() => ProgramApplicationFindManyArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => PartnerUserFindManyArgsSchema)]).optional(),
  invites: z.union([z.boolean(),z.lazy(() => PartnerInviteFindManyArgsSchema)]).optional(),
  payouts: z.union([z.boolean(),z.lazy(() => PayoutFindManyArgsSchema)]).optional(),
  sales: z.union([z.boolean(),z.lazy(() => SaleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PartnerCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PartnerIncludeSchema;

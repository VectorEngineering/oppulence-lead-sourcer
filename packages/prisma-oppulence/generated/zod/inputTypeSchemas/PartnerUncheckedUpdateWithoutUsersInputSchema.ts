import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PartnerStatusSchema } from './PartnerStatusSchema';
import { EnumPartnerStatusFieldUpdateOperationsInputSchema } from './EnumPartnerStatusFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ProgramEnrollmentUncheckedUpdateManyWithoutPartnerNestedInputSchema } from './ProgramEnrollmentUncheckedUpdateManyWithoutPartnerNestedInputSchema';
import { ProgramApplicationUncheckedUpdateManyWithoutPartnerNestedInputSchema } from './ProgramApplicationUncheckedUpdateManyWithoutPartnerNestedInputSchema';
import { PartnerInviteUncheckedUpdateManyWithoutPartnerNestedInputSchema } from './PartnerInviteUncheckedUpdateManyWithoutPartnerNestedInputSchema';
import { PayoutUncheckedUpdateManyWithoutPartnerNestedInputSchema } from './PayoutUncheckedUpdateManyWithoutPartnerNestedInputSchema';
import { SaleUncheckedUpdateManyWithoutPartnerNestedInputSchema } from './SaleUncheckedUpdateManyWithoutPartnerNestedInputSchema';

export const PartnerUncheckedUpdateWithoutUsersInputSchema: z.ZodType<Prisma.PartnerUncheckedUpdateWithoutUsersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => PartnerStatusSchema),z.lazy(() => EnumPartnerStatusFieldUpdateOperationsInputSchema) ]).optional(),
  stripeConnectId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  payoutsEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  showOnLeaderboard: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  programs: z.lazy(() => ProgramEnrollmentUncheckedUpdateManyWithoutPartnerNestedInputSchema).optional(),
  applications: z.lazy(() => ProgramApplicationUncheckedUpdateManyWithoutPartnerNestedInputSchema).optional(),
  invites: z.lazy(() => PartnerInviteUncheckedUpdateManyWithoutPartnerNestedInputSchema).optional(),
  payouts: z.lazy(() => PayoutUncheckedUpdateManyWithoutPartnerNestedInputSchema).optional(),
  sales: z.lazy(() => SaleUncheckedUpdateManyWithoutPartnerNestedInputSchema).optional()
}).strict();

export default PartnerUncheckedUpdateWithoutUsersInputSchema;

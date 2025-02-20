import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ProgramTypeSchema } from './ProgramTypeSchema';
import { EnumProgramTypeFieldUpdateOperationsInputSchema } from './EnumProgramTypeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { CommissionTypeSchema } from './CommissionTypeSchema';
import { EnumCommissionTypeFieldUpdateOperationsInputSchema } from './EnumCommissionTypeFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { CommissionIntervalSchema } from './CommissionIntervalSchema';
import { NullableEnumCommissionIntervalFieldUpdateOperationsInputSchema } from './NullableEnumCommissionIntervalFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { DiscountUncheckedUpdateManyWithoutProgramNestedInputSchema } from './DiscountUncheckedUpdateManyWithoutProgramNestedInputSchema';
import { PayoutUncheckedUpdateManyWithoutProgramNestedInputSchema } from './PayoutUncheckedUpdateManyWithoutProgramNestedInputSchema';
import { SaleUncheckedUpdateManyWithoutProgramNestedInputSchema } from './SaleUncheckedUpdateManyWithoutProgramNestedInputSchema';
import { InvoiceUncheckedUpdateManyWithoutProgramNestedInputSchema } from './InvoiceUncheckedUpdateManyWithoutProgramNestedInputSchema';
import { ProgramResourceUncheckedUpdateManyWithoutProgramNestedInputSchema } from './ProgramResourceUncheckedUpdateManyWithoutProgramNestedInputSchema';
import { ProgramApplicationUncheckedUpdateManyWithoutProgramNestedInputSchema } from './ProgramApplicationUncheckedUpdateManyWithoutProgramNestedInputSchema';
import { ProgramInviteUncheckedUpdateManyWithoutProgramNestedInputSchema } from './ProgramInviteUncheckedUpdateManyWithoutProgramNestedInputSchema';
import { LinkUncheckedUpdateManyWithoutProgramNestedInputSchema } from './LinkUncheckedUpdateManyWithoutProgramNestedInputSchema';

export const ProgramUncheckedUpdateWithoutPartnersInputSchema: z.ZodType<Prisma.ProgramUncheckedUpdateWithoutPartnersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  workspaceId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  wordmark: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  brandColor: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => ProgramTypeSchema),z.lazy(() => EnumProgramTypeFieldUpdateOperationsInputSchema) ]).optional(),
  cookieLength: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  commissionAmount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  commissionType: z.union([ z.lazy(() => CommissionTypeSchema),z.lazy(() => EnumCommissionTypeFieldUpdateOperationsInputSchema) ]).optional(),
  commissionDuration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  commissionInterval: z.union([ z.lazy(() => CommissionIntervalSchema),z.lazy(() => NullableEnumCommissionIntervalFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  landerData: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  discounts: z.lazy(() => DiscountUncheckedUpdateManyWithoutProgramNestedInputSchema).optional(),
  payouts: z.lazy(() => PayoutUncheckedUpdateManyWithoutProgramNestedInputSchema).optional(),
  sales: z.lazy(() => SaleUncheckedUpdateManyWithoutProgramNestedInputSchema).optional(),
  invoices: z.lazy(() => InvoiceUncheckedUpdateManyWithoutProgramNestedInputSchema).optional(),
  resources: z.lazy(() => ProgramResourceUncheckedUpdateManyWithoutProgramNestedInputSchema).optional(),
  applications: z.lazy(() => ProgramApplicationUncheckedUpdateManyWithoutProgramNestedInputSchema).optional(),
  invites: z.lazy(() => ProgramInviteUncheckedUpdateManyWithoutProgramNestedInputSchema).optional(),
  links: z.lazy(() => LinkUncheckedUpdateManyWithoutProgramNestedInputSchema).optional()
}).strict();

export default ProgramUncheckedUpdateWithoutPartnersInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramTypeSchema } from './ProgramTypeSchema';
import { CommissionTypeSchema } from './CommissionTypeSchema';
import { CommissionIntervalSchema } from './CommissionIntervalSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DiscountUncheckedCreateNestedManyWithoutProgramInputSchema } from './DiscountUncheckedCreateNestedManyWithoutProgramInputSchema';
import { ProgramEnrollmentUncheckedCreateNestedManyWithoutProgramInputSchema } from './ProgramEnrollmentUncheckedCreateNestedManyWithoutProgramInputSchema';
import { PayoutUncheckedCreateNestedManyWithoutProgramInputSchema } from './PayoutUncheckedCreateNestedManyWithoutProgramInputSchema';
import { SaleUncheckedCreateNestedManyWithoutProgramInputSchema } from './SaleUncheckedCreateNestedManyWithoutProgramInputSchema';
import { InvoiceUncheckedCreateNestedManyWithoutProgramInputSchema } from './InvoiceUncheckedCreateNestedManyWithoutProgramInputSchema';
import { ProgramResourceUncheckedCreateNestedManyWithoutProgramInputSchema } from './ProgramResourceUncheckedCreateNestedManyWithoutProgramInputSchema';
import { ProgramApplicationUncheckedCreateNestedManyWithoutProgramInputSchema } from './ProgramApplicationUncheckedCreateNestedManyWithoutProgramInputSchema';
import { LinkUncheckedCreateNestedManyWithoutProgramInputSchema } from './LinkUncheckedCreateNestedManyWithoutProgramInputSchema';

export const ProgramUncheckedCreateWithoutInvitesInputSchema: z.ZodType<Prisma.ProgramUncheckedCreateWithoutInvitesInput> = z.object({
  id: z.string().cuid().optional(),
  workspaceId: z.string(),
  name: z.string(),
  slug: z.string(),
  logo: z.string().optional().nullable(),
  wordmark: z.string().optional().nullable(),
  brandColor: z.string().optional().nullable(),
  domain: z.string().optional().nullable(),
  url: z.string().optional().nullable(),
  type: z.lazy(() => ProgramTypeSchema).optional(),
  cookieLength: z.number().int().optional(),
  commissionAmount: z.number().int().optional(),
  commissionType: z.lazy(() => CommissionTypeSchema).optional(),
  commissionDuration: z.number().int().optional().nullable(),
  commissionInterval: z.lazy(() => CommissionIntervalSchema).optional().nullable(),
  landerData: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  discounts: z.lazy(() => DiscountUncheckedCreateNestedManyWithoutProgramInputSchema).optional(),
  partners: z.lazy(() => ProgramEnrollmentUncheckedCreateNestedManyWithoutProgramInputSchema).optional(),
  payouts: z.lazy(() => PayoutUncheckedCreateNestedManyWithoutProgramInputSchema).optional(),
  sales: z.lazy(() => SaleUncheckedCreateNestedManyWithoutProgramInputSchema).optional(),
  invoices: z.lazy(() => InvoiceUncheckedCreateNestedManyWithoutProgramInputSchema).optional(),
  resources: z.lazy(() => ProgramResourceUncheckedCreateNestedManyWithoutProgramInputSchema).optional(),
  applications: z.lazy(() => ProgramApplicationUncheckedCreateNestedManyWithoutProgramInputSchema).optional(),
  links: z.lazy(() => LinkUncheckedCreateNestedManyWithoutProgramInputSchema).optional()
}).strict();

export default ProgramUncheckedCreateWithoutInvitesInputSchema;

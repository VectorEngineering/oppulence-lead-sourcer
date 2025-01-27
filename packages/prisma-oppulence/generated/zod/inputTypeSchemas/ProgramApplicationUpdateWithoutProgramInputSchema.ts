import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { PartnerUpdateOneWithoutApplicationsNestedInputSchema } from './PartnerUpdateOneWithoutApplicationsNestedInputSchema';
import { ProgramEnrollmentUpdateOneWithoutApplicationNestedInputSchema } from './ProgramEnrollmentUpdateOneWithoutApplicationNestedInputSchema';

export const ProgramApplicationUpdateWithoutProgramInputSchema: z.ZodType<Prisma.ProgramApplicationUpdateWithoutProgramInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  proposal: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  website: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  partner: z.lazy(() => PartnerUpdateOneWithoutApplicationsNestedInputSchema).optional(),
  enrollment: z.lazy(() => ProgramEnrollmentUpdateOneWithoutApplicationNestedInputSchema).optional()
}).strict();

export default ProgramApplicationUpdateWithoutProgramInputSchema;

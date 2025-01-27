import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ProgramUpdateOneRequiredWithoutInvitesNestedInputSchema } from './ProgramUpdateOneRequiredWithoutInvitesNestedInputSchema';
import { LinkUpdateOneWithoutProgramInviteNestedInputSchema } from './LinkUpdateOneWithoutProgramInviteNestedInputSchema';

export const ProgramInviteUpdateInputSchema: z.ZodType<Prisma.ProgramInviteUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  program: z.lazy(() => ProgramUpdateOneRequiredWithoutInvitesNestedInputSchema).optional(),
  link: z.lazy(() => LinkUpdateOneWithoutProgramInviteNestedInputSchema).optional()
}).strict();

export default ProgramInviteUpdateInputSchema;

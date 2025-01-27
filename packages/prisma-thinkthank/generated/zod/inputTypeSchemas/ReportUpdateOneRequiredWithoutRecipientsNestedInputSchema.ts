import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportCreateWithoutRecipientsInputSchema } from './ReportCreateWithoutRecipientsInputSchema';
import { ReportUncheckedCreateWithoutRecipientsInputSchema } from './ReportUncheckedCreateWithoutRecipientsInputSchema';
import { ReportCreateOrConnectWithoutRecipientsInputSchema } from './ReportCreateOrConnectWithoutRecipientsInputSchema';
import { ReportUpsertWithoutRecipientsInputSchema } from './ReportUpsertWithoutRecipientsInputSchema';
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema';
import { ReportUpdateToOneWithWhereWithoutRecipientsInputSchema } from './ReportUpdateToOneWithWhereWithoutRecipientsInputSchema';
import { ReportUpdateWithoutRecipientsInputSchema } from './ReportUpdateWithoutRecipientsInputSchema';
import { ReportUncheckedUpdateWithoutRecipientsInputSchema } from './ReportUncheckedUpdateWithoutRecipientsInputSchema';

export const ReportUpdateOneRequiredWithoutRecipientsNestedInputSchema: z.ZodType<Prisma.ReportUpdateOneRequiredWithoutRecipientsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReportCreateWithoutRecipientsInputSchema),z.lazy(() => ReportUncheckedCreateWithoutRecipientsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutRecipientsInputSchema).optional(),
  upsert: z.lazy(() => ReportUpsertWithoutRecipientsInputSchema).optional(),
  connect: z.lazy(() => ReportWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ReportUpdateToOneWithWhereWithoutRecipientsInputSchema),z.lazy(() => ReportUpdateWithoutRecipientsInputSchema),z.lazy(() => ReportUncheckedUpdateWithoutRecipientsInputSchema) ]).optional(),
}).strict();

export default ReportUpdateOneRequiredWithoutRecipientsNestedInputSchema;

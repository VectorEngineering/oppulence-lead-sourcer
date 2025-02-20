import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceTemplateWhereUniqueInputSchema } from './InvoiceTemplateWhereUniqueInputSchema';
import { InvoiceTemplateUpdateWithoutProjectInputSchema } from './InvoiceTemplateUpdateWithoutProjectInputSchema';
import { InvoiceTemplateUncheckedUpdateWithoutProjectInputSchema } from './InvoiceTemplateUncheckedUpdateWithoutProjectInputSchema';
import { InvoiceTemplateCreateWithoutProjectInputSchema } from './InvoiceTemplateCreateWithoutProjectInputSchema';
import { InvoiceTemplateUncheckedCreateWithoutProjectInputSchema } from './InvoiceTemplateUncheckedCreateWithoutProjectInputSchema';

export const InvoiceTemplateUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.InvoiceTemplateUpsertWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => InvoiceTemplateWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InvoiceTemplateUpdateWithoutProjectInputSchema),z.lazy(() => InvoiceTemplateUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => InvoiceTemplateCreateWithoutProjectInputSchema),z.lazy(() => InvoiceTemplateUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default InvoiceTemplateUpsertWithWhereUniqueWithoutProjectInputSchema;

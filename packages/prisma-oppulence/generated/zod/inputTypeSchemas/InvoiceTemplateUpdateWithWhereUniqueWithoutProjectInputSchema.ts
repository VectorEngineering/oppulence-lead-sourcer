import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceTemplateWhereUniqueInputSchema } from './InvoiceTemplateWhereUniqueInputSchema';
import { InvoiceTemplateUpdateWithoutProjectInputSchema } from './InvoiceTemplateUpdateWithoutProjectInputSchema';
import { InvoiceTemplateUncheckedUpdateWithoutProjectInputSchema } from './InvoiceTemplateUncheckedUpdateWithoutProjectInputSchema';

export const InvoiceTemplateUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.InvoiceTemplateUpdateWithWhereUniqueWithoutProjectInput> = z.object({
  where: z.lazy(() => InvoiceTemplateWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InvoiceTemplateUpdateWithoutProjectInputSchema),z.lazy(() => InvoiceTemplateUncheckedUpdateWithoutProjectInputSchema) ]),
}).strict();

export default InvoiceTemplateUpdateWithWhereUniqueWithoutProjectInputSchema;

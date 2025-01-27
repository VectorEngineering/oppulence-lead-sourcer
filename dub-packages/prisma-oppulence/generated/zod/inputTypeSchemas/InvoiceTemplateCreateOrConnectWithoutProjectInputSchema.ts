import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceTemplateWhereUniqueInputSchema } from './InvoiceTemplateWhereUniqueInputSchema';
import { InvoiceTemplateCreateWithoutProjectInputSchema } from './InvoiceTemplateCreateWithoutProjectInputSchema';
import { InvoiceTemplateUncheckedCreateWithoutProjectInputSchema } from './InvoiceTemplateUncheckedCreateWithoutProjectInputSchema';

export const InvoiceTemplateCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.InvoiceTemplateCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => InvoiceTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvoiceTemplateCreateWithoutProjectInputSchema),z.lazy(() => InvoiceTemplateUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default InvoiceTemplateCreateOrConnectWithoutProjectInputSchema;

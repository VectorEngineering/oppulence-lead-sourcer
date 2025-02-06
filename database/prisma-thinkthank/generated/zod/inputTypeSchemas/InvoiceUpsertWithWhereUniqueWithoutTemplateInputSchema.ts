import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceUpdateWithoutTemplateInputSchema } from './InvoiceUpdateWithoutTemplateInputSchema';
import { InvoiceUncheckedUpdateWithoutTemplateInputSchema } from './InvoiceUncheckedUpdateWithoutTemplateInputSchema';
import { InvoiceCreateWithoutTemplateInputSchema } from './InvoiceCreateWithoutTemplateInputSchema';
import { InvoiceUncheckedCreateWithoutTemplateInputSchema } from './InvoiceUncheckedCreateWithoutTemplateInputSchema';

export const InvoiceUpsertWithWhereUniqueWithoutTemplateInputSchema: z.ZodType<Prisma.InvoiceUpsertWithWhereUniqueWithoutTemplateInput> = z.object({
  where: z.lazy(() => InvoiceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InvoiceUpdateWithoutTemplateInputSchema),z.lazy(() => InvoiceUncheckedUpdateWithoutTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => InvoiceCreateWithoutTemplateInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutTemplateInputSchema) ]),
}).strict();

export default InvoiceUpsertWithWhereUniqueWithoutTemplateInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceScalarWhereInputSchema } from './InvoiceScalarWhereInputSchema';
import { InvoiceUpdateManyMutationInputSchema } from './InvoiceUpdateManyMutationInputSchema';
import { InvoiceUncheckedUpdateManyWithoutTemplateInputSchema } from './InvoiceUncheckedUpdateManyWithoutTemplateInputSchema';

export const InvoiceUpdateManyWithWhereWithoutTemplateInputSchema: z.ZodType<Prisma.InvoiceUpdateManyWithWhereWithoutTemplateInput> = z.object({
  where: z.lazy(() => InvoiceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InvoiceUpdateManyMutationInputSchema),z.lazy(() => InvoiceUncheckedUpdateManyWithoutTemplateInputSchema) ]),
}).strict();

export default InvoiceUpdateManyWithWhereWithoutTemplateInputSchema;

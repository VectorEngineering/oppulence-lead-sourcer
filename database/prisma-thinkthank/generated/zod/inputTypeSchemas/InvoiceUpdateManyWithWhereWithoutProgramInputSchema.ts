import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceScalarWhereInputSchema } from './InvoiceScalarWhereInputSchema';
import { InvoiceUpdateManyMutationInputSchema } from './InvoiceUpdateManyMutationInputSchema';
import { InvoiceUncheckedUpdateManyWithoutProgramInputSchema } from './InvoiceUncheckedUpdateManyWithoutProgramInputSchema';

export const InvoiceUpdateManyWithWhereWithoutProgramInputSchema: z.ZodType<Prisma.InvoiceUpdateManyWithWhereWithoutProgramInput> = z.object({
  where: z.lazy(() => InvoiceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InvoiceUpdateManyMutationInputSchema),z.lazy(() => InvoiceUncheckedUpdateManyWithoutProgramInputSchema) ]),
}).strict();

export default InvoiceUpdateManyWithWhereWithoutProgramInputSchema;

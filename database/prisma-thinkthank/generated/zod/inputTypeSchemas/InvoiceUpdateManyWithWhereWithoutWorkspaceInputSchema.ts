import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceScalarWhereInputSchema } from './InvoiceScalarWhereInputSchema';
import { InvoiceUpdateManyMutationInputSchema } from './InvoiceUpdateManyMutationInputSchema';
import { InvoiceUncheckedUpdateManyWithoutWorkspaceInputSchema } from './InvoiceUncheckedUpdateManyWithoutWorkspaceInputSchema';

export const InvoiceUpdateManyWithWhereWithoutWorkspaceInputSchema: z.ZodType<Prisma.InvoiceUpdateManyWithWhereWithoutWorkspaceInput> = z.object({
  where: z.lazy(() => InvoiceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InvoiceUpdateManyMutationInputSchema),z.lazy(() => InvoiceUncheckedUpdateManyWithoutWorkspaceInputSchema) ]),
}).strict();

export default InvoiceUpdateManyWithWhereWithoutWorkspaceInputSchema;

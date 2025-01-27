import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegisteredDomainWhereInputSchema } from './RegisteredDomainWhereInputSchema';
import { RegisteredDomainUpdateWithoutDomainInputSchema } from './RegisteredDomainUpdateWithoutDomainInputSchema';
import { RegisteredDomainUncheckedUpdateWithoutDomainInputSchema } from './RegisteredDomainUncheckedUpdateWithoutDomainInputSchema';

export const RegisteredDomainUpdateToOneWithWhereWithoutDomainInputSchema: z.ZodType<Prisma.RegisteredDomainUpdateToOneWithWhereWithoutDomainInput> = z.object({
  where: z.lazy(() => RegisteredDomainWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RegisteredDomainUpdateWithoutDomainInputSchema),z.lazy(() => RegisteredDomainUncheckedUpdateWithoutDomainInputSchema) ]),
}).strict();

export default RegisteredDomainUpdateToOneWithWhereWithoutDomainInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegisteredDomainWhereUniqueInputSchema } from './RegisteredDomainWhereUniqueInputSchema';
import { RegisteredDomainCreateWithoutProjectInputSchema } from './RegisteredDomainCreateWithoutProjectInputSchema';
import { RegisteredDomainUncheckedCreateWithoutProjectInputSchema } from './RegisteredDomainUncheckedCreateWithoutProjectInputSchema';

export const RegisteredDomainCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.RegisteredDomainCreateOrConnectWithoutProjectInput> = z.object({
  where: z.lazy(() => RegisteredDomainWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RegisteredDomainCreateWithoutProjectInputSchema),z.lazy(() => RegisteredDomainUncheckedCreateWithoutProjectInputSchema) ]),
}).strict();

export default RegisteredDomainCreateOrConnectWithoutProjectInputSchema;

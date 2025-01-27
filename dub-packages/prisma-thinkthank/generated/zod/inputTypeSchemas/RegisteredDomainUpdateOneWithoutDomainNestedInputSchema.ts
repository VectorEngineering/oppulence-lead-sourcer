import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RegisteredDomainCreateWithoutDomainInputSchema } from './RegisteredDomainCreateWithoutDomainInputSchema';
import { RegisteredDomainUncheckedCreateWithoutDomainInputSchema } from './RegisteredDomainUncheckedCreateWithoutDomainInputSchema';
import { RegisteredDomainCreateOrConnectWithoutDomainInputSchema } from './RegisteredDomainCreateOrConnectWithoutDomainInputSchema';
import { RegisteredDomainUpsertWithoutDomainInputSchema } from './RegisteredDomainUpsertWithoutDomainInputSchema';
import { RegisteredDomainWhereInputSchema } from './RegisteredDomainWhereInputSchema';
import { RegisteredDomainWhereUniqueInputSchema } from './RegisteredDomainWhereUniqueInputSchema';
import { RegisteredDomainUpdateToOneWithWhereWithoutDomainInputSchema } from './RegisteredDomainUpdateToOneWithWhereWithoutDomainInputSchema';
import { RegisteredDomainUpdateWithoutDomainInputSchema } from './RegisteredDomainUpdateWithoutDomainInputSchema';
import { RegisteredDomainUncheckedUpdateWithoutDomainInputSchema } from './RegisteredDomainUncheckedUpdateWithoutDomainInputSchema';

export const RegisteredDomainUpdateOneWithoutDomainNestedInputSchema: z.ZodType<Prisma.RegisteredDomainUpdateOneWithoutDomainNestedInput> = z.object({
  create: z.union([ z.lazy(() => RegisteredDomainCreateWithoutDomainInputSchema),z.lazy(() => RegisteredDomainUncheckedCreateWithoutDomainInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RegisteredDomainCreateOrConnectWithoutDomainInputSchema).optional(),
  upsert: z.lazy(() => RegisteredDomainUpsertWithoutDomainInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => RegisteredDomainWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => RegisteredDomainWhereInputSchema) ]).optional(),
  connect: z.lazy(() => RegisteredDomainWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RegisteredDomainUpdateToOneWithWhereWithoutDomainInputSchema),z.lazy(() => RegisteredDomainUpdateWithoutDomainInputSchema),z.lazy(() => RegisteredDomainUncheckedUpdateWithoutDomainInputSchema) ]).optional(),
}).strict();

export default RegisteredDomainUpdateOneWithoutDomainNestedInputSchema;

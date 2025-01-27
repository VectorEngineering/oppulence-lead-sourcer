import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutCustomerTagInputSchema } from './ProjectCreateWithoutCustomerTagInputSchema';
import { ProjectUncheckedCreateWithoutCustomerTagInputSchema } from './ProjectUncheckedCreateWithoutCustomerTagInputSchema';
import { ProjectCreateOrConnectWithoutCustomerTagInputSchema } from './ProjectCreateOrConnectWithoutCustomerTagInputSchema';
import { ProjectUpsertWithoutCustomerTagInputSchema } from './ProjectUpsertWithoutCustomerTagInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutCustomerTagInputSchema } from './ProjectUpdateToOneWithWhereWithoutCustomerTagInputSchema';
import { ProjectUpdateWithoutCustomerTagInputSchema } from './ProjectUpdateWithoutCustomerTagInputSchema';
import { ProjectUncheckedUpdateWithoutCustomerTagInputSchema } from './ProjectUncheckedUpdateWithoutCustomerTagInputSchema';

export const ProjectUpdateOneRequiredWithoutCustomerTagNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutCustomerTagNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutCustomerTagInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutCustomerTagInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutCustomerTagInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutCustomerTagInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutCustomerTagInputSchema),z.lazy(() => ProjectUpdateWithoutCustomerTagInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutCustomerTagInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutCustomerTagNestedInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutUtmTemplatesInputSchema } from './ProjectCreateWithoutUtmTemplatesInputSchema';
import { ProjectUncheckedCreateWithoutUtmTemplatesInputSchema } from './ProjectUncheckedCreateWithoutUtmTemplatesInputSchema';
import { ProjectCreateOrConnectWithoutUtmTemplatesInputSchema } from './ProjectCreateOrConnectWithoutUtmTemplatesInputSchema';
import { ProjectUpsertWithoutUtmTemplatesInputSchema } from './ProjectUpsertWithoutUtmTemplatesInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutUtmTemplatesInputSchema } from './ProjectUpdateToOneWithWhereWithoutUtmTemplatesInputSchema';
import { ProjectUpdateWithoutUtmTemplatesInputSchema } from './ProjectUpdateWithoutUtmTemplatesInputSchema';
import { ProjectUncheckedUpdateWithoutUtmTemplatesInputSchema } from './ProjectUncheckedUpdateWithoutUtmTemplatesInputSchema';

export const ProjectUpdateOneWithoutUtmTemplatesNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneWithoutUtmTemplatesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutUtmTemplatesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutUtmTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutUtmTemplatesInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutUtmTemplatesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutUtmTemplatesInputSchema),z.lazy(() => ProjectUpdateWithoutUtmTemplatesInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutUtmTemplatesInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneWithoutUtmTemplatesNestedInputSchema;

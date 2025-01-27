import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthAppCreateWithoutOAuthCodesInputSchema } from './OAuthAppCreateWithoutOAuthCodesInputSchema';
import { OAuthAppUncheckedCreateWithoutOAuthCodesInputSchema } from './OAuthAppUncheckedCreateWithoutOAuthCodesInputSchema';
import { OAuthAppCreateOrConnectWithoutOAuthCodesInputSchema } from './OAuthAppCreateOrConnectWithoutOAuthCodesInputSchema';
import { OAuthAppWhereUniqueInputSchema } from './OAuthAppWhereUniqueInputSchema';

export const OAuthAppCreateNestedOneWithoutOAuthCodesInputSchema: z.ZodType<Prisma.OAuthAppCreateNestedOneWithoutOAuthCodesInput> = z.object({
  create: z.union([ z.lazy(() => OAuthAppCreateWithoutOAuthCodesInputSchema),z.lazy(() => OAuthAppUncheckedCreateWithoutOAuthCodesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OAuthAppCreateOrConnectWithoutOAuthCodesInputSchema).optional(),
  connect: z.lazy(() => OAuthAppWhereUniqueInputSchema).optional()
}).strict();

export default OAuthAppCreateNestedOneWithoutOAuthCodesInputSchema;

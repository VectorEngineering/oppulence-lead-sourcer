import { z } from 'zod';

/////////////////////////////////////////
// REGISTERED DOMAIN SCHEMA
/////////////////////////////////////////

export const RegisteredDomainSchema = z.object({
  id: z.string().cuid(),
  slug: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  expiresAt: z.coerce.date(),
  projectId: z.string(),
  domainId: z.string().nullish(),
})

export type RegisteredDomain = z.infer<typeof RegisteredDomainSchema>

/////////////////////////////////////////
// REGISTERED DOMAIN OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const RegisteredDomainOptionalDefaultsSchema = RegisteredDomainSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type RegisteredDomainOptionalDefaults = z.infer<typeof RegisteredDomainOptionalDefaultsSchema>

export default RegisteredDomainSchema;

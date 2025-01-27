import { z } from 'zod';

export const ProjectInviteScalarFieldEnumSchema = z.enum(['email','expires','projectId','role','createdAt']);

export default ProjectInviteScalarFieldEnumSchema;

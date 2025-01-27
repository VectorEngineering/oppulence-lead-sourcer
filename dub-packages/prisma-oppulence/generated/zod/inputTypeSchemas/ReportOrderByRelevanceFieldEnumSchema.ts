import { z } from 'zod';

export const ReportOrderByRelevanceFieldEnumSchema = z.enum(['id','name','description','timeZone','fileUrl','currency','language','template','visibility','password','shareUrl','shortLink','lastError','createdBy','projectId']);

export default ReportOrderByRelevanceFieldEnumSchema;

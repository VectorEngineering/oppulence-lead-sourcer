import FinancialEngine from '@solomon-ai/financial-engine-sdk'
import { BusinessConfig as platform } from '@dub/platform-config'

export const financialEngineClient = new FinancialEngine({
    baseURL: process.env.NODE_ENV === 'production' ? platform.financialEngine.baseUrlProd : platform.financialEngine.baseUrlDev,
    defaultHeaders: {
        'x-api-key': platform.financialEngine.bearerToken,
        Authorization: `Bearer ${platform.financialEngine.bearerToken}`
    }
})

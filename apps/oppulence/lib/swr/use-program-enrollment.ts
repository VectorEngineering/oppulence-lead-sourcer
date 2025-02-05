import { fetcher } from '@dub/utils'
import { useSession } from 'next-auth/react'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import { ProgramEnrollmentProps } from '../types'

export default function useProgramEnrollment() {
  const { data: session, status } = useSession()
  const partnerId = session?.user?.['defaultPartnerId']
  const { programSlug } = useParams()

  const {
    data: programEnrollment,
    error,
    isLoading,
  } = useSWR<ProgramEnrollmentProps>(
    partnerId && programSlug ? `/api/partners/${partnerId}/programs/${programSlug}` : undefined,
    fetcher,
    {
      dedupingInterval: 60000,
    }
  )

  return {
    programEnrollment,
    error,
    loading: status === 'loading' || isLoading,
  }
}

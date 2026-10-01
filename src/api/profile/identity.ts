/** Author: Charlie */

import { API_PREFIX } from '@/constants/api'
import { http } from '@/utils'

export function fetchProfileIdentityStatus() {
  return http.get<any>(`${API_PREFIX}/profile/identity/status`)
}

export function fetchProfileIdentityCaseOptions() {
  return http.get<any>(`${API_PREFIX}/profile/identity/case/options`)
}

export function fetchProfileIdentityCaseSubmit(data: {
  business_type?: string
  document_type: string
  real_name: string
  document_no: string
  attachment_ids?: string[]
  applicant_contact?: string | null
}) {
  return http.post<any>(`${API_PREFIX}/profile/identity/case/submit`, data)
}

export function fetchProfileIdentityCaseInitThirdParty(data: {
  business_type?: string
  document_type: string
  real_name: string
  document_no: string
  provider?: string | null
}) {
  return http.post<any>(`${API_PREFIX}/profile/identity/case/init-third-party`, data)
}

export function fetchProfileIdentityCaseMyPage(params?: { current?: number; size?: number }) {
  return http.get<any>(`${API_PREFIX}/profile/identity/case/my-page`, { params })
}

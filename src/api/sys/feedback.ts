/** Author: Charlie */

import { API_PREFIX } from '@/constants/api'
import { http } from '@/utils'

const prefix = `${API_PREFIX}/sys/feedback`

export function fetchSysFeedbackSubmit(data: {
  title: string
  content: string
  category: string
  contact?: string | null
  attach_object_names?: string[]
}) {
  return http.post<any>(`${prefix}/submit`, data)
}

export function fetchSysFeedbackMyPage(params?: { current?: number; size?: number }) {
  return http.get<any>(`${prefix}/my-page`, { params })
}

export function fetchSysFeedbackMyDetail(id: string) {
  return http.get<any>(`${prefix}/my-detail`, { params: { id } })
}

/** Author: Charlie */

import { API_PREFIX } from '@/constants/api'
import { http } from '@/utils'

const prefix = `${API_PREFIX}/sys/notice`

export function fetchSysNoticeMyPage(params?: { current?: number; size?: number; kind?: string }) {
  return http.get<any>(`${prefix}/my-page`, { params })
}

export function fetchSysNoticeMyDetail(id: string) {
  return http.get<any>(`${prefix}/my-detail`, { params: { id } })
}

export function fetchSysNoticeUnreadCount() {
  return http.get<any>(`${prefix}/unread-count`)
}

export function fetchSysNoticeRead(data: { ids: string[] }) {
  return http.post<any>(`${prefix}/read`, data)
}

export function fetchSysNoticeReadAll() {
  return http.post<any>(`${prefix}/read-all`)
}

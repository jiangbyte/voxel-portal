/** Author: Charlie */

import { API_PREFIX } from '@/constants/api'
import { http } from '@/utils'

const prefix = `${API_PREFIX}/sys/file`

export function fetchSysFileUpload(file: File) {
  const data = new FormData()
  data.append('file', file)
  return http.post<any>(`${prefix}/upload`, data)
}

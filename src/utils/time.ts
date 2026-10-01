/** Author: Charlie */

/** 后端已格式化为 yyyy-MM-dd HH:mm:ss，前端仅空值兜底，不再本地换算。 */
export function formatDateTime(value: unknown, fallback = '-') {
  if (value === undefined || value === null || value === '') {
    return fallback
  }
  const text = String(value).trim()
  return text || fallback
}

export function formatDateMinute(value: unknown, fallback = '-') {
  const full = formatDateTime(value, fallback)
  if (full === fallback || full.length < 16) {
    return full
  }
  return full.slice(0, 16)
}

/** API 时间原样进表单；空则 null */
export function toFormDateTime(value: unknown): string | null {
  const text = formatDateTime(value, '')
  return text || null
}

/** 表单时间原样提交后端（yyyy-MM-dd HH:mm:ss），不做时区转换。 */
export function toApiDateTime(value: unknown): string | null {
  if (value === undefined || value === null || value === '') return null
  const text = String(value).trim()
  return text || null
}

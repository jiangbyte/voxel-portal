/** Author: Charlie */

import { API_PREFIX } from '@/constants/api'
import { http } from '@/utils'

const prefix = `${API_PREFIX}`

export function fetchAuthSessionCaptcha() {
  return http.get<any>(`${prefix}/auth/session/captcha`, { public: true })
}

export function fetchAuthSessionPasswordKey() {
  return http.get<any>(`${prefix}/auth/session/password-key`, { public: true })
}

export function fetchAuthSessionLogin(data: any) {
  return http.post<any>(`${prefix}/auth/session/login`, data, { public: true })
}

export function fetchAuthPublicAuthOptions() {
  return http.get<any>(`${prefix}/auth/public/auth-options`, { public: true })
}

export function fetchAuthSessionSendLoginCode(data: any) {
  return http.post<any>(`${prefix}/auth/session/send-login-code`, data, { public: true })
}

export function fetchAuthSessionRegisterSendCode(data: any) {
  return http.post<any>(`${prefix}/auth/session/register/send-code`, data, { public: true })
}

export function fetchProfileAccountPasswordSendCode() {
  return http.post<any>(`${prefix}/profile/account/password/send-code`)
}

export function fetchProfileAccountEmailSendCode(data: { target: string }) {
  return http.post<any>(`${prefix}/profile/account/email/send-code`, data)
}

export function fetchProfileAccountPhoneSendCode(data: { target: string }) {
  return http.post<any>(`${prefix}/profile/account/phone/send-code`, data)
}

export function fetchAuthSessionRegister(data: any) {
  return http.post<any>(`${prefix}/auth/session/register`, data, { public: true })
}

export function fetchAuthSessionForgotPassword(data: any) {
  return http.post<any>(`${prefix}/auth/session/forgot-password`, data, { public: true })
}

export function fetchAuthSessionResetPassword(data: any) {
  return http.post<any>(`${prefix}/auth/session/reset-password`, data, { public: true })
}

/** probe：首访/会话探测用，401 不弹窗、不跳登录。 */
export function fetchAuthSessionMe(options?: { probe?: boolean }) {
  return http.get<any>(
    `${prefix}/auth/session/me`,
    options?.probe ? { public: true, skipErrorMessage: true } : undefined,
  )
}

export function fetchAuthSessionLogout() {
  // 登出本身失败（含已无 cookie）不应再走全局 401 提示
  return http.post<any>(`${prefix}/auth/session/logout`, undefined, {
    public: true,
    skipErrorMessage: true,
  })
}

/** 注销当前登录账号（软注销 + 清理关联数据）。 */
export function fetchAuthSessionCancel(data?: { cancel_reason?: string | null }) {
  return http.post<any>(`${prefix}/auth/session/cancel`, data ?? {})
}

export function fetchProfileAccountUpdate(data: any) {
  return http.post<any>(`${prefix}/profile/account/update`, data)
}

export function fetchProfileAccountPasswordUpdate(data: any) {
  return http.post<any>(`${prefix}/profile/account/password/update`, data)
}

export function fetchProfileAccountPhoneUpdate(data: any) {
  return http.post<any>(`${prefix}/profile/account/phone/update`, data)
}

export function fetchProfileAccountEmailUpdate(data: any) {
  return http.post<any>(`${prefix}/profile/account/email/update`, data)
}

export function fetchProfileAccountAvatarUpload(file: File) {
  const formData = new FormData()
  formData.append('file', file)
  return http.post<any>(`${prefix}/profile/account/avatar/upload`, formData)
}

export function fetchSysSpaceDetail(accountId: string) {
  return http.get<any>(`${prefix}/sys/space/detail`, {
    public: true,
    params: { account_id: accountId },
  })
}

export function fetchAuthOauthProviderAuthorize(provider: string, params?: { intent?: string; redirect?: string }) {
  return http.get<any>(`${prefix}/auth/oauth/${provider}/authorize`, {
    public: true,
    params: {
      intent: params?.intent || 'LOGIN',
      ...(params?.redirect ? { redirect: params.redirect } : {}),
    },
  })
}

export function fetchAuthOauthExchange(data: { code: string }) {
  return http.post<any>(`${prefix}/auth/oauth/exchange`, data, {
    public: true,
  })
}

export function fetchAuthOauthBindings() {
  return http.get<any>(`${prefix}/auth/oauth/bindings`)
}

export function fetchAuthOauthProviderBindAuthorize(provider: string) {
  return http.post<any>(`${prefix}/auth/oauth/${provider}/bind/authorize`)
}

export function fetchAuthOauthProviderUnbind(provider: string) {
  return http.post<any>(`${prefix}/auth/oauth/${provider}/unbind`)
}

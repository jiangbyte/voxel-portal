/** Author: Charlie */

import { fetchAuthOauthBindings, fetchAuthOauthExchange, fetchAuthOauthProviderAuthorize, fetchAuthOauthProviderBindAuthorize, fetchAuthOauthProviderUnbind, fetchAuthPublicAuthOptions, fetchAuthSessionCancel, fetchAuthSessionCaptcha, fetchAuthSessionForgotPassword, fetchAuthSessionLogin, fetchAuthSessionLogout, fetchAuthSessionMe, fetchAuthSessionPasswordKey, fetchAuthSessionRegister, fetchAuthSessionRegisterSendCode, fetchAuthSessionResetPassword, fetchAuthSessionSendLoginCode, fetchProfileAccountAvatarUpload, fetchProfileAccountEmailSendCode, fetchProfileAccountEmailUpdate, fetchProfileAccountPasswordSendCode, fetchProfileAccountPasswordUpdate, fetchProfileAccountPhoneSendCode, fetchProfileAccountPhoneUpdate, fetchProfileAccountUpdate, fetchSysSpaceDetail } from '@/api/auth'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { wireBool } from '@/utils/wire'
import { AuthLoginForm } from './AuthLoginForm'
import { PortalAuthShell } from './PortalAuthShell'

export function LoginPage() {
  const [registerEnabled, setRegisterEnabled] = useState(false)

  useEffect(() => {
    void {
  captcha: fetchAuthSessionCaptcha,
  passwordKey: fetchAuthSessionPasswordKey,
  login: fetchAuthSessionLogin,
  authOptions: fetchAuthPublicAuthOptions,
  sendLoginCode: fetchAuthSessionSendLoginCode,
  sendRegisterCode: fetchAuthSessionRegisterSendCode,
  sendPasswordChangeCode: fetchProfileAccountPasswordSendCode,
  sendBindEmailCode: fetchProfileAccountEmailSendCode,
  sendBindPhoneCode: fetchProfileAccountPhoneSendCode,
  register: fetchAuthSessionRegister,
  forgotPassword: fetchAuthSessionForgotPassword,
  resetPassword: fetchAuthSessionResetPassword,
  me: fetchAuthSessionMe,
  logout: fetchAuthSessionLogout,
  cancelAccount: fetchAuthSessionCancel,
  updateProfile: fetchProfileAccountUpdate,
  updatePassword: fetchProfileAccountPasswordUpdate,
  updatePhone: fetchProfileAccountPhoneUpdate,
  updateEmail: fetchProfileAccountEmailUpdate,
  uploadAvatar: fetchProfileAccountAvatarUpload,
  getPublicSpace: fetchSysSpaceDetail,
  oauthAuthorize: fetchAuthOauthProviderAuthorize,
  oauthExchange: fetchAuthOauthExchange,
  oauthBindings: fetchAuthOauthBindings,
  oauthBindAuthorize: fetchAuthOauthProviderBindAuthorize,
  oauthUnbind: fetchAuthOauthProviderUnbind,
}
      .authOptions()
      .then((res) => {
        setRegisterEnabled(wireBool(res?.data?.register_enabled ?? false))
      })
      .catch(() => undefined)
  }, [])

  return (
    <PortalAuthShell
      title="欢迎登录"
      brandHeadline="登录门户，继续你的工作"
      brandLead="个人中心、公告与反馈，开箱即用。"
      footerNote="登录即表示同意相关服务条款与隐私政策"
      headerExtra={
        registerEnabled ? (
          <Link to="/auth/register" className="linkish">
            没有账号？去注册
          </Link>
        ) : null
      }
    >
      <AuthLoginForm />
    </PortalAuthShell>
  )
}

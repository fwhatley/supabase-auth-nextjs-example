'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from './database.types'

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>()

  const getRedirectUrl = () => {
    if (window) {
      return window.location.protocol + "//" + window.location.host + "/auth/callback"
    }
    return 'https://supabase-auth-nextjs-example-ykzk.vercel.app/auth/callback'
  }

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      showLinks={false}
      providers={[]}
      // redirectTo={getRedirectUrl()}
    />
  )
}
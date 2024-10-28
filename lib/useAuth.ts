'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = getCookie('token')
      if (token) {
        const userData = await fetchUser(token)
        if (userData) setUser(userData)
      }
      setLoading(false)
    }
    loadUserFromCookies()
  }, [])

  const login = async (email, password) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    if (response.ok) {
      const userData = await response.json()
      setUser(userData)
      return true
    }
    return false
  }

  const logout = () => {
    deleteCookie('token')
    setUser(null)
    router.push('/login')
  }

  return { user, login, logout, loading }
}

// You'll need to implement these functions:
function getCookie(name: string): string | null {
  // Implementation here
}

function deleteCookie(name: string) {
  // Implementation here
}

async function fetchUser(token: string) {
  // Implementation here
}
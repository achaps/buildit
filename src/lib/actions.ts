import { supabase } from './supabase'

export async function saveEmailToWaitlist(email: string, type: 'builder' | 'founder') {
  try {
    const { error } = await supabase
      .from('waitlist')
      .insert([
        { 
          email,
          type,
          created_at: new Date().toISOString()
        }
      ])

    if (error) {
      // Si l'email existe déjà
      if (error.code === '23505') {
        return { success: false, error: 'This email is already registered' }
      }
      throw error
    }
    return { success: true }
  } catch (error) {
    console.error('Error saving email:', error)
    return { success: false, error: 'An error occurred. Please try again.' }
  }
} 
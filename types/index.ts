export interface Developer {
  id: number
  name: string
  career: string
  company: string
  role: string
  profile_photo: string
  email: string
  website?: string
  github?: string
  twitter?: string
  linkedin?: string
}

export interface Company {
  id: number
  company_name: string
  type: string
  logo: string
  website?: string
  location: string
  email: string
  twitter?: string
  linkedin?: string
}

export interface Community {
  id: number
  community_name: string
  focus: string
  logo: string
  website?: string
  email: string
  twitter?: string
}

import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const userId = searchParams.get('userId')

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
  }

  try {
    // Fetch user info from Roblox API
    const userResponse = await fetch(`https://users.roblox.com/v1/users/${userId}`)
    
    if (!userResponse.ok) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    
    const userData = await userResponse.json()
    
    // Fetch user avatar thumbnail
    const thumbnailResponse = await fetch(
      `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=150x150&format=Png&isCircular=false`
    )
    
    const thumbnailData = await thumbnailResponse.json()
    const avatarUrl = thumbnailData.data?.[0]?.imageUrl || null

    return NextResponse.json({
      id: userData.id,
      name: userData.name,
      displayName: userData.displayName,
      avatarUrl
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 })
  }
}

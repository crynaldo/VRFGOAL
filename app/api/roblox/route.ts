import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const userInput = searchParams.get('userId')

  if (!userInput) {
    return NextResponse.json({ error: 'User ID or username is required' }, { status: 400 })
  }

  try {
    let userId = userInput
    
    // Check if input is a username (not a number)
    if (isNaN(Number(userInput))) {
      // Search for user by username using the usernames API
      const usernameResponse = await fetch('https://users.roblox.com/v1/usernames/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usernames: [userInput],
          excludeBannedUsers: false
        })
      })
      
      if (!usernameResponse.ok) {
        return NextResponse.json({ error: 'Failed to search for user' }, { status: 404 })
      }
      
      const usernameData = await usernameResponse.json()
      
      if (!usernameData.data || usernameData.data.length === 0) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
      }
      
      userId = usernameData.data[0].id.toString()
    }

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

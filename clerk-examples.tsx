// Example of using Clerk authentication in your components

import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";

export function AuthExample() {
  const { user } = useUser();

  return (
    <div>
      {/* Content only visible to signed-in users */}
      <SignedIn>
        <h2>Welcome, {user?.firstName}!</h2>
        <p>You are signed in as {user?.emailAddresses[0]?.emailAddress}</p>
        {/* Protected content goes here */}
      </SignedIn>

      {/* Content only visible to signed-out users */}
      <SignedOut>
        <h2>Please sign in</h2>
        <p>Sign in to access exclusive features!</p>
      </SignedOut>
    </div>
  );
}

// Server-side authentication example (for app directory)
import { auth } from "@clerk/nextjs/server";

export default async function ServerComponent() {
  const { userId } = await auth();

  if (!userId) {
    return <div>Please sign in to view this content</div>;
  }

  return (
    <div>
      <h1>Protected server component</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}

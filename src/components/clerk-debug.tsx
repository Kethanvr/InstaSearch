"use client";

import { useAuth, useUser } from "@clerk/nextjs";

export function ClerkDebug() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();

  if (!isLoaded) {
    return <div className="text-sm text-muted-foreground">Loading auth...</div>;
  }

  return (
    <div className="p-4 border rounded-lg bg-muted/50">
      <h3 className="font-semibold mb-2">Clerk Debug Info</h3>
      <div className="space-y-1 text-sm">
        <p>Auth loaded: {isLoaded ? "✅" : "❌"}</p>
        <p>Signed in: {isSignedIn ? "✅" : "❌"}</p>
        {user && (
          <p>User: {user.firstName} {user.lastName} ({user.emailAddresses[0]?.emailAddress})</p>
        )}
      </div>
    </div>
  );
}

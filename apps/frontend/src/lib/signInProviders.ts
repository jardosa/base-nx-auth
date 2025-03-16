import { authClient } from "./auth-client"

export const signInWithGoogle = async (callbackURL: string) => {
  const data = await authClient.signIn.social({
    provider: "google",
    callbackURL,
  })
}


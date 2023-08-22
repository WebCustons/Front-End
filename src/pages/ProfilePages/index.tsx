import { useParams } from "react-router-dom"
import { ProfileViewOwner } from "./ProfileViewOwner"
import { ProfileViewVisitor } from "./ProfileViewVisitor"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"
import { ProfileViewAdmin } from "./ProfileViewAdmin"

export const ProfilePages = () => {
  const { id } = useParams()
  const { getAnnounce, getUser, user } = useUser()

  useEffect(() => {
    getAnnounce(id!)
    getUser()
  }, [])

  if (user?.id?.toString() == id) {
    return <ProfileViewOwner />
  } else if (user?.type_user == "admin") {
    return <ProfileViewAdmin />
  } else {
    return <ProfileViewVisitor />
  }
}

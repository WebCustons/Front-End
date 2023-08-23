import { useParams } from "react-router-dom"
import { ProfileViewOwner } from "./ProfileViewOwner"
import { ProfileViewVisitor } from "./ProfileViewVisitor"
import { useEffect } from "react"
import { ProfileViewAdmin } from "./ProfileViewAdmin"
import { useUser } from './../../hooks/useProduct';

export const ProfilePages = () => {
  const { id } = useParams()
  const { getAnnounceUser, getUser, user } = useUser()

  useEffect(() => {
    getAnnounceUser(id!)
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

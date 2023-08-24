import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useUser } from "./../../hooks/useProduct"
import { Profile } from "./Profile"

export const ProfilePages = () => {
  const { id } = useParams()
  const { getAnnounceUser, getUser, user } = useUser()

  useEffect(() => {
    getAnnounceUser(id!)
    getUser()
  }, [])

  if (user?.id?.toString() == id) {
    return <Profile typeView="owner" />
  } else if (user?.type_user == "admin") {
    return <Profile typeView="admin" />
  } else {
    return <Profile typeView={null} />
  }
}

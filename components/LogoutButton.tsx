"use client"

import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { signOut } from "next-auth/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function LogoutButton(){
  return(

  <button onClick={()=>signOut()}
 

  className="bg-gray-300 py-2 px-4 ml-2 rounded-md inline-flex gap-2 items-center">
      <FontAwesomeIcon icon={faArrowRightFromBracket}/>
  </button>)

}

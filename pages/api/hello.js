import { getSession } from "next-auth/react"

export default async function handler(req, res) {

    const session = await getSession({req})
    console.log(session)
    if(!session) return res.status(403).send('Forbbiden')
    res.status(200).json({ name: 'John Doe' })
  }
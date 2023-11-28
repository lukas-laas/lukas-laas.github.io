import { ReactNode } from "react"

type Props = {
  header: ReactNode
  content: item[]
}
type item = {
  sub_header: ReactNode
  body: ReactNode
}

export const Container = (Props: Props) => {
  return (
    <div id="workExperience" className="Container BoxShadow">
      <div className="title">
        <h1>{Props.header}</h1>
      </div>
      {Props.content.map((item, i) => (
        <div key={i} className="divider">
          <h2>{item.sub_header}</h2>
          {item.body}
        </div>
      ))}
    </div>
  )
}

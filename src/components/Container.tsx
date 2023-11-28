import { ReactNode } from "react"
// import Slider from "@madzadev/image-slider"

// const images = [
//   { url: "https://picsum.photos/seed/a/1600/900" },
//   { url: "https://picsum.photos/seed/b/1920/1080" },
//   { url: "https://picsum.photos/seed/c/1366/768" },
// ]

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
          <p>{item.body}</p>
          {/* <Slider imageList={images} width={1000} height={300} /> */}
        </div>
      ))}
    </div>
  )
}

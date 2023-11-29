import { ReactNode } from "react"
import Slider from "@madzadev/image-slider"
const images = [
  { url: "/images/image (1).png" },
  { url: "/images/image (2).png" },
  { url: "/images/image (3).png" },
  { url: "/images/image (4).png" },
  { url: "/images/image (5).png" },
]

type Props = {
  header: ReactNode
  content: item[]
}
type item = {
  sub_header: ReactNode
  body: ReactNode
  imageSlider?: boolean
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
          {item.imageSlider ? (
            <>
              <Slider imageList={images} width={1000} height={600} />
            </>
          ) : null}
        </div>
      ))}
    </div>
  )
}

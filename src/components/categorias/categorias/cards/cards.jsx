import { BorderDecoration, CardCategory } from "./style"

export const Cards = ({img,title,category}) => {
  return (
    <CardCategory
    whileTap={{scale: 0.95}}
    >
      
        <img src={img} alt={category} />
        <h2>{title}</h2>
        <BorderDecoration/>
    </CardCategory>
  )
}

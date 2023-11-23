import './index.css'

const CardItem = props => {
  const {cardList} = props
  const {title, description, imgUrl, className} = cardList

  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
      <p className="paragraph">{description}</p>
      <img src={imgUrl} alt={title} className="image" />
    </li>
  )
}

export default CardItem

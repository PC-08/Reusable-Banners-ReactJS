// Write your code here.

import './index.css'

const BannerCardItem = props => {
  const {card} = props
  const {headerText, description, className} = card

  return (
    <li className={className}>
      <div>
        <h1 className="head">{headerText}</h1>
        <p className="para">{description}</p>
        <button type="button" className="btn">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem

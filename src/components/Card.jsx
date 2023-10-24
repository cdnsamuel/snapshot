const Card = ({ src, name, category }) => {
  return (
    <>
      <img
        className="card"
        src={`../../public/images/${src}`}
        alt={`${name} - ${category}`}
      />
    </>
  )
}
export default Card

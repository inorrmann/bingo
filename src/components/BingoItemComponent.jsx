export default function BingoItemComponent(props) {
  const { backgroundColor, id, icon, description, opacity, textColor } = props;

  return(
    <div className={`${backgroundColor} p-1`}>
      <div className={`${opacity} flex justify-center`}>
        <img
          src={icon}
          alt={description}
          className="h-14"
        />
      </div>
      <div className={`${textColor} text-center`}>
        {id}. {description}
      </div>
    </div>
  )
}

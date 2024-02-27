export default function BingoItemComponent(props) {
  const { id, icon, description, opacity, smallText, textColor } = props;

  return(
    <div className='p-1'>
      <div className={`${opacity} flex justify-center`}>
        <img
          src={icon}
          alt={description}
          className="h-14"
        />
      </div>
      <div className={`${textColor} text-center ${smallText ? 'text-sm' : ''}`}>
        {id}. {description}
      </div>
    </div>
  )
}

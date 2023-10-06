import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, selectActiveThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const selectedClassName = isActive ? 'activeThumbnail' : 'normalThumbnail'

  const onClickThumbnail = () => {
    selectActiveThumbnail(id)
  }
  return (
    <li className="thumbnail-img">
      <button type="button" className="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={selectedClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem

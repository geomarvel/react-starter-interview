
const DetailTile = ({ header, content }) => {
    return (
        <div className="bg-white flex-1 p-2 rounded rounded-2">
            <div className=""> { header } </div>
            <div className="font-bold text-[20px]">{content}</div>
        </div>
    )
}

export default DetailTile;
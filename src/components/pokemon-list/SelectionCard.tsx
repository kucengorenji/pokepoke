type selectionCardTypes = {
    image: string,
    name: string,
    element: string,
}

const SelectionCard = ({image, name, element}: selectionCardTypes) => {

    return (
        <div>
                <img src={image} alt="" />
                <p>{name}</p>
                <p>{element}</p>
        </div>
    )
}

export default SelectionCard;
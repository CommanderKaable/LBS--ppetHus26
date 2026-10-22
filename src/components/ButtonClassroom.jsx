const ButtonClassroom = ({ id, style, onClick, children, color }) => {
    return (
        <button
            id={id}
            type="button"
            style={style}
            onClick={onClick}
            className={`classroom-map-button${color ? ` map-btn-${color}` : ""}`}
        >
            {children} 
        </button>
    )
}

export default ButtonClassroom
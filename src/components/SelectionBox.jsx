import './style/SelectionBox.css'

export function SelectionBox({text}) {
    return(
        <div className="selection-box-container">
            <button className="slection-btn">
                {text}
            </button>
        </div>
    )
}
export default function ColorBlock(props) {
    return <div style={{backgroundColor: props.color}}>
        <h2>{props.color}</h2>
    </div>
}
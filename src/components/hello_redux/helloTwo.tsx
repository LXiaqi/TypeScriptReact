export interface Props {
    name:string;
    enthusiasmLevel?:number;
    onAdd?: () => void;
    onShift?: () => void;
}
function HelloTwo({name,enthusiasmLevel = 1, onAdd, onShift}: Props) {
    if(enthusiasmLevel <= 0) {
        alert('不能再小了， 宝贝！')
    }
    return(
        <div className="hello">
            <div className="greeting">
                Happy {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <button onClick={onAdd}>-</button>
            <button onClick={onShift}>+</button>
        </div>
    )
}
function getExclamationMarks(numChars:number) {
    return Array(numChars + 1).join('！');
}
export default HelloTwo;
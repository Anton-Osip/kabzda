type OnOffProps = {
    value: boolean
}

export const OnOff = ({value}: OnOffProps) => {
    return (
        <div style = {{display: 'flex', gap: '25px', marginBottom: '25px'}}>
            {value && <button style = {{background: 'green'}}>On</button>}
            {!value && <button >On</button>}
            {!value && <button style = {{background: 'red'}}>Off</button>}
            {value && <button >Off</button>}
            {value && <div style = {{width: '20px', height: '20px', borderRadius: '50%',background: 'green'}}></div>}
            {!value && <div style = {{width: '20px', height: '20px', borderRadius: '50%',background: 'red'}}></div>}
        </div>
    )
}
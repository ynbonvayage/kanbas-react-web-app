import './index.css';

function Classes() {
    const color = 'blue';
    const dangerous = true;
    return (
        <div>
            <h2>Classes</h2>
            <div className={`wd-bg-${dangerous ? 'red' : 'green'} wd-fg-black wd-padding-10px`}>
                Dangerous Background
            </div>
            <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
                Dynamic Blue Background
            </div>
        </div>
    )
}

export default Classes;
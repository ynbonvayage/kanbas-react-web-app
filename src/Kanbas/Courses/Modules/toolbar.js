import "./toolbar.css"
function Toolbar() {
    return (
        <div>
            <div className="toolbar" style={{width: '600px'}}>
                <button className="btn">Collapse All</button>
                <button className="btn">View Progress</button>
                <div className="dropdown">
                    <button className="btn">Publish All <span className="arrow">▼</span></button>
                </div>
                <button className="btn btn-accent">+ Module</button>
                <div className="menu">:</div>
            </div>
        </div>
    );
}
export default Toolbar;
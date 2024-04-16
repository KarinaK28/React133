import './app-filter.css';
const AppFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-light"
                    type='button'>
                        All employes
            </button>
            <button className="btn btn-outline-light"
                    type='button'>
                        For a salary encrease
            </button>
            <button className="btn btn-outline-light"
                    type='button'>
                        Salary more than 1000$
            </button>
        </div>
    );
}

export default AppFilter;
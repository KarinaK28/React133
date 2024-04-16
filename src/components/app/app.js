import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import './app.css';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {

    const data = [
        {name: 'Oleg3', surname: 'Ivano444s22v', salary: 1440, increase: true, like: true, id: 1 },
        {name: 'Petr4', surname: 'Ivanov', salary: 1040, increase: true, like: false, id: 2 },
        {name: 'Max4', surname: 'Petrov', salary: 3100, increase: false, like: false, id: 3 }
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data} />
            <EmployeesAddForm/>
        </div>


    );
}

export default App;
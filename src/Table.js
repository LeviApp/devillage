import logo from './logo.svg';
import './App.css';
import './Table.scss';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

import 'primereact/resources/themes/saga-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import React, {useState, useEffect} from 'react';

function Table() {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])
    const [currentPage, setcurrentPage] = useState(0)
    const [pageLimit, setpageLimit] = useState(10)


    
// const template1 = {
//     layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
//     'PrevPageLink': (options) => {
//         return (
//             <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
//                 <span className="p-p-3">Previous</span>
//                 <Ripple />
//             </button>
//         )
//     },
//     'NextPageLink': (options) => {
//         return (
//             <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
//                 <span className="p-p-3">Next</span>
//                 <Ripple />
//             </button>
//         )
//     },
//     'PageLinks': (options) => {
//         if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
//             const className = classNames(options.className, { 'p-disabled': true });

//             return <span className={className} style={{ userSelect: 'none' }}>...</span>;
//         }

//         return (
//             <button type="button" className={options.className} onClick={options.onClick}>
//                 {options.page + 1}
//                 <Ripple />
//             </button>
//         )
//     },
//     'RowsPerPageDropdown': (options) => {
//         const dropdownOptions = [
//             { label: 10, value: 10 },
//             { label: 20, value: 20 },
//             { label: 50, value: 50 },
//             { label: 'All', value: options.totalRecords }
//         ];

//         return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} appendTo={document.body} />;
//     },
//     'CurrentPageReport': (options) => {
//         return (
//             <span className="p-mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
//                 Go to <InputText size="2" className="p-ml-1" value={currentPage} tooltip={pageInputTooltip}
//                     onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange}/>
//             </span>
//         )
//     }
// };

const imageBodyTemplate = (rowData) => {
    return <img src={rowData.picture} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
}
    useEffect(() => {
        fetch(`https://dummyapi.io/data/api/user?page=${currentPage}&limit=${pageLimit}`, {headers: { 
            'Content-Type': 'application/json',
            "app-id":'60c193c9f9fa411ce2bab96d'
          }})
        .then(response => {
            return response.json()
        }
            )
        .then(res => {
            setLoading(false)
            setUsers(res.data)
            console.log(res.data, 'this is the data', res)})
        .catch(err => console.error(err));
    return () => {
        console.log('unmounted')
    }
    // Levi Appenfelder 05/15/2021 - an empty array causes useEffect to run only once, an array with values in it will allow the runEffect to run only when those values are changed.
    }, [])

  return (
    <div className="App">
        <DataTable value={users} reorderableColumns >
            <Column field='picture' body={imageBodyTemplate}></Column>
            <Column field='title' header='Title' sortable filter></Column>
			<Column field='firstName' header='First Name' sortable filter></Column>
			<Column field='lastName' header='Last Name' sortable filter></Column>
			<Column field='email' header='Email' sortable filter></Column>
            <Column field='id' header='Id' sortable filter></Column>
        </DataTable>
    </div>
  );
}

export default Table;

// email: "heinz-georg.fiedler@example.com"
// firstName: "Heinz-Georg"
// id: "0F8JIqi4zwvb77FGz6Wt"
// lastName: "Fiedler"
// picture: "https://randomuser.me/api/portraits/men/81.jpg"
// title: "mr"

// email: "evan.carlson@example.com"
// firstName: "Evan"
// id: "7DbXNPWlNDR4QYVvFZjr"
// lastName: "Carlson"
// picture: "https://randomuser.me/api/portraits/men/80.jpg"
// title: "mr"
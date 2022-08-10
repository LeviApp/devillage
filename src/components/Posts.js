
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

import 'primereact/resources/themes/luna-amber/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import React, {useState, useEffect} from 'react';

function Posts() {

    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const [currentPage, setcurrentPage] = useState(0)
    const [pageLimit, setpageLimit] = useState(10)

    const imageBodyTemplate = (rowData) => {
        return <img src={rowData.picture} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
    }
        useEffect(() => {
            console.log('in the effect')
            fetch(`https://dummyapi.io/data/api/post?page=${currentPage}&limit=${pageLimit}`, {headers: { 
                'Content-Type': 'application/json',
                "app-id":'60c193c9f9fa411ce2bab96d'
              }})
            .then(response => {
                console.log(response, 'is the response')
                return response.json()
            }
                )
            .then(res => {
                console.log(res.data, 'this is the post data', res)})
            .catch(err => console.error(err));
        return () => {
            console.log('unmounted')
        }
        // Levi Appenfelder 05/15/2021 - an empty array causes useEffect to run only once, an array with values in it will allow the runEffect to run only when those values are changed.
        }, [])
    return (
        <div>
            <h1>Hell0</h1>
            {/* <DataTable value={posts} reorderableColumns >
                    <Column field='picture' body={imageBodyTemplate}></Column>
                    <Column field='title' header='Title' sortable filter></Column>
                    <Column field='firstName' header='First Name' sortable filter></Column>
                    <Column field='lastName' header='Last Name' sortable filter></Column>
                    <Column field='email' header='Email' sortable filter></Column>
                    <Column field='id' header='Id' sortable filter></Column>
            </DataTable> */}
        </div>
    )
}

export default Posts

// id: "VGyIwGVWeeurHv5bSZgx"
// image: "https://img.dummyapi.io/photo-1510414696678-2415ad8474aa.jpg"
// likes: 31
// link: null
// owner: {id: "t3k3dx7zDMAKjCEeXl9Q", title: "mr", picture: "https://randomuser.me/api/portraits/men/54.jpg", firstName: "Marius", email: "marius.larsen@example.com", …}
// publishDate: "2020-05-24T07:44:17.738Z"
// tags: (3) ["snow", "ice", "mountain"]
// text: "ice caves in the wild landscape photo of ice near gray cliff"
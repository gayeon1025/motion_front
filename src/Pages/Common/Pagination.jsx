import React, { Component } from 'react'
import '../../Css/common.css'
import '../Css/pagination.css'

class Pagination extends Component {
    render() {
        return (
            <div className={"paginationDiv"}>
                <ul className="pagination">
                    <li className="page-item">
                        &laquo;
                    </li>
                    <li className="page-item">1</li>
                    <li className="page-item">2</li>
                    <li className="page-item">3</li>
                    <li className="page-item">4</li>
                    <li className="page-item">5</li>
                    <li className="page-item">
                        &raquo;
                    </li>
                </ul>
            </div>
        )
    }
}

export default Pagination;
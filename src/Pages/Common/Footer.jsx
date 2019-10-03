import React, { Component } from 'react';
import '../../Css/common.css'
import '../Css/footer.css';

class Footer extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div id={"footer"} >
                <hr/>
                published by 201502136 김가연 ☺︎︎
            </div>
        )
    }
}

export default Footer;
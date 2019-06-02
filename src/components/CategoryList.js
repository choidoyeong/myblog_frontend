import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CategoryList.css';

class CategoryList extends Component {
    state = {
        categorys: []
    }

    componentWillMount() {
        axios.get('http://localhost:8000/categorys/').then((response) => {
            this.setState({
              categorys: response.data
            })
          })
    }

    render() {
        const { categorys } = this.state;

        const categorylist = categorys.map(({id, category_name}) => (
            <div id={id} key={id} className="categoryWrapper">
                <Link to={`/categorys/${category_name}`} className="category" >{category_name}</Link>
            </div>
        ))
        return (
            <div className='categoryMenu'>
                <div className="categorysWrapper">
                {categorylist}
                </div>
            </div>
        )
    }
}

export default CategoryList;
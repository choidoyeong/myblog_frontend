import React from 'react';
import './MainTemplate.css';

const MainTemplate = ({ children, header }) => {
    return (
        <div className="MainTemplate">
            <div className="header-area">
                { header }
            </div>
            <section className="posts-warpper">
                { children }
            </section>
        </div>
    );
};

export default MainTemplate;
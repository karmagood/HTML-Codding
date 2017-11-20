/**
 * Created by bogdan on 04.11.17.
 */
import React from 'react';

import '../aside.list/AsideList.Component'

// css styles
import './AsideList.Component.css'

// images
// import logo from '../../logo.svg';


class AsideList extends  React.Component{
    render(){
        const getImg = (item) =>{
            if(item.hasOwnProperty('icon'))
                return (<span className="AsideList__item-icon"><i className="material-icons">{item.icon}</i></span>);
            if(item.hasOwnProperty('img'))
                return (<img className="AsideList__item-img" src={item.img}/>)
        };
        const createItems = () =>{
            return this.props.data.list
                .map((item)=>{
                    return (<li className="AsideList__item">
                        {getImg(item)}
                        <span>{item.name}</span>
                    </li>);
                });
        };
        const  getHeader = (title) => {
            if(title){
                return(<a className="AsideList__header" href={title.href}>{title.text}</a>);
            }
        };

        return (
            <section className="AsideList__container">
                {getHeader(this.props.data.title)}
                <ul className="AsideList__list">{createItems()}</ul>
            </section>
            
        );
    }
}

export default AsideList;
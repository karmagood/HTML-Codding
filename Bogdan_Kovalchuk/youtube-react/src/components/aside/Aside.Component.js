/**
 * Created by bogdan on 04.11.17.
 */
import React from 'react';

import AsideList from "../aside.list/AsideList.Component";


// css styles
import './Aside.Component.css'

// images
// import logo from '../../logo.svg';


class Aside extends React.Component {
    render() {
        //TODO move lists to json or firebase
        let lists = [];
        lists.push({
            title: null,
            list: [{name: 'Главная', icon: 'home'}, {name: 'В тренде', icon: 'whatshot'}, {
                name: 'Подписки',
                icon: 'subscriptions'
            }]
        });
        lists.push({
            title: {text: 'Библиотека', href: ""}, list: [
                {name: 'История', icon: 'restore'},
                {name: 'Посмотреть позже', icon: 'schedule'},
                {name: 'Favorites', icon: 'playlist_play'},
                {name: 'Понравившиеся', icon: 'thumb_up'}]
        });
        lists.push({
            title: {text: 'Подписки', href: ""}, list: [
                {
                    name: 'CoolMan',
                    img: 'https://lh3.googleusercontent.com/-dSHgevDmDig/AAAAAAAAAAI/AAAAAAAAAAA/ANQ0kf6B-Kf1y62xpXDOZlRcSyipx0O3OQ/s32-c-mo/photo.jpg'
                },
                {
                    name: 'Red9',
                    img: 'https://lh3.googleusercontent.com/-dSHgevDmDig/AAAAAAAAAAI/AAAAAAAAAAA/ANQ0kf6B-Kf1y62xpXDOZlRcSyipx0O3OQ/s32-c-mo/photo.jpg'
                },
                {
                    name: 'HomeOm',
                    img: 'https://lh3.googleusercontent.com/-dSHgevDmDig/AAAAAAAAAAI/AAAAAAAAAAA/ANQ0kf6B-Kf1y62xpXDOZlRcSyipx0O3OQ/s32-c-mo/photo.jpg'
                },
                {
                    name: 'FastCars',
                    img: 'https://lh3.googleusercontent.com/-dSHgevDmDig/AAAAAAAAAAI/AAAAAAAAAAA/ANQ0kf6B-Kf1y62xpXDOZlRcSyipx0O3OQ/s32-c-mo/photo.jpg'
                }]
        });
        lists.push({title: null, list: [{name: 'Каталог каналов', icon: 'add_circle'}]});
        lists.push({title: null, list: [{name: 'Фильмы', icon: 'local_movies'}]});
        lists.push({
            title: null,
            list: [{name: 'Настройки', icon: 'settings'}, {name: 'Справка', icon: 'help'}, {
                name: 'Оставить отзыв',
                icon: 'feedback'
            }]
        });

        let prepareLists = (lists) => {
            return (lists.map((list) => {
                return <AsideList data={list}/>
            }));
        };

        //TODO replace info-container links with method
        return (
            <aside className="Aside">
                <div className="Aside__wrapper">
                <div className="Aside__container">
                    <nav>
                        {prepareLists(lists)}
                    </nav>
                    <section className="Aside__info-container">
                        <a className="Aside__info-container__link" href="">О сервисе</a>
                        <a className="Aside__info-container__link" href="">Прессе</a>
                        <a className="Aside__info-container__link" href="">Правообладателям</a>
                        <a className="Aside__info-container__link" href="">Авторам</a>
                        <a className="Aside__info-container__link" href="">Рекламодателям</a>
                        <a className="Aside__info-container__link" href="">Разработчикам</a>
                        <a className="Aside__info-container__link" href="">+YouTube</a>
                    </section>
                    <section className="Aside__info-container">
                        <a className="Aside__info-container__link" href="">Условия использования</a>
                        <a className="Aside__info-container__link" href="">Конфиденциальность</a>
                        <a className="Aside__info-container__link" href="">Правила и безопасность</a>
                        <a className="Aside__info-container__link" href="">Новые функции</a>
                    </section>
                    <span className="Aside__copyright">© 2017 YouTube, LLC</span>
                </div>
                </div>
            </aside>
        );
    }
}

export default Aside;
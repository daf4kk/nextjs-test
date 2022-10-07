import React from 'react';
//Здесь мы создаём разметку которая должна быть на каждой странице
import Head from 'next/head';
import A from './A';
const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords = {'Ключевые слова' + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                {/* Це у нас тип Link компонент*/}
                <A text = {'Главная'} href = {'/'}></A> 
                <A text = {'Пользователи'} href = {'/users'}></A>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {
                    `
                        .navbar{
                            background: green;
                        }
                    `
                }
            </style>
        </>
    );
};

export default MainContainer;
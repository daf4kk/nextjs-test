import Link from 'next/link';
import {useEffect, useState} from 'react';
import A from '../components/A';
import MainContainer from '../components/MainContainer';
const users = ({users}) => {
    return (
       <MainContainer keywords={'эээ да'}>
        <div>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user =>
                    <li key = {user.id}>
                        {/* <A href = {`/users/${user.id}`} text = {user.name}></A> */}
                        <Link href = {`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
       </MainContainer>
    );
};

export default users;

export async function getStaticProps(context) {     //Тоесть мы СНАЧАЛА делаем запрос к серверу и передём этому же компоненту наш ответ с сервера в виде props
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json()
    return {
      props: {users}, // will be passed to the page component as props
    }
}

// export async function getServerSideProps(context) {
//     return {
//       props: {}, // will be passed to the page component as props
//     }
//   }
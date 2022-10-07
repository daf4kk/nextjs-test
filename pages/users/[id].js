import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer";
import styles from '../../styles/user.module.scss';
export default function User({user}){
    const router = useRouter();
    console.log(router)
    const {query} = router; //query в нём хранится наш id
    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>Пользователь с id {query.id}</h1>
                <h1>С сервера: {user.name}</h1>
            </div>
        </MainContainer>
        
    )
}
export async function getServerSideProps(context) {     // Эта функция отрабатывает на сервере, значит логи мы получим в консоли
    const {params} = context;

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json()
    return {
      props: {user}, // will be passed to the page component as props
    }
}
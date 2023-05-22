import { useEffect, useState } from  'react';
import MainScreen from '../../components/MainScreen';
import Feed from '../../components/Feed';
import api from '../../services/api';
import { getAuthHeader } from '../../services/auth';

function Home() {
    const [posts, setPosts] = useState([]);
    const authHeader = getAuthHeader();

    useEffect(() => {
        async function getPosts() {
            try {
            const { data } = await api.get("/feed", authHeader);
            setPosts(data);
        } catch(err) {
                alert("Erro ao obter o Feed")
            }
        }

        getPosts();
    }, [authHeader]);

    return (
        <MainScreen>
            <Feed posts={posts} />
        </MainScreen>
    );
}

export default Home;
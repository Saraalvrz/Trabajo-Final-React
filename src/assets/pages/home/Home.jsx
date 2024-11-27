import React from 'react';
import Footer from '../../layouts/footer';
import ApiComponent from '../../components/Api'

const Home = () => {
    return (
        <div>
            <main>
                <h1>Bienvenido a Maxfit</h1>
            </main>
            <ApiComponent/>
            <Footer />
        </div>
    )
}

export default Home;    
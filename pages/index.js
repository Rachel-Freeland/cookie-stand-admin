import Head from 'next/head'
import Header from '../components/Header'
import Form from '../components/CookieStandForm'
import Report from '../components/Report'
import Footer from '../components/Footer'
import { useState } from "react";

export default function Home() {
    const [location, setLocationInfo] = useState("");

    function formHandler(event) {
        event.preventDefault();
        let location_info = {
            location: event.target.location.value,
            min_customers: parseInt(event.target.min_customers.value),
            max_customers: parseInt(event.target.max_customers.value),
            avg_cookies: parseInt(event.target.avg_cookies.value),
        };
        setLocationInfo(JSON.stringify(location_info))
        event.target.reset();
    }

    return (
        <div>
            <Head>
                <title>Cookies Stand Admin</title>
            </Head>

            <Header />

            <main className={'bg-green-100 flex flex-col items-center'}>
                <Form onSubmit={formHandler} />
                <Report location={location} />
            </main>

            <Footer copyright={2022}/>
        </div>
      )
    }

import Head from 'next/head'
import Header from '../components/Header'
import Form from '../components/CreateForm'
import Footer from '../components/Footer'
import { useState } from "react";
import ReportTable from "../components/ReportTable";

export default function Home() {

    const [reports, setReport] = useState([])

    function handleSubmit(event) {
        event.preventDefault();
        let location_info = {
            location: event.target.location.value,
            min_customers: parseInt(event.target.min_customers.value),
            max_customers: parseInt(event.target.max_customers.value),
            avg_cookies: parseInt(event.target.avg_cookies.value),
            hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
        };
    setReport([...reports, location_info])
    event.target.reset();
}

    return (
        <div>
            <Head>
                <title>Cookies Stand Admin</title>
            </Head>

            <Header />

            <main className={'bg-green-100 flex flex-col items-center'}>
                <Form onSubmit={handleSubmit} />
                <ReportTable reports={reports}/>
            </main>

            <Footer copyright={2022}/>
        </div>
      )
    }

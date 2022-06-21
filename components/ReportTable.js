import { hours } from '../data';


export default function ReportTable({ reports }){

    function calculate_sales() {
        let total_sales = 0
        let hourly_tot = []

    }

    calculate_sales()
    {
        let total_sales = 0

    }
    if (reports.length === 0) {
        return (
            <h2>No Cookie Stands Available</h2>
        )
    } else {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <td>Location</td>
                        {hours.map(hour => {
                            return (<td key={hour}>{hour}</td>)
                        })}
                        <th>Totals:</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reports.map(report => (
                        <tr key={report.location}>
                            <td>{report.location}</td>
                            {report.hourly_sales.map((hourly_sale) => <td key={hourly_sale}>{hourly_sale}</td>)}
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                        <th>Totals:</th>
                            {calculateTotals().map(item => {
                                return (
                                <td key={item}>item</td>
                            )
                        })}
                    </tfoot>
                </table>
            </div>
        )
    }
}




export default function CreateForm(props) {

    return (
        <form onSubmit={props.handleSubmit} className={'grid grid-cols-4 grid-flow-rows gap-3 px-5 py-3 my-2 w-1/2 bg-emerald-300'}>
            <div className={'col-span-5'}>
                <h1 className={'text-xl flex justify-center py-2 px-3'}>Create Cookie Stand</h1>
            </div>

            <div className={'grid col-span-5'}>
                <label className={'text-m pl-4 text-center col-start-1'}>Location:</label>
                <input name='location' className={'col-start-2 col-span-5 mr-5 px-5 text-left py-1 rounded'}/>
            </div>

            <div className={'grid col-span-1'}>
                <label className={'text-sm px-1 text-center col-start-1 col-end-2'}>Minimum Customers per Hour:</label>
                <input name={'min_customers'} className={'col-start-1 col-end-2 py-1 px-3 m-1 text-center rounded'} />
            </div>

            <div className={'grid col-span-1'}>
                <label className={'text-sm px-1 text-center col-start-2 col-end-3'}>Maximum Customers per Hour:</label>
                <input name={'max_customers'} className={'col-start-2 col-end-3 py-1 px-3 m-1 text-center rounded'}/>
            </div>

            <div className={'grid col-span-1'}>
                <label className={'text-sm px-1 text-center col-start-3 col-end-4'}>Average cookies per Sale:</label>
                <input name={'avg_cookies'} className={'col-start-3 col-end-4 py-1 px-3 m-1 text-center rounded'}/>
            </div>

            <button className={'col-start-4 col-end-5 m-1 text-l bg-emerald-500 rounded-lg'}>Create</button>
        </form>
    )
}
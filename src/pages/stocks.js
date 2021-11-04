import {useState, useEffect} from "react"

const Stocks = (props) => {
    const stockData = props.stockData
    const [stock, setStock] = useState(null)

    const getStock = () => {
        let mStock;
        for(let i = 0; i < stockData.length; i++){

            if(stockData[i].symbol === props.match.params.symbol){


                mStock = stockData[i]
            }
        }
        setStock(mStock)
    }

    useEffect(() => {
        getStock()
    })

    const loaded = () => {
        return (
            <div>
                <h1>{stock.name}</h1>
                <p>({stock.symbol})</p>
                <h3>Last Price: ${stock.lastPrice}</h3>
                <h3>Change: {stock.change}</h3>
                <p>High: ${stock.high}</p>
                <p>Low: ${stock.low}</p>
                <p>Open: ${stock.open}</p>
            </div>
        )
    }
    const loading = () => {
        return <h1>Loading...</h1>
    }
    return stock ? loaded() : loading()
}




export default Stocks
import React from "react";
import {connect } from 'react-redux';

interface Props {
    id: string
}

interface State {
    currStockQuantity: number           //a
    currAvgCostPerStock: number         //b
    numStocksToBuyOrSell: number        //c
    currStockPrice: number              //d
    desiredUserStockPriceAvg: number    //e
}

/* 
 *The following is the equation using the variables in the State interface
 *          e = (a * b) + (c * d) / (a + d)
 */


/* 
 *  Class responsible for holding the Stock Purchase Calculator
 */
class InvestmentCalculator extends React.PureComponent<Props, State> {
    
    /* 
     *  Overriding constructor
     */
    constructor(props: Props) {
        //always have to call super or constructor won't work
        super(props)

        //setting the values
        this.state = {
            currStockQuantity: 0,
            currAvgCostPerStock: 0,
            numStocksToBuyOrSell: 0,
            currStockPrice: 0,
            desiredUserStockPriceAvg: 0,
        }
    }


    /* 
     *  Handle on change - update this.state based on events
     */
    handleOnChange = (evnt: any) => {
        const {name, value}  = evnt.target

        //TODO: search for Object.assign()
        const {currStockQuantity, currAvgCostPerStock, numStocksToBuyOrSell, currStockPrice, desiredUserStockPriceAvg} = Object.assign({}, this.state, {[name]: value})

        let state = this.state
        
        //TODO: back to the white board on this one
        //don't forget to update if conditions and their respective
        //bodies. also continue watching the video to implement/fix the
        //connect issue
        if (name === 'shareQuantity' || name === 'sharePrice') {
            state = {
                currStockQuantity,
                currAvgCostPerStock,
                numStocksToBuyOrSell,
                currStockPrice,
                desiredUserStockPriceAvg
            }
        } else if (name === 'subTotal') {
            state = {
                currStockQuantity,
                currAvgCostPerStock,
                numStocksToBuyOrSell,
                currStockPrice,
                desiredUserStockPriceAvg
            }
        }

        this.setState(state)
    }


    /* 
     *  Render the values we are showing to user
     */
    render() {
        //setup a const to fetch this.state
        const {currStockQuantity, currAvgCostPerStock, numStocksToBuyOrSell, currStockPrice, desiredUserStockPriceAvg} = this.state

        return (<div className="calculatorContainer">
            <h1>Investment Calculator</h1>
            <label htmlFor="currStockQuantity" className="rowData">Current Stock Quantity</label>
            <input name="currStockQuantity" value={currStockQuantity} onChange={this.handleOnChange} className="rowData"/>

            <label htmlFor="currAvgCostPerStock" className="rowData">Current Cost Per Stock</label>
            <input name="currAvgCostPerStock" value={currAvgCostPerStock} onChange={this.handleOnChange} className="rowData"/>

            <label htmlFor="currStockPrice" className="rowData">Current Stock Price</label>
            <input name="currStockPrice" value={currStockPrice} onChange={this.handleOnChange} className="rowData"/>

    {/**Divide between 'Current' and 'Desired' labels */}

            <label htmlFor="desiredUserStockPriceAvg" className="rowData">Desired Cost Per Stock</label>
            <input name="desiredUserStockPriceAvg" value={desiredUserStockPriceAvg} onChange={this.handleOnChange} className="rowData"/>
            
            <label htmlFor="numStocksToBuyOrSell" className="rowData">Desired Amount of Stock to Purchase/Sell</label>
            <input name="numStocksToBuyOrSell" value={numStocksToBuyOrSell} onChange={this.handleOnChange} className="rowData"/>
        </div>)
    }
}

function mapStateToProps() {
    return null
}

function mapDispatchToProps() {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvestmentCalculator)
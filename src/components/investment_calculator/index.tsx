import React from "react";
import {connect } from 'react-redux';

interface Props {
    id: string
}

interface State {
    currentStockPrice: number
    userStockPriceAvg: number
    nStocksToBuy: number
    desiredUserStockPriceAvg: number
}


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
            currentStockPrice: 0,
            userStockPriceAvg: 0,
            nStocksToBuy: 0,
            desiredUserStockPriceAvg: 0,
        }
    }


    /* 
     *  Handle on change - update this.state based on events
     */
    handleOnChange = (evnt: any) => {
        const {name, value}  = evnt.target

        //TODO: search for Object.assign()
        const {currentStockPrice, userStockPriceAvg, nStocksToBuy, desiredUserStockPriceAvg} = Object.assign({}, this.state, {[name]: value})

        let state = this.state
        
        //TODO: back to the white board on this one
        //don't forget to update if conditions and their respective
        //bodies. also continue watching the video to implement/fix the
        //connect issue
        if (name === 'shareQuantity' || name === 'sharePrice') {
            state = {
                currentStockPrice,
                userStockPriceAvg,
                nStocksToBuy,
                desiredUserStockPriceAvg
            }
        } else if (name === 'subTotal') {
            state = {
                currentStockPrice,
                userStockPriceAvg,
                nStocksToBuy,
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
        const {currentStockPrice, userStockPriceAvg, nStocksToBuy, desiredUserStockPriceAvg} = this.state

        return (<div className="calculatorContainer">
            <h1>Investment Calculator</h1>
            <label htmlFor="currentStockPrice" className="rowData">Share Quantity</label>
            <input name="currentStockPrice" value={currentStockPrice} onChange={this.handleOnChange} className="rowData"/>

            <label htmlFor="userStockPriceAvg" className="rowData">Share Price</label>
            <input name="userStockPriceAvg" value={userStockPriceAvg} onChange={this.handleOnChange} className="rowData"/>
            
            <label htmlFor="nStocksToBuy" className="rowData">SubTotal</label>
            <input name="nStocksToBuy" value={nStocksToBuy} onChange={this.handleOnChange} className="rowData"/>

            <label htmlFor="desiredUserStockPriceAvg" className="rowData">SubTotal</label>
            <input name="desiredUserStockPriceAvg" value={desiredUserStockPriceAvg} onChange={this.handleOnChange} className="rowData"/>
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
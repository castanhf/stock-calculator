import React from "react";
import { connect } from 'react-redux';

interface Props {
    id: string
}

interface State {
    currStockQuantity: number           //a
    currAvgCostPerStock: number         //b
    currStockPrice: number              //c
    desiredStockQuantity: number        //d
    desiredAvgCostPerStock: number      //e
}

/* 
 *The following is the equation using the variables in the State interface
 * in regards to desiredAvgCostPerStock
 *          e = [ (a * b) + (c * d) ] / (a + d)
 *          
 *This is equivalent to the following in regards to desiredStockQuantity:
 *          d = [ a * (b - e) ] / (e - c)
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
            currStockPrice: 0,
            desiredStockQuantity: 0,
            desiredAvgCostPerStock: 0,
        }
    }


    /* 
     *  Handle on change - update this.state based on events
     */
    handleOnChange = (evnt: any) => {
        const { name, value } = evnt.target

        //TODO: search for Object.assign()
        const { currStockQuantity, currAvgCostPerStock, currStockPrice, desiredStockQuantity, desiredAvgCostPerStock } = Object.assign({}, this.state, { [name]: value })

        let state = this.state

        //This works differently from purchase/sell calculator since we are dealing
        //with five different mutable variables.
        //The idea here is for user to provide
        //info on the three variables that start with "curr" and on one of the
        //"desired", so that the last variable will be calculated automatically.
        if (name === 'currStockQuantity' //autocomplete desiredAvgCostPerStock
            || name === 'currAvgCostPerStock'
            || name === 'currStockPrice'
            || name === 'desiredStockQuantity') {
            state = {
                currStockQuantity,
                currAvgCostPerStock,
                currStockPrice,
                desiredStockQuantity,
                // TODO: review math
                desiredAvgCostPerStock: ((currStockQuantity * currAvgCostPerStock) + (currStockPrice * desiredStockQuantity)) / (currStockQuantity + desiredStockQuantity)
            }
        } else if (name === 'currStockQuantity' //autocomplete desiredStockQuantity
            || name === 'currAvgCostPerStock'
            || name === 'currStockPrice'
            || name === 'desiredAvgCostPerStock') {
            state = {
                currStockQuantity,
                currAvgCostPerStock,
                currStockPrice,
                // TODO: review math
                desiredStockQuantity: (currStockQuantity * (currAvgCostPerStock - desiredAvgCostPerStock)) / (desiredAvgCostPerStock - currStockPrice),
                desiredAvgCostPerStock
            }
        } else if (name === 'currStockQuantity' //autocomplete currstockprice
            || name === 'currAvgCostPerStock'
            || name === 'desiredStockQuantity'
            || name === 'desiredAvgCostPerStock') {
            state = {
                currStockQuantity,
                currAvgCostPerStock,
                currStockPrice: (desiredAvgCostPerStock * (currStockQuantity + desiredStockQuantity) - (currStockQuantity * currAvgCostPerStock)) / desiredStockQuantity,
                desiredStockQuantity,
                desiredAvgCostPerStock
            }
        }

        this.setState(state)
    }


    /* 
     *  Render the values we are showing to user
     */
    render() {
        //setup a const to fetch this.state
        const { currStockQuantity, currAvgCostPerStock, currStockPrice, desiredStockQuantity, desiredAvgCostPerStock } = this.state

        return (<div className="calculatorContainer" style={{ width: '834px' }} >
            <h1>Investment Calculator</h1>
            <label htmlFor="currStockQuantity" className="rowData">Current Stock Quantity</label>
            <input name="currStockQuantity" value={currStockQuantity} onChange={this.handleOnChange} className="rowData" />

            <label htmlFor="currAvgCostPerStock" className="rowData">Current Cost Per Stock</label>
            <input name="currAvgCostPerStock" value={currAvgCostPerStock} onChange={this.handleOnChange} className="rowData" />

            <label htmlFor="currStockPrice" className="rowData">Current Stock Price</label>
            <input name="currStockPrice" value={currStockPrice} onChange={this.handleOnChange} className="rowData" />

            {/**Divide between 'Current' and 'Desired' labels */}

            <label htmlFor="desiredStockQuantity" className="rowData">Desired Amount of Stock to Purchase/Sell</label>
            <input name="desiredStockQuantity" value={desiredStockQuantity} onChange={this.handleOnChange} className="rowData" />

            <label htmlFor="desiredAvgCostPerStock" className="rowData">Desired Cost Per Stock</label>
            <input name="desiredAvgCostPerStock" value={desiredAvgCostPerStock} onChange={this.handleOnChange} className="rowData" />
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
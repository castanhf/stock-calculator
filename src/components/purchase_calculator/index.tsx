import React from "react";
import './purchase_calculator.css'

interface Props {

}

interface State {
    shareQuantity: number
    sharePrice: number
    subTotal: number
}


/* 
 *  Class responsible for holding the Stock Purchase Calculator
 */
class PurchaseCalculator extends React.PureComponent<Props, State> {
    
    /* 
     *  Overriding constructor
     */
    constructor(props: Props) {
        //always have to call super or constructor won't work
        super(props)

        //setting the values
        this.state = {
            shareQuantity: 0,
            sharePrice: 0,
            subTotal: 0,
        }
    }


    /* 
     *  Handle on change - update this.state based on events
     */
    handleOnChange = (evnt: any) => {
        const {name, value}  = evnt.target
        //const {shareQuantity, sharePrice, subTotal} = this.state
        //TODO: search for Object.assign()
        const {shareQuantity, sharePrice, subTotal} = Object.assign({}, this.state, {[name]: value})

        let state = this.state
        if (name === 'shareQuantity') {
            state = {
                shareQuantity,
                sharePrice,
                subTotal: shareQuantity * sharePrice
            }
        } else if (name === 'sharePrice') {
            state = {
                shareQuantity,
                sharePrice,
                subTotal: shareQuantity * sharePrice
            }
        } else if (name === 'subTotal') {
            state = {
                shareQuantity,
                sharePrice,
                subTotal
            }
        }

        this.setState(state)
    }


    /* 
     *  Render the values we are showing to user
     */
    render() {
        //setup a const to fetch this.state
        const {shareQuantity, sharePrice, subTotal} = this.state

        //TODO - stopped here at 16:14 video
        return (<div className="purchaseContainer">
            <label htmlFor="shareQuantity">Share Quantity</label>
            <input name="shareQuantity" value={shareQuantity} onChange={this.handleOnChange}/>

            <label htmlFor="sharePrice">Share Price</label>
            <input name="sharePrice" value={sharePrice} onChange={this.handleOnChange}/>
            
            <label htmlFor="subTotal">SubTotal</label>
            <input name="subTotal" value={subTotal} onChange={this.handleOnChange}/>
        </div>)
    }
}

export default PurchaseCalculator
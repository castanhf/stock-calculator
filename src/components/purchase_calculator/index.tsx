import React from "react";
import { connect } from 'react-redux';
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { updateField, updateFieldAction } from '../../actions/index';
import { Component, StoreState } from "../../types";

interface Props {
    id: string
    component?: any    
    updateField?: any
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
        
        //TODO: search for Object.assign()
        const {shareQuantity, sharePrice, subTotal} = Object.assign({}, this.state, {[name]: value})

        //When we update the shareQuantity and sharePrice values
        //the subTotal will update automatically with the
        //following multiplication: shareQuantity * sharePrice
        let state = this.state
        if (name === 'shareQuantity' || name === 'sharePrice') {
            state = {
              shareQuantity,
              sharePrice,
              subTotal: shareQuantity * sharePrice,
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

        return (<div className="calculatorContainer">
            <h1>Purchase Calculator</h1>
            <label htmlFor="shareQuantity" className="rowData">Share Quantity</label>
            <input name="shareQuantity" value={shareQuantity} onChange={this.handleOnChange} className="rowData"/>

            <label htmlFor="sharePrice" className="rowData">Share Price</label>
            <input name="sharePrice" value={sharePrice} onChange={this.handleOnChange} className="rowData"/>
            
            <label htmlFor="subTotal" className="rowData">SubTotal</label>
            <input name="subTotal" value={subTotal} onChange={this.handleOnChange} className="rowData"/>
        </div>)
    }
}

function mapStateToProps(state: StoreState, props: Props) {
    return {
        //TODO: following line is faulty but should be like because of video
        //soon to be fixed
      //component: state.components[props.id],
      component: state.components,
      id: props.id
    }
  }

//this.props.updateField()
export default connect(mapStateToProps, { updateField })(PurchaseCalculator as any)
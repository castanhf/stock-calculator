import * as React from "react";
import { connect } from 'react-redux';
import { updateField, addComponent } from '../../actions/index';
import { StoreState } from "../../types";


interface Props {
    id: string
    component?: any    
    updateField?: any
    addComponent?: any
    key: string
}


/* 
 *  Class responsible for holding the Stock Purchase Calculator
 */
class PurchaseCalculator extends React.PureComponent<Props> {
    
    componentWillMount() {
        const { addComponent, id } = this.props
        addComponent(id)
    }
    
    componentWillUnmount() {
        //removeComponent(id)
    }


    /* 
     *  Handle on change - update this.state based on events
     */
    handleOnChange = (evnt: any) => {
        const { name, value }  = evnt.target
        
        //TODO: search for Object.assign()
        const { shareQuantity, sharePrice, subTotal } = Object.assign({}, this.props.component, { [name]: value })
        const { updateField, id } = this.props


        //When we update the shareQuantity and sharePrice values, the subTotal will
        //update automatically with the following multiplication: shareQuantity * sharePrice
        let handleFields = { ...this.props.component }
        if (name === 'shareQuantity' || name === 'sharePrice') {
            handleFields = {
              shareQuantity,
              sharePrice,
              subTotal: shareQuantity * sharePrice,
            }
        } else if (name === 'subTotal') {
            handleFields = {
                shareQuantity,
                sharePrice,
                subTotal
            }
        }

        updateField(id, handleFields)
    }


    /* 
     *  Render the values we are showing to user
     */
    render() {
        //this just avoids the app from crashing
        if (!this.props.component) return null

        //setup a const to fetch this.state
        const { id } = this.props
        const { shareQuantity = 0, sharePrice = 0, subTotal = 0 } = this.props.component

        return (<div className="calculatorContainer" key={id}>
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
        component: state.components[props.id],
        id: props.id
    }
  }

export default connect(mapStateToProps, { updateField, addComponent })(PurchaseCalculator as any)
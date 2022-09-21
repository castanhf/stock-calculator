import * as React from 'react';
import { StoreState } from '../../types/index';
import { connect } from 'react-redux';
import { updateField, addComponent } from '../../actions/index';

interface Props {
    id: string
    component?: any
    updateField?: any
    addComponent?: any
    key: string
}

interface State {
    shareQuantity: number
    sharePrice: number
    subTotal: number
}


/* 
 *  Class responsible for holding the Stock Sell Calculator
 */
class SellCalculator extends React.PureComponent<Props, State> {
    
    componentWillMount() {
        const { addComponent, id } = this.props
        addComponent(id)
    }


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
        const { id, updateField, component } = this.props
        const { shareQuantity, sharePrice, subTotal } = Object.assign({}, component, { [name]: value })

        let handleFields = { ...this.props.component }
        if (name === 'shareQuantity' || name === 'sharePrice') {
            handleFields = {
              shareQuantity,
              sharePrice,
              subTotal: shareQuantity * sharePrice,
            }
        } else if (name === 'subTotal') {
            handleFields = {
              shareQuantity: subTotal / sharePrice,
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
        const {shareQuantity, sharePrice, subTotal} = this.props.component

        return (<div className="calculatorContainer" key={id}>
            <h1>Sell Calculator</h1>
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


export default connect(mapStateToProps, { updateField, addComponent })(SellCalculator as any);
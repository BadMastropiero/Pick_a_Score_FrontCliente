import React, { ReactElement } from 'react'

import {CheckoutForm} from '../../components/CheckoutForm'

const CheckoutPage: React.FC = (): ReactElement => {
    return (
        <div>
            <CheckoutForm />
        </div>
    )
}

export default CheckoutPage
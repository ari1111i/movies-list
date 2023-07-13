import React, {useState} from 'react'
import MainContent from './MainContent'
import Header from './Header'

export const NewExpense = ({}) => {
    const [isFormShow, setIsFormShow] = useState(false)

	const showFormHandler = () => {
		setIsFormShow(true)
	}

	return (
		<div className='new-expense'>
            <Header onClick={showFormHandler} />
		{isFormShow &&
	<MainContent/>
        }
		</div>
	)
}

export default NewExpense